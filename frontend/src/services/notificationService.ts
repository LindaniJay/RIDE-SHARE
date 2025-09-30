import { toast } from 'react-hot-toast';

export interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: any;
  actions?: NotificationAction[];
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

class NotificationService {
  private permission: NotificationPermission = 'default';
  private registration: ServiceWorkerRegistration | null = null;

  async initialize(): Promise<boolean> {
    if (!('Notification' in window)) {
      console.warn('This browser does not support notifications');
      return false;
    }

    if (!('serviceWorker' in navigator)) {
      console.warn('This browser does not support service workers');
      return false;
    }

    try {
      // Register service worker
      this.registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully');

      // Request notification permission
      this.permission = await Notification.requestPermission();
      
      if (this.permission === 'granted') {
        console.log('Notification permission granted');
        return true;
      } else {
        console.log('Notification permission denied');
        return false;
      }
    } catch (error) {
      console.error('Error initializing notifications:', error);
      return false;
    }
  }

  async showNotification(payload: NotificationPayload): Promise<void> {
    if (this.permission !== 'granted') {
      console.warn('Notification permission not granted');
      return;
    }

    try {
      if (this.registration) {
        await this.registration.showNotification(payload.title, {
          body: payload.body,
          icon: payload.icon || '/android-chrome-192x192.png',
          badge: payload.badge || '/favicon-32x32.png',
          tag: payload.tag,
          data: payload.data,
          actions: payload.actions,
          requireInteraction: true,
          silent: false
        });
      } else {
        // Fallback to browser notification
        new Notification(payload.title, {
          body: payload.body,
          icon: payload.icon || '/android-chrome-192x192.png',
          tag: payload.tag
        });
      }
    } catch (error) {
      console.error('Error showing notification:', error);
      // Fallback to toast notification
      toast(payload.title, {
        description: payload.body,
        duration: 5000
      });
    }
  }

  async showBookingNotification(type: 'created' | 'confirmed' | 'cancelled' | 'reminder', bookingData: any): Promise<void> {
    const notifications = {
      created: {
        title: 'Booking Request Sent',
        body: `Your booking request for ${bookingData.vehicleName} has been sent to the host.`,
        tag: 'booking-created',
        data: { type: 'booking', action: 'view-booking', bookingId: bookingData.id }
      },
      confirmed: {
        title: 'Booking Confirmed! 🎉',
        body: `Your booking for ${bookingData.vehicleName} has been confirmed. Pickup: ${bookingData.pickupDate}`,
        tag: 'booking-confirmed',
        data: { type: 'booking', action: 'view-booking', bookingId: bookingData.id }
      },
      cancelled: {
        title: 'Booking Cancelled',
        body: `Your booking for ${bookingData.vehicleName} has been cancelled.`,
        tag: 'booking-cancelled',
        data: { type: 'booking', action: 'view-bookings', bookingId: bookingData.id }
      },
      reminder: {
        title: 'Booking Reminder',
        body: `Don't forget! Your booking for ${bookingData.vehicleName} starts tomorrow.`,
        tag: 'booking-reminder',
        data: { type: 'booking', action: 'view-booking', bookingId: bookingData.id }
      }
    };

    const notification = notifications[type];
    await this.showNotification(notification);
  }

  async showMessageNotification(senderName: string, message: string, conversationId: string): Promise<void> {
    await this.showNotification({
      title: `New message from ${senderName}`,
      body: message,
      tag: `message-${conversationId}`,
      data: { type: 'message', action: 'open-conversation', conversationId },
      actions: [
        { action: 'reply', title: 'Reply' },
        { action: 'view', title: 'View Conversation' }
      ]
    });
  }

  async showPaymentNotification(type: 'success' | 'failed' | 'refund', amount: number, currency: string = 'ZAR'): Promise<void> {
    const notifications = {
      success: {
        title: 'Payment Successful',
        body: `Payment of ${currency} ${amount.toLocaleString()} has been processed successfully.`,
        tag: 'payment-success'
      },
      failed: {
        title: 'Payment Failed',
        body: `Payment of ${currency} ${amount.toLocaleString()} could not be processed. Please try again.`,
        tag: 'payment-failed'
      },
      refund: {
        title: 'Refund Processed',
        body: `Refund of ${currency} ${amount.toLocaleString()} has been processed.`,
        tag: 'payment-refund'
      }
    };

    const notification = notifications[type];
    await this.showNotification(notification);
  }

  async showSystemNotification(title: string, body: string, type: 'info' | 'warning' | 'error' = 'info'): Promise<void> {
    await this.showNotification({
      title,
      body,
      tag: `system-${type}`,
      data: { type: 'system', notificationType: type }
    });
  }

  // Schedule notifications for future events
  async scheduleBookingReminder(bookingId: string, vehicleName: string, reminderDate: Date): Promise<void> {
    const now = new Date();
    const timeUntilReminder = reminderDate.getTime() - now.getTime();

    if (timeUntilReminder > 0) {
      setTimeout(async () => {
        await this.showBookingNotification('reminder', {
          id: bookingId,
          vehicleName
        });
      }, timeUntilReminder);
    }
  }

  // Handle notification clicks
  setupNotificationClickHandler(): void {
    if (this.registration) {
      this.registration.addEventListener('notificationclick', (event) => {
        event.notification.close();
        
        const data = event.notification.data;
        
        if (data?.action === 'view-booking') {
          window.open(`/dashboard?booking=${data.bookingId}`, '_blank');
        } else if (data?.action === 'open-conversation') {
          window.open(`/dashboard?messages=${data.conversationId}`, '_blank');
        } else if (data?.action === 'view-bookings') {
          window.open('/dashboard', '_blank');
        } else {
          window.open('/', '_blank');
        }
      });
    }
  }

  getPermission(): NotificationPermission {
    return this.permission;
  }

  isSupported(): boolean {
    return 'Notification' in window && 'serviceWorker' in navigator;
  }
}

export const notificationService = new NotificationService();