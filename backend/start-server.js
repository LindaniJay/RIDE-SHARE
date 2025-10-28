#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting RideShareX Backend...');

// Check if TypeScript is compiled
const fs = require('fs');
if (!fs.existsSync('dist')) {
  console.log('📦 Compiling TypeScript...');
  const build = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
  
  build.on('close', (code) => {
    if (code === 0) {
      console.log('✅ TypeScript compiled successfully');
      startServer();
    } else {
      console.error('❌ TypeScript compilation failed');
      process.exit(1);
    }
  });
} else {
  startServer();
}

function startServer() {
  console.log('🔧 Starting server...');
  const server = spawn('node', ['dist/unified-server.js'], { stdio: 'inherit' });
  
  server.on('close', (code) => {
    console.log(`Server exited with code ${code}`);
  });
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down server...');
    server.kill('SIGINT');
    process.exit(0);
  });
}