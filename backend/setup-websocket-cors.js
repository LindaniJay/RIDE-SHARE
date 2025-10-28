#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Setting up WebSocket and CORS Configuration');
console.log('============================================');

// Create .env file with proper configuration
const envContent = `# WebSocket and CORS Configuration
NODE_ENV=development
PORT=5001

# Frontend URLs for CORS
FRONTEND_URL=http://localhost:5173
FRONTEND_URLS=http://localhost:3000,http://localhost:3001,http://localhost:5173,http://localhost:4173

# Socket.io Configuration
SOCKET_IO_PATH=/socket.io

# Database (SQLite for development)
DATABASE_URL=sqlite:./dev.db

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-that-is-at-least-32-characters-long
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-that-is-at-least-32-characters-long
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX=3

# File Uploads
UPLOADS_PATH=./uploads
MAX_FILE_SIZE=10485760

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX=3
`;

// Create .env file
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file with proper configuration');
} else {
  console.log('⚠️  .env file already exists, skipping creation');
}

// Create uploads directory
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
  console.log('✅ Created uploads directory');
} else {
  console.log('✅ Uploads directory already exists');
}

// Create test script
const testScript = `#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🧪 Running WebSocket and CORS Tests');
console.log('==================================');

// Run the test script
const testProcess = spawn('node', ['test-websocket-cors.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});

testProcess.on('close', (code) => {
  if (code === 0) {
    console.log('\\n✅ All tests passed!');
  } else {
    console.log('\\n❌ Some tests failed');
    process.exit(code);
  }
});

testProcess.on('error', (error) => {
  console.error('❌ Failed to run tests:', error);
  process.exit(1);
});
`;

const testScriptPath = path.join(__dirname, 'run-tests.js');
fs.writeFileSync(testScriptPath, testScript);
fs.chmodSync(testScriptPath, '755');
console.log('✅ Created test runner script');

// Create package.json scripts if they don't exist
const packageJsonPath = path.join(__dirname, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  
  packageJson.scripts['test:websocket'] = 'node test-websocket-cors.js';
  packageJson.scripts['test:cors'] = 'node test-websocket-cors.js';
  packageJson.scripts['setup:websocket'] = 'node setup-websocket-cors.js';
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Updated package.json with test scripts');
}

console.log('\n🎉 Setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Start the server: npm run dev');
console.log('2. Run tests: npm run test:websocket');
console.log('3. Check the logs for any issues');
console.log('\n🔗 Test URLs:');
console.log('- Health check: http://localhost:5001/api/health');
console.log('- WebSocket test: http://localhost:5001/socket.io/');
console.log('- CORS test: Run the test script');

