# Lumina Static Site — CI/CD Pipeline on AWS

[![Deploy site content](https://img.shields.io/github/actions/workflow/status/YOUR_USER/lumina/deploy.yml?label=deploy&logo=github)](https://github.com/YOUR_USER/lumina/actions/workflows/deploy.yml)
[![IaC: Terraform](https://img.shields.io/badge/IaC-Terraform_1.9-7B42BC?logo=terraform)](https://www.terraform.io/)
[![Cloud: AWS](https://img.shields.io/badge/Cloud-AWS-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)

**Live demo →** `https://YOUR_CLOUDFRONT_DOMAIN.cloudfront.net`

> **Scenario:** Lumina had no deployment process — developers uploaded files manually via FTP. One bad upload took the site down for 4 hours. This project replaces every manual step with a fully automated, auditable, zero-downtime pipeline. A `git push` to `main` is all it takes to go live.

---

## What this project demonstrates

| Skill area | Implementation |
|---|---|
| Infrastructure as Code | All AWS resources provisioned with Terraform — modular structure |
| CI/CD | GitHub Actions pipeline: sync to S3 → invalidate CloudFront |
| Cloud security | OIDC authentication — zero long-lived AWS credentials stored anywhere |
| CDN & HTTPS | CloudFront OAC + ACM — private S3 origin, HTTPS enforced globally |
| State management | Remote Terraform state in S3 with DynamoDB locking |
| IaC best practices | Provider-level `default_tags`, remote backend, least-privilege IAM policies |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│  Developer workflow                                                  │
│                                                                      │
│  git push origin main                                                │
│        │                                                             │
│        ▼                                                             │
│  ┌─────────────┐   OIDC token    ┌──────────────────┐               │
│  │   GitHub    │ ─────────────── │   AWS STS        │               │
│  │   Actions   │ ◄── temp creds ─│   (15 min TTL)   │               │
│  └─────────────┘                 └──────────────────┘               │
│        │                                                             │
│        ├── aws s3 sync ──────────► S3 bucket (private)              │
│        │                                 │                           │
│        └── cloudfront invalidate ───────►│                           │
│                                          │                           │
└──────────────────────────────────────────┼───────────────────────────┘
                                           │
                          ┌────────────────▼────────────────┐
                          │         CloudFront CDN          │
                          │   HTTPS enforced (TLS 1.2+)     │
                          │   OAC: only CF reads S3         │
                          └────────────────┬────────────────┘
                                           │
                                    ┌──────▼──────┐
                                    │    User     │
                                    │  browser    │
                                    └─────────────┘
```

---

## Stack

| Layer | Service / Tool | Purpose |
|---|---|---|
| Storage | AWS S3 | Static file hosting — private bucket, versioning enabled |
| CDN | AWS CloudFront | Global delivery, HTTPS termination, DDoS protection |
| Auth | AWS IAM + OIDC | Short-lived credentials for GitHub Actions — no stored keys |
| IaC | Terraform 1.9 | All infrastructure declared as code, remote state in S3 |
| CI/CD | GitHub Actions | Content deploys dynamically using AWS CLI in the workflow |

---

## Architecture decisions

| Decision | Choice | Rationale |
|---|---|---|
| S3 access | Private bucket + CloudFront OAC | Public S3 buckets expose the origin directly, bypass CloudFront security headers, and cannot enforce HTTPS. OAC restricts S3 reads to this specific distribution only. |
| OAC vs OAI | OAC (Origin Access Control) | OAI is the legacy approach. OAC is AWS's current recommendation: supports more S3 features, uses SigV4 signing. |
| CI/CD auth | GitHub Actions OIDC | Long-lived IAM access keys are a persistent security liability. OIDC tokens are short-lived (15 min), scoped to a specific repository, and require no rotation. |
| Dynamic ID Lookup | AWS CLI in Pipeline | The `deploy.yml` pipeline uses AWS CLI to dynamically find the S3 bucket and CloudFront distribution based on tags and origins, removing the need for hardcoded GitHub secrets for AWS resource IDs. |
| `default_tags` | Provider-level | Every resource inherits `Project`, `Environment`, and `ManagedBy=terraform` tags automatically. Ensures consistent tagging without cluttering module code. |

---

## Project structure

```
lumina/
├── .github/
│   └── workflows/
│       └── deploy.yml          # content pipeline: Dynamic S3 sync + CF invalidation
├── src/
│   ├── index.html              # landing page
│   ├── css/
│   ├── js/
│   └── assets/
├── module/
│   ├── s3/                     # S3 Bucket, CORS, and Block Public Access
│   └── cloudfront/             # CloudFront Distribution and OAC
├── main.tf                     # Modules invocation
├── provider.tf                 # AWS provider config + default tags
├── backend.tf                  # remote S3 state backend
├── variable.tf                 # input variable declarations
├── terraform.tfvars.example    # example variables file
├── terraform.tfvars            # your actual values (ignored by git)
├── output.tf                   # values for outputs (bucket id, distribution id)
└── README.md
```

---

## Prerequisites

- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) configured with an IAM user (`aws sts get-caller-identity` should return your ARN)
- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.9
- A GitHub account with a public repository for this project

---

## Getting started

### Step 1 — Bootstrap Terraform state backend (one-time, manual)

The S3 bucket that stores Terraform state must exist before `terraform init` can run. This is a one-time setup.

1. Create a bucket named `lumina-terraform-state` in AWS.
2. Enable versioning and encryption.

### Step 2 — Configure Terraform variables

Copy `terraform.tfvars.example` to `terraform.tfvars` and edit your values:

```hcl
aws_region   = "us-east-1"
environment  = "prod"
project_name = "Lumina"
```

### Step 3 — Provision infrastructure with Terraform

```bash
terraform init
terraform fmt -recursive
terraform validate

# Review every line of the plan before applying
terraform plan -out=tfplan

terraform apply tfplan
```

Apply takes 5–15 minutes (CloudFront distribution deployment is the bottleneck).

### Step 4 — Add GitHub Secrets

After applying, add the IAM Role ARN to your GitHub repo under **Settings → Secrets and variables → Actions**:

- **`AWS_ROLE_ARN`**

*Note: You do not need to add the S3 bucket name or CloudFront Distribution ID as secrets. The deployment pipeline uses AWS CLI to dynamically find them based on the `Lumina` project and `prod` environment variables!*

### Step 5 — Deploy the site

Push any change to the `src/` directory on `main`:

```bash
git add src/
git commit -m "feat(site): initial Lumina landing page"
git push origin main
```

Watch the **Actions** tab. The pipeline will automatically fetch the correct bucket and distribution, sync your files, and invalidate the cache.

---

## CI/CD pipeline

### `deploy.yml` — content deployment

| Trigger | `push` to `main` with changes in `src/**` |
|---|---|
| IAM permissions | `s3:PutObject`, `s3:DeleteObject`, `s3:ListAllMyBuckets`, `cloudfront:ListDistributions`, `cloudfront:CreateInvalidation` |
| Auth | GitHub OIDC — no secrets stored |

**Steps:**
1. Checkout source
2. Assume IAM deploy role via OIDC
3. Dynamically query AWS via AWS CLI to find the `lumina-prod-static` bucket and its associated CloudFront distribution.
4. `aws s3 sync ./src/ s3://BUCKET/ --delete`
5. `aws cloudfront create-invalidation --paths "/*"`

---

## Resume bullet

```
Architected zero-downtime CI/CD pipeline on AWS using GitHub Actions OIDC
authentication, automating S3 and CloudFront deployments with zero 
long-lived credentials. Provisioned infrastructure (S3, CloudFront OAC, IAM) 
with modular Terraform, utilizing dynamic AWS CLI queries in the pipeline 
for environment-agnostic CI/CD.
```

---

*Infrastructure managed by Terraform · Deployed via GitHub Actions · Zero manual console steps*