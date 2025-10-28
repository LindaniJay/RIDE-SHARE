# 🔐 Admin Authentication Debug Guide

This guide helps you debug and fix admin authentication issues in the RideShare SA project.

## 🚨 Common Issues & Solutions

### Issue 1: "Admin privileges required" Error
**Symptoms:**
- User can login but gets "Admin privileges required" error
- Admin login fails even with correct credentials

**Solutions:**
1. Check if user has admin role in database:
   ```bash
   node scripts/debug-admin-auth.js
   ```

2. Set up admin user with proper Firebase claims:
   ```bash
   node scripts/setup-admin.js
   ```

3. Verify Firebase custom claims are set:
   - Check Firebase Console > Authentication > Users
   - Look for custom claims: `{admin: true, role: "admin"}`

### Issue 2: Infinite Redirect Loop
**Symptoms:**
- Admin login page keeps redirecting
- Browser shows "Too many redirects" error

**Solutions:**
1. Clear browser cache and cookies
2. Check AdminAuthContext navigation logic
3. Verify route protection is working correctly

### Issue 3: "Invalid admin token" Error
**Symptoms:**
- Backend returns "Invalid admin token" error
- Admin routes are not accessible

**Solutions:**
1. Check if Firebase Admin SDK is properly configured
2. Verify environment variables are set:
   ```bash
   echo $FIREBASE_PROJECT_ID
   echo $FIREBASE_PRIVATE_KEY
   echo $FIREBASE_CLIENT_EMAIL
   ```

3. Test admin middleware:
   ```bash
   node scripts/test-admin-auth.js
   ```

## 🛠️ Debug Scripts

### 1. Setup Admin User
Creates the first admin user with proper Firebase custom claims:
```bash
cd backend
node scripts/setup-admin.js
```

**Environment Variables Required:**
- `FIREBASE_PROJECT_ID`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_CLIENT_EMAIL`
- `ADMIN_EMAIL` (optional, defaults to admin@rideshare.co.za)
- `ADMIN_PASSWORD` (optional, defaults to Admin123!)

### 2. Debug Admin Authentication
Checks for common admin authentication issues:
```bash
cd backend
node scripts/debug-admin-auth.js
```

**What it checks:**
- Database admin users
- Firebase users with admin claims
- Mismatched users between database and Firebase
- Custom claims verification

### 3. Test Admin Authentication
Runs comprehensive tests on admin authentication:
```bash
cd backend
node scripts/test-admin-auth.js
```

**What it tests:**
- Database admin user creation
- Firebase custom claims
- Token verification
- Password verification
- Admin middleware functionality

## 🔧 Manual Debugging Steps

### Step 1: Check Database
```sql
-- Check admin users in database
SELECT id, email, role, firebase_uid, isVerified 
FROM Users 
WHERE role = 'admin';
```

### Step 2: Check Firebase Console
1. Go to Firebase Console > Authentication > Users
2. Find your admin user
3. Check if custom claims are set:
   ```json
   {
     "admin": true,
     "role": "admin"
   }
   ```

### Step 3: Check Environment Variables
```bash
# Backend environment variables
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxx@your-project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=123456789
FIREBASE_PRIVATE_KEY_ID=abc123def456
```

### Step 4: Test Admin Routes
```bash
# Test admin dashboard stats
curl -X GET http://localhost:5000/api/admin/dashboard-stats \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"

# Test admin users endpoint
curl -X GET http://localhost:5000/api/admin/users \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

## 🚀 Quick Fix Commands

### Reset Admin Authentication
```bash
# 1. Clean up existing admin users
cd backend
node -e "
const { User } = require('./src/models');
const { sequelize } = require('./src/config/database');
(async () => {
  await sequelize.authenticate();
  await User.destroy({ where: { role: 'admin' } });
  console.log('Admin users cleaned up');
  await sequelize.close();
})();
"

# 2. Set up fresh admin user
node scripts/setup-admin.js

# 3. Test the setup
node scripts/test-admin-auth.js
```

### Fix Firebase Custom Claims
```bash
# Set custom claims for existing user
cd backend
node -e "
const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const app = initializeApp({
  credential: cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\\\n/g, '\\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL
  })
});
const auth = getAuth(app);
auth.setCustomUserClaims('USER_FIREBASE_UID', { admin: true, role: 'admin' })
  .then(() => console.log('Custom claims set'))
  .catch(console.error);
"
```

## 📋 Admin Authentication Flow

```mermaid
graph TD
    A[Admin Login] --> B[Firebase Auth]
    B --> C{Valid Credentials?}
    C -->|No| D[Show Error]
    C -->|Yes| E[Get Firebase Token]
    E --> F[Verify Custom Claims]
    F --> G{Has Admin Claims?}
    G -->|No| H[Logout & Redirect]
    G -->|Yes| I[Check Database Role]
    I --> J{Is Admin in DB?}
    J -->|No| K[Access Denied]
    J -->|Yes| L[Grant Admin Access]
    L --> M[Admin Dashboard]
```

## 🔍 Troubleshooting Checklist

- [ ] Firebase Admin SDK configured correctly
- [ ] Environment variables set
- [ ] Database connection working
- [ ] Admin user exists in database
- [ ] Admin user has `role: 'admin'`
- [ ] Firebase user exists
- [ ] Firebase user has custom claims
- [ ] Custom claims include `admin: true`
- [ ] Custom claims include `role: 'admin'`
- [ ] Database user linked to Firebase UID
- [ ] Admin middleware working
- [ ] Admin routes protected
- [ ] Frontend admin context working
- [ ] No infinite redirect loops
- [ ] Browser cache cleared

## 📞 Support

If you're still having issues:

1. Run the debug script: `node scripts/debug-admin-auth.js`
2. Check the console logs for specific error messages
3. Verify all environment variables are set correctly
4. Test with a fresh admin user setup
5. Check Firebase Console for user status and claims

## 🎯 Success Indicators

You'll know admin authentication is working when:
- ✅ Admin can login at `/admin-login`
- ✅ Admin is redirected to `/admin-dashboard`
- ✅ Admin can access admin routes
- ✅ Admin middleware allows access
- ✅ Firebase custom claims are set
- ✅ Database admin user exists
- ✅ No infinite redirects
- ✅ No "Admin privileges required" errors

