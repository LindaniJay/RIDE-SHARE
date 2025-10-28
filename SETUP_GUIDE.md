# 🚗 RideShare SA Mobile App - Setup Guide

## 📋 Prerequisites

Before setting up the mobile app, ensure you have:

- **Node.js 16+** and npm/yarn
- **React Native CLI**: `npm install -g react-native-cli`
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Firebase project** with authentication enabled
- **Google Maps API key**
- **Stripe account** (for payment processing)

## 🚀 Quick Setup

### Option 1: Automated Setup (Windows)
```bash
# Run the setup script
setup.bat
```

### Option 2: Manual Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp env.example .env

# 3. Edit .env with your credentials
# 4. Add Firebase config files
# 5. Run the app
npm run android  # or npm run ios
```

## 🔧 Detailed Setup

### 1. Environment Configuration

Edit the `.env` file with your actual values:

```env
# Firebase Configuration
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=your-app-id

# API Configuration
API_BASE_URL=https://api.rideshare-sa.co.za/api

# Payment Configuration
STRIPE_PUBLISHABLE_KEY=pk_test_your-stripe-publishable-key
PAYFAST_MERCHANT_ID=your-payfast-merchant-id
PAYFAST_MERCHANT_KEY=your-payfast-merchant-key
PAYFAST_SANDBOX=true

# Maps Configuration
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
```

### 2. Firebase Setup

#### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication, Firestore, and Storage
4. Download config files

#### Android Setup
1. Download `google-services.json`
2. Place it in `android/app/google-services.json`

#### iOS Setup (macOS only)
1. Download `GoogleService-Info.plist`
2. Place it in `ios/RideShareSA/GoogleService-Info.plist`

### 3. Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps SDK for Android and iOS
3. Create API key
4. Add the key to your `.env` file

### 4. Payment Setup

#### Stripe
1. Create account at [Stripe](https://stripe.com/)
2. Get publishable key from dashboard
3. Add to `.env` file

#### PayFast (South Africa)
1. Register at [PayFast](https://www.payfast.co.za/)
2. Get merchant ID and key
3. Add to `.env` file

## 📱 Running the App

### Android
```bash
# Start Metro bundler
npm start

# In another terminal, run Android
npm run android
```

### iOS (macOS only)
```bash
# Install iOS dependencies
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# In another terminal, run iOS
npm run ios
```

## 🛠️ Development

### Project Structure
```
rideshare-sa-mobile/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # React Context providers
│   ├── screens/       # Screen components
│   ├── services/      # API services
│   ├── types/         # TypeScript definitions
│   └── config/        # App configuration
├── android/           # Android-specific files
├── ios/              # iOS-specific files
├── App.tsx           # Main app component
├── index.js           # App entry point
└── package.json       # Dependencies
```

### Available Scripts
- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build cache

## 🚀 Deployment

### Android (Google Play Store)
1. Generate signed APK/AAB
2. Upload to Google Play Console
3. Complete store listing

### iOS (Apple App Store)
1. Archive in Xcode
2. Upload to App Store Connect
3. Submit for review

## 🔧 Troubleshooting

### Common Issues

#### Metro bundler issues
```bash
npm run reset-cache
```

#### Android build issues
```bash
cd android
./gradlew clean
cd ..
npm run android
```

#### iOS build issues
```bash
cd ios
pod install
cd ..
npm run ios
```

#### Dependencies issues
```bash
rm -rf node_modules
npm install
```

## 📞 Support

- **Email**: support@rideshare-sa.co.za
- **Phone**: +27 21 123 4567
- **Website**: https://rideshare-sa.co.za

---

**Built with ❤️ for South Africa** 🇿🇦
