import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

// Initialize Firebase Admin SDK
let firebaseApp: admin.app.App | null = null;

export const initializeFirebaseAdmin = () => {
  if (firebaseApp) {
    return firebaseApp;
  }

  try {
    // Check if Firebase service account key exists
    const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || './firebase-service-account.json';
    
    // Try to load service account from file
    let serviceAccount: ServiceAccount | undefined;
    
    try {
      const serviceAccountData = require(serviceAccountPath);
      serviceAccount = serviceAccountData;
    } catch (error) {
      console.log('Firebase service account file not found, trying environment variables...');
      
      // Try to load from environment variables
      if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
        serviceAccount = {
          projectId: process.env.FIREBASE_PROJECT_ID,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        };
      }
    }

    if (!serviceAccount) {
      console.warn('Firebase Admin SDK not configured. Firebase authentication will not work.');
      return null;
    }

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.projectId,
    });

    console.log('Firebase Admin SDK initialized successfully');
    return firebaseApp;
  } catch (error) {
    console.error('Failed to initialize Firebase Admin SDK:', error);
    return null;
  }
};

export const getFirebaseAdmin = () => {
  if (!firebaseApp) {
    firebaseApp = initializeFirebaseAdmin();
  }
  return firebaseApp;
};

export const getFirebaseAuth = () => {
  const app = getFirebaseAdmin();
  return app ? app.auth() : null;
};

export default firebaseApp;
