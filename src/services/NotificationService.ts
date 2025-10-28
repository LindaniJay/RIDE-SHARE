import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { NOTIFICATION_CONFIG } from '../config';

export const setupPushNotifications = async () => {
  try {
    // Request permission for iOS
    if (Platform.OS === 'ios') {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (!enabled) {
        console.log('Push notification permission not granted');
        return;
      }
    }

    // Request permission for Android
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'RideShare SA Notifications',
          message: 'Allow RideShare SA to send you notifications about bookings and updates',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Push notification permission not granted');
        return;
      }
    }

    // Get FCM token
    const token = await messaging().getToken();
    console.log('FCM Token:', token);

    // Subscribe to topics
    await messaging().subscribeToTopic(NOTIFICATION_CONFIG.TOPICS.BOOKING_UPDATES);
    await messaging().subscribeToTopic(NOTIFICATION_CONFIG.TOPICS.MESSAGES);
    await messaging().subscribeToTopic(NOTIFICATION_CONFIG.TOPICS.SYSTEM_ALERTS);

    // Handle background messages
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Background message received:', remoteMessage);
    });

    // Handle foreground messages
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('Foreground message received:', remoteMessage);
      
      // Show local notification for foreground messages
      Alert.alert(
        remoteMessage.notification?.title || 'RideShare SA',
        remoteMessage.notification?.body || 'You have a new notification',
        [{ text: 'OK' }]
      );
    });

    return unsubscribe;
  } catch (error) {
    console.error('Push notification setup failed:', error);
  }
};

export const getFCMToken = async (): Promise<string | null> => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (error) {
    console.error('Failed to get FCM token:', error);
    return null;
  }
};

export const subscribeToTopic = async (topic: string): Promise<boolean> => {
  try {
    await messaging().subscribeToTopic(topic);
    console.log(`Subscribed to topic: ${topic}`);
    return true;
  } catch (error) {
    console.error(`Failed to subscribe to topic ${topic}:`, error);
    return false;
  }
};

export const unsubscribeFromTopic = async (topic: string): Promise<boolean> => {
  try {
    await messaging().unsubscribeFromTopic(topic);
    console.log(`Unsubscribed from topic: ${topic}`);
    return true;
  } catch (error) {
    console.error(`Failed to unsubscribe from topic ${topic}:`, error);
    return false;
  }
};
