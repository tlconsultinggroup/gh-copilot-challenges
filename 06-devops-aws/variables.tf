variable "ami" {
  description = "AMI ID for the instance"
  type        = string
}

variable "instance_type" {
  description = "Instance type"
  type        = string
  default     = "t2.micro"
}

variable "cost_center" {
  description = "Cost center value"
  type        = string
}

variable "environment" {
  description = "Environment value (e.g., dev, prod)"
  type        = string
}