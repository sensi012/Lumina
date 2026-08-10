variable "aws_region" {
  description = "the AWS region"
  type        = string
}

variable "project_name" {
  description = "the name of the project"
  type        = string
}

variable "github_org" {
  description = "GitHub Organization or Username"
  type        = string
  default     = "sensi012"
}

variable "github_repo" {
  description = "GitHub Repository Name"
  type        = string
  default     = "Lumina"
}

variable "environment" {
  description = "the environment name"
  type        = string
}
