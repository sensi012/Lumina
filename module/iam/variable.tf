variable "project_name" {
  description = "the name of the project"
  type        = string
}

variable "environment" {
  description = "the environment name"
  type        = string
}

variable "github_org" {
  description = "GitHub Organization or Username"
  type        = string
}

variable "github_repo" {
  description = "GitHub Repository Name"
  type        = string
}

variable "s3_bucket_arn" {
  description = "The ARN of the S3 bucket"
  type        = string
}

variable "cloudfront_arn" {
  description = "The ARN of the CloudFront distribution"
  type        = string
}
