import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest } from '../middlewares/auth';
import { Booking } from '../models/Booking';
import { User } from '../models/User';
import { Listing } from '../models/Listing';
import { Op } from 'sequelize';
import { sequelize as db } from '../config/database';

const router = express.Router();

// Payment validation schemas
const createPaymentSchema = z.object({
  bookingId: z.number(),
  amount: z.number().positive(),
  currency: z.string().default('ZAR'),
  paymentMethod: z.enum(['stripe', 'payfast']),
  paymentMethodId: z.string().optional(),
});

const refundPaymentSchema = z.object({
  bookingId: z.number(),
  amount: z.number().positive().optional(),
  reason: z.string().optional(),
});

// Get payment history
router.get('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    // In a real implementation, you would fetch from a payments table
    // For now, we'll return mock data
    const payments = [
      {
        id: 1,
        amount: 500,
        status: 'completed',
        method: 'stripe',
        bookingId: 'booking_123',
        createdAt: new Date().toISOString()
      }
    ];

    res.json({
      success: true,
      data: payments
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create payment intent (Stripe)
router.post('/stripe/create-intent', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId, amount, currency } = createPaymentSchema.parse(req.body);
    
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId, 
        renterId: req.user!.id 
      },
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['title', 'pricePerDay']
        }
      ]
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Calculate total with service fees (5% platform fee)
    const serviceFee = Math.round(amount * 0.05);
    const totalAmount = amount + serviceFee;

    // In a real implementation, you would integrate with Stripe API
    const paymentIntent = {
      id: `pi_${Date.now()}`,
      client_secret: `pi_${Date.now()}_secret_${Math.random().toString(36).substr(2, 9)}`,
      amount: totalAmount,
      currency: currency || 'ZAR',
      status: 'requires_payment_method'
    };

    res.json({
      success: true,
      paymentIntent,
      breakdown: {
        baseAmount: amount,
        serviceFee,
        totalAmount
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create Payfast payment
router.post('/payfast/create', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId, amount, currency } = createPaymentSchema.parse(req.body);
    
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { 
        id: bookingId, 
        renterId: req.user!.id 
      }
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Calculate total with service fees
    const serviceFee = Math.round(amount * 0.05);
    const totalAmount = amount + serviceFee;

    // Generate Payfast payment data
    const paymentData = {
      merchant_id: process.env.PAYFAST_MERCHANT_ID,
      merchant_key: process.env.PAYFAST_MERCHANT_KEY,
      return_url: `${process.env.FRONTEND_URL}/payment/success`,
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
      notify_url: `${process.env.BACKEND_URL}/api/payments/payfast/notify`,
      name_first: req.user!.firstName,
      name_last: req.user!.lastName,
      email_address: req.user!.email,
      m_payment_id: `booking_${bookingId}`,
      amount: (totalAmount / 100).toFixed(2), // Payfast expects amount in Rands
      item_name: `Vehicle Rental - Booking #${bookingId}`,
      item_description: `Rental payment for booking ${bookingId}`,
      custom_str1: bookingId.toString(),
      custom_str2: req.user!.id.toString()
    };

    // Generate signature (simplified - in production use proper Payfast signature generation)
    const signature = `signature_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    res.json({
      success: true,
      paymentData: {
        ...paymentData,
        signature
      },
      payfastUrl: `${process.env.PAYFAST_URL}/eng/process`,
      breakdown: {
        baseAmount: amount,
        serviceFee,
        totalAmount
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Confirm payment (Stripe)
router.post('/stripe/confirm', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { paymentIntentId, bookingId } = req.body;

    // In a real implementation, you would verify the payment with Stripe
    // For now, we'll simulate a successful payment
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Update booking status
    await booking.update({ 
      status: 'confirmed',
      paymentStatus: 'paid',
      paymentIntentId 
    });

    res.json({
      success: true,
      message: 'Payment confirmed successfully',
      booking: {
        id: booking.id,
        status: booking.status,
        paymentStatus: 'paid'
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Payfast notification handler
router.post('/payfast/notify', async (req, res) => {
  try {
    const { m_payment_id, pf_payment_id, payment_status, amount_gross } = req.body;
    
    // Verify Payfast signature (simplified)
    // In production, implement proper Payfast signature verification
    
    if (payment_status === 'COMPLETE') {
      const bookingId = m_payment_id.replace('booking_', '');
      const booking = await Booking.findByPk(bookingId);
      
      if (booking) {
        await booking.update({
          status: 'confirmed',
          paymentStatus: 'paid',
          paymentReference: pf_payment_id
        });
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Payfast notification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Process refund
router.post('/refund', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { bookingId, amount, reason } = refundPaymentSchema.parse(req.body);
    
    // Check if user is admin or booking owner
    const booking = await Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (req.user!.role !== 'admin' && booking.renterId !== req.user!.id) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // In a real implementation, you would process the refund with the payment provider
    const refundAmount = amount || booking.totalPrice;
    
    // Update booking status
    await booking.update({
      status: 'cancelled',
      refundAmount,
      refundReason: reason,
      refundedAt: new Date()
    });

    res.json({
      success: true,
      message: 'Refund processed successfully',
      refundAmount
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get payment history
router.get('/history', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.findAndCountAll({
      where: { 
        renterId: req.user!.id,
        paymentStatus: 'paid'
      },
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['title', 'make', 'model']
        }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      payments: bookings.rows,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: bookings.count,
        pages: Math.ceil(bookings.count / Number(limit))
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get host earnings
router.get('/earnings', authenticateToken, async (req: AuthRequest, res) => {
  try {
    if (req.user!.role !== 'host' && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Host access required' });
    }

    const { period = 'month' } = req.query;
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    }

    // Get host's vehicles
    const hostVehicles = await Listing.findAll({
      where: { hostId: req.user!.id },
      attributes: ['id']
    });
    const vehicleIds = hostVehicles.map(v => v.id);

    // Get earnings from completed bookings
    const earnings = await Booking.findAll({
      where: {
        vehicleId: { [Op.in]: vehicleIds },
        status: 'completed',
        createdAt: { [Op.gte]: startDate }
      },
      attributes: [
        'totalPrice',
        'createdAt',
        [db.fn('DATE', db.col('createdAt')), 'date']
      ],
      include: [
        {
          model: Listing,
          as: 'vehicle',
          attributes: ['title']
        }
      ]
    });

    const totalEarnings = earnings.reduce((sum, booking) => sum + booking.totalPrice, 0);
    const platformFee = Math.round(totalEarnings * 0.1); // 10% platform fee
    const netEarnings = totalEarnings - platformFee;

    res.json({
      success: true,
      earnings: {
        total: totalEarnings,
        platformFee,
        net: netEarnings,
        period,
        breakdown: earnings
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;