# RideShare SA - Comprehensive Setup Guide

## 🚀 Quick Start

This guide covers everything you need to set up and run the RideShare SA platform.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Firebase Setup](#firebase-setup)
3. [Database Setup](#database-setup)
4. [Backend Setup](#backend-setup)
5. [Frontend Setup](#frontend-setup)
6. [Production Deployment](#production-deployment)
7. [Troubleshooting](#troubleshooting)

## 🔧 Prerequisites

- Node.js 18+ and npm
- Git
- Firebase account
- PostgreSQL (for production) or SQLite (for development)

## 🔥 Firebase Setup

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

## 🗄️ Database Setup

### Development (SQLite)

The project uses SQLite by default for development. No additional setup required.

### Production (PostgreSQL)

1. Install PostgreSQL
2. Create a database: `rideshare_sa`
3. Update `backend/.env` with your database credentials:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/rideshare_sa
```

## 🖥️ Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your configuration
```

4. Run database migrations:
```bash
npm run migrate
```

5. Seed demo data (optional):
```bash
npm run seed
```

6. Start the backend server:
```bash
npm run dev
```

The backend will be available at `http://localhost:5001`

## 🎨 Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🚀 Production Deployment

### Backend Deployment

1. Build the backend:
```bash
cd backend
npm run build
```

2. Set production environment variables
3. Deploy to your preferred platform (Heroku, AWS, etc.)

### Frontend Deployment

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting platform

### GitHub Pages Deployment

1. Run the deployment script:
```bash
./deploy-gh-pages.sh
```

2. Push to GitHub:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 🔧 Troubleshooting

### Common Issues

#### Backend Connection Issues
- Ensure the backend server is running on port 5001
- Check firewall settings
- Verify environment variables

#### Firebase Authentication Issues
- Verify Firebase configuration in `.env.local`
- Check Firebase project settings
- Ensure authentication is enabled in Firebase Console

#### Database Connection Issues
- Verify database credentials
- Check if PostgreSQL is running (for production)
- Run database migrations

### Debug Tools

Use the comprehensive test suite:
```bash
# Open test-comprehensive.html in your browser
open test-comprehensive.html
```

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [React Documentation](https://reactjs.org/docs)
- [Node.js Documentation](https://nodejs.org/docs)

## 🤝 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the test suite results
3. Check the console for error messages
4. Verify all environment variables are set correctly

---

**Last Updated:** December 2024
**Version:** 1.0.0
