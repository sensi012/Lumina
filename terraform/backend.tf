terraform {
  backend "s3" {
    bucket       = "lumina-prod-static-21c45c72"
    key          = "terraform/state.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
