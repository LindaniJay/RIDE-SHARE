const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');

// Initialize Firebase Admin SDK
// You'll need to download your service account key from Firebase Console
// and place it in the backend directory as 'service-account-key.json'
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

const adminUsers = [
  {
    email: 'jonase@rideshare.co.za',
    password: 'Jonase123!',
    displayName: 'Jonase Admin',
    role: 'admin'
  },
  {
    email: 'toni@rideshare.co.za',
    password: 'Toni123!',
    displayName: 'Toni Admin',
    role: 'admin'
  },
  {
    email: 'soso@rideshare.co.za',
    password: 'Soso123!',
    displayName: 'Soso Admin',
    role: 'admin'
  },
  {
    email: 'anitha@rideshare.co.za',
    password: 'Anitha123!',
    displayName: 'Anitha Admin',
    role: 'admin'
  }
];

async function createFirebaseAdminUsers() {
  console.log('🔥 Creating Firebase admin users...');
  
  for (const adminData of adminUsers) {
    try {
      // Check if user already exists
      try {
        const existingUser = await auth.getUserByEmail(adminData.email);
        console.log(`⚠️  User ${adminData.email} already exists, updating...`);
        
        // Update existing user
        await auth.updateUser(existingUser.uid, {
          displayName: adminData.displayName,
          password: adminData.password,
          emailVerified: true
        });
        
        // Set custom claims for admin role
        await auth.setCustomUserClaims(existingUser.uid, {
          role: 'admin',
          isAdmin: true
        });
        
        console.log(`✅ Updated admin user: ${adminData.displayName} (${adminData.email})`);
        continue;
      } catch (error) {
        if (error.code !== 'auth/user-not-found') {
          throw error;
        }
      }
      
      // Create new user
      const userRecord = await auth.createUser({
        email: adminData.email,
        password: adminData.password,
        displayName: adminData.displayName,
        emailVerified: true
      });
      
      // Set custom claims for admin role
      await auth.setCustomUserClaims(userRecord.uid, {
        role: 'admin',
        isAdmin: true
      });
      
      console.log(`✅ Created admin user: ${adminData.displayName} (${adminData.email})`);
      
    } catch (error) {
      console.error(`❌ Error creating user ${adminData.email}:`, error.message);
    }
  }
  
  console.log('\n🎉 Firebase admin users setup complete!');
  console.log('\n📋 Firebase Admin Login Credentials:');
  console.log('================================');
  adminUsers.forEach(admin => {
    console.log(`👤 ${admin.displayName}: ${admin.email} / ${admin.password}`);
  });
  console.log('================================');
  console.log('\n💡 Next steps:');
  console.log('1. Make sure your Firebase project has Authentication enabled');
  console.log('2. Enable Email/Password authentication in Firebase Console');
  console.log('3. Update your AdminLogin component to use Firebase authentication');
}

// Run the script
createFirebaseAdminUsers()
  .then(() => {
    console.log('✅ Script completed successfully!');
    process.exit(0);
  })
  .catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
