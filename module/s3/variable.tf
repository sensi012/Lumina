variable "environment" {
  description = "bucket environment name"
}


variable "project_name" {
  description = "the name of the project"
}

variable "index_document" {
  description = "The key/filename of the index document uploaded to S3"
  type        = string
  default     = "index.html"
}

variable "source_file_path" {
  description = "Path to the local file uploaded to S3"
  type        = string
  default     = "./src"
}

variable "cors_allowed_origins" {
  description = "Allowed origins for CORS policy"
  type        = list(string)
  default     = ["*"]
}

variable "cors_max_age_seconds" {
  description = "Max age in seconds for CORS preflight caching"
  type        = number
  default     = 3000
}
