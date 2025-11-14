import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore as getFirestoreAdmin } from 'firebase-admin/firestore';
import { getStorage as getStorageAdmin } from 'firebase-admin/storage';
import { env } from './env';
import { logger } from '../utils/logger';
import path from 'path';
import fs from 'fs';

let firebaseApp: any;
let firestore: any;
let storage: any;

export const initializeFirebase = async () => {
  try {
    // Check if Firebase is already initialized
    if (getApps().length > 0) {
      firebaseApp = getApps()[0];
      logger.info('Firebase Admin SDK already initialized');
      return firebaseApp;
    }

    // Initialize Firebase Admin SDK using service account file
    const serviceAccountPath = env.FIREBASE_SERVICE_ACCOUNT_PATH || './firebase-service-account.json';
    
    // Resolve the path relative to the backend directory
    const resolvedPath = path.isAbsolute(serviceAccountPath) 
      ? serviceAccountPath 
      : path.resolve(process.cwd(), serviceAccountPath);
    
    logger.info(`Attempting to load Firebase service account from: ${resolvedPath}`);
    
    // Check if file exists
    if (!fs.existsSync(resolvedPath)) {
      throw new Error(`Firebase service account file not found at: ${resolvedPath}`);
    }

    // Load service account file
    let serviceAccount;
    try {
      const serviceAccountData = fs.readFileSync(resolvedPath, 'utf8');
      serviceAccount = JSON.parse(serviceAccountData);
      logger.info(`Service account loaded for project: ${serviceAccount.project_id}`);
    } catch (parseError) {
      throw new Error(`Failed to parse service account file: ${parseError}`);
    }

    // Initialize Firebase with service account
    firebaseApp = initializeApp({
      credential: cert(serviceAccount),
      projectId: env.FIREBASE_PROJECT_ID || serviceAccount.project_id
    });

    // Initialize Firestore and Storage
    firestore = getFirestoreAdmin(firebaseApp);
    storage = getStorageAdmin(firebaseApp);

    logger.info('Firebase Admin SDK initialized successfully');
    logger.info(`Firebase Project ID: ${firebaseApp.options.projectId}`);
    logger.info('Firestore and Storage services initialized');
    return firebaseApp;
  } catch (error: any) {
    logger.error('Failed to initialize Firebase Admin SDK:', error);
    logger.error('Error details:', {
      message: error.message,
      stack: error.stack,
      serviceAccountPath: env.FIREBASE_SERVICE_ACCOUNT_PATH,
      projectId: env.FIREBASE_PROJECT_ID
    });
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

// Safe wrapper for getFirebaseAuth that handles initialization
export const getFirebaseAuth = () => {
  try {
    const auth = getAuth();
    return auth;
  } catch (error) {
    logger.error('Firebase Auth not initialized:', error);
    return null;
  }
};
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
