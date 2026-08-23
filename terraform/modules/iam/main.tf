data "tls_certificate" "github" {
  url = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_openid_connect_provider" "github" {
  url            = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
  thumbprint_list = [
    "6938fd4d98bab03faadb97b34396831e3780aea1",
    "1c58a3a8518e8759bf075b76b750d4f2df264fcd",
    "ffffffffffffffffffffffffffffffffffffffff",
    data.tls_certificate.github.certificates[0].sha1_fingerprint
  ]
}

data "aws_iam_policy_document" "github_assume_role" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"
    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values = [
        "repo:${var.github_org}/${var.github_repo}:environment:${var.environment}"
      ]
    }
  }
}

resource "aws_iam_role" "github_actions" {
  name               = "${var.project_name}-${var.environment}-github-deploy"
  assume_role_policy = data.aws_iam_policy_document.github_assume_role.json
}

data "aws_iam_policy_document" "deploy_policy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListAllMyBuckets"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:ListBucket"
    ]
    resources = [
      var.s3_bucket_arn,
      "${var.s3_bucket_arn}/*"
    ]
  }

  statement {
    effect = "Allow"
    actions = [
      "cloudfront:ListDistributions"
    ]
    resources = ["*"]
  }

  statement {
    effect = "Allow"
    actions = [
      "cloudfront:CreateInvalidation"
    ]
    resources = [
      var.cloudfront_arn
    ]
  }
}

resource "aws_iam_policy" "github_actions" {
  name        = "${var.project_name}-${var.environment}-github-deploy-policy"
  description = "Permissions for GitHub Actions to deploy static site"
  policy      = data.aws_iam_policy_document.deploy_policy.json
}

resource "aws_iam_role_policy_attachment" "github_actions" {
  role       = aws_iam_role.github_actions.name
  policy_arn = aws_iam_policy.github_actions.arn
}
