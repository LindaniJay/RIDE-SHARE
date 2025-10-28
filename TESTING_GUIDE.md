# RideShare SA - Testing & Setup Guide

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Server will start on `http://localhost:5001`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will start on `http://localhost:5173`

## 🔧 Backend Testing

### 1. Test Basic Endpoints
```bash
# Health check
curl http://localhost:5001/api/health

# Get vehicles (should return approved vehicles)
curl http://localhost:5001/api/vehicles

# Get vehicles with specific status
curl http://localhost:5001/api/vehicles?status=APPROVED
```

### 2. Test Authentication Endpoints
```bash
# Test Firebase token verification (requires valid Firebase token)
curl -X POST http://localhost:5001/api/auth/verify-firebase \
  -H "Content-Type: application/json" \
  -d '{"firebaseToken": "YOUR_FIREBASE_TOKEN"}'

# Test user registration (requires valid Firebase token)
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"firebaseToken": "YOUR_FIREBASE_TOKEN", "role": "RENTER"}'
```

### 3. Test Protected Endpoints
```bash
# Test notifications (requires authentication)
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:5001/api/notifications

# Test bookings (requires authentication)
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:5001/api/bookings/my-bookings
```

## 🔌 Socket.io Testing

### 1. Test Socket.io Connection
```javascript
// In browser console or test file
const socket = io('http://localhost:5001', {
  auth: {
    token: 'YOUR_JWT_TOKEN'
  }
});

socket.on('connect', () => {
  console.log('Connected to Socket.io');
});

socket.on('notification', (data) => {
  console.log('Received notification:', data);
});
```

### 2. Test Real-time Features
- Open multiple browser tabs
- Create a booking in one tab
- Verify notifications appear in other tabs
- Test chat functionality between users

## 🧪 Automated Testing

### Run Backend Tests
```bash
cd backend
npm test
```

### Run Frontend Tests
```bash
cd frontend
npm test
```

### Run Endpoint Tests
```bash
cd backend
node test-endpoints.js
```

## 🔍 Error Handling Verification

### 1. Test 500 Error Handling
```bash
# Test with invalid data
curl -X POST http://localhost:5001/api/vehicles \
  -H "Content-Type: application/json" \
  -d '{"invalid": "data"}'
```

### 2. Test Authentication Errors
```bash
# Test without token
curl http://localhost:5001/api/notifications

# Test with invalid token
curl -H "Authorization: Bearer invalid_token" \
  http://localhost:5001/api/notifications
```

### 3. Test Frontend Error Handling
- Open browser dev tools
- Disconnect from internet
- Try to create a booking
- Verify error messages appear
- Test 401 redirects to login

## 🔐 Firebase Authentication Testing

### 1. Setup Firebase Project
1. Create Firebase project
2. Enable Authentication
3. Add your domain to authorized domains
4. Download service account key

### 2. Configure Environment Variables
```bash
# backend/.env
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
```

### 3. Test Firebase Integration
```javascript
// Test Firebase token verification
const { getFirebaseAuth } = require('./src/config/firebase');
const auth = getFirebaseAuth();

if (auth) {
  console.log('Firebase Admin SDK initialized successfully');
} else {
  console.log('Firebase Admin SDK not configured');
}
```

## 📱 PWA Testing

### 1. Test PWA Installation
1. Open app in Chrome
2. Look for "Install" button in address bar
3. Click install
4. Verify app opens in standalone mode

### 2. Test PWA Icons
- Check manifest.json has correct icon paths
- Verify icons exist in /public directory
- Test on mobile devices

## 🚨 Common Issues & Solutions

### Backend Issues
1. **Database Connection Error**
   - Check database is running
   - Verify connection string in .env
   - Run `npm run db:setup`

2. **Firebase Authentication Error**
   - Verify service account key is correct
   - Check Firebase project ID
   - Ensure private key is properly formatted

3. **Socket.io Connection Failed**
   - Check CORS settings
   - Verify port 5001 is available
   - Test with different transport methods

### Frontend Issues
1. **API Calls Failing**
   - Check backend is running on port 5001
   - Verify CORS settings
   - Check authentication tokens

2. **Socket.io Not Connecting**
   - Check browser console for errors
   - Verify token is valid
   - Test with different browsers

## 📊 Performance Testing

### 1. Load Testing
```bash
# Install artillery for load testing
npm install -g artillery

# Create load test
artillery quick --count 10 --num 5 http://localhost:5001/api/health
```

### 2. Memory Testing
- Monitor backend memory usage
- Check for memory leaks
- Test with multiple concurrent connections

## ✅ Success Criteria

### Backend
- [ ] All API endpoints return proper JSON responses
- [ ] No 500 errors in logs
- [ ] Firebase authentication works
- [ ] Socket.io connects successfully
- [ ] Database queries execute without errors

### Frontend
- [ ] Error messages display properly
- [ ] 401 errors redirect to login
- [ ] Socket.io connects and receives updates
- [ ] PWA installs correctly
- [ ] All components handle errors gracefully

### Integration
- [ ] Real-time notifications work
- [ ] Chat functionality works
- [ ] Booking updates propagate
- [ ] User roles are enforced
- [ ] Authentication persists across sessions

## 🎯 Next Steps

1. **Production Deployment**
   - Set up production database
   - Configure production Firebase
   - Set up SSL certificates
   - Configure domain names

2. **Monitoring**
   - Set up error tracking (Sentry)
   - Configure logging
   - Set up performance monitoring
   - Configure alerts

3. **Security**
   - Implement rate limiting
   - Add input validation
   - Set up security headers
   - Configure CORS properly

## 📞 Support

If you encounter issues:
1. Check the logs in both backend and frontend
2. Verify all environment variables are set
3. Test with a fresh database
4. Check Firebase project configuration
5. Verify Socket.io connection settings
