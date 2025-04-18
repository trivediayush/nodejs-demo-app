🚀 Node.js CI/CD Pipeline using GitHub Actions & Docker
=======================================================

This project sets up an automated CI/CD pipeline for a simple Node.js application. Every time you push code to the `master` branch, GitHub Actions builds a Docker image and pushes it to DockerHub automatically.

📦 Project Structure
--------------------

*   **app.js** – The main Node.js Express application file
*   **Dockerfile** – Defines how to build the Docker image
*   **package.json** – Contains project dependencies and scripts
*   **.github/workflows/CICD.yml** – The GitHub Actions workflow file

⚙️ Workflow Explained (CICD.yml)
--------------------------------

The GitHub Actions workflow automates the following:

1.  **Triggered on Push:** The workflow starts whenever code is pushed to the `master` branch.
2.  **Checkout Code:** The source code is pulled from the GitHub repo.
3.  **Set Up Node.js:** Node.js version 18 is installed to run app dependencies and tests.
4.  **Install Dependencies:** All packages listed in `package.json` are installed using `npm install`.
5.  **Run Tests:** Executes `npm test` to ensure app functionality is intact before building.
6.  **Set Up Docker Buildx:** Prepares the Docker environment for image building.
7.  **Login to DockerHub:** Uses GitHub Secrets to log in securely using your DockerHub credentials.
8.  **Build and Push Image:** Builds the Docker image and pushes it to DockerHub under `ayusht45cyber/mynodeapp:latest`.

🔐 GitHub Secrets Required
--------------------------

To allow secure DockerHub login, the following secrets must be added in your GitHub repository:

*   `DOCKERHUB_USERNAME` – Your DockerHub username
*   `DOCKERHUB_TOKEN` – A DockerHub access token (not your password)

📦 Docker Image Info
--------------------

After successful pipeline execution, your Docker image is pushed to:  
`docker.io/DockerhubUsername/mynodeapp:latest`

▶️ Run the Image Locally
------------------------
# Pull the latest version of the Docker image
<pre> docker pull DockerHubusername/mynodeapp:latest </pre> <br>
# Run the container, mapping port 3000 of the host to port 3000 of the container 
<pre> docker run -p 3000:3000 DockerHubusername/mynodeapp:latest</pre>

<br>
<br>

# The Node App
<img src="/Screenshots/app.png">

# The CICD Pipeline
<img src="/Screenshots/cicd.png">

📫 Contact
----------

Made with ❤️ by [Ayush Trivedi](https://github.com/trivediayush)


