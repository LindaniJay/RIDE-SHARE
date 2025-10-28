#!/usr/bin/env node

/**
 * Setup Admin User Script
 * 
 * This script creates the first admin user and sets up Firebase custom claims.
 * Run this script to bootstrap the admin system.
 * 
 * Usage: node scripts/setup-admin.js
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const bcrypt = require('bcryptjs');
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

async function setupAdmin() {
  try {
    console.log('🚀 Setting up admin user...\n');

    // Initialize Firebase Admin
    const app = initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID
    });

    const auth = getAuth(app);

    // Connect to database
    await sequelize.authenticate();
    console.log('✅ Database connected');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ where: { role: 'admin' } });
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists:', existingAdmin.email);
      console.log('   If you want to create a new admin, please delete the existing one first.');
      return;
    }

    // Create admin user in database
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@rideshare.co.za';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
    const adminFirstName = process.env.ADMIN_FIRST_NAME || 'System';
    const adminLastName = process.env.ADMIN_LAST_NAME || 'Administrator';

    console.log('📝 Creating admin user in database...');
    const passwordHash = await bcrypt.hash(adminPassword, 12);
    
    const adminUser = await User.create({
      email: adminEmail,
      firstName: adminFirstName,
      lastName: adminLastName,
      role: 'admin',
      isVerified: true,
      password_hash: passwordHash,
      firebase_uid: null // Will be set when they first login
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

    // Update database with Firebase UID
    await adminUser.update({ firebase_uid: firebaseUser.uid });
    console.log('✅ Firebase UID linked to database user');

    console.log('\n🎉 Admin setup completed successfully!');
    console.log('\n📋 Admin Credentials:');
    console.log(`   Email: ${adminEmail}`);
    console.log(`   Password: ${adminPassword}`);
    console.log('\n🔗 You can now login at: /admin-login');
    console.log('\n⚠️  Please change the default password after first login!');

  } catch (error) {
    console.error('❌ Error setting up admin:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

// Run the setup
setupAdmin();

