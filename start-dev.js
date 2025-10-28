#!/usr/bin/env node

/**
 * Simple backend server startup script
 * This script ensures the backend starts properly with all dependencies
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const BACKEND_DIR = path.join(__dirname, 'backend');
const FRONTEND_DIR = path.join(__dirname, 'frontend');

console.log('🚀 Starting RideShareX Development Environment\n');

// Check if we're in the right directory
if (!fs.existsSync(BACKEND_DIR) || !fs.existsSync(FRONTEND_DIR)) {
  console.error('❌ Please run this script from the project root directory');
  process.exit(1);
}

// Function to start backend
function startBackend() {
  console.log('🔧 Starting Backend Server...');
  
  const backendProcess = spawn('npm', ['run', 'dev'], {
    cwd: BACKEND_DIR,
    stdio: 'pipe',
    shell: true
  });
  
  backendProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[Backend] ${output.trim()}`);
    
    // Check for successful startup
    if (output.includes('Server running on') || output.includes('listening on')) {
      console.log('✅ Backend server started successfully');
      startFrontend();
    }
  });
  
  backendProcess.stderr.on('data', (data) => {
    const error = data.toString();
    console.error(`[Backend Error] ${error.trim()}`);
  });
  
  backendProcess.on('close', (code) => {
    console.log(`[Backend] Process exited with code ${code}`);
  });
  
  backendProcess.on('error', (error) => {
    console.error(`[Backend] Failed to start: ${error.message}`);
  });
  
  return backendProcess;
}

// Function to start frontend
function startFrontend() {
  console.log('🎨 Starting Frontend Server...');
  
  const frontendProcess = spawn('npm', ['run', 'dev'], {
    cwd: FRONTEND_DIR,
    stdio: 'pipe',
    shell: true
  });
  
  frontendProcess.stdout.on('data', (data) => {
    const output = data.toString();
    console.log(`[Frontend] ${output.trim()}`);
    
    // Check for successful startup
    if (output.includes('Local:') || output.includes('ready in')) {
      console.log('✅ Frontend server started successfully');
      console.log('\n🌐 Application URLs:');
      console.log('   Frontend: http://localhost:3000');
      console.log('   Backend API: http://localhost:5001/api');
      console.log('   Health Check: http://localhost:5001/api/health');
      console.log('\n📝 To test the listing workflow, run: node test-listing-workflow.js');
    }
  });
  
  frontendProcess.stderr.on('data', (data) => {
    const error = data.toString();
    console.error(`[Frontend Error] ${error.trim()}`);
  });
  
  frontendProcess.on('close', (code) => {
    console.log(`[Frontend] Process exited with code ${code}`);
  });
  
  frontendProcess.on('error', (error) => {
    console.error(`[Frontend] Failed to start: ${error.message}`);
  });
  
  return frontendProcess;
}

// Function to check dependencies
function checkDependencies() {
  console.log('🔍 Checking dependencies...');
  
  const backendPackageJson = path.join(BACKEND_DIR, 'package.json');
  const frontendPackageJson = path.join(FRONTEND_DIR, 'package.json');
  
  if (!fs.existsSync(backendPackageJson)) {
    console.error('❌ Backend package.json not found');
    return false;
  }
  
  if (!fs.existsSync(frontendPackageJson)) {
    console.error('❌ Frontend package.json not found');
    return false;
  }
  
  console.log('✅ Dependencies check passed');
  return true;
}

// Function to install dependencies if needed
function installDependencies() {
  console.log('📦 Installing dependencies...');
  
  return new Promise((resolve, reject) => {
    const installProcess = spawn('npm', ['run', 'install:all'], {
      stdio: 'pipe',
      shell: true
    });
    
    installProcess.stdout.on('data', (data) => {
      console.log(`[Install] ${data.toString().trim()}`);
    });
    
    installProcess.stderr.on('data', (data) => {
      console.error(`[Install Error] ${data.toString().trim()}`);
    });
    
    installProcess.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Dependencies installed successfully');
        resolve();
      } else {
        console.error('❌ Failed to install dependencies');
        reject(new Error('Installation failed'));
      }
    });
  });
}

// Main function
async function main() {
  try {
    // Check dependencies
    if (!checkDependencies()) {
      process.exit(1);
    }
    
    // Install dependencies
    try {
      await installDependencies();
    } catch (error) {
      console.log('⚠️  Dependency installation failed, continuing anyway...');
    }
    
    // Start backend
    const backendProcess = startBackend();
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down servers...');
      backendProcess.kill('SIGINT');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      console.log('\n🛑 Shutting down servers...');
      backendProcess.kill('SIGTERM');
      process.exit(0);
    });
    
  } catch (error) {
    console.error('❌ Failed to start development environment:', error.message);
    process.exit(1);
  }
}

// Start the development environment
main();
