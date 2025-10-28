# Development Setup Guide

This guide explains how to run both the backend and frontend servers simultaneously with a single command.

## Prerequisites

Make sure you have Node.js installed and that both backend and frontend dependencies are installed:

```bash
# Install all dependencies (run this once)
npm run install:all
```

## Option 1: Using npm scripts (Recommended)

### Install dependencies first:
```bash
npm install
```

### Run both servers:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5001
- Frontend server on http://localhost:3000

### Other available commands:
```bash
# Run only backend
npm run dev:backend-only

# Run only frontend  
npm run dev:frontend-only

# Build both projects
npm run build

# Run tests for both projects
npm run test

# Run linting for both projects
npm run lint
```

## Option 2: Using PowerShell Script (Windows)

```powershell
.\start-dev.ps1
```

## Option 3: Using Batch File (Windows)

```cmd
start-dev.bat
```

## Option 4: Manual Setup

If you prefer to run servers manually in separate terminals:

### Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

### Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

## Troubleshooting

### If you get "concurrently not found" error:
```bash
npm install
```

### If backend or frontend dependencies are missing:
```bash
cd backend && npm install
cd ../frontend && npm install
```

### If ports are already in use:
- Backend uses port 5001
- Frontend uses port 3000
- Make sure these ports are available or modify the configuration

## Server URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001
- **Backend Health Check**: http://localhost:5001/api/health

## Stopping Servers

- **npm script**: Press `Ctrl+C` in the terminal
- **PowerShell script**: Press `Ctrl+C` in the terminal  
- **Batch file**: Close the command windows or press `Ctrl+C`
- **Manual**: Press `Ctrl+C` in each terminal
