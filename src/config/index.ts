import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import messaging from '@react-native-firebase/messaging';
import Config from 'react-native-config';

// Firebase Configuration
const firebaseConfig = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  projectId: Config.FIREBASE_PROJECT_ID,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
  appId: Config.FIREBASE_APP_ID,
};

// Initialize Firebase App
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization error:', error);
}

// Initialize Firebase services
export const authService = auth();
export const firestoreService = firestore();
export const storageService = storage();
export const messagingService = messaging();

// API Configuration
export const API_CONFIG = {
  BASE_URL: Config.API_BASE_URL || 'https://api.rideshare-sa.co.za/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'RideShare SA',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@rideshare-sa.co.za',
  SUPPORT_PHONE: '+27 21 123 4567',
  WEBSITE_URL: 'https://rideshare-sa.co.za',
  PRIVACY_POLICY_URL: 'https://rideshare-sa.co.za/privacy',
  TERMS_OF_SERVICE_URL: 'https://rideshare-sa.co.za/terms',
};

// Payment Configuration
export const PAYMENT_CONFIG = {
  STRIPE_PUBLISHABLE_KEY: Config.STRIPE_PUBLISHABLE_KEY,
  PAYFAST_MERCHANT_ID: Config.PAYFAST_MERCHANT_ID,
  PAYFAST_MERCHANT_KEY: Config.PAYFAST_MERCHANT_KEY,
  PAYFAST_SANDBOX: Config.PAYFAST_SANDBOX === 'true',
};

// Map Configuration
export const MAP_CONFIG = {
  GOOGLE_MAPS_API_KEY: Config.GOOGLE_MAPS_API_KEY,
  DEFAULT_REGION: {
    latitude: -26.2041,
    longitude: 28.0473,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  SOUTH_AFRICA_BOUNDS: {
    northEast: {
      latitude: -22.1256,
      longitude: 32.8301,
    },
    southWest: {
      latitude: -34.8192,
      longitude: 16.4699,
    },
  },
};

// Storage Configuration
export const STORAGE_CONFIG = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],
  COMPRESSION_QUALITY: 0.8,
};

// Notification Configuration
export const NOTIFICATION_CONFIG = {
  CHANNEL_ID: 'rideshare-sa-notifications',
  CHANNEL_NAME: 'RideShare SA Notifications',
  CHANNEL_DESCRIPTION: 'Notifications for bookings, messages, and updates',
  TOPICS: {
    BOOKING_UPDATES: 'booking_updates',
    MESSAGES: 'messages',
    PROMOTIONS: 'promotions',
    SYSTEM_ALERTS: 'system_alerts',
  },
};

// Validation Rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 128,
  PHONE_REGEX: /^[\+]?[0-9\s\-\(\)]{10,}$/,
  EMAIL_REGEX: /^\S+@\S+\.\S+$/,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  ADDRESS_MIN_LENGTH: 10,
  ADDRESS_MAX_LENGTH: 200,
};

// Booking Configuration
export const BOOKING_CONFIG = {
  MIN_BOOKING_DURATION_HOURS: 2,
  MAX_BOOKING_DURATION_DAYS: 30,
  ADVANCE_BOOKING_DAYS: 180,
  CANCELLATION_HOURS: 24,
  REFUND_PROCESSING_DAYS: 3,
  BOOKING_CONFIRMATION_TIMEOUT: 300000, // 5 minutes
};

// Vehicle Configuration
export const VEHICLE_CONFIG = {
  CATEGORIES: [
    { id: 'sedan', name: 'Sedan', icon: 'directions-car', minPrice: 200, maxPrice: 800 },
    { id: 'suv', name: 'SUV', icon: 'airport-shuttle', minPrice: 300, maxPrice: 1200 },
    { id: 'bakkie', name: 'Bakkie', icon: 'local-shipping', minPrice: 400, maxPrice: 1000 },
    { id: 'truck', name: 'Truck', icon: 'local-shipping', minPrice: 600, maxPrice: 1500 },
    { id: 'minibus', name: 'Minibus', icon: 'airport-shuttle', minPrice: 500, maxPrice: 1200 },
    { id: 'luxury', name: 'Luxury', icon: 'star', minPrice: 800, maxPrice: 3000 },
  ],
  FUEL_TYPES: ['petrol', 'diesel', 'electric', 'hybrid'],
  TRANSMISSION_TYPES: ['manual', 'automatic'],
  MIN_YEAR: 2010,
  MAX_YEAR: new Date().getFullYear() + 1,
  MAX_IMAGES: 10,
  REQUIRED_IMAGES: 3,
};

// Location Configuration
export const LOCATION_CONFIG = {
  PROVINCES: [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape',
  ],
  MAJOR_CITIES: [
    'Cape Town',
    'Johannesburg',
    'Durban',
    'Pretoria',
    'Port Elizabeth',
    'Bloemfontein',
    'Nelspruit',
    'Polokwane',
    'Kimberley',
  ],
  SEARCH_RADIUS_KM: 50,
  DEFAULT_SEARCH_RADIUS_KM: 25,
};

// Security Configuration
export const SECURITY_CONFIG = {
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  TOKEN_REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes
};

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  ENABLED: true,
  TRACK_SCREEN_VIEWS: true,
  TRACK_USER_INTERACTIONS: true,
  TRACK_PERFORMANCE: true,
  DEBUG_MODE: __DEV__,
};

// Error Configuration
export const ERROR_CONFIG = {
  RETRY_DELAY: 1000,
  MAX_RETRY_DELAY: 10000,
  RETRY_MULTIPLIER: 2,
  NETWORK_ERROR_MESSAGE: 'Please check your internet connection',
  SERVER_ERROR_MESSAGE: 'Something went wrong. Please try again later.',
  TIMEOUT_ERROR_MESSAGE: 'Request timed out. Please try again.',
};

export default app;
