const { spawn } = require('child_process');
const path = require('path');

// Set fallback environment variables if .env doesn't exist
process.env.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'demo-project';
process.env.FIREBASE_PRIVATE_KEY_ID = process.env.FIREBASE_PRIVATE_KEY_ID || 'demo-key-id';
process.env.FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\\nDEMO_KEY\\n-----END PRIVATE KEY-----\\n';
process.env.FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL || 'demo@demo.iam.gserviceaccount.com';
process.env.FIREBASE_CLIENT_ID = process.env.FIREBASE_CLIENT_ID || 'demo-client-id';
process.env.DATABASE_URL = process.env.DATABASE_URL || 'sqlite:./database.sqlite';
process.env.PORT = process.env.PORT || '5001';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.FRONTEND_URLS = process.env.FRONTEND_URLS || 'http://localhost:3000,http://localhost:3001,http://localhost:5173';
process.env.SOCKET_IO_PATH = process.env.SOCKET_IO_PATH || '/socket.io';

console.log('🚀 Starting RideShare Backend with fallback configuration...');
console.log('📝 Note: Using demo Firebase configuration. For production, set up proper Firebase credentials.');

// Start the server
const server = spawn('npx', ['ts-node', 'src/server.ts'], {
  cwd: path.join(__dirname),
  stdio: 'inherit',
  shell: true
});

server.on('error', (error) => {
  console.error('❌ Failed to start server:', error);
});

server.on('close', (code) => {
  console.log(`🛑 Server exited with code ${code}`);
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('🛑 Shutting down server...');
  server.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Shutting down server...');
  server.kill('SIGTERM');
  process.exit(0);
});
