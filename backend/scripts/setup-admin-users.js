const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin
const serviceAccount = {
  type: 'service_account',
  project_id: 'ride-share-56610',
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: 'ride-share-56610'
  });
}

const auth = admin.auth();
const firestore = admin.firestore();

const adminUsers = [
  {
    email: 'admin@rideshare.co.za',
    password: 'Admin123!',
    displayName: 'RideShare Admin',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin'
  },
  {
    email: 'jonase@rideshare.co.za',
    password: 'Jonase123!',
    displayName: 'Jonase Admin',
    firstName: 'Jonase',
    lastName: 'Admin',
    role: 'admin'
  },
  {
    email: 'toni@rideshare.co.za',
    password: 'Toni123!',
    displayName: 'Toni Admin',
    firstName: 'Toni',
    lastName: 'Admin',
    role: 'admin'
  },
  {
    email: 'soso@rideshare.co.za',
    password: 'Soso123!',
    displayName: 'Soso Admin',
    firstName: 'Soso',
    lastName: 'Admin',
    role: 'admin'
  },
  {
    email: 'anitha@rideshare.co.za',
    password: 'Anitha123!',
    displayName: 'Anitha Admin',
    firstName: 'Anitha',
    lastName: 'Admin',
    role: 'admin'
  }
];

async function setupAdminUsers() {
  console.log('🔥 Setting up Firebase admin users with custom claims...');
  
  for (const adminData of adminUsers) {
    try {
      // Check if user already exists
      let userRecord;
      try {
        userRecord = await auth.getUserByEmail(adminData.email);
        console.log(`⚠️  User ${adminData.email} already exists, updating...`);
        
        // Update existing user
        await auth.updateUser(userRecord.uid, {
          displayName: adminData.displayName,
          password: adminData.password,
          emailVerified: true
        });
        
      } catch (error) {
        if (error.code !== 'auth/user-not-found') {
          throw error;
        }
        
        // Create new user
        userRecord = await auth.createUser({
          email: adminData.email,
          password: adminData.password,
          displayName: adminData.displayName,
          emailVerified: true
        });
        
        console.log(`✅ Created admin user: ${adminData.displayName} (${adminData.email})`);
      }
      
      // Set custom claims for admin role
      await auth.setCustomUserClaims(userRecord.uid, {
        role: 'admin',
        admin: true,
        isAdmin: true
      });
      
      // Create user document in Firestore
      await firestore.collection('users').doc(userRecord.uid).set({
        uid: userRecord.uid,
        email: adminData.email,
        firstName: adminData.firstName,
        lastName: adminData.lastName,
        role: 'admin',
        isAdmin: true,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      });
      
      console.log(`✅ Set admin claims for: ${adminData.displayName} (${adminData.email})`);
      console.log(`✅ Created Firestore document for: ${adminData.displayName}`);
      
    } catch (error) {
      console.error(`❌ Error setting up admin user ${adminData.email}:`, error.message);
    }
  }
  
  console.log('\n🎉 Admin user setup completed!');
  console.log('📝 Admin users can now log in with their credentials');
  console.log('🔐 All users have admin custom claims set');
  console.log('📊 Firestore documents created for all admin users');
}

async function verifyAdminUsers() {
  console.log('\n🔍 Verifying admin users...');
  
  try {
    const listUsersResult = await auth.listUsers();
    const adminUsers = [];
    
    for (const user of listUsersResult.users) {
      if (user.customClaims && (user.customClaims.role === 'admin' || user.customClaims.admin)) {
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
    }
    
  } catch (error) {
    console.error('❌ Error verifying admin users:', error.message);
  }
}

// Run the setup
setupAdminUsers()
  .then(() => verifyAdminUsers())
  .then(() => {
    console.log('\n🚀 Admin setup complete! You can now start the application.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  });
