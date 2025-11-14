# 🔍 Firebase Debug Guide

This guide helps you debug and troubleshoot Firebase configuration issues in the RideShare SA backend.

## 🚀 Quick Start

Run the Firebase debug script:

```bash
npm run debug:firebase
```

Or directly:

```bash
node scripts/debug-firebase.js
```

## 📋 What the Debug Script Checks

The debug script performs comprehensive checks:

### 1. Environment Variables
- ✅ `FIREBASE_PROJECT_ID` - Your Firebase project ID
- ✅ `FIREBASE_SERVICE_ACCOUNT_PATH` - Path to service account JSON file
- ℹ️ Optional variables (FIREBASE_PRIVATE_KEY, FIREBASE_CLIENT_EMAIL, etc.)

### 2. Service Account File
- ✅ File existence
- ✅ Valid JSON format
- ✅ Required fields (project_id, private_key, client_email, type)
- ✅ Correct service account type

### 3. Firebase Admin SDK Initialization
- ✅ SDK initialization
- ✅ Auth service connectivity
- ✅ Firestore connectivity
- ✅ Read/write permissions

## 🔧 Common Issues and Solutions

### Issue 1: Service Account File Not Found

**Error:**
```
❌ Service account file NOT FOUND
```

**Solution:**
1. Ensure `firebase-service-account.json` exists in the `backend/` directory
2. Or set `FIREBASE_SERVICE_ACCOUNT_PATH` in `.env` to the correct path:
   ```env
   FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
   ```

### Issue 2: Invalid JSON in Service Account File

**Error:**
```
❌ Error parsing JSON: ...
```

**Solution:**
1. Verify the file is valid JSON
2. Check for missing commas, quotes, or brackets
3. Ensure the file isn't corrupted
4. Re-download the service account file from Firebase Console if needed

### Issue 3: Missing Private Key

**Error:**
```
❌ Private key is missing from service account file
```

**Solution:**
1. The service account file must include a `private_key` field
2. Download a fresh service account file from Firebase Console:
   - Go to: https://console.firebase.google.com/project/ride-share-56610/settings/serviceaccounts/adminsdk
   - Click "Generate New Private Key"
   - Save the file as `backend/firebase-service-account.json`

### Issue 4: Firebase Project ID Mismatch

**Error:**
```
❌ Project ID mismatch
```

**Solution:**
1. Ensure `FIREBASE_PROJECT_ID` in `.env` matches the project ID in the service account file
2. Current project ID: `ride-share-56610`
3. Update `.env`:
   ```env
   FIREBASE_PROJECT_ID=ride-share-56610
   ```

### Issue 5: Permission Denied Errors

**Error:**
```
⚠️ Auth test limited: Permission denied
```

**Solution:**
1. Check that the service account has proper IAM roles in Google Cloud Console
2. Required roles:
   - Firebase Admin SDK Administrator Service Agent
   - Cloud Datastore User (for Firestore)
3. Verify in: https://console.cloud.google.com/iam-admin/iam?project=ride-share-56610

### Issue 6: Firebase Already Initialized

**Error:**
```
Error: The default Firebase app already exists
```

**Solution:**
This is usually not an error - it means Firebase was already initialized. The code handles this automatically by checking `getApps().length > 0`.

## 📝 Environment Setup

### Required `.env` Variables

Create or update `backend/.env`:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=ride-share-56610
FIREBASE_SERVICE_ACCOUNT_PATH=./firebase-service-account.json
```

### Service Account File Location

The service account file should be at:
```
backend/firebase-service-account.json
```

**⚠️ Security Note:** This file contains sensitive credentials. Ensure it's in `.gitignore` and never commit it to version control.

## 🧪 Manual Testing

### Test Firebase Auth

```javascript
import { initializeFirebase, getFirebaseAuth } from './config/firebase';

await initializeFirebase();
const auth = getFirebaseAuth();

// List users
const listUsersResult = await auth.listUsers(1);
console.log('Users:', listUsersResult.users);
```

### Test Firestore

```javascript
import { initializeFirebase, getFirestore } from './config/firebase';

await initializeFirebase();
const db = getFirestore();

// Write test
const testRef = db.collection('_test').doc('test');
await testRef.set({ test: true, timestamp: new Date() });

// Read test
const doc = await testRef.get();
console.log('Document:', doc.data());
```

## 🔍 Debugging Steps

1. **Run the debug script:**
   ```bash
   npm run debug:firebase
   ```

2. **Check the output:**
   - Look for ❌ errors
   - Review ⚠️ warnings
   - Verify ✅ success messages

3. **Fix issues:**
   - Follow the solutions above for each error
   - Re-run the debug script after fixes

4. **Test server startup:**
   ```bash
   npm run dev
   ```
   
   Look for these log messages:
   ```
   ✅ Firebase Admin SDK initialized successfully
   ✅ Firebase Project ID: ride-share-56610
   ✅ Firestore and Storage services initialized
   ```

## 📊 Expected Output

When everything is working correctly, you should see:

```
🔍 Firebase Debug Script

============================================================

📋 Step 1: Checking Environment Variables
------------------------------------------------------------
✅ FIREBASE_PROJECT_ID: ride-share-56610
✅ FIREBASE_SERVICE_ACCOUNT_PATH: ./firebase-service-account.json

📁 Step 2: Checking Service Account File
------------------------------------------------------------
✅ Service account file exists
✅ File is valid JSON
   Project ID: ride-share-56610
   Client Email: firebase-adminsdk-fbsvc@ride-share-56610.iam.gserviceaccount.com
   Private Key: ***PRESENT***
   Type: service_account

🚀 Step 3: Testing Firebase Admin SDK Initialization
------------------------------------------------------------
✅ Firebase Admin SDK initialized successfully
   Project ID: ride-share-56610
✅ Firebase Auth initialized
✅ Firestore initialized
✅ All Firebase tests completed successfully!

============================================================
📊 Summary
============================================================
✅ Firebase is properly configured and working!
```

## 🆘 Getting Help

If you're still experiencing issues:

1. **Check Firebase Console:**
   - https://console.firebase.google.com/project/ride-share-56610

2. **Verify Service Account:**
   - https://console.firebase.google.com/project/ride-share-56610/settings/serviceaccounts/adminsdk

3. **Review Logs:**
   - Check backend logs for detailed error messages
   - Look for Firebase-related errors in the console

4. **Common Solutions:**
   - Re-download service account file
   - Verify project ID matches
   - Check file permissions
   - Ensure network connectivity

## 🔗 Related Files

- `backend/src/config/firebase.ts` - Firebase initialization code
- `backend/src/config/env.ts` - Environment variable configuration
- `backend/firebase-service-account.json` - Service account credentials (not in git)
- `backend/scripts/debug-firebase.js` - Debug script

## 📚 Additional Resources

- [Firebase Admin SDK Documentation](https://firebase.google.com/docs/admin/setup)
- [Service Account Setup](https://firebase.google.com/docs/admin/setup#initialize-sdk)
- [Firebase Console](https://console.firebase.google.com/)



