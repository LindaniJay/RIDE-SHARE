#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Restarting development server...');

try {
  // Clear Vite cache
  const cacheDir = path.join(__dirname, '..', 'node_modules', '.vite');
  if (fs.existsSync(cacheDir)) {
    console.log('🧹 Clearing Vite cache...');
    fs.rmSync(cacheDir, { recursive: true, force: true });
  }

  // Clear browser cache directory if it exists
  const browserCacheDir = path.join(__dirname, '..', 'dist');
  if (fs.existsSync(browserCacheDir)) {
    console.log('🧹 Clearing build cache...');
    fs.rmSync(browserCacheDir, { recursive: true, force: true });
  }

  console.log('✅ Cache cleared successfully');
  console.log('🚀 Starting development server...');
  
  // Start the dev server
  execSync('npm run dev', { 
    cwd: path.join(__dirname, '..'), 
    stdio: 'inherit' 
  });

} catch (error) {
  console.error('❌ Failed to restart development server:', error.message);
  process.exit(1);
}
