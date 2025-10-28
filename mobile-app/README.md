# 🚗 RideShare SA Mobile App

A React Native mobile application for South Africa's premier peer-to-peer vehicle rental platform. This mobile app provides a seamless experience for renters, hosts, and administrators to manage vehicle rentals on the go.

## 📱 Features

### 🔐 Authentication & User Management
- **Firebase Authentication** with email/password and social login
- **Role-based access control** (Renter, Host, Admin)
- **Profile management** with document upload and verification
- **Secure authentication** with biometric support

### 🚙 Vehicle Discovery & Search
- **Advanced search filters** by location, type, price, and availability
- **Interactive map integration** with real-time vehicle locations
- **Smart recommendations** based on user preferences
- **Category browsing** (Sedan, SUV, Bakkie, Truck, Luxury)
- **Saved vehicles** and search history

### 📅 Booking Management
- **Multi-step booking wizard** with date selection and location picker
- **Real-time availability checking**
- **Booking modifications** and cancellations
- **Booking history** with status tracking
- **Instant booking confirmations**

### 💳 Payment Processing
- **Multiple payment methods** (Credit cards, EFT, SnapScan, Zapper)
- **Stripe integration** for international users
- **PayFast integration** for South African payments
- **Secure payment processing** with PCI compliance
- **Payment history** and receipts

### 📱 Real-time Features
- **Push notifications** for booking updates
- **Real-time messaging** between renters and hosts
- **Live booking status updates**
- **Emergency support** integration

### 📊 Dashboard & Analytics
- **Personalized dashboards** for each user role
- **Booking analytics** and spending insights
- **Earnings tracking** for hosts
- **Performance metrics** and reporting

## 🛠️ Technical Stack

### Core Technologies
- **React Native 0.72.7** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **React Navigation 6** - Navigation management
- **React Query** - Data fetching and caching

### Firebase Services
- **Firebase Auth** - Authentication
- **Firestore** - Real-time database
- **Firebase Storage** - File storage
- **Firebase Messaging** - Push notifications

### UI & Styling
- **React Native Paper** - Material Design components
- **React Native Elements** - UI component library
- **React Native Vector Icons** - Icon library
- **Linear Gradient** - Gradient backgrounds

### Maps & Location
- **React Native Maps** - Map integration
- **React Native Geolocation** - Location services
- **Google Maps API** - Map services

### Payment & Security
- **Stripe React Native** - Payment processing
- **React Native Keychain** - Secure storage
- **React Native Permissions** - Permission management

## 📋 Prerequisites

Before running the mobile app, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **React Native CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Firebase project** with authentication enabled
- **Google Maps API key**
- **Stripe account** (for payment processing)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/rideshare-sa-mobile.git
cd rideshare-sa-mobile
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. iOS Setup (macOS only)
```bash
cd ios
pod install
cd ..
```

### 4. Firebase Configuration
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Download `google-services.json` (Android) and `GoogleService-Info.plist` (iOS)
4. Place them in the appropriate directories:
   - Android: `android/app/google-services.json`
   - iOS: `ios/RideShareSA/GoogleService-Info.plist`

### 5. Environment Configuration
Create a `.env` file in the root directory:
```env
FIREBASE_API_KEY=your-firebase-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=123456789
FIREBASE_APP_ID=your-app-id

STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
GOOGLE_MAPS_API_KEY=your-google-maps-api-key
API_BASE_URL=https://your-api-domain.com/api
```

### 6. Run the Application

#### Android
```bash
npm run android
# or
yarn android
```

#### iOS
```bash
npm run ios
# or
yarn ios
```

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── navigation/     # Navigation components
│   └── ui/            # General UI components
├── context/           # React Context providers
├── screens/           # Screen components
│   ├── auth/         # Authentication screens
│   ├── main/         # Main app screens
│   ├── dashboard/    # Dashboard screens
│   ├── host/        # Host-specific screens
│   └── admin/       # Admin screens
├── services/         # API services and utilities
├── types/           # TypeScript type definitions
├── config/          # App configuration
└── utils/           # Utility functions
```

## 🔧 Configuration

### Firebase Setup
1. **Authentication**: Enable Email/Password and Google sign-in
2. **Firestore**: Set up security rules for user data
3. **Storage**: Configure rules for image and document uploads
4. **Messaging**: Set up push notification topics

### Payment Integration
1. **Stripe**: Create account and get publishable key
2. **PayFast**: Register merchant account for South African payments
3. **Configure webhook endpoints** for payment confirmations

### Maps Integration
1. **Google Maps**: Enable Maps SDK for Android/iOS
2. **Geocoding API**: Enable for address lookups
3. **Places API**: Enable for location search

## 🧪 Testing

### Run Tests
```bash
npm test
# or
yarn test
```

### Test Coverage
```bash
npm run test:coverage
# or
yarn test:coverage
```

## 📦 Building for Production

### Android
```bash
cd android
./gradlew assembleRelease
```

### iOS
```bash
cd ios
xcodebuild -workspace RideShareSA.xcworkspace -scheme RideShareSA -configuration Release
```

## 🚀 Deployment

### Google Play Store
1. Generate signed APK/AAB
2. Upload to Google Play Console
3. Complete store listing and publish

### Apple App Store
1. Archive the app in Xcode
2. Upload to App Store Connect
3. Submit for review

## 🔒 Security Features

- **Biometric authentication** support
- **Secure token storage** with Keychain
- **API request encryption**
- **Input validation** and sanitization
- **Secure file uploads** with virus scanning
- **Rate limiting** for API calls

## 🌍 Localization

The app supports multiple languages:
- **English** (default)
- **Afrikaans**
- **Zulu**
- **Xhosa**

## 📊 Analytics & Monitoring

- **Firebase Analytics** for user behavior tracking
- **Crashlytics** for crash reporting
- **Performance monitoring** for app optimization
- **Custom events** for business metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: support@rideshare-sa.co.za
- **Phone**: +27 21 123 4567
- **WhatsApp**: +27 82 123 4567
- **Documentation**: [docs.rideshare-sa.co.za](https://docs.rideshare-sa.co.za)

## 🙏 Acknowledgments

- South African transportation community
- React Native community
- Firebase team
- Open source contributors

---

**Built with ❤️ for South Africa** 🇿🇦

*RideShare SA Mobile - Where every journey begins with trust, and every vehicle becomes an opportunity.*
