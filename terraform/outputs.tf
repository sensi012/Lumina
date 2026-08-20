output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = module.s3.bucket_id
}

output "cloudfront_distribution_id" {
  description = "ID of the CloudFront distribution"
  value       = module.cloudfront.cloudfront_id
}

output "github_deploy_role_arn" {
  description = "The ARN of the IAM role for GitHub Actions to assume"
  value       = module.iam.github_deploy_role_arn
}
