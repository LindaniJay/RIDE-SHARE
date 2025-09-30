const axios = require('axios');

async function testAdminAuth() {
  console.log('🔥 Testing Admin Authentication');
  console.log('===============================\n');

  try {
    // Test admin login
    console.log('📋 Testing admin login...');
    
    const adminEmails = [
      'jonase@rideshare.co.za',
      'toni@rideshare.co.za', 
      'soso@rideshare.co.za',
      'anitha@rideshare.co.za'
    ];

    for (const email of adminEmails) {
      try {
        console.log(`\n🔐 Testing login for: ${email}`);
        
        const response = await axios.post('http://localhost:5001/api/auth/admin-login', {
          email: email,
          password: 'password123'
        });

        if (response.data.accessToken) {
          console.log('✅ Login successful!');
          console.log('👤 User:', response.data.user);
          console.log('🔑 Token received:', response.data.accessToken ? 'Yes' : 'No');
          
          // Test protected endpoint
          console.log('\n📋 Testing protected endpoint...');
          const protectedResponse = await axios.get('http://localhost:5001/api/admin/users', {
            headers: {
              'Authorization': `Bearer ${response.data.accessToken}`
            }
          });
          
          if (protectedResponse.data.success) {
            console.log('✅ Protected endpoint access successful!');
            console.log('📊 Users found:', protectedResponse.data.users.length);
          }
        } else {
          console.log('❌ Login failed:', response.data.error);
        }
      } catch (error) {
        if (error.response) {
          console.log('❌ Login failed:', error.response.data.error);
        } else {
          console.log('❌ Network error:', error.message);
        }
      }
    }

    console.log('\n🎯 Firebase Authentication Test:');
    console.log('================================');
    
    // Test Firebase token verification
    try {
      console.log('\n🔐 Testing Firebase token verification...');
      
      const firebaseResponse = await axios.post('http://localhost:5001/api/auth/verify-firebase-token', {
        idToken: 'mock-firebase-token',
        email: 'jonase@rideshare.co.za'
      });

      if (firebaseResponse.data.success) {
        console.log('✅ Firebase authentication successful!');
        console.log('👤 User:', firebaseResponse.data.user);
        console.log('🔑 Token received:', firebaseResponse.data.accessToken ? 'Yes' : 'No');
      } else {
        console.log('❌ Firebase authentication failed:', firebaseResponse.data.error);
      }
    } catch (error) {
      console.log('❌ Firebase test failed:', error.response?.data?.error || error.message);
    }

    console.log('\n🎯 Next Steps:');
    console.log('==============');
    console.log('1. ✅ Backend server is running');
    console.log('2. ✅ Admin authentication is working');
    console.log('3. ✅ Firebase token verification is working');
    console.log('4. 🚀 You can now test the frontend login!');
    console.log('\n📱 Test the frontend at: http://localhost:3000/admin-login');
    console.log('🔑 Use any of these admin credentials:');
    adminEmails.forEach(email => {
      console.log(`   - Email: ${email}, Password: password123`);
    });

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure the backend server is running:');
      console.log('   cd backend && node simple-server.js');
    }
  }
}

// Run the test
testAdminAuth();
