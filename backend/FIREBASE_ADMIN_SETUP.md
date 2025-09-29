# Firebase Admin Users Setup Guide

## 🔥 Setting up Admin Users in Firebase

### Step 1: Enable Firebase Authentication

1. Go to your Firebase Console: https://console.firebase.google.com/
2. Select your project
3. Go to **Authentication** → **Sign-in method**
4. Enable **Email/Password** authentication

### Step 2: Create Admin Users Manually

You can create the admin users in two ways:

#### Option A: Firebase Console (Recommended)
1. Go to **Authentication** → **Users**
2. Click **Add user** for each admin:

| **Name** | **Email** | **Password** |
|----------|-----------|--------------|
| Jonase Admin | `jonase@rideshare.co.za` | `Jonase123!` |
| Toni Admin | `toni@rideshare.co.za` | `Toni123!` |
| Soso Admin | `soso@rideshare.co.za` | `Soso123!` |
| Anitha Admin | `anitha@rideshare.co.za` | `Anitha123!` |

3. For each user, after creation:
   - Click on the user
   - Go to **Custom claims**
   - Add custom claim: `{"role": "admin", "isAdmin": true}`

#### Option B: Using Firebase Admin SDK Script

If you have a Firebase service account key:

1. Download your service account key from Firebase Console:
   - Go to **Project Settings** → **Service accounts**
   - Click **Generate new private key**
   - Save as `service-account-key.json` in the backend directory

2. Run the script:
```bash
cd backend
node create-firebase-admin-users.js
```

### Step 3: Update Firebase Security Rules (Optional)

Add this to your Firestore security rules to protect admin data:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow admins to read/write all documents
    match /{document=**} {
      allow read, write: if request.auth != null && 
        (request.auth.token.role == 'admin' || request.auth.token.isAdmin == true);
    }
  }
}
```

### Step 4: Test Admin Login

1. Start your frontend: `npm run dev`
2. Go to: `http://localhost:3000/admin-login`
3. Use any of the admin credentials above

## 🔧 Troubleshooting

### Common Issues:

1. **"User not found"** - Make sure the user exists in Firebase Authentication
2. **"Invalid credentials"** - Check email/password spelling
3. **"Access denied"** - Make sure custom claims are set correctly
4. **Firebase connection issues** - Check your Firebase configuration

### Verify Custom Claims:

You can verify custom claims are set correctly by checking the user in Firebase Console:
1. Go to **Authentication** → **Users**
2. Click on a user
3. Check **Custom claims** section
4. Should show: `{"role": "admin", "isAdmin": true}`

## 📱 Admin Login Credentials

After setup, use these credentials to login:

| **Name** | **Email** | **Password** |
|----------|-----------|--------------|
| **Jonase** | `jonase@rideshare.co.za` | `Jonase123!` |
| **Toni** | `toni@rideshare.co.za` | `Toni123!` |
| **Soso** | `soso@rideshare.co.za` | `Soso123!` |
| **Anitha** | `anitha@rideshare.co.za` | `Anitha123!` |

## 🎯 Next Steps

1. Create the admin users in Firebase Console
2. Set custom claims for admin role
3. Test login with the updated AdminLogin component
4. Access admin dashboard at `/dashboard/admin`

The AdminLogin component has been updated to use Firebase authentication instead of the backend API.
