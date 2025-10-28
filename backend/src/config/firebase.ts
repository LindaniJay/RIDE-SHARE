import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore as getFirestoreAdmin } from 'firebase-admin/firestore';
import { getStorage as getStorageAdmin } from 'firebase-admin/storage';
import { env } from './env';
import { logger } from '../utils/logger';

let firebaseApp: any;
let firestore: any;
let storage: any;

export const initializeFirebase = async () => {
  try {
    // Check if Firebase is already initialized
    if (getApps().length > 0) {
      firebaseApp = getApps()[0];
      return firebaseApp;
    }

    // Initialize Firebase Admin SDK
    const serviceAccount = {
      type: 'service_account',
      project_id: env.FIREBASE_PROJECT_ID,
      private_key_id: env.FIREBASE_PRIVATE_KEY_ID,
      private_key: env.FIREBASE_PRIVATE_KEY?.replace(/\n/g, '\n'),
      client_email: env.FIREBASE_CLIENT_EMAIL,
      client_id: env.FIREBASE_CLIENT_ID,
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${env.FIREBASE_CLIENT_EMAIL}`
    };

    // Validate required fields
    if (!env.FIREBASE_PROJECT_ID || !env.FIREBASE_PRIVATE_KEY || !env.FIREBASE_CLIENT_EMAIL) {
      throw new Error('Missing required Firebase environment variables');
    }

    firebaseApp = initializeApp({
      credential: cert(serviceAccount as any),
      projectId: env.FIREBASE_PROJECT_ID
    });

    // Initialize Firestore and Storage
    firestore = getFirestoreAdmin(firebaseApp);
    storage = getStorageAdmin(firebaseApp);

    logger.info('Firebase Admin SDK initialized successfully');
    logger.info('Firestore and Storage services initialized');
    return firebaseApp;
  } catch (error) {
    logger.error('Failed to initialize Firebase Admin SDK:', error);
    throw error;
  }
};

export const initializeFirebaseAdmin = () => {
  try {
    return initializeFirebase();
  } catch (error) {
    logger.error('Failed to initialize Firebase Admin SDK:', error);
    // Return a mock object to prevent crashes
    return {
      auth: () => ({
        verifyIdToken: () => Promise.reject(new Error('Firebase not initialized')),
        setCustomUserClaims: () => Promise.reject(new Error('Firebase not initialized'))
      })
    };
  }
};

export { getAuth };
export const getFirebaseAuth = getAuth;
export const getFirestore = () => firestore;
export const getStorage = () => storage;
export default firebaseApp;
export const getFirebaseAdmin = () => firebaseApp;

// Admin utility functions
export const setAdminCustomClaims = async (uid: string, claims: any) => {
  try {
    const auth = getAuth();
    await auth.setCustomUserClaims(uid, claims);
    logger.info(`Custom claims set for user ${uid}:`, claims);
    return true;
  } catch (error) {
    logger.error('Failed to set custom claims:', error);
    throw error;
  }
};

export const verifyAdminToken = async (token: string) => {
  try {
    const auth = getAuth();
    const decodedToken = await auth.verifyIdToken(token);
    
    // Check if user has admin claims
    if (!decodedToken.admin && decodedToken.role !== 'admin') {
      throw new Error('User does not have admin privileges');
    }
    
    return decodedToken;
  } catch (error) {
    logger.error('Admin token verification failed:', error);
    throw error;
  }
};
