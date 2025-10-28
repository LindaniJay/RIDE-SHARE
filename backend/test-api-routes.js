#!/usr/bin/env node

const fetch = require('node-fetch');

async function testApiRoutes() {
  console.log('🧪 Testing API routes for pending vehicles...');
  
  const routes = [
    '/api/admin/vehicles/pending',
    '/api/vehicles/admin/pending',
    '/api/listings/admin/pending'
  ];
  
  for (const route of routes) {
    try {
      console.log(`\n🔍 Testing route: ${route}`);
      const response = await fetch(`http://localhost:5001${route}`);
      const data = await response.json();
      
      console.log(`✅ Status: ${response.status}`);
      console.log(`📊 Response: ${JSON.stringify(data, null, 2)}`);
      
      if (data.vehicles && data.vehicles.length > 0) {
        console.log(`🎉 Found ${data.vehicles.length} pending vehicles!`);
      }
      
    } catch (error) {
      console.log(`❌ Error testing ${route}:`, error.message);
    }
  }
  
  // Test with authentication header
  console.log('\n🔍 Testing with authentication header...');
  try {
    const response = await fetch('http://localhost:5001/api/admin/vehicles/pending', {
      headers: {
        'Authorization': 'Bearer test-token'
      }
    });
    const data = await response.json();
    
    console.log(`✅ Status: ${response.status}`);
    console.log(`📊 Response: ${JSON.stringify(data, null, 2)}`);
    
  } catch (error) {
    console.log(`❌ Error with auth:`, error.message);
  }
}

testApiRoutes();






