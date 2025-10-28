const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up WebSocket development environment...');

// Create .env file for development
const envContent = `# Development Environment Configuration
NODE_ENV=development
PORT=5001

# CORS Configuration
FRONTEND_URL=http://localhost:3000
FRONTEND_URLS=http://localhost:3000,http://localhost:5173

# Socket.io
SOCKET_IO_PATH=/socket.io

# Database (SQLite for development)
DATABASE_URL=sqlite:./database.sqlite

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-that-is-at-least-32-characters-long
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-that-is-at-least-32-characters-long
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX=3

# File uploads
UPLOADS_PATH=./uploads
MAX_FILE_SIZE=10485760
`;

try {
  fs.writeFileSync('.env', envContent);
  console.log('✅ Created .env file with WebSocket configuration');
} catch (error) {
  console.log('⚠️  Could not create .env file (may already exist):', error.message);
}

console.log('🚀 WebSocket development setup complete!');
console.log('📋 Next steps:');
console.log('1. Run: npm run dev (to start the backend server)');
console.log('2. Run: node test-websocket.js (to test WebSocket connection)');
console.log('3. Start frontend on port 3000 to test full integration');
