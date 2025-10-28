@echo off
echo Starting RideShareX Development Servers...
echo Backend will run on: http://localhost:5001
echo Frontend will run on: http://localhost:3000
echo Press Ctrl+C to stop both servers
echo.

REM Set environment variables for backend
set PORT=5001
set FRONTEND_URL=http://localhost:3000
set NODE_ENV=development

REM Start both servers using start command to run them in parallel
start "Backend Server" cmd /k "cd backend && npm run dev"
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo Both servers are starting in separate windows...
echo Close the command windows to stop the servers.
pause
