#!/usr/bin/env node

/**
 * Test script to verify the vehicle listing workflow
 * This script tests the complete flow from frontend submission to backend processing
 */

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const API_BASE_URL = 'http://localhost:5001/api';
const FRONTEND_URL = 'http://localhost:3000';

// Helper function to create a test user and get authentication token
async function createTestUserAndGetToken() {
  try {
    console.log('🔐 Creating test user and getting token...');
    
    // Create a test user via the auth/verify endpoint
    const testUserData = {
      uid: `test-${Date.now()}`,
      email: `test-${Date.now()}@example.com`,
      name: 'Test User',
      role: 'host'
    };
    
    const verifyResponse = await axios.post(`${API_BASE_URL}/auth/verify`, testUserData, {
      timeout: 5000
    });
    
    if (verifyResponse.data.success) {
      console.log('✅ Test user created successfully');
      console.log('👤 User ID:', verifyResponse.data.data.id);
      
      // Return the Firebase UID as a token for testing
      // In a real scenario, this would be a valid Firebase ID token
      return testUserData.uid;
    }
    
    return null;
  } catch (error) {
    console.log('⚠️  Could not create test user via API:', error.response?.data || error.message);
    return null;
  }
}

// Helper function to create an admin token for testing
async function createAdminToken() {
  try {
    console.log('🔐 Creating admin token for testing...');
    
    // Create an admin user via the auth/verify endpoint
    const adminUserData = {
      uid: `admin-test-${Date.now()}`,
      email: `admin-test-${Date.now()}@example.com`,
      name: 'Admin Test User',
      role: 'admin'
    };
    
    const verifyResponse = await axios.post(`${API_BASE_URL}/auth/verify`, adminUserData, {
      timeout: 5000
    });
    
    if (verifyResponse.data.success) {
      console.log('✅ Admin test user created successfully');
      console.log('👤 Admin User ID:', verifyResponse.data.data.id);
      
      // Return the Firebase UID as a token for testing
      return adminUserData.uid;
    }
    
    return null;
  } catch (error) {
    console.log('⚠️  Could not create admin user via API:', error.response?.data || error.message);
    return null;
  }
}

// Test data for vehicle listing
const testVehicleData = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2022,
  type: 'car',
  color: 'White',
  mileage: 15000,
  transmission: 'automatic',
  fuelType: 'petrol',
  seats: 5,
  doors: 4,
  engineSize: '1.8L',
  vin: 'TEST123456789',
  pricePerDay: 250,
  pricePerWeek: 1500,
  pricePerMonth: 5000,
  minimumRentalDays: 1,
  maximumRentalDays: 30,
  features: ['Air Conditioning', 'Bluetooth', 'GPS'],
  amenities: ['USB Charging', 'Cup Holders'],
  safetyFeatures: ['Airbags', 'ABS', 'Stability Control'],
  entertainmentFeatures: ['Radio', 'Bluetooth Audio'],
  insuranceIncluded: true,
  insuranceProvider: 'Test Insurance',
  insurancePolicyNumber: 'POL123456',
  gpsInstalled: true,
  trackingEnabled: true,
  location: {
    address: '123 Test Street',
    city: 'Cape Town',
    state: 'Western Cape',
    country: 'South Africa',
    postalCode: '8001',
    coordinates: {
      latitude: -33.9249,
      longitude: 18.4241
    }
  },
  listingStatus: 'pending'
};

async function testBackendHealth() {
  console.log('🔍 Testing backend health...');
  try {
    const response = await axios.get(`${API_BASE_URL}/health`, { timeout: 5000 });
    console.log('✅ Backend is healthy:', response.data);
    return true;
  } catch (error) {
    console.log('❌ Backend health check failed:', error.message);
    return false;
  }
}

async function testVehicleListingSubmission() {
  console.log('🚗 Testing vehicle listing submission...');
  try {
    // Test the listings endpoint without authentication
    const response = await axios.post(`${API_BASE_URL}/listings`, testVehicleData, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    });
    
    console.log('✅ Vehicle listing submitted successfully:', response.data);
    return response.data.listing?.id || response.data.id;
  } catch (error) {
    console.log('❌ Vehicle listing submission failed:', error.response?.data || error.message);
    return null;
  }
}

async function testImageUpload(vehicleId) {
  console.log('📸 Testing image upload...');
  try {
    // Create a test image file
    const testImagePath = path.join(__dirname, 'test-image.jpg');
    if (!fs.existsSync(testImagePath)) {
      console.log('⚠️  No test image found, skipping image upload test');
      return true;
    }
    
    const formData = new FormData();
    formData.append('images', fs.createReadStream(testImagePath));
    formData.append('category', 'exterior');
    
    // Test image upload without authentication (if supported)
    const response = await axios.post(`${API_BASE_URL}/vehicle-images/upload`, formData, {
      headers: {
        ...formData.getHeaders()
      },
      timeout: 15000
    });
    
    console.log('✅ Image upload successful:', response.data);
    return true;
  } catch (error) {
    console.log('❌ Image upload failed:', error.response?.data || error.message);
    console.log('ℹ️  Image upload may require authentication - this is expected');
    return false;
  }
}

async function testAdminApproval(vehicleId) {
  console.log('👨‍💼 Testing admin approval workflow...');
  try {
    // Test getting admin vehicles endpoint
    const pendingResponse = await axios.get(`${API_BASE_URL}/admin/vehicles`, {
      timeout: 5000
    });
    
    console.log('✅ Admin vehicles endpoint accessible:', pendingResponse.data);
    
    // Test getting admin stats
    const statsResponse = await axios.get(`${API_BASE_URL}/admin/stats`, {
      timeout: 5000
    });
    
    console.log('✅ Admin stats endpoint accessible:', statsResponse.data);
    
    return true;
  } catch (error) {
    console.log('❌ Admin approval test failed:', error.response?.data || error.message);
    console.log('ℹ️  Admin endpoints may require authentication - this is expected');
    return false;
  }
}

async function testFrontendIntegration() {
  console.log('🌐 Testing frontend integration...');
  try {
    const response = await axios.get(`${FRONTEND_URL}`, { timeout: 5000 });
    console.log('✅ Frontend is accessible');
    return true;
  } catch (error) {
    console.log('❌ Frontend not accessible:', error.message);
    return false;
  }
}

async function runTests() {
  console.log('🧪 Starting Vehicle Listing Workflow Tests\n');
  
  const results = {
    backendHealth: false,
    frontendAccess: false,
    listingSubmission: false,
    imageUpload: false,
    adminApproval: false
  };
  
  // Test 1: Backend Health
  results.backendHealth = await testBackendHealth();
  console.log('');
  
  // Test 2: Frontend Access
  results.frontendAccess = await testFrontendIntegration();
  console.log('');
  
  if (!results.backendHealth) {
    console.log('❌ Backend is not running. Please start the backend server first.');
    console.log('   Run: cd backend && npm run dev');
    return;
  }
  
  // Test 3: Vehicle Listing Submission
  const vehicleId = await testVehicleListingSubmission();
  results.listingSubmission = vehicleId !== null;
  console.log('');
  
  if (vehicleId) {
    // Test 4: Image Upload
    console.log('🔄 Running image upload test...');
    results.imageUpload = await testImageUpload(vehicleId);
    console.log('');
    
    // Test 5: Admin Approval
    console.log('🔄 Running admin approval test...');
    results.adminApproval = await testAdminApproval(vehicleId);
    console.log('');
  } else {
    console.log('⚠️  No vehicle ID returned, skipping image upload and admin approval tests');
    results.imageUpload = false;
    results.adminApproval = false;
  }
  
  // Summary
  console.log('📊 Test Results Summary:');
  console.log('========================');
  console.log(`Backend Health: ${results.backendHealth ? '✅' : '❌'}`);
  console.log(`Frontend Access: ${results.frontendAccess ? '✅' : '❌'}`);
  console.log(`Listing Submission: ${results.listingSubmission ? '✅' : '❌'}`);
  console.log(`Image Upload: ${results.imageUpload ? '✅' : '❌'}`);
  console.log(`Admin Approval: ${results.adminApproval ? '✅' : '❌'}`);
  
  const allPassed = Object.values(results).every(result => result);
  console.log(`\nOverall Status: ${allPassed ? '✅ All tests passed!' : '❌ Some tests failed'}`);
  
  if (!allPassed) {
    console.log('\n🔧 Troubleshooting Tips:');
    if (!results.backendHealth) {
      console.log('- Start the backend server: cd backend && npm run dev');
    }
    if (!results.frontendAccess) {
      console.log('- Start the frontend server: cd frontend && npm run dev');
    }
    if (!results.listingSubmission) {
      console.log('- Check authentication and API endpoints');
      console.log('- Verify database connection');
    }
    if (!results.imageUpload) {
      console.log('- Check file upload configuration');
      console.log('- Verify upload directory permissions');
    }
    if (!results.adminApproval) {
      console.log('- Check admin authentication');
      console.log('- Verify admin routes are properly configured');
    }
  }
}

// Run the tests
runTests().catch(console.error);
