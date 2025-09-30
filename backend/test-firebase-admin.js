const admin = require('firebase-admin');
const path = require('path');

console.log('🔥 Testing Firebase Admin SDK connection...\n');

// Try to load service account from file
let serviceAccount;
try {
  const serviceAccountPath = path.join(__dirname, 'firebase-service-account.json');
  serviceAccount = require(serviceAccountPath);
  console.log('✅ Service account file found');
} catch (error) {
  console.log('❌ Service account file not found');
  console.log('   Please download the service account key from Firebase Console');
  console.log('   and save it as "firebase-service-account.json" in the backend directory');
  process.exit(1);
}

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });
  console.log('✅ Firebase Admin SDK initialized successfully');
} catch (error) {
  console.log('❌ Failed to initialize Firebase Admin SDK:', error.message);
  process.exit(1);
}

// Test authentication
const auth = admin.auth();

async function testFirebaseConnection() {
  try {
    // List users to test connection
    const listUsersResult = await auth.listUsers(1);
    console.log('✅ Firebase Auth connection successful');
    console.log(`   Found ${listUsersResult.users.length} user(s) in Firebase`);
    
    // Check for admin users
    const adminUsers = [];
    for (const user of listUsersResult.users) {
      if (user.customClaims && (user.customClaims.role === 'admin' || user.customClaims.isAdmin)) {
        adminUsers.push({
          email: user.email,
          displayName: user.displayName,
          customClaims: user.customClaims
        });
      }
    }
    
    if (adminUsers.length > 0) {
      console.log('✅ Admin users found:');
      adminUsers.forEach(admin => {
        console.log(`   - ${admin.displayName} (${admin.email})`);
        console.log(`     Claims: ${JSON.stringify(admin.customClaims)}`);
      });
    } else {
      console.log('⚠️  No admin users found with custom claims');
      console.log('   Please create admin users in Firebase Console and set custom claims');
    }
    
    console.log('\n🎉 Firebase Admin setup is working correctly!');
    console.log('   You can now start the backend server and test admin login.');
    
  } catch (error) {
    console.log('❌ Firebase Auth connection failed:', error.message);
    console.log('   Please check your service account key and Firebase project settings');
  }
}

testFirebaseConnection().then(() => {
  process.exit(0);
}).catch(error => {
  console.log('❌ Test failed:', error.message);
  process.exit(1);
});
