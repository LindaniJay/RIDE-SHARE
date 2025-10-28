# PowerShell script to start WebSocket development environment
Write-Host "🚀 Starting RideShareX WebSocket Development Environment" -ForegroundColor Green
Write-Host "=================================================" -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not available" -ForegroundColor Red
    exit 1
}

# Setup development environment
Write-Host "`n🔧 Setting up development environment..." -ForegroundColor Yellow
node setup-websocket-dev.js

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Start the development server
Write-Host "`n🚀 Starting backend server on port 5001..." -ForegroundColor Green
Write-Host "📊 WebSocket will be available at: http://localhost:5001/socket.io/" -ForegroundColor Cyan
Write-Host "🔗 Frontend should connect to: http://localhost:5001" -ForegroundColor Cyan
Write-Host "`nPress Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host "=================================================" -ForegroundColor Green

# Start the server
npm run dev
