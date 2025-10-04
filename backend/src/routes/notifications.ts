import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { Notification, User } from '../models';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const createNotificationSchema = z.object({
  title: z.string().min(1).max(200),
  message: z.string().min(1).max(1000),
  type: z.enum(['booking_created', 'booking_confirmed', 'booking_cancelled', 'payment_received', 'payment_failed', 'review_received', 'system_announcement', 'security_alert']),
  user_id: z.string().optional(),
  data: z.any().optional(),
  priority: z.enum(['low', 'medium', 'high', 'urgent']).optional().default('medium')
});

const markAsReadSchema = z.object({
  notification_ids: z.array(z.string())
});

// Get user notifications
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20, unread_only } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {
      user_id: req.user!.id
    };

    if (unread_only === 'true') {
      whereClause.is_read = false;
    }

    const { count, rows: notifications } = await Notification.findAndCountAll({
      where: whereClause,
      order: [['created_at', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
        notifications,
        pagination: {
          page: Number(page),
          limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get unread notification count
router.get('/unread-count', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const count = await Notification.count({
      where: {
        user_id: req.user!.id,
        is_read: false
      }
    });

    res.json({
      success: true,
      unread_count: count
    });
  } catch (error) {
    console.error('Error fetching unread count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create notification (admin only)
router.post('/', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const notificationData = createNotificationSchema.parse(req.body);

    const notification = await Notification.create({
      ...notificationData,
      user_id: notificationData.user_id || req.user!.id,
      is_read: false,
      is_sent: false
    });

    res.status(201).json({
      success: true,
      message: 'Notification created successfully',
      notification
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Mark notifications as read
router.put('/mark-read', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { notification_ids } = markAsReadSchema.parse(req.body);

    await Notification.update(
      { is_read: true, read_at: new Date() },
      {
        where: {
          id: notification_ids,
          user_id: req.user!.id
        }
      }
    );

    res.json({
      success: true,
      message: 'Notifications marked as read'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Error marking notifications as read:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Mark all notifications as read
router.put('/mark-all-read', authenticateToken, async (req: AuthRequest, res) => {
  try {
    await Notification.update(
      { is_read: true, read_at: new Date() },
      {
        where: {
          user_id: req.user!.id,
          is_read: false
        }
      }
    );

    res.json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete notification
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const notification = await Notification.findByPk(id);
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    // Check if user owns the notification or is admin
    if (notification.user_id !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    await notification.destroy();

    res.json({
      success: true,
      message: 'Notification deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting notification:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;