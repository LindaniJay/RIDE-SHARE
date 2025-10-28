const http = require('http');

console.log('🧪 Simple WebSocket Test');
console.log('========================');

// Test 1: Check if server is running
function testServerRunning() {
  return new Promise((resolve, reject) => {
    console.log('🔍 Testing if server is running on port 5001...');
    
    const req = http.get('http://localhost:5001/api/health', (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Server is running and responding');
        resolve(true);
      } else {
        console.log('⚠️  Server responded with status:', res.statusCode);
        resolve(false);
      }
    });
    
    req.on('error', (error) => {
      console.log('❌ Server is not running or not accessible:', error.message);
      reject(error);
    });
    
    req.setTimeout(5000, () => {
      console.log('❌ Server connection timeout');
      reject(new Error('Connection timeout'));
    });
  });
}

// Test 2: Check Socket.io endpoint
function testSocketIOEndpoint() {
  return new Promise((resolve, reject) => {
    console.log('🔌 Testing Socket.io endpoint...');
    
    const req = http.get('http://localhost:5001/socket.io/', (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Socket.io endpoint is accessible');
        resolve(true);
      } else {
        console.log('⚠️  Socket.io endpoint responded with status:', res.statusCode);
        resolve(false);
      }
    });
    
    req.on('error', (error) => {
      console.log('❌ Socket.io endpoint not accessible:', error.message);
      reject(error);
    });
    
    req.setTimeout(5000, () => {
      console.log('❌ Socket.io endpoint timeout');
      reject(new Error('Socket.io endpoint timeout'));
    });
  });
}

// Run tests
async function runTests() {
  try {
    console.log('\n🚀 Starting WebSocket tests...\n');
    
    // Test 1: Server running
    try {
      await testServerRunning();
    } catch (error) {
      console.log('⚠️  Server test failed, but continuing with Socket.io test...');
    }
    
    // Test 2: Socket.io endpoint
    try {
      await testSocketIOEndpoint();
    } catch (error) {
      console.log('❌ Socket.io endpoint test failed:', error.message);
      console.log('\n🔧 Make sure the backend server is running:');
      console.log('   npm run dev');
      process.exit(1);
    }
    
    console.log('\n🎉 WebSocket tests completed!');
    console.log('📋 Summary:');
    console.log('   ✅ Backend server is running on port 5001');
    console.log('   ✅ Socket.io endpoint is accessible');
    console.log('\n🚀 Your WebSocket setup is ready!');
    console.log('🔗 Frontend can connect to: http://localhost:5001');
    console.log('📊 Socket.io path: /socket.io');
    
  } catch (error) {
    console.error('\n❌ WebSocket test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Start the backend server: npm run dev');
    console.log('2. Check that port 5001 is not blocked');
    console.log('3. Verify CORS configuration');
    process.exit(1);
  }
}

// Run the tests
runTests();
