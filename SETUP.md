# RideShare SA Mobile App - Standalone

This is a standalone React Native mobile application for the RideShare SA platform.

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- React Native CLI
- Android Studio (Android)
- Xcode (iOS, macOS only)

### Quick Setup

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
# Edit .env with your actual values
```

4. **Firebase Setup**
- Download Firebase config files
- Place `google-services.json` in `android/app/`
- Place `GoogleService-Info.plist` in `ios/RideShareSA/`

5. **Run the App**
```bash
npm run android  # Android
npm run ios      # iOS
```

## 📱 Features

- **Authentication**: Firebase Auth with role-based access
- **Vehicle Search**: Advanced search with filters and maps
- **Booking System**: Multi-step booking wizard
- **Payment Processing**: Stripe and PayFast integration
- **Real-time Features**: Push notifications and messaging
- **Dashboards**: Role-specific dashboards for users

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

### Android
1. Generate signed APK/AAB
2. Upload to Google Play Console

### iOS
1. Archive in Xcode
2. Upload to App Store Connect

## 📞 Support

- Email: support@rideshare-sa.co.za
- Website: https://rideshare-sa.co.za

---

**Built with ❤️ for South Africa** 🇿🇦
