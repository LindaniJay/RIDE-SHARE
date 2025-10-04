#!/usr/bin/env node

console.log('🚀 Building RideShareX for production...');

const { execSync } = require('child_process');
const fs = require('fs');

try {
  // Build backend
  console.log('🔨 Building backend...');
  execSync('cd backend && npm run build', { stdio: 'inherit' });
  
  // Build frontend
  console.log('🌐 Building frontend...');
  execSync('cd frontend && npm run build', { stdio: 'inherit' });
  
  console.log('\n🎉 Production build complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Set up PostgreSQL database');
  console.log('2. Run: cd backend && node setup-production-database.js');
  console.log('3. Start backend: cd backend && npm start');
  console.log('4. Start frontend: cd frontend && npm start');
  console.log('5. Test the complete workflow');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
