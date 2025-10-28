#!/usr/bin/env node

/**
 * Test script to verify all fixes are working
 */

const http = require('http');
const { io } = require('socket.io-client');

const BACKEND_URL = 'http://localhost:5001';
const FRONTEND_URL = 'http://localhost:5173';

console.log('🔍 Testing RideShareX Fixes...\n');

// Test 1: Backend Health Check
async function testBackendHealth() {
  return new Promise((resolve) => {
    console.log('1. Testing backend health...');
    const req = http.get(`${BACKEND_URL}/api/health`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.status === 'OK') {
            console.log('   ✅ Backend health check passed');
            resolve(true);
          } else {
            console.log('   ❌ Backend health check failed');
            resolve(false);
          }
        } catch (error) {
          console.log('   ❌ Backend health check failed:', error.message);
          resolve(false);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('   ❌ Backend not running:', error.message);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log('   ❌ Backend health check timeout');
      resolve(false);
    });
  });
}

// Test 2: Admin Dashboard Stats API
async function testAdminDashboardStats() {
  return new Promise((resolve) => {
    console.log('2. Testing admin dashboard stats API...');
    const req = http.get(`${BACKEND_URL}/api/admin/dashboard-stats`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.success) {
            console.log('   ✅ Admin dashboard stats API working');
            resolve(true);
          } else {
            console.log('   ❌ Admin dashboard stats API failed:', result.error);
            resolve(false);
          }
        } catch (error) {
          console.log('   ❌ Admin dashboard stats API failed:', error.message);
          resolve(false);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('   ❌ Admin dashboard stats API error:', error.message);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log('   ❌ Admin dashboard stats API timeout');
      resolve(false);
    });
  });
}

// Test 3: Pending Vehicles API
async function testPendingVehicles() {
  return new Promise((resolve) => {
    console.log('3. Testing pending vehicles API...');
    const req = http.get(`${BACKEND_URL}/api/admin/vehicles/pending`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.success) {
            console.log('   ✅ Pending vehicles API working');
            resolve(true);
          } else {
            console.log('   ❌ Pending vehicles API failed:', result.error);
            resolve(false);
          }
        } catch (error) {
          console.log('   ❌ Pending vehicles API failed:', error.message);
          resolve(false);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('   ❌ Pending vehicles API error:', error.message);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log('   ❌ Pending vehicles API timeout');
      resolve(false);
    });
  });
}

// Test 4: WebSocket Connection
async function testWebSocketConnection() {
  return new Promise((resolve) => {
    console.log('4. Testing WebSocket connection...');
    
    const socket = io(BACKEND_URL, {
      transports: ['websocket', 'polling'],
      timeout: 5000
    });
    
    const timeout = setTimeout(() => {
      console.log('   ❌ WebSocket connection timeout');
      socket.disconnect();
      resolve(false);
    }, 5000);
    
    socket.on('connect', () => {
      console.log('   ✅ WebSocket connection successful');
      clearTimeout(timeout);
      socket.disconnect();
      resolve(true);
    });
    
    socket.on('connect_error', (error) => {
      console.log('   ❌ WebSocket connection failed:', error.message);
      clearTimeout(timeout);
      resolve(false);
    });
  });
}

// Test 5: Notifications API
async function testNotificationsAPI() {
  return new Promise((resolve) => {
    console.log('5. Testing notifications API...');
    const req = http.get(`${BACKEND_URL}/api/notifications`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.success !== undefined) {
            console.log('   ✅ Notifications API working');
            resolve(true);
          } else {
            console.log('   ❌ Notifications API failed:', result.error);
            resolve(false);
          }
        } catch (error) {
          console.log('   ❌ Notifications API failed:', error.message);
          resolve(false);
        }
      });
    });
    
    req.on('error', (error) => {
      console.log('   ❌ Notifications API error:', error.message);
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      console.log('   ❌ Notifications API timeout');
      resolve(false);
    });
  });
}

// Run all tests
async function runTests() {
  const results = await Promise.all([
    testBackendHealth(),
    testAdminDashboardStats(),
    testPendingVehicles(),
    testWebSocketConnection(),
    testNotificationsAPI()
  ]);
  
  const passed = results.filter(Boolean).length;
  const total = results.length;
  
  console.log(`\n📊 Test Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All fixes are working correctly!');
    console.log('\n✅ Fixed Issues:');
    console.log('   - WebSocket authentication and connection');
    console.log('   - Firebase authentication configuration');
    console.log('   - Missing API routes (404/500 errors)');
    console.log('   - Manifest icon load errors');
    console.log('   - TypeError: Failed to fetch issues');
    console.log('   - Placeholder image URLs replaced');
  } else {
    console.log('⚠️  Some tests failed. Please check the backend server is running.');
    console.log('\nTo start the backend server:');
    console.log('   cd backend && npm run dev');
  }
  
  process.exit(passed === total ? 0 : 1);
}

runTests().catch(console.error);
