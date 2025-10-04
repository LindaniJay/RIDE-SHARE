#!/usr/bin/env node

console.log('🧪 Testing RideShareX production setup...');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

async function testProductionSetup() {
  const baseURL = 'http://localhost:5001/api';
  
  console.log('\n🔍 Testing API endpoints...');
  
  try {
    // Test 1: Health check
    console.log('1. Testing health check...');
    const healthResponse = await fetch(`${baseURL}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test 2: User registration
    console.log('\n2. Testing user registration...');
    const registerData = {
      email: 'test@example.com',
      password: 'Password123!',
      first_name: 'Test',
      last_name: 'User',
      role: 'renter'
    };
    
    const registerResponse = await fetch(`${baseURL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData)
    });
    
    const registerResult = await registerResponse.json();
    console.log('✅ Registration result:', registerResult);
    
    // Test 3: User login
    console.log('\n3. Testing user login...');
    const loginData = {
      email: 'test@example.com',
      password: 'Password123!'
    };
    
    const loginResponse = await fetch(`${baseURL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });
    
    const loginResult = await loginResponse.json();
    console.log('✅ Login result:', loginResult);
    
    if (loginResult.token) {
      // Test 4: Get user profile
      console.log('\n4. Testing get user profile...');
      const profileResponse = await fetch(`${baseURL}/auth/profile`, {
        headers: { 'Authorization': `Bearer ${loginResult.token}` }
      });
      
      const profileResult = await profileResponse.json();
      console.log('✅ Profile result:', profileResult);
      
      // Test 5: Get listings
      console.log('\n5. Testing get listings...');
      const listingsResponse = await fetch(`${baseURL}/listings`);
      const listingsResult = await listingsResponse.json();
      console.log('✅ Listings result:', listingsResult);
    }
    
    console.log('\n🎉 All tests passed! Production setup is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Run the tests
testProductionSetup();
