import express from 'express';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { Notification, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/notifications - Get current user's notifications
router.get('/', authenticateToken, async (req: any, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      logger.warn('Notifications request without authenticated user');
      return res.json({
        success: true,
        data: [],
        pagination: {
          total: 0,
          page: 1,
          limit: 20,
          pages: 0
        }
      });
    }

    logger.info(`Fetching notifications for user: ${userId}`);

    // Find user by ID to get their notifications
    const user = await User.findByPk(userId);
    if (!user) {
      logger.warn(`User not found for ID: ${userId}`);
      return res.json({
        success: true,
        data: [],
        pagination: {
          total: 0,
          page: 1,
          limit: 20,
          pages: 0
        }
      });
    }

    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const notifications = await Notification.findAndCountAll({
      where: { userId: userId },
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset: offset
    });

    res.json({
      success: true,
      data: notifications.rows,
      pagination: {
        total: notifications.count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(notifications.count / Number(limit))
      }
    });
  } catch (error: any) {
    logger.error('Error fetching notifications:', {
      error: error.message,
      stack: error.stack,
      userId: req.user?.id
    });
    res.status(500).json({
      success: false,
      error: 'Failed to fetch notifications',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// GET /api/notifications/user/:uid - Get user notifications
router.get('/user/:uid', authenticateToken, async (req, res) => {
  try {
    const { uid } = req.params;
    const { page = 1, limit = 20 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const { count, rows: notifications } = await Notification.findAndCountAll({
      where: { userId: user.id },
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: notifications,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching notifications:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch notifications'
    });
  }
});

// PUT /api/notifications/:id/read - Mark notification as read
router.put('/:id/read', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { uid } = req.body;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    const notification = await Notification.findOne({
      where: { id, userId: user.id }
    });

    if (!notification) {
      return res.status(404).json({
        success: false,
        error: 'Notification not found'
      });
    }

    await notification.update({ isRead: true });

    res.json({
      success: true,
      message: 'Notification marked as read'
    });
  } catch (error) {
    logger.error('Error marking notification as read:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to mark notification as read'
    });
  }
});

// PUT /api/notifications/read-all - Mark all notifications as read
router.put('/read-all', authenticateToken, async (req, res) => {
  try {
    const { uid } = req.body;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    await Notification.update(
      { isRead: true },
      { where: { userId: user.id, isRead: false } }
    );

    res.json({
      success: true,
      message: 'All notifications marked as read'
    });
  } catch (error) {
    logger.error('Error marking all notifications as read:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to mark all notifications as read'
    });
  }
});

export default router;