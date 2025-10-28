#!/bin/bash

# RideShare SA Mobile App Setup Script

echo "🚗 Setting up RideShare SA Mobile App..."

# Check if React Native CLI is installed
if ! command -v react-native &> /dev/null; then
    echo "❌ React Native CLI not found. Installing..."
    npm install -g react-native-cli
fi

# Initialize React Native project structure
echo "📱 Initializing React Native project..."

# Create Android directory structure
mkdir -p android/app/src/main/java/com/rideshare
mkdir -p android/app/src/main/res/values
mkdir -p android/app/src/main/res/mipmap-hdpi
mkdir -p android/app/src/main/res/mipmap-mdpi
mkdir -p android/app/src/main/res/mipmap-xhdpi
mkdir -p android/app/src/main/res/mipmap-xxhdpi
mkdir -p android/app/src/main/res/mipmap-xxxhdpi

# Create iOS directory structure
mkdir -p ios/RideShareSA

echo "✅ Project structure created!"

# Copy environment file
if [ ! -f .env ]; then
    cp env.example .env
    echo "📝 Environment file created. Please edit .env with your credentials."
fi

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file with your Firebase and API credentials"
echo "2. Add Firebase config files:"
echo "   - android/app/google-services.json"
echo "   - ios/RideShareSA/GoogleService-Info.plist"
echo "3. Run: npm run android (for Android) or npm run ios (for iOS)"
echo ""
echo "Happy coding! 🚀"
