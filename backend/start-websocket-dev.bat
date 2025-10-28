@echo off
echo 🚀 Starting RideShareX WebSocket Development Environment
echo =================================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    pause
    exit /b 1
)

REM Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not available
    pause
    exit /b 1
)

echo ✅ Node.js and npm are available

REM Setup development environment
echo.
echo 🔧 Setting up development environment...
node setup-websocket-dev.js

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Start the development server
echo.
echo 🚀 Starting backend server on port 5001...
echo 📊 WebSocket will be available at: http://localhost:5001/socket.io/
echo 🔗 Frontend should connect to: http://localhost:5001
echo.
echo Press Ctrl+C to stop the server
echo =================================================

REM Start the server
npm run dev
