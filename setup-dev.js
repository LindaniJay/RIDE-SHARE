#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up RideShare SA Development Environment...\n');

// Create backend .env file
const backendEnvPath = path.join(__dirname, 'backend', '.env');
if (!fs.existsSync(backendEnvPath)) {
  const backendEnvContent = `# Environment
NODE_ENV=development
PORT=5001

# Database
DATABASE_URL=sqlite:./database.sqlite

# Firebase Admin SDK
FIREBASE_PROJECT_ID=ride-share-56610
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7VJTUt9Us8cKB\nwEi4t82UgN3O9x/lBQZ2e6x3RKpnMEFyxvHCLxYp5q9yx2HCLxYp5q9yx2HCLxYp\n5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9y\nx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCL\nxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9yx2HCLxYp5q9\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@ride-share-56610.iam.gserviceaccount.com

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-that-is-at-least-32-characters-long
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-that-is-at-least-32-characters-long
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# CORS
FRONTEND_URL=http://localhost:3000

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@ridesharex.com

# Payment Providers
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Redis (Optional)
REDIS_URL=redis://localhost:6379

# File Uploads
UPLOADS_PATH=./uploads
MAX_FILE_SIZE=10485760

# Security
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX=3

# Socket.io
SOCKET_IO_PATH=/socket.io`;

  fs.writeFileSync(backendEnvPath, backendEnvContent);
  console.log('✅ Created backend/.env file');
} else {
  console.log('ℹ️  backend/.env already exists');
}

// Create frontend .env.local file
const frontendEnvPath = path.join(__dirname, 'frontend', '.env.local');
if (!fs.existsSync(frontendEnvPath)) {
  const frontendEnvContent = `# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI
VITE_FIREBASE_AUTH_DOMAIN=ride-share-56610.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=ride-share-56610
VITE_FIREBASE_STORAGE_BUCKET=ride-share-56610.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1074725088115
VITE_FIREBASE_APP_ID=1:1074725088115:web:9d53e6c7b24a497cf3b306
VITE_FIREBASE_MEASUREMENT_ID=G-XN91B7PKY4

# API Configuration
VITE_API_URL=http://localhost:5001
VITE_WS_URL=http://localhost:5001

# Base Path for deployment
VITE_BASE_PATH=/`;

  fs.writeFileSync(frontendEnvPath, frontendEnvContent);
  console.log('✅ Created frontend/.env.local file');
} else {
  console.log('ℹ️  frontend/.env.local already exists');
}

// Create uploads directory
const uploadsDir = path.join(__dirname, 'backend', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('✅ Created uploads directory');
} else {
  console.log('ℹ️  uploads directory already exists');
}

console.log('\n🎉 Development environment setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Install dependencies: npm install (in both frontend and backend directories)');
console.log('2. Start backend: cd backend && npm run dev');
console.log('3. Start frontend: cd frontend && npm run dev');
console.log('\n🔧 Configuration:');
console.log('- Backend runs on: http://localhost:5001');
console.log('- Frontend runs on: http://localhost:3000');
console.log('- WebSocket endpoint: http://localhost:5001/socket.io');
console.log('\n⚠️  Note: Make sure to configure Firebase credentials in backend/.env for production use');
