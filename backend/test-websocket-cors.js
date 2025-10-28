#!/usr/bin/env node

const { io } = require('socket.io-client');
const axios = require('axios');

const SERVER_URL = process.env.SERVER_URL || 'http://localhost:5001';
const FRONTEND_URLS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
  'http://localhost:4173'
];

console.log('🧪 Testing WebSocket and CORS Configuration');
console.log('==========================================');

async function testCORS() {
  console.log('\n📡 Testing CORS Configuration...');
  
  for (const origin of FRONTEND_URLS) {
    try {
      console.log(`\n🔍 Testing CORS for origin: ${origin}`);
      
      const response = await axios.get(`${SERVER_URL}/api/health`, {
        headers: {
          'Origin': origin,
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Content-Type,Authorization'
        }
      });
      
      console.log(`✅ CORS OK for ${origin} - Status: ${response.status}`);
      console.log(`   Response: ${JSON.stringify(response.data)}`);
      
    } catch (error) {
      console.log(`❌ CORS FAILED for ${origin}`);
      console.log(`   Error: ${error.message}`);
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Headers: ${JSON.stringify(error.response.headers)}`);
      }
    }
  }
}

async function testWebSocket() {
  console.log('\n🔌 Testing WebSocket Connection...');
  
  for (const origin of FRONTEND_URLS) {
    try {
      console.log(`\n🔍 Testing WebSocket for origin: ${origin}`);
      
      const socket = io(SERVER_URL, {
        transports: ['websocket', 'polling'],
        timeout: 5000,
        forceNew: true,
        extraHeaders: {
          'Origin': origin
        }
      });

      const connectPromise = new Promise((resolve, reject) => {
        socket.on('connect', () => {
          console.log(`✅ WebSocket connected for ${origin}`);
          resolve();
        });

        socket.on('connect_error', (error) => {
          console.log(`❌ WebSocket connection failed for ${origin}`);
          console.log(`   Error: ${error.message}`);
          reject(error);
        });

        socket.on('disconnect', (reason) => {
          console.log(`🔌 WebSocket disconnected for ${origin}: ${reason}`);
        });

        // Timeout after 5 seconds
        setTimeout(() => {
          reject(new Error('Connection timeout'));
        }, 5000);
      });

      await connectPromise;
      socket.disconnect();
      
    } catch (error) {
      console.log(`❌ WebSocket test failed for ${origin}`);
      console.log(`   Error: ${error.message}`);
    }
  }
}

async function testPreflightRequests() {
  console.log('\n🛫 Testing CORS Preflight Requests...');
  
  for (const origin of FRONTEND_URLS) {
    try {
      console.log(`\n🔍 Testing preflight for origin: ${origin}`);
      
      const response = await axios.options(`${SERVER_URL}/api/health`, {
        headers: {
          'Origin': origin,
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type,Authorization'
        }
      });
      
      console.log(`✅ Preflight OK for ${origin} - Status: ${response.status}`);
      console.log(`   CORS Headers: ${JSON.stringify({
        'Access-Control-Allow-Origin': response.headers['access-control-allow-origin'],
        'Access-Control-Allow-Methods': response.headers['access-control-allow-methods'],
        'Access-Control-Allow-Headers': response.headers['access-control-allow-headers']
      })}`);
      
    } catch (error) {
      console.log(`❌ Preflight FAILED for ${origin}`);
      console.log(`   Error: ${error.message}`);
      if (error.response) {
        console.log(`   Status: ${error.response.status}`);
        console.log(`   Headers: ${JSON.stringify(error.response.headers)}`);
      }
    }
  }
}

async function runTests() {
  try {
    console.log(`🚀 Starting tests against server: ${SERVER_URL}`);
    
    // Test server health first
    try {
      const healthResponse = await axios.get(`${SERVER_URL}/api/health`);
      console.log(`✅ Server is running - Health check passed`);
      console.log(`   Response: ${JSON.stringify(healthResponse.data)}`);
    } catch (error) {
      console.log(`❌ Server health check failed: ${error.message}`);
      return;
    }
    
    await testCORS();
    await testPreflightRequests();
    await testWebSocket();
    
    console.log('\n🎉 All tests completed!');
    
  } catch (error) {
    console.error('❌ Test suite failed:', error);
    process.exit(1);
  }
}

// Run tests
runTests();

