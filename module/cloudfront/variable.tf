variable "cloudfront_name" {
  type        = string
  description = "The name of the CloudFront distribution OAC"
}

variable "project_name" {
  description = "the name of the project"
}

variable "environment" {
  description = "the environment name"
}

variable "s3_bucket_id" {
  type = string
}

variable "s3_bucket_arn" {
  type = string
}

variable "s3_bucket_regional_domain_name" {
  type = string
}
