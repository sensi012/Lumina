output "cloudfront_id" {
  value       = aws_cloudfront_distribution.s3_distribution.id
  description = "the cloudfront id"
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.s3_distribution.domain_name
  description = "the cloudfront domain name"
}

output "cloudfront_arn" {
  value       = aws_cloudfront_distribution.s3_distribution.arn
  description = "the cloudfront arn"
}
