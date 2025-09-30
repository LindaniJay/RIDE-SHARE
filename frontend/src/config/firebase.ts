import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: (import.meta.env as any).VITE_FIREBASE_API_KEY || "AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",
  authDomain: (import.meta.env as any).VITE_FIREBASE_AUTH_DOMAIN || "ride-share-56610.firebaseapp.com",
  projectId: (import.meta.env as any).VITE_FIREBASE_PROJECT_ID || "ride-share-56610",
  storageBucket: (import.meta.env as any).VITE_FIREBASE_STORAGE_BUCKET || "ride-share-56610.firebasestorage.app",
  messagingSenderId: (import.meta.env as any).VITE_FIREBASE_MESSAGING_SENDER_ID || "1074725088115",
  appId: (import.meta.env as any).VITE_FIREBASE_APP_ID || "1:1074725088115:web:9d53e6c7b24a497cf3b306",
  measurementId: (import.meta.env as any).VITE_FIREBASE_MEASUREMENT_ID || "G-XN91B7PKY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Export a function to get Firebase Auth (for compatibility with authService)
export const getFirebaseAuth = () => auth;

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Connect to emulators in development
if ((import.meta.env as any).DEV) {
  // Uncomment these lines if you want to use Firebase emulators for development
  // connectAuthEmulator(auth, "http://localhost:9099");
  // connectFirestoreEmulator(db, 'localhost', 8080);
}

export default app;
