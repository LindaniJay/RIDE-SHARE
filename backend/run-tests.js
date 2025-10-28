#!/usr/bin/env node

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
    console.log('\n✅ All tests passed!');
  } else {
    console.log('\n❌ Some tests failed');
    process.exit(code);
  }
});

testProcess.on('error', (error) => {
  console.error('❌ Failed to run tests:', error);
  process.exit(1);
});
