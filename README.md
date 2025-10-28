# 🚗 RideShare SA Mobile App - Standalone

A complete React Native mobile application for South Africa's premier peer-to-peer vehicle rental platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS, macOS only)

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **iOS Setup (macOS only)**
```bash
cd ios && pod install && cd ..
```

3. **Environment Configuration**
```bash
cp env.example .env
# Edit .env with your Firebase and API credentials
```

4. **Firebase Setup**
- Download Firebase config files from your project
- Place `google-services.json` in `android/app/`
- Place `GoogleService-Info.plist` in `ios/RideShareSA/`

5. **Run the App**
```bash
npm run android  # Android
npm run ios      # iOS
```

## 📱 Features

### 🔐 Authentication
- Firebase Authentication with email/password
- Role-based access (Renter, Host, Admin)
- Social login support

### 🚗 Vehicle Management
- Advanced search with filters
- Interactive map integration
- Vehicle categories (Sedan, SUV, Bakkie, Truck, Luxury)
- Real-time availability checking

### 📅 Booking System
- Multi-step booking wizard
- Date and location selection
- Real-time pricing calculation
- Booking status tracking

### 💳 Payment Processing
- Stripe integration for international payments
- PayFast integration for South African payments
- Secure payment processing

### 📱 Real-time Features
- Push notifications
- Real-time messaging
- Live booking updates

### 📊 Dashboards
- Personalized dashboards for each role
- Analytics and insights
- Earnings tracking (Hosts)

## 🛠️ Development

### Project Structure
```
src/
├── components/     # Reusable UI components
├── context/       # React Context providers
├── screens/       # Screen components
├── services/      # API services
├── types/         # TypeScript definitions
└── config/        # App configuration
```

### Available Scripts
- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Android (Google Play Store)
1. Generate signed APK/AAB
2. Upload to Google Play Console

### iOS (Apple App Store)
1. Archive in Xcode
2. Upload to App Store Connect

## 📞 Support

- Email: support@rideshare-sa.co.za
- Website: https://rideshare-sa.co.za

---

**Built with ❤️ for South Africa** 🇿🇦