terraform {
  backend "s3" {
    bucket       = "lumina-terraform-state"
    key          = "lumina/static-site/terraform.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
