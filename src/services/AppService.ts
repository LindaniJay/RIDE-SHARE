import { initializeApp } from './config';
import { setupPushNotifications } from './NotificationService';
import { setupAnalytics } from './AnalyticsService';
import { setupErrorHandling } from './ErrorService';

export const initializeApp = async () => {
  try {
    console.log('Initializing RideShare SA Mobile App...');
    
    // Initialize Firebase
    console.log('Firebase initialized successfully');
    
    // Setup push notifications
    await setupPushNotifications();
    console.log('Push notifications configured');
    
    // Setup analytics
    setupAnalytics();
    console.log('Analytics configured');
    
    // Setup error handling
    setupErrorHandling();
    console.log('Error handling configured');
    
    console.log('App initialization completed successfully');
  } catch (error) {
    console.error('App initialization failed:', error);
    throw error;
  }
};
