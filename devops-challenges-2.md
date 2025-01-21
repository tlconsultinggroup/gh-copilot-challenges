# Containerizing an Application: A DevOps Challenge for Jake

Meet Jake, a DevOps engineer at a mid-sized tech company. Jake’s team recently developed a JavaScript application that showcases the fundamentals of web development. However, they’ve identified a challenge: to ensure the application runs consistently across various environments, they need to containerize it using Docker.

In this article, we’ll walk through the problem statement, the challenges Jake faces, the tools he needs, and the steps he can take to containerize the application.

![devops image](images/devops2.jpg)

---

## Problem Statement
Jake’s company has a growing number of applications deployed across multiple environments (development, staging, production). The team noticed frequent discrepancies in how the application behaves due to differences in environment configurations. The solution is to containerize the application to create a consistent and portable runtime environment.

Jake’s task:
1. Create a Docker image for the JavaScript application.
2. Ensure the image is lightweight and production-ready.
3. Enable seamless deployment across all environments.

---

## The Challenge

Jake faces a few key challenges:

- **Packaging Dependencies**: While the application is simple, he needs to ensure the container includes all necessary tools to run it.
- **Efficient Image Creation**: Keeping the Docker image small is critical to reduce overhead in deployment and scaling.
- **Automation-Ready Workflow**: The solution must be adaptable for CI/CD pipelines in the future.

---

## Pre-requisites

Before Jake begins, he needs to ensure the following tools are installed on his local machine:
1. **Docker**: To create and run containers. [Download Docker](https://www.docker.com/)
2. **Text Editor or IDE**: For creating Docker-related configuration files. (e.g., VS Code)
3. **Browser**: To test the application locally.
4. **Basic Understanding of Docker**: Familiarity with Dockerfiles, images, and containers.

---

## Steps to Containerize the Application


### 1. **Prepare the Application**

**Question**
Hey Jake, do you have the `index.html` file ready for the JavaScript application? 

If not, you can [download app file](apps/js/index.html) and place it in the `hello-world-app/` directory as shown below:

```plaintext
hello-world-app/ 
└── index.html
```

Once you have the file in place, you can proceed with the next steps to containerize the application.

### 2. Create a Dockerfile

**Question**
Hey Jake, could you create a `Dockerfile` in the `hello-world-app/` directory to containerize the  application?

```plaintext
hello-world-app/
└── Dockerfile
```

### 3. Build the Docker Image

**Question**
Hey Jake, are you ready to build the Docker image for your application? Just run the following command in your terminal:

```plaintext
docker build -t hello-world-app .
```

This will create a Docker image named `hello-world-app` using the Dockerfile you just created.


### 4. Run the Container locally

**Question**
Hey Jake, are you ready to run the containerized application locally to see it in action? You can use the following command to start the container:

```plaintext
docker run -d -p 8080:80 hello-world-app
```

This will map port `80` inside the container to port `8080` on your local machine. Once it's running, you can open your browser and navigate to `http://localhost:8080` to check if everything is working correctly.


### 5. Verify the Application

Jake opens a browser and navigates to `http://localhost:8080` to ensure the application is running successfully.

### Conclusion

Through above steps, Jake would successfully containerized the JavaScript application. The containerization ensures consistent behavior across environments and sets the foundation for automated deployments.

This simple exercise demonstrates the power of Docker and prepares Jake to tackle more complex applications in the future!

If you wish to review Jake's work in detail, the solution is present in file 📕 [devops-challenges-2-solution](devops-challenges-2-solution.md).

