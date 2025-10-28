# Set environment variables
# JWT secrets removed - using Firebase Authentication only
$env:PORT = "5001"
$env:FRONTEND_URL = "http://localhost:3000"
$env:NODE_ENV = "development"

# Start the development server
npm run dev
