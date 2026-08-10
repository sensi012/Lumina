module "s3" {
  source           = "./module/s3"
  project_name     = var.project_name
  environment      = var.environment
  source_file_path = "./src"
}

module "cloudfront" {
  source                         = "./module/cloudfront"
  project_name                   = var.project_name
  environment                    = var.environment
  cloudfront_name                = "${var.project_name}-${var.environment}-cdn"
  s3_bucket_id                   = module.s3.bucket_id
  s3_bucket_arn                  = module.s3.bucket_arn
  s3_bucket_regional_domain_name = module.s3.bucket_domain_name
}

module "iam" {
  source         = "./module/iam"
  project_name   = var.project_name
  environment    = var.environment
  github_org     = var.github_org
  github_repo    = var.github_repo
  s3_bucket_arn  = module.s3.bucket_arn
  cloudfront_arn = module.cloudfront.cloudfront_arn
}
