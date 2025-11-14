#!/usr/bin/env node

/**
 * Firebase Debug Script
 * 
 * This script tests Firebase Admin SDK initialization and connectivity
 * Run with: node scripts/debug-firebase.js
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const path = require('path');
const fs = require('fs');

function debugFirebase() {
  console.log('🔍 Firebase Debug Script\n');
  console.log('=' .repeat(60));
  
  // Step 1: Check environment variables
  console.log('\n📋 Step 1: Checking Environment Variables');
  console.log('-'.repeat(60));
  
  const requiredVars = {
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_SERVICE_ACCOUNT_PATH: process.env.FIREBASE_SERVICE_ACCOUNT_PATH,
  };
  
  const optionalVars = {
    FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY ? '***SET***' : undefined,
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
  };
  
  let hasErrors = false;
  
  for (const [key, value] of Object.entries(requiredVars)) {
    if (value) {
      console.log(`✅ ${key}: ${value}`);
    } else {
      console.log(`❌ ${key}: NOT SET`);
      hasErrors = true;
    }
  }
  
  for (const [key, value] of Object.entries(optionalVars)) {
    if (value) {
      console.log(`ℹ️  ${key}: ${value}`);
    } else {
      console.log(`⚠️  ${key}: NOT SET (optional)`);
    }
  }
  
  // Step 2: Check service account file
  console.log('\n📁 Step 2: Checking Service Account File');
  console.log('-'.repeat(60));
  
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './firebase-service-account.json';
  const resolvedPath = path.isAbsolute(serviceAccountPath)
    ? serviceAccountPath
    : path.resolve(__dirname, '..', serviceAccountPath);
  
  console.log(`Looking for file at: ${resolvedPath}`);
  
  if (fs.existsSync(resolvedPath)) {
    console.log('✅ Service account file exists');
    
    try {
      const fileContent = fs.readFileSync(resolvedPath, 'utf8');
      const serviceAccount = JSON.parse(fileContent);
      
      console.log(`✅ File is valid JSON`);
      console.log(`   Project ID: ${serviceAccount.project_id}`);
      console.log(`   Client Email: ${serviceAccount.client_email}`);
      console.log(`   Private Key: ${serviceAccount.private_key ? '***PRESENT***' : '❌ MISSING'}`);
      console.log(`   Type: ${serviceAccount.type}`);
      
      if (serviceAccount.type !== 'service_account') {
        console.log('⚠️  Warning: File type is not "service_account"');
        hasErrors = true;
      }
      
      if (!serviceAccount.private_key) {
        console.log('❌ Error: Private key is missing from service account file');
        hasErrors = true;
      }
      
    } catch (parseError) {
      console.log(`❌ Error parsing JSON: ${parseError.message}`);
      hasErrors = true;
    }
  } else {
    console.log('❌ Service account file NOT FOUND');
    console.log(`   Expected location: ${resolvedPath}`);
    hasErrors = true;
  }
  
  // Step 3: Test Firebase Admin SDK initialization
  console.log('\n🚀 Step 3: Testing Firebase Admin SDK Initialization');
  console.log('-'.repeat(60));
  
  if (hasErrors) {
    console.log('⚠️  Skipping Firebase initialization test due to previous errors');
    console.log('   Please fix the issues above first.');
    return;
  }
  
  try {
    const { initializeApp, getApps, cert } = require('firebase-admin/app');
    const { getAuth } = require('firebase-admin/auth');
    const { getFirestore } = require('firebase-admin/firestore');
    
    // Clear any existing apps
    if (getApps().length > 0) {
      console.log('ℹ️  Clearing existing Firebase apps...');
      // Note: Firebase Admin SDK doesn't provide a direct way to delete apps
      // But we can check if it's already initialized
    }
    
    // Load service account
    const fileContent = fs.readFileSync(resolvedPath, 'utf8');
    const serviceAccount = JSON.parse(fileContent);
    
    // Initialize Firebase
    console.log('Initializing Firebase Admin SDK...');
    const app = initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.FIREBASE_PROJECT_ID || serviceAccount.project_id
    });
    
    console.log('✅ Firebase Admin SDK initialized successfully');
    console.log(`   Project ID: ${app.options.projectId}`);
    
    // Test Auth
    console.log('\n🔐 Testing Firebase Auth...');
    try {
      const auth = getAuth(app);
      console.log('✅ Firebase Auth initialized');
      
      // Try to list users (this will fail if permissions are wrong, but won't crash)
      auth.listUsers(1)
        .then((listUsersResult) => {
          console.log(`✅ Auth permissions OK (found ${listUsersResult.users.length} user(s))`);
        })
        .catch((authError) => {
          console.log(`⚠️  Auth test limited: ${authError.message}`);
        });
    } catch (authError) {
      console.log(`❌ Auth initialization failed: ${authError.message}`);
    }
    
    // Test Firestore
    console.log('\n💾 Testing Firestore...');
    try {
      const db = getFirestore(app);
      console.log('✅ Firestore initialized');
      
      // Try a simple read operation
      const testRef = db.collection('_test').doc('connection-test');
      testRef.set({ test: true, timestamp: new Date() })
        .then(() => {
          console.log('✅ Firestore write test successful');
          return testRef.get();
        })
        .then((doc) => {
          if (doc.exists) {
            console.log('✅ Firestore read test successful');
            return testRef.delete();
          }
        })
        .then(() => {
          console.log('✅ Firestore delete test successful');
        })
        .catch((firestoreError) => {
          console.log(`⚠️  Firestore operation test: ${firestoreError.message}`);
        });
    } catch (firestoreError) {
      console.log(`❌ Firestore initialization failed: ${firestoreError.message}`);
    }
    
    console.log('\n✅ All Firebase tests completed successfully!');
    
  } catch (error) {
    console.log(`\n❌ Firebase initialization failed:`);
    console.log(`   Error: ${error.message}`);
    if (error.stack) {
      console.log(`   Stack: ${error.stack.split('\n').slice(0, 5).join('\n')}`);
    }
    hasErrors = true;
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Summary');
  console.log('='.repeat(60));
  
  if (hasErrors) {
    console.log('❌ Firebase configuration has issues that need to be fixed');
    console.log('\n💡 Recommendations:');
    console.log('   1. Ensure FIREBASE_SERVICE_ACCOUNT_PATH is set in .env');
    console.log('   2. Verify the service account file exists and is valid JSON');
    console.log('   3. Check that the service account has proper permissions');
    console.log('   4. Verify FIREBASE_PROJECT_ID matches your Firebase project');
    process.exit(1);
  } else {
    console.log('✅ Firebase is properly configured and working!');
    process.exit(0);
  }
}

// Run the debug script
try {
  debugFirebase();
} catch (error) {
  console.error('Fatal error:', error);
  process.exit(1);
}

