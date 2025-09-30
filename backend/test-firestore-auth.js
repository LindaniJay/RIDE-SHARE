const axios = require('axios');

const API_BASE = 'http://localhost:5001/api';

async function testFirestoreAuth() {
  console.log('🔥 Testing Firestore Authentication');
  console.log('=====================================\n');

  try {
    // Test 1: Sync Firestore users
    console.log('📋 Step 1: Syncing Firestore users...');
    const syncResponse = await axios.post(`${API_BASE}/firestore-auth/sync-firestore-users`);
    
    if (syncResponse.data.success) {
      console.log('✅ Firestore users synced successfully!');
      console.log(`📊 Synced ${syncResponse.data.data.length} users`);
      console.log('Users:', syncResponse.data.data);
    } else {
      console.log('❌ Failed to sync Firestore users');
      return;
    }

    console.log('\n📋 Step 2: Testing admin login...');
    
    // Test 2: Try admin login with Firestore users
    const adminEmails = [
      'jonase@rideshare.co.za',
      'toni@rideshare.co.za', 
      'soso@rideshare.co.za',
      'anitha@rideshare.co.za'
    ];

    for (const email of adminEmails) {
      try {
        console.log(`\n🔐 Testing login for: ${email}`);
        
        const loginResponse = await axios.post(`${API_BASE}/firestore-auth/firestore-login`, {
          email: email,
          password: 'admin123' // Default password for testing
        });

        if (loginResponse.data.success) {
          console.log('✅ Login successful!');
          console.log('👤 User:', loginResponse.data.data.user);
          console.log('🔑 Token received:', loginResponse.data.data.accessToken ? 'Yes' : 'No');
        } else {
          console.log('❌ Login failed:', loginResponse.data.error);
        }
      } catch (error) {
        if (error.response) {
          console.log('❌ Login failed:', error.response.data.error);
        } else {
          console.log('❌ Network error:', error.message);
        }
      }
    }

    console.log('\n🎯 Next Steps:');
    console.log('===============');
    console.log('1. Update your frontend to use the new Firestore auth endpoint');
    console.log('2. Test the admin login at: http://localhost:3000/admin-login');
    console.log('3. Use any of the admin emails with password: admin123');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure the backend server is running:');
      console.log('   cd backend && npm start');
    }
  }
}

// Run the test
testFirestoreAuth();
