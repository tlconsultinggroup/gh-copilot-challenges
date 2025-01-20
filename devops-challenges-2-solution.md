# Containerizing an Application: A DevOps Challenge for Jake

### 📝 Solution

Meet Jake, a DevOps engineer at a mid-sized tech company. Jake’s team recently developed a "Hello World" JavaScript application that showcases the fundamentals of web development. However, they’ve identified a challenge: to ensure the application runs consistently across various environments, they need to containerize it using Docker.

In this article, we’ll walk through the problem statement, the challenges Jake faces, the tools he needs, and the steps he can take to containerize the application.

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

## Workflow: Steps to Containerize the Application
Here’s a step-by-step workflow for Jake to containerize the "Hello World" JavaScript application.

### 1. **Prepare the Application**
Jake can [download app file](apps/js/index.html) and place it in the `hello-world-app/` directory as shown below:


```plaintext
hello-world-app/ 
└── index.html
```

### 2. Write a Dockerfile
Jake creates a `Dockerfile` in the same directory:

```plaintext
hello-world-app/
└── Dockerfile
```

The Dockerfile would be as below:

```dockerfile
# Step 1: Use a lightweight web server image
FROM nginx:alpine

# Step 2: Copy the application to the web server's default location
COPY index.html /usr/share/nginx/html/

# Step 3: Expose the default HTTP port
EXPOSE 80

# Step 4: Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
```

### 3. Build the Docker Image

Jake builds the Docker image by running the following command in the terminal:

```plaintext
docker build -t hello-world-app .
```

This command tells Docker to build an image named hello-world-app using the current directory `(.)`.


### 4. Run the Container locally
Jake runs the container to test the application:

```plaintext
docker run -d -p 8080:80 hello-world-app
```

This maps port 80 inside the container to port `8080` on his local machine.

### 5. Verify the Application

Jake opens a browser and navigates to `http://localhost:8080` to ensure the application is running successfully.

### 6. Optimize the Docker Image
To keep the image size small:

- Jake has used the `nginx:alpine` base image, which is lightweight.
- He avoids adding unnecessary files to the image by keeping the `COPY` instruction specific.

### 7. Push the Image to a Registry (Optional)

If the company uses a container registry (e.g., Docker Hub or Amazon ECR), Jake can push the image for others to use:

```plaintext
docker tag hello-world-app jake/hello-world-app:latest
docker push jake/hello-world-app:latest
```

### Conclusion

Through these steps, Jake successfully containerized the JavaScript application. The containerization ensures consistent behavior across environments and sets the foundation for automated deployments.

This simple exercise demonstrates the power of Docker and prepares Jake to tackle more complex applications in the future!


