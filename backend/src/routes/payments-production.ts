import express from 'express';
import { z } from 'zod';
import { Op } from 'sequelize';
import { Payment, Booking, User } from '../models';
import { sequelize } from '../config/database';
import { authenticateToken, AuthRequest } from '../middlewares/auth';

const router = express.Router();

// Validation schemas
const createPaymentSchema = z.object({
  booking_id: z.string().uuid(),
  payment_method: z.enum(['stripe', 'payfast', 'bank_transfer', 'cash', 'other']),
  payment_provider: z.string().optional(),
  payment_metadata: z.object({}).optional()
});

const processPaymentSchema = z.object({
  payment_intent_id: z.string().optional(),
  transaction_id: z.string().optional(),
  payment_status: z.enum(['completed', 'failed', 'cancelled']),
  failure_reason: z.string().optional(),
  payment_metadata: z.object({}).optional()
});

// Create payment
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { booking_id, payment_method, payment_provider, payment_metadata } = createPaymentSchema.parse(req.body);

    // Get booking details
    const booking = await Booking.findByPk(booking_id, {
      include: [
        { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email'] }
      ]
    });

    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found',
        message: 'The requested booking was not found'
      });
    }

    // Verify user owns this booking
    if (booking.renter_id !== req.user!.id) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You can only create payments for your own bookings'
      });
    }

    // Check if booking is in a payable state
    if (!['pending', 'confirmed'].includes(booking.payment_status)) {
      return res.status(400).json({
        error: 'Invalid booking payment_status',
        message: 'Payment cannot be processed for bookings in this payment_status'
      });
    }

    // Check if payment already exists
    const existingPayment = await Payment.findOne({
      where: {
        booking_id,
        payment_status: ['pending', 'processing', 'completed']
      }
    });

    if (existingPayment) {
      return res.status(409).json({
        error: 'Payment already exists',
        message: 'A payment for this booking already exists'
      });
    }

    // Create payment record
    const payment = await Payment.create({
      booking_id,
      renter_id: req.user!.id,
      amount: booking.total_amount,
      currency: 'ZAR',
      payment_method,
      payment_provider,
      payment_status: 'pending',
      payment_metadata: payment_metadata || {}
    });

    // Update booking payment status
    await booking.update({ payment_status: 'pending' });

    res.status(201).json({
      message: 'Payment created successfully',
      payment: {
        id: payment.id,
        amount: payment.amount,
        currency: payment.currency,
        payment_method: payment.payment_method,
        payment_status: payment.payment_status,
        createdAt: payment.createdAt
      }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Create payment error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to create payment'
    });
  }
});

// Process payment (webhook or manual processing)
router.post('/:id/process', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { payment_intent_id, transaction_id, payment_status, failure_reason, payment_metadata } = processPaymentSchema.parse(req.body);

    const payment = await Payment.findByPk(id, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!payment) {
      return res.status(404).json({
        error: 'Payment not found',
        message: 'The requested payment was not found'
      });
    }

    // Check permissions (admin or payment owner)
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const canProcess = 
      payment.renter_id === user.id || 
      user.role === 'admin';

    if (!canProcess) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to process this payment'
      });
    }

    // Update payment
    const updateData: any = {
      payment_status,
      processed_at: new Date()
    };

    if (payment_intent_id) {
      updateData.payment_intent_id = payment_intent_id;
    }

    if (transaction_id) {
      updateData.transaction_id = transaction_id;
    }

    if (failure_reason) {
      updateData.failure_reason = failure_reason;
    }

    if (payment_metadata) {
      updateData.payment_metadata = { ...payment.payment_metadata, ...payment_metadata };
    }

    await payment.update(updateData);

    // Update booking payment status based on payment status
    if (payment_status === 'completed') {
      await (payment as any).booking.update({ 
        payment_status: 'paid'
      });
    } else if (payment_status === 'failed') {
      await (payment as any).booking.update({ 
        payment_status: 'failed'
      });
    }

    res.json({
      message: 'Payment processed successfully',
      payment: {
        id: payment.id,
        payment_status: payment.payment_status,
        processed_at: payment.processed_at
      }
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Process payment error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process payment'
    });
  }
});

// Get user's payments
router.get('/my-payments', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { payment_status, page = 1, limit = 10 } = req.query;
    
    const whereClause: any = { renter_id: req.user!.id };
    if (payment_status) {
      whereClause.payment_status = payment_status;
    }

    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: payments } = await Payment.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: Booking, 
          as: 'booking',
          include: [
            { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name'] }
          ]
        }
      ],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      payments,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });

  } catch (error) {
    console.error('Get payments error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch payments'
    });
  }
});

// Get single payment
router.get('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const payment = await Payment.findByPk(id, {
      include: [
        { 
          model: Booking, 
          as: 'booking',
          include: [
            { model: User, as: 'renter', attributes: ['id', 'first_name', 'last_name', 'email'] }
          ]
        }
      ]
    });

    if (!payment) {
      return res.status(404).json({
        error: 'Payment not found',
        message: 'The requested payment was not found'
      });
    }

    // Check permissions
    const user = await User.findByPk(req.user!.id);
    if (!user) {
      return res.status(401).json({
        error: 'Unauthorized',
        message: 'User not found'
      });
    }

    const canView = 
      payment.renter_id === user.id || 
      user.role === 'admin';

    if (!canView) {
      return res.status(403).json({
        error: 'Access denied',
        message: 'You do not have permission to view this payment'
      });
    }

    res.json({ payment });

  } catch (error) {
    console.error('Get payment error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch payment'
    });
  }
});

// Refund payment
router.post('/:id/refund', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { amount, reason } = req.body;

    const payment = await Payment.findByPk(id, {
      include: [
        { model: Booking, as: 'booking' }
      ]
    });

    if (!payment) {
      return res.status(404).json({
        error: 'Payment not found',
        message: 'The requested payment was not found'
      });
    }

    // Check if payment can be refunded
    if (payment.payment_status !== 'succeeded') {
      return res.status(400).json({
        error: 'Payment not completed',
        message: 'Only completed payments can be refunded'
      });
    }

    // Check permissions (admin only for now)
    const user = await User.findByPk(req.user!.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Only administrators can process refunds'
      });
    }

    const refundAmount = amount || payment.amount;

    if (refundAmount > payment.amount) {
      return res.status(400).json({
        error: 'Invalid refund amount',
        message: 'Refund amount cannot exceed payment amount'
      });
    }

    // Update payment
    await payment.update({
      payment_status: refundAmount === payment.amount ? 'refunded' : 'refunded',
      refund_amount: refundAmount,
      refund_reason: reason,
      refund_processed_at: new Date()
    });

    // Update booking payment status
    await (payment as any).booking.update({
      payment_status: refundAmount === payment.amount ? 'refunded' : 'partially_refunded'
    });

    res.json({
      message: 'Refund processed successfully',
      refund_amount: refundAmount
    });

  } catch (error) {
    console.error('Refund payment error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process refund'
    });
  }
});

// Get payment statistics (admin only)
router.get('/admin/statistics', authenticateToken, async (req: AuthRequest, res) => {
  try {
    // Check if user is admin
    const user = await User.findByPk(req.user!.id);
    if (!user || user.role !== 'admin') {
      return res.status(403).json({
        error: 'Access denied',
        message: 'Only administrators can access payment statistics'
      });
    }

    const { start_date, end_date } = req.query;

    const whereClause: any = {};
    if (start_date && end_date) {
      whereClause.createdAt = {
        [Op.between]: [new Date(start_date as string), new Date(end_date as string)]
      };
    }

    // Get payment statistics
    const totalPayments = await Payment.count({ where: whereClause });
    const completedPayments = await Payment.count({ 
      where: { ...whereClause, payment_status: 'completed' } 
    });
    const failedPayments = await Payment.count({ 
      where: { ...whereClause, payment_status: 'failed' } 
    });
    const refundedPayments = await Payment.count({ 
      where: { ...whereClause, payment_status: ['refunded', 'partially_refunded'] } 
    });

    // Get total revenue
    const revenueResult = await Payment.findOne({
      where: { ...whereClause, payment_status: 'completed' },
      attributes: [
        [sequelize.fn('SUM', sequelize.col('amount')), 'total_revenue']
      ],
      raw: true
    });

    const totalRevenue = (revenueResult as any)?.total_revenue || 0;

    // Get refund statistics
    const refundResult = await Payment.findOne({
      where: { ...whereClause, payment_status: ['refunded', 'partially_refunded'] },
      attributes: [
        [sequelize.fn('SUM', sequelize.col('refund_amount')), 'total_refunds']
      ],
      raw: true
    });

    const totalRefunds = (refundResult as any)?.total_refunds || 0;

    res.json({
      statistics: {
        total_payments: totalPayments,
        completed_payments: completedPayments,
        failed_payments: failedPayments,
        refunded_payments: refundedPayments,
        total_revenue: totalRevenue,
        total_refunds: totalRefunds,
        net_revenue: totalRevenue - totalRefunds
      }
    });

  } catch (error) {
    console.error('Get payment statistics error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to fetch payment statistics'
    });
  }
});

export default router;
