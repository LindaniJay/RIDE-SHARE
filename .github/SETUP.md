# GitHub Actions Setup Guide

## Required Secrets

To use this CI/CD pipeline, you need to set up the following secrets in your GitHub repository:

### Docker Hub Secrets
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Add the following repository secrets:

- `DOCKER_USERNAME`: Your Docker Hub username
- `DOCKER_PASSWORD`: Your Docker Hub password or access token

### Setting up Docker Hub Access Token (Recommended)
1. Go to Docker Hub → Account Settings → Security
2. Create a new access token
3. Use this token as `DOCKER_PASSWORD` instead of your actual password

## Workflow Features

### Security Scanning
- Uses Trivy to scan for vulnerabilities
- Results are uploaded to GitHub Security tab
- Runs on every push and pull request

### Testing
- Backend tests with TypeScript compilation
- Frontend tests with Vite
- Linting for both projects
- Runs on every push and pull request

### Docker Build & Push
- Builds both backend and frontend Docker images
- Pushes to Docker Hub (only on main branch)
- Uses Docker Buildx for multi-platform builds
- Implements build caching for faster builds

## Troubleshooting

### Common Issues

1. **"Dependencies lock file is not found"**
   - ✅ Fixed: The workflow now specifies the correct cache-dependency-path for each project

2. **"Resource not accessible by integration"**
   - ✅ Fixed: Added proper permissions to the workflow

3. **"npm run build" failed with exit code 127**
   - ✅ Fixed: Updated Dockerfile to install all dependencies before building

### Manual Testing

To test the Docker builds locally:

```bash
# Backend
cd backend
docker build -t ridesharex-backend .
docker run -p 5000:5000 ridesharex-backend

# Frontend
cd frontend
docker build -t ridesharex-frontend .
docker run -p 3000:3000 ridesharex-frontend
```

## Workflow Triggers

- **Push to main/develop**: Full pipeline including Docker build & push
- **Pull requests**: Testing and security scanning only
- **Manual trigger**: Available in GitHub Actions tab
