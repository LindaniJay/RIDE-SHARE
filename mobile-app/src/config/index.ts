// Firebase Configuration
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import messaging from '@react-native-firebase/messaging';

// Initialize Firebase with actual project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCUn6sq5qode0tO73tfDgXneg03_CobxjI",
  authDomain: "ride-share-56610.firebaseapp.com",
  projectId: "ride-share-56610",
  storageBucket: "ride-share-56610.firebasestorage.app",
  messagingSenderId: "1074725088115",
  appId: "1:1074725088115:web:9d53e6c7b24a497cf3b306"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const authService = auth();
export const firestoreService = firestore();
export const storageService = storage();
export const messagingService = messaging();

// API Configuration
export const API_CONFIG = {
  BASE_URL: __DEV__ ? 'http://localhost:5001/api' : 'https://your-api-domain.com/api',
  TIMEOUT: 10000,
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: 'RideShare SA',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@rideshare-sa.co.za',
  SUPPORT_PHONE: '+27 21 123 4567',
};

// Payment Configuration
export const PAYMENT_CONFIG = {
  STRIPE_PUBLISHABLE_KEY: 'your-stripe-publishable-key',
  PAYFAST_MERCHANT_ID: 'your-payfast-merchant-id',
  PAYFAST_MERCHANT_KEY: 'your-payfast-merchant-key',
};

// Map Configuration
export const MAP_CONFIG = {
  GOOGLE_MAPS_API_KEY: 'your-google-maps-api-key',
  DEFAULT_REGION: {
    latitude: -26.2041,
    longitude: 28.0473,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

// Storage Configuration
export const STORAGE_CONFIG = {
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_DOCUMENT_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'image/jpeg', 'image/png'],
};

// Notification Configuration
export const NOTIFICATION_CONFIG = {
  CHANNEL_ID: 'rideshare-sa-notifications',
  CHANNEL_NAME: 'RideShare SA Notifications',
  CHANNEL_DESCRIPTION: 'Notifications for bookings, messages, and updates',
};

// Validation Rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  PHONE_REGEX: /^[\+]?[0-9\s\-\(\)]{10,}$/,
  EMAIL_REGEX: /^\S+@\S+\.\S+$/,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
};

// Booking Configuration
export const BOOKING_CONFIG = {
  MIN_BOOKING_DURATION_HOURS: 2,
  MAX_BOOKING_DURATION_DAYS: 30,
  ADVANCE_BOOKING_DAYS: 180,
  CANCELLATION_HOURS: 24,
};

// Vehicle Configuration
export const VEHICLE_CONFIG = {
  CATEGORIES: [
    { id: 'sedan', name: 'Sedan', icon: 'directions-car' },
    { id: 'suv', name: 'SUV', icon: 'airport-shuttle' },
    { id: 'bakkie', name: 'Bakkie', icon: 'local-shipping' },
    { id: 'truck', name: 'Truck', icon: 'local-shipping' },
    { id: 'minibus', name: 'Minibus', icon: 'airport-shuttle' },
    { id: 'luxury', name: 'Luxury', icon: 'star' },
  ],
  FUEL_TYPES: ['petrol', 'diesel', 'electric', 'hybrid'],
  TRANSMISSION_TYPES: ['manual', 'automatic'],
  MIN_YEAR: 2010,
  MAX_YEAR: new Date().getFullYear() + 1,
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
};

export default app;
