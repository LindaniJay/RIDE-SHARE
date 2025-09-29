# Firebase Authentication Setup Guide

## 🔥 Firebase Project Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `rideshare-sa`
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication" → "Sign-in method"
2. Enable "Email/Password" provider
3. Optionally enable other providers (Google, Facebook, etc.)

### 3. Create Firestore Database
1. Go to "Firestore Database" → "Create database"
2. Choose "Start in test mode" for development
3. Select a location (choose closest to your users)

### 4. Get Firebase Configuration
1. Go to Project Settings (gear icon) → "General" tab
2. Scroll down to "Your apps" section
3. Click "Web" icon (`</>`) to add a web app
4. Register app with name: `RideShare SA`
5. Copy the configuration object

### 5. Environment Variables
Create `frontend/.env.local` file:
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id

# API Configuration
VITE_API_URL=http://localhost:5001/api
```

## 🔧 Backend Configuration (Optional)

### Firebase Admin SDK Setup
1. Go to Project Settings → "Service accounts" tab
2. Click "Generate new private key"
3. Download the JSON file
4. Place it in `backend/` directory as `firebase-service-account.json`
5. Update `backend/simple-server.js`:

```javascript
const serviceAccount = require('./firebase-service-account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
```

## 🚀 Usage

### Authentication Methods
The app now supports both authentication methods:

1. **Firebase Auth** (Default)
   - Email/password authentication
   - User profiles stored in Firestore
   - Automatic token management
   - Email verification support

2. **Express JWT** (Fallback)
   - Custom JWT tokens
   - In-memory user storage
   - Simple authentication flow

### Switching Authentication Methods
Users can switch between authentication methods in the app:
- Firebase: Modern, scalable, feature-rich
- Express: Simple, self-contained, no external dependencies

## 📱 Features

### Firebase Authentication Features
- ✅ Email/password registration and login
- ✅ Email verification
- ✅ Password reset
- ✅ User profile management
- ✅ Role-based access control
- ✅ Automatic token refresh
- ✅ Persistent authentication state

### Firestore Integration
- User profiles stored in `users` collection
- Real-time data synchronization
- Scalable user management
- Advanced querying capabilities

## 🔒 Security Rules

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🧪 Testing

### Test Users
Create test users in Firebase Console:
1. Go to Authentication → Users
2. Click "Add user"
3. Add test users with different roles

### Development
```bash
# Start backend
cd backend
node simple-server.js

# Start frontend
cd frontend
npm run dev
```

## 📊 Monitoring

### Firebase Analytics
- User authentication events
- App usage statistics
- Performance monitoring
- Error tracking

### Firestore Usage
- Monitor database reads/writes
- Set up alerts for usage limits
- Track user growth

## 🚀 Production Deployment

### Environment Variables
Set up production environment variables:
- Firebase config for production
- Firestore security rules
- Firebase Admin SDK credentials

### Security Considerations
- Enable App Check for additional security
- Set up proper Firestore security rules
- Configure CORS for production domains
- Enable Firebase Security Rules

## 🔧 Troubleshooting

### Common Issues
1. **Firebase config not loading**: Check environment variables
2. **Authentication not working**: Verify Firebase project settings
3. **Firestore permission denied**: Check security rules
4. **Token verification failed**: Verify Firebase Admin SDK setup

### Debug Mode
Enable debug logging:
```javascript
// In firebase.ts
if (import.meta.env.DEV) {
  console.log('Firebase config:', firebaseConfig);
}
```
