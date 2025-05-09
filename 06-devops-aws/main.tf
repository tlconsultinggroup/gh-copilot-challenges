provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = var.ami
  instance_type = var.instance_type

  tags = {
    Name        = "ExampleInstance"
    CostCenter  = var.cost_center
    Environment = var.environment
  }
}