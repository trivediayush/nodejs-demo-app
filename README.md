<!DOCTYPE html>
<html lang="en">
<body>

  <h1>🚀 Node.js CI/CD Pipeline with GitHub Actions & Docker</h1>

  <p>
    This project demonstrates how to automate the build and deployment process of a Node.js application using GitHub Actions and Docker. The application is containerized and automatically pushed to DockerHub when changes are made to the main branch.
  </p>

  <h2>📦 What This Project Does</h2>
  <ul>
    <li>Runs a Node.js web application</li>
    <li>Uses Docker to containerize the app</li>
    <li>Automates build and deployment using GitHub Actions</li>
    <li>Pushes the Docker image to DockerHub</li>
  </ul>

  <h2>📁 Project File Structure</h2>
  <p>The project includes the following important files:</p>
  <ul>
    <li><code>app.js</code> - The main Node.js application (Express)</li>
    <li><code>Dockerfile</code> - Instructions for building the Docker image</li>
    <li><code>package.json</code> - Node.js project dependencies</li>
    <li><code>.github/workflows/main.yml</code> - The GitHub Actions CI/CD pipeline</li>
  </ul>

  <h2>⚙️ CI/CD Workflow Explained</h2>
  <p>
    The GitHub Actions workflow is triggered automatically when code is pushed to the <code>main</code> (or <code>master</code>) branch. It performs the following steps:
  </p>

  <ol>
    <li><strong>Checkout Code:</strong> Clones the latest version of the repository.</li>
    <li><strong>Setup Node.js:</strong> Sets up the Node.js environment to match your app's requirements.</li>
    <li><strong>Install Dependencies:</strong> Installs packages defined in <code>package.json</code>.</li>
    <li><strong>Run Tests:</strong> Executes tests to validate code integrity.</li>
    <li><strong>Set up Docker Buildx:</strong> Prepares Docker environment for advanced builds.</li>
    <li><strong>DockerHub Login:</strong> Uses GitHub Secrets to securely log in to DockerHub.</li>
    <li><strong>Build and Push Docker Image:</strong> Builds the Docker image and pushes it to DockerHub under your repository.</li>
  </ol>

  <h2>🔐 Secrets Required</h2>
  <p>To authenticate securely with DockerHub, the workflow uses GitHub secrets:</p>
  <ul>
    <li><code>DOCKERHUB_USERNAME</code> – Your DockerHub username</li>
    <li><code>DOCKERHUB_TOKEN</code> – An access token created from DockerHub</li>
  </ul>

  <h2>🌍 Final Output</h2>
  <p>
    After the workflow completes, the built Docker image is available on DockerHub. You can pull and run it locally or in production using:
  </p>
  <pre>
docker pull ayusht45cyber/mynodeapp:latest
docker run -p 3000:3000 ayusht45cyber/mynodeapp:latest
  </pre>

  <h2>✅ Summary</h2>
  <p>
    This setup allows for fully automated builds and deployments every time you push new code. It ensures consistency, reduces manual errors, and speeds up your development-to-deployment cycle.
  </p>

</body>
</html>
