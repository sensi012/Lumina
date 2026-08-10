#!/bin/bash

# terraform state file for lumina

echo

# 1. Create the S3 Bucket
aws s3 mb s3://lumina-terraform-state --region eu-west-1

# 2. Block all public access to the bucket (security)
aws s3api put-public-access-block \
  --bucket lumina-terraform-state \
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true" \
  --region us-east-1

# Enable bucket versioning to allow rolling back state changes
aws s3api put-bucket-versioning \
  --bucket lumina-terraform-state \
  --versioning-configuration Status=Enabled \
  --region us-east-1