# **Automating Azure VM Provisioning: A Story of an Operations Engineer**

Meet Jake, an operations engineer at **TechFusion Corp**. Jake is tasked with automating the process of provisioning virtual machines (VMs) on Microsoft Azure. The goal is to eliminate manual steps, ensure consistency, and reduce deployment times.

Jake's manager emphasizes the importance of following best practices, including modularizing Terraform scripts and ensuring they are reusable. With determination and a clear plan, Jake embarks on this task.

---

![devops-image1](images/devops1.jpeg)

## **The Challenge**

Jake's task is to:

1. Create a well-structured project with modular Terraform scripts to manage various components like resource groups, networks, and VMs.
   
2. Follow best practices for organizing Terraform projects and maintaining code clarity.

---

### Check if Terraform is Installed

Before Jake can start automating Azure VM provisioning, he needs to ensure that Terraform is installed on his workstation. Here are the steps to check if Terraform is installed and how to install it if it's not already available.

Jake can open a terminal and run the following command to check if Terraform is installed:

```plaintext
terraform --version
```

If Terraform is installed, this command will display the installed version. If not, Jake will need to install it.

#### **Install Terraform**

##### **Windows**

1. Download the Terraform binary from the [Terraform website](https://www.terraform.io/downloads.html).
2. Extract the downloaded zip file to a directory of your choice.
3. Add the directory to your system's PATH environment variable:
    - Open the Start Search, type in "env", and select "Edit the system environment variables".
    - Click the "Environment Variables" button.
    - In the "System variables" section, find the PATH variable and click "Edit".
    - Add the path to the directory where you extracted Terraform.
4. Open a new terminal and verify the installation by running `terraform --version`.

##### **macOS**

1. Install Terraform using Homebrew:
    ```plaintext
    brew tap hashicorp/tap
    brew install hashicorp/tap/terraform
    ```
2. Verify the installation by running `terraform --version`.

##### **Linux**

1. Download the Terraform binary from the [Terraform website](https://www.terraform.io/downloads.html).
2. Extract the downloaded zip file:
    ```plaintext
    unzip terraform_<VERSION>_linux_amd64.zip
    ```
3. Move the binary to a directory included in your system's PATH:
    ```plaintext
    sudo mv terraform /usr/local/bin/
    ```
4. Verify the installation by running `terraform --version`.

With Terraform installed, Jake is ready to proceed with automating **Azure VM** provisioning.

### **Step 1: Set Up the Project Directory**

Jake starts by organizing the project directory for modularization and scalability.

Can you help Jake build the following folder structure in the workspace to get started?

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

This structure would allow Jake to create reusable modules for different infrastructure components.

### **Step 2: Define the Azure Provider**

Jake, can you create a `provider.tf` file in the root directory to configure Azure as the cloud provider?

```plaintext
provider "azurerm" {
    features {}
}
```

This enables Terraform to interact with Azure resources.

### **Step 3: Create Terraform Modules**

Jake, can you create the necessary Terraform modules for resource groups, networks, and virtual machines? Each module should have its own directory with `main.tf`, `variables.tf`, and `outputs.tf` files. Ensure that the modules are reusable and follow best practices for Terraform configurations. Here's a breakdown of what each module should include:

1. **Resource Group Module**:
    - Define a resource group with parameters for the name and location.

2. **Network Module**:
    - Define a virtual network and a subnet within it, with parameters for the network name, address space, subnet name, and subnet prefix.

3. **Virtual Machine Module**:
    - Define a Linux virtual machine with parameters for the VM name, size, admin username, network interface IDs, and SSH key path.

Make sure to output relevant information from each module, such as the resource group name, subnet ID, and VM ID, to be used in the root configuration.

Can you proceed with creating these modules?

### **Step 4: Integrate Modules in the Root Configuration**

Jake, could you help us integrate the modules into the root configuration? We need to use the modules in `main.tf` to define the infrastructure. Here's how you can do it:

This will help us define the infrastructure using the modules you created in previous step.

### **Step 5: Execute Terraform Commands**

Jake performs the following steps to build and test the Terraform scripts:

1. **Initialize Terraform**:

  - Open a terminal and navigate to the project directory.
  - Run the following command to initialize the Terraform configuration:
  
  ```plaintext
  terraform init
  ```

  This command downloads the necessary provider plugins and prepares the working directory for other Terraform commands.

1. **Preview the Infrastructure Changes**:
  - Run the following command to create an execution plan:
  
  ```plaintext
  terraform plan
  ```

  This command shows the changes that will be made to the infrastructure without actually applying them. Review the output to ensure that the planned changes match your expectations.

1. **Apply the Configuration**:
   
  - Run the following command to apply the changes:
  
  ```plaintext
  terraform apply
  ```

  Terraform will prompt for confirmation before applying the changes. Type `yes` to proceed. This command creates the resources defined in the configuration files.

1. **Verify the Deployment**:
   
  - After the apply command completes, log in to the Azure portal to verify that the resources have been created as expected.
  - Obtain the public IP address of the virtual machine from the Terraform output or the Azure portal.
  - Use SSH to connect to the virtual machine and verify access:
  
  ```plaintext
  ssh azureuser@<public_ip_address>
  ```

1. **Clean Up Resources**:
  
  - Once the verification is complete, run the following command to destroy the resources and clean up the environment:
  
  ```plaintext
  terraform destroy
  ```

  Terraform will prompt for confirmation before destroying the resources. Type `yes` to proceed. This command removes all the resources defined in the configuration files.

By following these steps, Jake can build, test, and verify the Terraform scripts to automate Azure VM provisioning effectively.

**Outcome**

Jake successfully automated Azure VM provisioning by:

1. Creating reusable and modular Terraform scripts.
2. Organizing the project with best practices.
3. Ensuring scalability and consistency across deployments.
   
Jake's efforts streamlined operations and reduced deployment times, showcasing the power of Terraform in modern DevOps workflows.

### **Verify the Solution**

If you want to verify the solution to this challenge, you can access it at 📕[devops-challenges-1-solution](devops-challenges-1-solution.md). Feel free to review it, get enlightened, and enjoy the process!


