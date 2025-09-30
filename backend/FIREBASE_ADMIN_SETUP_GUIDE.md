# 🔥 Firebase Admin Setup Guide

## Current Issue
The Firebase authentication is failing because the Firebase Admin SDK needs to be properly configured with service account credentials.

## 📋 Setup Steps

### Step 1: Get Firebase Service Account Key

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `ride-share-56610`
3. Go to **Project Settings** (gear icon) → **Service accounts** tab
4. Click **"Generate new private key"**
5. Download the JSON file
6. Save it as `firebase-service-account.json` in the `backend/` directory

### Step 2: Create Admin Users in Firebase Console

1. Go to **Authentication** → **Users** tab
2. Click **"Add user"** for each admin:

#### Admin User 1: Jonase
- **Email**: `jonase@rideshare.co.za`
- **Password**: `Jonase123!`
- **Display Name**: `Jonase Admin`

#### Admin User 2: Toni
- **Email**: `toni@rideshare.co.za`
- **Password**: `Toni123!`
- **Display Name**: `Toni Admin`

#### Admin User 3: Soso
- **Email**: `soso@rideshare.co.za`
- **Password**: `Soso123!`
- **Display Name**: `Soso Admin`

#### Admin User 4: Anitha
- **Email**: `anitha@rideshare.co.za`
- **Password**: `Anitha123!`
- **Display Name**: `Anitha Admin`

### Step 3: Set Custom Claims (IMPORTANT!)

For each admin user you created:

1. **Click on the user** in the Users list
2. Scroll down to **"Custom claims"** section
3. Click **"Add custom claim"**
4. **Key**: `role`
5. **Value**: `admin`
6. Click **"Add claim"**
7. **Key**: `isAdmin`
8. **Value**: `true`
9. Click **"Add claim"**
10. Click **"Save"**

### Step 4: Test the Setup

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```

3. Go to: `http://localhost:3000/admin-login`
4. Try logging in with any admin credentials

## 🔧 Alternative: Use Environment Variables

If you prefer not to use a service account file, you can set these environment variables in your `.env` file:

```env
FIREBASE_PROJECT_ID=ride-share-56610
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@ride-share-56610.iam.gserviceaccount.com
```

## 🚨 Troubleshooting

### If you get "Firebase Admin SDK not configured":
1. Make sure the `firebase-service-account.json` file is in the `backend/` directory
2. Check that the file contains valid JSON with the required fields
3. Verify the file permissions allow the Node.js process to read it

### If admin login fails:
1. Verify the admin users exist in Firebase Console
2. Check that custom claims are set correctly
3. Ensure the Firebase project ID matches your configuration

### If you get "Admin access required":
1. Make sure the user has `role: 'admin'` in custom claims
2. Check that the user exists in your database with admin role
3. Verify the Firebase token is being verified correctly

## 📝 File Structure

After setup, your backend directory should look like:
```
backend/
├── firebase-service-account.json  # ← This file is required
├── src/
│   ├── config/
│   │   └── firebase.ts            # ← Firebase Admin configuration
│   └── routes/
│       └── auth.ts                # ← Firebase token verification
└── ...
```

## ✅ Success Indicators

When everything is working correctly:
1. Backend starts without Firebase errors
2. Admin login redirects to `/admin-dashboard`
3. Admin dashboard loads with user data
4. No "Firebase Admin SDK not configured" errors in console
