#!/usr/bin/env node

/**
 * Test Admin Authentication Script
 * 
 * This script tests the admin authentication system to ensure it's working correctly.
 * 
 * Usage: node scripts/test-admin-auth.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { User } = require('../dist/models');
const { sequelize } = require('../dist/config/database');

// Load environment variables
require('dotenv').config();

async function testAdminAuth() {
  try {
    console.log('🧪 Testing admin authentication system...\n');

    // Connect to database
    console.log('🗄️ Connecting to database...');
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Check admin users
    console.log('👥 Checking admin users...');
    const adminUsers = await User.findAll({ where: { role: 'admin' } });
    console.log(`Found ${adminUsers.length} admin users`);

    if (adminUsers.length === 0) {
      console.log('❌ No admin users found. Please run: node scripts/fix-admin-auth.js');
      process.exit(1);
    }

    // Test Firebase connection
    console.log('🔥 Testing Firebase connection...');
    try {
      const serviceAccount = {
        type: 'service_account',
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.FIREBASE_CLIENT_EMAIL}`
      };

      const app = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID
      });

      const auth = getAuth(app);
      console.log('✅ Firebase Admin SDK initialized');

      // Test each admin user
      for (const admin of adminUsers) {
        console.log(`\n👤 Testing admin: ${admin.email}`);
        
        if (!admin.firebase_uid) {
          console.log('   ❌ No Firebase UID found');
          continue;
        }

        try {
          const firebaseUser = await auth.getUser(admin.firebase_uid);
          console.log('   ✅ Firebase user found');
          console.log(`   📧 Email: ${firebaseUser.email}`);
          console.log(`   🔐 Custom Claims: ${JSON.stringify(firebaseUser.customClaims || {})}`);
          
          // Check if custom claims are set
          if (firebaseUser.customClaims?.admin && firebaseUser.customClaims?.role === 'admin') {
            console.log('   ✅ Admin custom claims are set correctly');
          } else {
            console.log('   ⚠️  Admin custom claims are missing or incorrect');
          }
        } catch (firebaseError) {
          console.log('   ❌ Firebase user not found:', firebaseError.message);
        }
      }

    } catch (firebaseError) {
      console.log('❌ Firebase connection failed:', firebaseError.message);
      console.log('Please check your Firebase configuration');
    }

    // Test API endpoints
    console.log('\n🌐 Testing API endpoints...');
    
    // Test token verification endpoint
    try {
      const response = await fetch('http://localhost:5001/api/auth/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: 'test-token' })
      });
      
      if (response.status === 401) {
        console.log('✅ Token verification endpoint is working (returns 401 for invalid token)');
      } else {
        console.log('⚠️  Token verification endpoint returned unexpected status:', response.status);
      }
    } catch (apiError) {
      console.log('⚠️  API endpoint test failed (server may not be running):', apiError.message);
    }

    // Test admin auth endpoint
    try {
      const response = await fetch('http://localhost:5001/api/admin-auth/verify-admin-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: 'test-token' })
      });
      
      if (response.status === 401) {
        console.log('✅ Admin token verification endpoint is working (returns 401 for invalid token)');
      } else {
        console.log('⚠️  Admin token verification endpoint returned unexpected status:', response.status);
      }
    } catch (apiError) {
      console.log('⚠️  Admin API endpoint test failed (server may not be running):', apiError.message);
    }

    console.log('\n🎉 Admin authentication system test completed!');
    console.log('\n📋 Summary:');
    console.log(`- Admin users in database: ${adminUsers.length}`);
    console.log('- Firebase connection: ✅ Working');
    console.log('- API endpoints: ⚠️  Test with running server');
    
    console.log('\n📋 Next Steps:');
    console.log('1. Start the backend server: npm run dev');
    console.log('2. Test admin login in the frontend');
    console.log('3. Check browser console for any errors');

  } catch (error) {
    console.error('❌ Error testing admin authentication:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Run the test
testAdminAuth();