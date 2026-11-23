resource "random_id" "bucket_suffix" {
  byte_length = 4
}

resource "aws_s3_bucket" "website" {
  bucket = lower("${var.project_name}-${var.environment}-static-${random_id.bucket_suffix.hex}")
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket                  = aws_s3_bucket.website.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}


resource "aws_s3_bucket_versioning" "website" {
  bucket = aws_s3_bucket.website.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_cors_configuration" "app_bucket" {
  bucket = aws_s3_bucket.website.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD"]
    allowed_origins = var.cors_allowed_origins
    max_age_seconds = var.cors_max_age_seconds
  }
}
