output "bucket_arn" {
  value       = aws_s3_bucket.website.arn
  description = "the bucket arn"
}

output "bucket_domain_name" {
  value       = aws_s3_bucket.website.bucket_regional_domain_name
  description = "the bucket domain name"
}

output "bucket_id" {
  value       = aws_s3_bucket.website.id
  description = "the bucket id"
}

