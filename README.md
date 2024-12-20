# Desafio Lacrei Saúde

A simple Node.js API project with two endpoints, automated testing, and CI/CD pipeline configuration.

## Project Structure

```
.
├── src/                    # Source code directory
│   ├── app.js             # Express application setup and middleware
│   └── server.js          # Server initialization and configuration
├── tests/                 # Test files directory
│   └── app.test.js        # Tests for the Express application
├── .github/               # GitHub specific configurations
│   └── workflows/         # GitHub Actions workflows
│       └── build_test_deploy.yml  # CI/CD pipeline configuration
├── Dockerfile             # Docker container configuration
├── package.json           # Project dependencies and scripts
└── package-lock.json      # Locked versions of dependencies
```

## API Endpoints

### Health Check
- **Method**: GET
- **URL**: `http://localhost:3000/api/health`
- **Description**: Returns the health status of the API

### Greeting
- **Method**: POST
- **URL**: `http://localhost:3000/api/greet`
- **Description**: Returns a greeting message

## Components

### Source Code
- **src/app.js**: Simple application exposing health and greeting endpoints
- **src/server.js**: Server initialization and application entry point
- **tests/app.test.js**: Jest test suites for API endpoint verification
- **workflows/build_test_deploy.yml**: GitHub Actions automation configuration for build, test, and deploy
- **Dockerfile**: Docker container build instructions
- **package.json**: Project configuration, dependencies, and scripts
- **package-lock.json**: Locked dependency versions

## Running the Application Locally

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```

4. Run the tests:
```bash
npm test
```

5. Access the application:
   - Open `http://localhost:3000/api/health` in your browser
   - Or use curl:
```bash
curl -X GET http://localhost:3000/api/health
curl -X POST http://localhost:3000/api/greet
```

## Pipeline

### GitHub Actions Workflow
The workflow automates the following steps:

#### Unit Testing

- Runs Jest unit tests to ensure application functionality
- Tests API endpoints and core application logic
- Fails the pipeline if any tests fail


#### Security Testing

- Executes ZAP security tests
- Generates comprehensive security report
- Identifies potential vulnerabilities
- Stores ZAP report as workflow artifact


#### Container Build

- Builds Docker container using Dockerfile
- Tags image with latest version
- Pushes image to Docker Hub registry


#### Deployment

- Deploys application to GitHub environment
- Updates running container with latest version


### GitHub Actions Setup
1. Add repository secrets under Settings > Secrets and variables > Actions:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password

### Protected Branches
Configure protected branches under Settings > Branches to control deployment triggers.

### Executing the Pipeline

#### Manual Trigger
1. Go to the "Actions" tab in GitHub repository
2. Select the workflow
3. Click "Run workflow"

#### Automatic Triggers
The workflow triggers automatically on push or pull requests to these branches (remember to protect them):
- main
- develop
- release/*
- bugfix/*

## Technical Information

### Node.js
- Version: Node.js 22

### DockerHub
- Image format: `<DOCKER_USERNAME>/desafio-lacrei:latest`

- Running the Docker image:
```bash
docker pull <DOCKER_USERNAME>/desafio-lacrei
docker run -p 3000:3000 <DOCKER_USERNAME>/desafio-lacrei
```

### Security
- ZAP security scan report (zap-report.html) available in workflow artifacts