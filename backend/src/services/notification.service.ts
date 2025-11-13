import { Notification } from '../models/Notification';
import { User } from '../models/User';
import { logger } from '../utils/logger';
import { io } from '../socket';

export interface CreateNotificationData {
  userId: string;
  type: Notification['type'];
  title: string;
  message: string;
  data?: any;
}

export class NotificationService {
  // Create a new notification
  static async createNotification(data: CreateNotificationData): Promise<Notification> {
    try {
      const notification = await Notification.create({
        userId: String(data.userId),
        isRead: false,
        type: data.type,
        title: data.title,
        message: data.message,
        data: data.data,
      });

      // Send real-time notification
      this.sendRealtimeNotification(notification);

      logger.info(`Notification created for user ${data.userId}: ${data.title}`);
      return notification;
    } catch (error) {
      logger.error('Error creating notification:', error);
      throw error;
    }
  }

  // Get user notifications
  static async getUserNotifications(
    userId: string,
    page: number = 1,
    limit: number = 20,
    unreadOnly: boolean = false
  ): Promise<{ notifications: Notification[]; total: number; unreadCount: number }> {
    try {
      const offset = (page - 1) * limit;
      
      const whereClause: any = { userId: userId };
      if (unreadOnly) {
        whereClause.is_read = false;
      }

      const { count, rows } = await Notification.findAndCountAll({
        where: whereClause,
        order: [['createdAt', 'DESC']],
        limit,
        offset,
      });

      const unreadCount = await Notification.count({
        where: { userId: userId, is_read: false },
      });

      return {
        notifications: rows,
        total: count,
        unreadCount,
      };
    } catch (error) {
      logger.error('Error fetching notifications:', error);
      throw error;
    }
  }

  // Mark notification as read
  static async markAsRead(notificationId: string, userId: string): Promise<boolean> {
    try {
      const notification = await Notification.findOne({
        where: { id: notificationId, userId: userId },
      });

      if (!notification) {
        return false;
      }

      notification.markAsRead();
      await notification.save();

      logger.info(`Notification ${notificationId} marked as read`);
      return true;
    } catch (error) {
      logger.error('Error marking notification as read:', error);
      throw error;
    }
  }

  // Mark all notifications as read
  static async markAllAsRead(userId: string): Promise<number> {
    try {
      const [updatedCount] = await Notification.update(
        { isRead: true, readAt: new Date() },
        { where: { userId: userId, is_read: false } }
      );

      logger.info(`Marked ${updatedCount} notifications as read for user ${userId}`);
      return updatedCount;
    } catch (error) {
      logger.error('Error marking all notifications as read:', error);
      throw error;
    }
  }

  // Delete notification
  static async deleteNotification(notificationId: string, userId: string): Promise<boolean> {
    try {
      const deletedCount = await Notification.destroy({
        where: { id: notificationId, userId: userId },
      });

      if (deletedCount > 0) {
        logger.info(`Notification ${notificationId} deleted`);
        return true;
      }
      return false;
    } catch (error) {
      logger.error('Error deleting notification:', error);
      throw error;
    }
  }

  // Send real-time notification
  static sendRealtimeNotification(notification: Notification): void {
    try {
      io.to(`user_${notification.userId}`).emit('notification', {
        id: notification.id,
        type: notification.type,
        title: notification.title,
        message: notification.message,
        data: notification.data,
        is_read: notification.is_read,
        createdAt: notification.createdAt,
      });
    } catch (error) {
      logger.error('Error sending real-time notification:', error);
    }
  }

  // Notify booking request
  static async notifyBookingRequest(hostId: string, renterName: string, listingTitle: string): Promise<void> {
    await this.createNotification({
      userId: hostId,
      type: 'booking_request',
      title: 'New Booking Request',
      message: `${renterName} has requested to book "${listingTitle}"`,
      data: { renterName, listingTitle },
    });
  }

  // Notify booking approval
  static async notifyBookingApproval(renterId: string, hostName: string, listingTitle: string): Promise<void> {
    await this.createNotification({
      userId: renterId,
      type: 'booking_approved',
      title: 'Booking Approved',
      message: `${hostName} has approved your booking for "${listingTitle}"`,
      data: { hostName, listingTitle },
    });
  }

  // Notify booking rejection
  static async notifyBookingRejection(renterId: string, hostName: string, listingTitle: string): Promise<void> {
    await this.createNotification({
      userId: renterId,
      type: 'booking_rejected',
      title: 'Booking Rejected',
      message: `${hostName} has rejected your booking for "${listingTitle}"`,
      data: { hostName, listingTitle },
    });
  }

  // Notify payment received
  static async notifyPaymentReceived(hostId: string, amount: number, currency: string): Promise<void> {
    await this.createNotification({
      userId: hostId,
      type: 'payment_received',
      title: 'Payment Received',
      message: `You have received a payment of ${currency} ${amount.toFixed(2)}`,
      data: { amount, currency },
    });
  }

  // Notify listing approval
  static async notifyListingApproval(hostId: string, listingTitle: string): Promise<void> {
    await this.createNotification({
      userId: hostId,
      type: 'listing_approved',
      title: 'Listing Approved',
      message: `Your listing "${listingTitle}" has been approved and is now live`,
      data: { listingTitle },
    });
  }

  // Notify listing rejection
  static async notifyListingRejection(hostId: string, listingTitle: string, reason: string): Promise<void> {
    await this.createNotification({
      userId: hostId,
      type: 'listing_rejected',
      title: 'Listing Rejected',
      message: `Your listing "${listingTitle}" has been rejected. Reason: ${reason}`,
      data: { listingTitle, reason },
    });
  }

  // Notify review received
  static async notifyReviewReceived(userId: string, reviewerName: string, rating: number): Promise<void> {
    await this.createNotification({
      userId,
      type: 'review_received',
      title: 'New Review',
      message: `${reviewerName} left you a ${rating}-star review`,
      data: { reviewerName, rating },
    });
  }

  // Send system announcement
  static async sendSystemAnnouncement(userIds: string[], title: string, message: string): Promise<void> {
    try {
      const notifications = await Promise.all(
        userIds.map(userId =>
          this.createNotification({
            userId,
            type: 'system_announcement',
            title,
            message,
          })
        )
      );

      logger.info(`System announcement sent to ${notifications.length} users`);
    } catch (error) {
      logger.error('Error sending system announcement:', error);
      throw error;
    }
  }
}

