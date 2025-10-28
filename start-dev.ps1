# RideShareX Development Server Startup Script
# This script starts both backend and frontend servers simultaneously

Write-Host "Starting RideShareX Development Servers..." -ForegroundColor Green
Write-Host "Backend will run on: http://localhost:5001" -ForegroundColor Yellow
Write-Host "Frontend will run on: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Cyan
Write-Host ""

# Set environment variables for backend
$env:PORT = "5001"
$env:FRONTEND_URL = "http://localhost:3000"
$env:NODE_ENV = "development"

# Function to start backend server
function Start-Backend {
    Write-Host "[BACKEND] Starting backend server..." -ForegroundColor Blue
    Set-Location backend
    npm run dev
}

# Function to start frontend server
function Start-Frontend {
    Write-Host "[FRONTEND] Starting frontend server..." -ForegroundColor Magenta
    Set-Location frontend
    npm run dev
}

# Start both servers in parallel using PowerShell jobs
Write-Host "Starting servers in parallel..." -ForegroundColor Green

# Start backend job
$backendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD\backend
    $env:PORT = "5001"
    $env:FRONTEND_URL = "http://localhost:3000"
    $env:NODE_ENV = "development"
    npm run dev
}

# Start frontend job
$frontendJob = Start-Job -ScriptBlock {
    Set-Location $using:PWD\frontend
    npm run dev
}

# Function to display output from both jobs
function Show-Output {
    while ($backendJob.State -eq "Running" -or $frontendJob.State -eq "Running") {
        # Get output from backend job
        if ($backendJob.HasMoreData) {
            $backendOutput = Receive-Job -Job $backendJob
            if ($backendOutput) {
                Write-Host "[BACKEND] $backendOutput" -ForegroundColor Blue
            }
        }
        
        # Get output from frontend job
        if ($frontendJob.HasMoreData) {
            $frontendOutput = Receive-Job -Job $frontendJob
            if ($frontendOutput) {
                Write-Host "[FRONTEND] $frontendOutput" -ForegroundColor Magenta
            }
        }
        
        Start-Sleep -Milliseconds 100
    }
}

# Handle Ctrl+C gracefully
$null = Register-EngineEvent -SourceIdentifier PowerShell.Exiting -Action {
    Write-Host "`nStopping servers..." -ForegroundColor Red
    Stop-Job -Job $backendJob, $frontendJob -ErrorAction SilentlyContinue
    Remove-Job -Job $backendJob, $frontendJob -ErrorAction SilentlyContinue
    exit
}

try {
    Show-Output
} finally {
    # Clean up jobs
    Stop-Job -Job $backendJob, $frontendJob -ErrorAction SilentlyContinue
    Remove-Job -Job $backendJob, $frontendJob -ErrorAction SilentlyContinue
    Write-Host "Servers stopped." -ForegroundColor Red
}
