import express from 'express';
import { authenticateToken } from '../middleware/auth';
import { Booking, User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/payments/user/:uid - Get user's payment history
router.get('/user/:uid', authenticateToken, async (req, res) => {
  try {
    const { uid } = req.params;
    
    // Find user by Firebase UID
    const user = await User.findOne({ where: { firebase_uid: uid } });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Get payments from bookings
    const payments = await Booking.findAll({
      where: { renterId: user.id },
      attributes: ['id', 'totalPrice', 'paymentStatus', 'paymentMethod', 'createdAt'],
      order: [['createdAt', 'DESC']]
    });

    // Transform to payment format
    const paymentHistory = payments.map(booking => ({
      id: `payment_${booking.id}`,
      amount: booking.totalPrice,
      status: booking.paymentStatus,
      method: booking.paymentMethod || 'stripe',
      bookingId: booking.id,
      createdAt: booking.createdAt
    }));

    res.json({
      success: true,
      data: paymentHistory,
      count: paymentHistory.length
    });
  } catch (error) {
    logger.error('Error fetching payment history:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch payment history'
    });
  }
});

// POST /api/payments/initiate - Initiate payment for booking
router.post('/initiate', authenticateToken, async (req, res) => {
  try {
    const { bookingId, paymentMethod, amount } = req.body;
    
    if (!bookingId || !paymentMethod || !amount) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: bookingId, paymentMethod, amount'
      });
    }

    // Find booking
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    // Update booking payment status
    await booking.update({
      paymentStatus: 'pending',
      paymentMethod
    });

    // In a real implementation, you would integrate with Stripe/PayFast here
    // For now, we'll simulate a successful payment
    setTimeout(async () => {
      await booking.update({
        paymentStatus: 'paid'
      });
    }, 2000);

    res.json({
      success: true,
      data: {
        paymentId: `pay_${Date.now()}`,
        status: 'pending',
        amount,
        method: paymentMethod
      },
      message: 'Payment initiated successfully'
    });
  } catch (error) {
    logger.error('Error initiating payment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to initiate payment'
    });
  }
});

// GET /api/payments/status/:paymentId - Check payment status
router.get('/status/:paymentId', authenticateToken, async (req, res) => {
  try {
    const { paymentId } = req.params;
    
    // In a real implementation, you would check with the payment provider
    // For now, return a mock status
    res.json({
      success: true,
      data: {
        paymentId,
        status: 'completed',
        amount: 1000,
        method: 'stripe'
      }
    });
  } catch (error) {
    logger.error('Error checking payment status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check payment status'
    });
  }
});

export default router;