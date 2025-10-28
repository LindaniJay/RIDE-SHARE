@echo off
echo 🚗 Setting up RideShare SA Mobile App...

REM Check if React Native CLI is installed
where react-native >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ React Native CLI not found. Installing...
    npm install -g react-native-cli
)

REM Initialize React Native project structure
echo 📱 Initializing React Native project...

REM Create Android directory structure
if not exist "android\app\src\main\java\com\rideshare" mkdir "android\app\src\main\java\com\rideshare"
if not exist "android\app\src\main\res\values" mkdir "android\app\src\main\res\values"
if not exist "android\app\src\main\res\mipmap-hdpi" mkdir "android\app\src\main\res\mipmap-hdpi"
if not exist "android\app\src\main\res\mipmap-mdpi" mkdir "android\app\src\main\res\mipmap-mdpi"
if not exist "android\app\src\main\res\mipmap-xhdpi" mkdir "android\app\src\main\res\mipmap-xhdpi"
if not exist "android\app\src\main\res\mipmap-xxhdpi" mkdir "android\app\src\main\res\mipmap-xxhdpi"
if not exist "android\app\src\main\res\mipmap-xxxhdpi" mkdir "android\app\src\main\res\mipmap-xxxhdpi"

REM Create iOS directory structure
if not exist "ios\RideShareSA" mkdir "ios\RideShareSA"

echo ✅ Project structure created!

REM Copy environment file
if not exist ".env" (
    copy "env.example" ".env"
    echo 📝 Environment file created. Please edit .env with your credentials.
)

echo 🎉 Setup complete!
echo.
echo Next steps:
echo 1. Edit .env file with your Firebase and API credentials
echo 2. Add Firebase config files:
echo    - android\app\google-services.json
echo    - ios\RideShareSA\GoogleService-Info.plist
echo 3. Run: npm run android (for Android) or npm run ios (for iOS)
echo.
echo Happy coding! 🚀
pause
