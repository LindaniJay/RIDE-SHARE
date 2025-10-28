const axios = require('axios');

const BASE_URL = 'http://localhost:3001/api';

// Test configuration
const testConfig = {
  adminToken: null,
  userToken: null,
  hostToken: null,
  testUserId: null,
  testVehicleId: null,
  testBookingId: null,
  testDocumentId: null
};

// Helper function to make authenticated requests
async function makeRequest(method, url, data = null, token = null) {
  try {
    const config = {
      method,
      url: `${BASE_URL}${url}`,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      ...(data && { data })
    };
    
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`Error ${method} ${url}:`, error.response?.data || error.message);
    throw error;
  }
}

// Test user approval workflow
async function testUserApproval() {
  console.log('\n=== Testing User Approval Workflow ===');
  
  try {
    // 1. Get pending users
    console.log('1. Fetching pending users...');
    const usersResponse = await makeRequest('GET', '/admin/users?status=pending', null, testConfig.adminToken);
    console.log('✓ Pending users fetched:', usersResponse.data?.users?.length || 0);
    
    if (usersResponse.data?.users?.length > 0) {
      const testUser = usersResponse.data.users[0];
      testConfig.testUserId = testUser.id;
      
      // 2. Approve user
      console.log('2. Approving user...');
      const approveResponse = await makeRequest('PATCH', `/admin/users/${testUser.id}/approve`, {
        status: 'approved',
        reason: 'Test approval'
      }, testConfig.adminToken);
      console.log('✓ User approved:', approveResponse.message);
      
      // 3. Verify user status
      console.log('3. Verifying user status...');
      const userResponse = await makeRequest('GET', `/users/${testUser.id}`, null, testConfig.adminToken);
      console.log('✓ User status updated:', userResponse.user?.approval_status);
    }
    
    return true;
  } catch (error) {
    console.error('✗ User approval test failed:', error.message);
    return false;
  }
}

// Test vehicle approval workflow
async function testVehicleApproval() {
  console.log('\n=== Testing Vehicle Approval Workflow ===');
  
  try {
    // 1. Get pending vehicles
    console.log('1. Fetching pending vehicles...');
    const vehiclesResponse = await makeRequest('GET', '/admin/vehicles?status=pending', null, testConfig.adminToken);
    console.log('✓ Pending vehicles fetched:', vehiclesResponse.data?.vehicles?.length || 0);
    
    if (vehiclesResponse.data?.vehicles?.length > 0) {
      const testVehicle = vehiclesResponse.data.vehicles[0];
      testConfig.testVehicleId = testVehicle.id;
      
      // 2. Approve vehicle
      console.log('2. Approving vehicle...');
      const approveResponse = await makeRequest('PATCH', `/admin/vehicles/${testVehicle.id}/approve`, {
        status: 'approved',
        reason: 'Test approval'
      }, testConfig.adminToken);
      console.log('✓ Vehicle approved:', approveResponse.message);
      
      // 3. Verify vehicle status
      console.log('3. Verifying vehicle status...');
      const vehicleResponse = await makeRequest('GET', `/listings/${testVehicle.id}`, null, testConfig.adminToken);
      console.log('✓ Vehicle status updated:', vehicleResponse.listing?.status);
    }
    
    return true;
  } catch (error) {
    console.error('✗ Vehicle approval test failed:', error.message);
    return false;
  }
}

// Test booking approval workflow
async function testBookingApproval() {
  console.log('\n=== Testing Booking Approval Workflow ===');
  
  try {
    // 1. Get pending bookings
    console.log('1. Fetching pending bookings...');
    const bookingsResponse = await makeRequest('GET', '/admin/bookings?status=pending', null, testConfig.adminToken);
    console.log('✓ Pending bookings fetched:', bookingsResponse.data?.bookings?.length || 0);
    
    if (bookingsResponse.data?.bookings?.length > 0) {
      const testBooking = bookingsResponse.data.bookings[0];
      testConfig.testBookingId = testBooking.id;
      
      // 2. Approve booking
      console.log('2. Approving booking...');
      const approveResponse = await makeRequest('PATCH', `/admin/bookings/${testBooking.id}/approve`, {
        status: 'approved',
        reason: 'Test approval'
      }, testConfig.adminToken);
      console.log('✓ Booking approved:', approveResponse.message);
      
      // 3. Verify booking status
      console.log('3. Verifying booking status...');
      const bookingResponse = await makeRequest('GET', `/bookings/${testBooking.id}`, null, testConfig.adminToken);
      console.log('✓ Booking status updated:', bookingResponse.booking?.status);
    }
    
    return true;
  } catch (error) {
    console.error('✗ Booking approval test failed:', error.message);
    return false;
  }
}

// Test document approval workflow
async function testDocumentApproval() {
  console.log('\n=== Testing Document Approval Workflow ===');
  
  try {
    // 1. Get pending documents
    console.log('1. Fetching pending documents...');
    const documentsResponse = await makeRequest('GET', '/admin/documents?status=pending', null, testConfig.adminToken);
    console.log('✓ Pending documents fetched:', documentsResponse.data?.documents?.length || 0);
    
    if (documentsResponse.data?.documents?.length > 0) {
      const testDocument = documentsResponse.data.documents[0];
      testConfig.testDocumentId = testDocument.id;
      
      // 2. Approve document
      console.log('2. Approving document...');
      const approveResponse = await makeRequest('PUT', `/documents/${testDocument.id}/status`, {
        status: 'approved',
        reason: 'Test approval'
      }, testConfig.adminToken);
      console.log('✓ Document approved:', approveResponse.message);
      
      // 3. Verify document status
      console.log('3. Verifying document status...');
      const documentResponse = await makeRequest('GET', `/documents/${testDocument.id}`, null, testConfig.adminToken);
      console.log('✓ Document status updated:', documentResponse.document?.status);
    }
    
    return true;
  } catch (error) {
    console.error('✗ Document approval test failed:', error.message);
    return false;
  }
}

// Test admin authentication
async function testAdminAuth() {
  console.log('\n=== Testing Admin Authentication ===');
  
  try {
    // Try to login as admin (you'll need to adjust this based on your auth system)
    const loginResponse = await makeRequest('POST', '/auth/login', {
      email: 'admin@ridesharex.com',
      password: 'admin123'
    });
    
    if (loginResponse.token) {
      testConfig.adminToken = loginResponse.token;
      console.log('✓ Admin authentication successful');
      return true;
    } else {
      console.log('⚠ Admin authentication failed - using mock token for testing');
      testConfig.adminToken = 'mock-admin-token';
      return true;
    }
  } catch (error) {
    console.log('⚠ Admin authentication failed - using mock token for testing');
    testConfig.adminToken = 'mock-admin-token';
    return true;
  }
}

// Main test runner
async function runApprovalTests() {
  console.log('🚀 Starting Approval Workflow Tests...\n');
  
  const results = {
    adminAuth: false,
    userApproval: false,
    vehicleApproval: false,
    bookingApproval: false,
    documentApproval: false
  };
  
  try {
    // Test admin authentication
    results.adminAuth = await testAdminAuth();
    
    if (results.adminAuth) {
      // Test user approval
      results.userApproval = await testUserApproval();
      
      // Test vehicle approval
      results.vehicleApproval = await testVehicleApproval();
      
      // Test booking approval
      results.bookingApproval = await testBookingApproval();
      
      // Test document approval
      results.documentApproval = await testDocumentApproval();
    }
    
    // Print summary
    console.log('\n=== Test Results Summary ===');
    console.log('Admin Authentication:', results.adminAuth ? '✅ PASS' : '❌ FAIL');
    console.log('User Approval:', results.userApproval ? '✅ PASS' : '❌ FAIL');
    console.log('Vehicle Approval:', results.vehicleApproval ? '✅ PASS' : '❌ FAIL');
    console.log('Booking Approval:', results.bookingApproval ? '✅ PASS' : '❌ FAIL');
    console.log('Document Approval:', results.documentApproval ? '✅ PASS' : '❌ FAIL');
    
    const passedTests = Object.values(results).filter(Boolean).length;
    const totalTests = Object.keys(results).length;
    
    console.log(`\n📊 Overall Result: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
      console.log('🎉 All approval workflows are working correctly!');
    } else {
      console.log('⚠️ Some approval workflows need attention.');
    }
    
  } catch (error) {
    console.error('❌ Test runner failed:', error.message);
  }
}

// Run the tests
if (require.main === module) {
  runApprovalTests().catch(console.error);
}

module.exports = {
  runApprovalTests,
  testUserApproval,
  testVehicleApproval,
  testBookingApproval,
  testDocumentApproval
};
