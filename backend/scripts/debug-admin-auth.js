#!/usr/bin/env node

/**
 * Admin Authentication Debug Script
 * 
 * This script helps debug admin authentication issues by:
 * - Checking database admin users
 * - Verifying Firebase custom claims
 * - Testing authentication flows
 * 
 * Usage: node scripts/debug-admin-auth.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { User } = require('../src/models');
const { sequelize } = require('../src/config/database');

// Firebase configuration
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

async function debugAdminAuth() {
  try {
    console.log('🔍 Debugging Admin Authentication...\n');

    // Initialize Firebase Admin
    const app = initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID
    });

    const auth = getAuth(app);

    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected\n');

    // Check database admin users
    console.log('📊 Database Admin Users:');
    const adminUsers = await User.findAll({ where: { role: 'admin' } });
    
    if (adminUsers.length === 0) {
      console.log('❌ No admin users found in database');
      console.log('   Run: node scripts/setup-admin.js to create an admin user');
    } else {
      console.log(`✅ Found ${adminUsers.length} admin user(s):`);
      for (const user of adminUsers) {
        console.log(`   - ${user.email} (ID: ${user.id})`);
        console.log(`     Firebase UID: ${user.firebase_uid || 'Not linked'}`);
        console.log(`     Verified: ${user.isVerified}`);
        console.log(`     Created: ${user.createdAt}`);
        console.log('');
      }
    }

    // Check Firebase users with admin claims
    console.log('🔥 Firebase Admin Users:');
    try {
      const listUsersResult = await auth.listUsers();
      const firebaseAdmins = [];
      
      for (const userRecord of listUsersResult.users) {
        const customClaims = userRecord.customClaims || {};
        if (customClaims.admin || customClaims.role === 'admin') {
          firebaseAdmins.push({
            uid: userRecord.uid,
            email: userRecord.email,
            claims: customClaims
          });
        }
      }

      if (firebaseAdmins.length === 0) {
        console.log('❌ No Firebase users with admin claims found');
        console.log('   Run: node scripts/setup-admin.js to set up admin claims');
      } else {
        console.log(`✅ Found ${firebaseAdmins.length} Firebase admin user(s):`);
        for (const admin of firebaseAdmins) {
          console.log(`   - ${admin.email} (UID: ${admin.uid})`);
          console.log(`     Claims: ${JSON.stringify(admin.claims)}`);
          console.log('');
        }
      }
    } catch (error) {
      console.log('❌ Error checking Firebase users:', error.message);
    }

    // Check for mismatched users
    console.log('🔍 Checking for mismatched users:');
    const dbAdmins = await User.findAll({ where: { role: 'admin' } });
    const mismatched = [];

    for (const dbAdmin of dbAdmins) {
      if (dbAdmin.firebase_uid) {
        try {
          const firebaseUser = await auth.getUser(dbAdmin.firebase_uid);
          const claims = firebaseUser.customClaims || {};
          
          if (!claims.admin && claims.role !== 'admin') {
            mismatched.push({
              email: dbAdmin.email,
              issue: 'Database user is admin but Firebase user has no admin claims'
            });
          }
        } catch (error) {
          mismatched.push({
            email: dbAdmin.email,
            issue: `Firebase user not found: ${error.message}`
          });
        }
      } else {
        mismatched.push({
          email: dbAdmin.email,
          issue: 'Database user has no Firebase UID'
        });
      }
    }

    if (mismatched.length === 0) {
      console.log('✅ No mismatched users found');
    } else {
      console.log('❌ Found mismatched users:');
      for (const mismatch of mismatched) {
        console.log(`   - ${mismatch.email}: ${mismatch.issue}`);
      }
    }

    console.log('\n📋 Recommendations:');
    if (adminUsers.length === 0) {
      console.log('1. Run: node scripts/setup-admin.js to create an admin user');
    }
    if (mismatched.length > 0) {
      console.log('2. Fix mismatched users by running the setup script again');
    }
    console.log('3. Test admin login at: /admin-login');
    console.log('4. Check browser console for authentication errors');

  } catch (error) {
    console.error('❌ Error during debug:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Run the debug
debugAdminAuth();

