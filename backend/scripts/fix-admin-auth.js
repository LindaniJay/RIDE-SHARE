#!/usr/bin/env node

/**
 * Fix Admin Authentication Script
 * 
 * This script fixes common admin authentication issues and sets up the admin system properly.
 * 
 * Usage: node scripts/fix-admin-auth.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const bcrypt = require('bcryptjs');
const { User } = require('../dist/models');
const { sequelize } = require('../dist/config/database');

// Load environment variables
require('dotenv').config();

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

async function fixAdminAuth() {
  try {
    console.log('🔧 Fixing admin authentication system...\n');

    // Check environment variables
    console.log('📋 Checking environment variables...');
    const requiredVars = ['FIREBASE_PROJECT_ID', 'FIREBASE_PRIVATE_KEY', 'FIREBASE_CLIENT_EMAIL'];
    const missingVars = requiredVars.filter(varName => !process.env[varName]);
    
    if (missingVars.length > 0) {
      console.error('❌ Missing required environment variables:', missingVars.join(', '));
      console.error('Please set these variables in your .env file');
      process.exit(1);
    }
    console.log('✅ Environment variables configured');

    // Initialize Firebase Admin
    console.log('🔥 Initializing Firebase Admin SDK...');
    let app, auth;
    try {
      app = initializeApp({
        credential: cert(serviceAccount),
        projectId: process.env.FIREBASE_PROJECT_ID
      });
      auth = getAuth(app);
      console.log('✅ Firebase Admin SDK initialized');
    } catch (firebaseError) {
      console.error('❌ Firebase initialization failed:', firebaseError.message);
      console.error('Please check your Firebase configuration');
      process.exit(1);
    }

    // Connect to database
    console.log('🗄️ Connecting to database...');
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Check existing admin users
    console.log('👥 Checking existing admin users...');
    const existingAdmins = await User.findAll({ where: { role: 'admin' } });
    console.log(`Found ${existingAdmins.length} existing admin users`);

    if (existingAdmins.length === 0) {
      console.log('📝 No admin users found. Creating default admin...');
      
      // Create default admin user
      const adminEmail = process.env.ADMIN_EMAIL || 'admin@rideshare.co.za';
      const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
      const adminFirstName = process.env.ADMIN_FIRST_NAME || 'System';
      const adminLastName = process.env.ADMIN_LAST_NAME || 'Administrator';

      // Create admin user in database
      const passwordHash = await bcrypt.hash(adminPassword, 12);
      const adminUser = await User.create({
        email: adminEmail,
        firstName: adminFirstName,
        lastName: adminLastName,
        role: 'admin',
        isVerified: true,
        password_hash: passwordHash,
        firebase_uid: null
      });
      console.log('✅ Admin user created in database:', adminUser.email);

      // Create Firebase user
      console.log('🔥 Creating Firebase user...');
      const firebaseUser = await auth.createUser({
        email: adminEmail,
        password: adminPassword,
        displayName: `${adminFirstName} ${adminLastName}`,
        emailVerified: true
      });
      console.log('✅ Firebase user created:', firebaseUser.uid);

      // Set custom claims
      console.log('🔐 Setting admin custom claims...');
      await auth.setCustomUserClaims(firebaseUser.uid, {
        admin: true,
        role: 'admin'
      });
      console.log('✅ Custom claims set');

      // Update database with Firebase UID
      await adminUser.update({ firebase_uid: firebaseUser.uid });
      console.log('✅ Firebase UID linked to database user');

      console.log('\n🎉 Default admin user created successfully!');
      console.log('\n📋 Admin Credentials:');
      console.log(`   Email: ${adminEmail}`);
      console.log(`   Password: ${adminPassword}`);
    } else {
      console.log('🔧 Fixing existing admin users...');
      
      for (const admin of existingAdmins) {
        console.log(`\nProcessing admin: ${admin.email}`);
        
        // Check if Firebase UID is missing
        if (!admin.firebase_uid) {
          console.log('   Creating Firebase user...');
          try {
            const firebaseUser = await auth.createUser({
              email: admin.email,
              password: process.env.ADMIN_PASSWORD || 'Admin123!',
              displayName: `${admin.firstName || 'Admin'} ${admin.lastName || 'User'}`,
              emailVerified: true
            });
            
            // Set custom claims
            await auth.setCustomUserClaims(firebaseUser.uid, {
              admin: true,
              role: 'admin'
            });
            
            // Update database
            await admin.update({ firebase_uid: firebaseUser.uid });
            console.log('   ✅ Firebase user created and linked');
          } catch (firebaseError) {
            if (firebaseError.code === 'auth/email-already-exists') {
              console.log('   ⚠️  Firebase user already exists, finding and linking...');
              // Find existing Firebase user and link
              try {
                const firebaseUser = await auth.getUserByEmail(admin.email);
                await auth.setCustomUserClaims(firebaseUser.uid, {
                  admin: true,
                  role: 'admin'
                });
                await admin.update({ firebase_uid: firebaseUser.uid });
                console.log('   ✅ Existing Firebase user linked and claims set');
              } catch (linkError) {
                console.error('   ❌ Failed to link existing Firebase user:', linkError.message);
              }
            } else {
              console.error('   ❌ Failed to create Firebase user:', firebaseError.message);
            }
          }
        } else {
          console.log('   ✅ Firebase UID already exists');
          
          // Verify and update custom claims
          try {
            const firebaseUser = await auth.getUser(admin.firebase_uid);
            await auth.setCustomUserClaims(admin.firebase_uid, {
              admin: true,
              role: 'admin'
            });
            console.log('   ✅ Custom claims updated');
          } catch (claimsError) {
            console.error('   ❌ Failed to update custom claims:', claimsError.message);
          }
        }
      }
    }

    // Test admin authentication
    console.log('\n🧪 Testing admin authentication...');
    try {
      const testAdmin = await User.findOne({ where: { role: 'admin' } });
      if (testAdmin && testAdmin.firebase_uid) {
        const firebaseUser = await auth.getUser(testAdmin.firebase_uid);
        console.log('✅ Admin authentication test passed');
        console.log(`   Admin: ${testAdmin.email}`);
        console.log(`   Firebase UID: ${testAdmin.firebase_uid}`);
        console.log(`   Custom Claims: ${JSON.stringify(firebaseUser.customClaims || {})}`);
      } else {
        console.log('⚠️  No admin user with Firebase UID found');
      }
    } catch (testError) {
      console.error('❌ Admin authentication test failed:', testError.message);
    }

    console.log('\n🎉 Admin authentication system fixed successfully!');
    console.log('\n📋 Next Steps:');
    console.log('1. Start the backend server: npm run dev');
    console.log('2. Access admin login at: /admin-login');
    console.log('3. Use the admin credentials to login');
    console.log('4. Change the default password after first login');

  } catch (error) {
    console.error('❌ Error fixing admin authentication:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Run the fix
fixAdminAuth();
