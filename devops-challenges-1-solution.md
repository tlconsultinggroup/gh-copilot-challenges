# **Automating Azure VM Provisioning: A Story of an Operations Engineer**

### 📝 Solution

Meet Jake, an operations engineer at TechFusion Corp. Jake is tasked with automating the process of provisioning virtual machines (VMs) on Microsoft Azure. The goal is to eliminate manual steps, ensure consistency, and reduce deployment times.

Jake's manager emphasizes the importance of following best practices, including modularizing Terraform scripts and ensuring they are reusable. With determination and a clear plan, Jake embarks on this task.

---

## **The Challenge**

Jake's task is to:
1. Create a well-structured project with modular Terraform scripts to manage various components like resource groups, networks, and VMs.
2. Follow best practices for organizing Terraform projects and maintaining code clarity.

---



## **The Workflow**

### **Step 1: Set Up the Project Directory**

Jake starts by organizing the project directory for modularization and scalability.

```plaintext
vm-provisioning/
├── modules/
│   ├── resource_group/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   ├── network/
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   ├── vm/
│       ├── main.tf
│       ├── variables.tf
│       ├── outputs.tf
├── main.tf
├── provider.tf
├── variables.tf
├── outputs.tf
```

This structure allows Jake to create reusable modules for different infrastructure components.

### **Step 2: Define the Azure Provider**

Jake creates a provider.tf file in the root directory to configure Azure as the cloud provider:

```plaintext
provider "azurerm" {
  features {}
}
```
This enables Terraform to interact with Azure resources.





### **Step 3: Create Terraform Modules**

Jake modularizes the configuration by creating separate modules for resource groups, networks, and virtual machines.

3.1. Resource Group Module

In the modules/resource_group directory:

```plaintext
main.tf:
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}
```

variables.tf:
```plaintext
variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}
variable "location" {
  description = "The Azure region for the resource group"
  type        = string
}
```

outputs.tf:
```plaintext
output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}
```

3.2. Network Module

In the modules/network directory:

main.tf:
```plaintext
resource "azurerm_virtual_network" "vnet" {
  name                = var.vnet_name
  address_space       = var.address_space
  location            = var.location
  resource_group_name = var.resource_group_name
}

resource "azurerm_subnet" "subnet" {
  name                 = var.subnet_name
  resource_group_name  = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = var.subnet_prefix
}
```

variables.tf:

```plaintext
variable "vnet_name" { type = string }
variable "address_space" { type = list(string) }
variable "subnet_name" { type = string }
variable "subnet_prefix" { type = list(string) }
variable "resource_group_name" { type = string }
variable "location" { type = string }
```


outputs.tf:

```plaintext
output "subnet_id" {
  value = azurerm_subnet.subnet.id
}
```

3.3. Virtual Machine Module

In the modules/vm directory:

main.tf:

```plaintext
resource "azurerm_linux_virtual_machine" "vm" {
  name                = var.vm_name
  resource_group_name = var.resource_group_name
  location            = var.location
  size                = var.vm_size
  admin_username      = var.admin_username

  network_interface_ids = var.network_interface_ids

  admin_ssh_key {
    username   = var.admin_username
    public_key = file(var.ssh_key_path)
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}
```

variables.tf:
```plaintext
variable "vm_name" { type = string }
variable "resource_group_name" { type = string }
variable "location" { type = string }
variable "vm_size" { type = string }
variable "admin_username" { type = string }
variable "network_interface_ids" { type = list(string) }
variable "ssh_key_path" { type = string }
```

outputs.tf:
```plaintext
output "vm_id" {
  value = azurerm_linux_virtual_machine.vm.id
}
```

### **Step 4: Integrate Modules in the Root Configuration**

Jake uses the modules in main.tf to define the infrastructure:

```plaintext
module "resource_group" {
  source              = "./modules/resource_group"
  resource_group_name = "TechFusion-RG"
  location            = "East US"
}

module "network" {
  source              = "./modules/network"
  vnet_name           = "TechFusion-VNet"
  address_space       = ["10.0.0.0/16"]
  subnet_name         = "TechFusion-Subnet"
  subnet_prefix       = ["10.0.1.0/24"]
  resource_group_name = module.resource_group.resource_group_name
  location            = "East US"
}

module "vm" {
  source               = "./modules/vm"
  vm_name              = "TechFusion-VM"
  resource_group_name  = module.resource_group.resource_group_name
  location             = "East US"
  vm_size              = "Standard_B1s"
  admin_username       = "azureuser"
  network_interface_ids = [module.network.subnet_id]
  ssh_key_path         = "~/.ssh/id_rsa.pub"
}
```

### **Step 5: Execute Terraform Commands**

Jake performs the following steps:

Initialize Terraform:
```plaintext
terraform init
```

Preview the infrastructure changes:
```plaintext
terraform plan
```

Apply the configuration:
```plaintext
terraform apply
```
Confirm the changes by typing yes.

Step 6: Verify and Clean Up
Jake logs into the Azure portal to confirm the resources are created.
He SSHs into the VM to verify access:
```plaintext
ssh azureuser@<public_ip_address>
```
To clean up resources, Jake runs:
```plaintext
terraform destroy
```

**Outcome**

Jake successfully automated Azure VM provisioning by:

1. Creating reusable and modular Terraform scripts.
2. Organizing the project with best practices.
3. Ensuring scalability and consistency across deployments.
   
Jake's efforts streamlined operations and reduced deployment times, showcasing the power of Terraform in modern DevOps workflows.


