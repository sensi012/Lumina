terraform {
  backend "s3" {
    bucket       = "lumina-terraform-state-210450948229"
    key          = "terraform/state.tfstate"
    region       = "us-east-1"
    encrypt      = true
    use_lockfile = true
  }
}
