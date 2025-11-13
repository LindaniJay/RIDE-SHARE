import { Router, Response } from 'express';
import { Payment } from '../models/Payment';
import { Booking } from '../models/Booking';
import { verifyFirebaseToken, verifyJWT, requireAuth, AuthenticatedRequest } from '../middleware/auth';
import { paymentRateLimit } from '../middleware/rateLimiter';
import { asyncHandler } from '../middleware/errorHandler';
import { PaymentService } from '../services/payment.service';
import { logger } from '../utils/logger';

const router = Router();

// Create Stripe payment intent
router.post('/stripe/create-intent', verifyFirebaseToken, requireAuth, paymentRateLimit, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { bookingId, amount, currency = 'ZAR' } = req.body;

  if (!bookingId || !amount) {
    return res.status(400).json({ error: 'Booking ID and amount are required' });
  }

  try {
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { id: bookingId, renter_id: req.user!.id.toString() }
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.status !== 'approved') {
      return res.status(400).json({ error: 'Booking must be approved to process payment' });
    }

    // Get listing to get host_id
    const listing = await booking.listing;
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    const result = await PaymentService.createStripePaymentIntent({
      bookingId: bookingId,
      amount: Number(amount),
      currency,
      renterId: req.user!.id.toString(),
      hostId: listing.host_id
    });

    logger.info(`Stripe payment intent created for booking ${bookingId}`);

    res.json({
      success: true,
      client_secret: result.clientSecret,
      payment_id: result.paymentId
    });
  } catch (error) {
    logger.error('Error creating Stripe payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
}));

// Confirm Stripe payment
router.post('/stripe/confirm', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { payment_intent_id } = req.body;

  if (!payment_intent_id) {
    return res.status(400).json({ error: 'Payment intent ID is required' });
  }

  try {
    const success = await PaymentService.confirmStripePayment(payment_intent_id);

    if (success) {
      logger.info(`Stripe payment confirmed: ${payment_intent_id}`);
      res.json({
        success: true,
        message: 'Payment confirmed successfully'
      });
    } else {
      res.status(400).json({ error: 'Payment confirmation failed' });
    }
  } catch (error) {
    logger.error('Error confirming Stripe payment:', error);
    res.status(500).json({ error: 'Failed to confirm payment' });
  }
}));

// Create PayFast payment
router.post('/payfast/create', verifyFirebaseToken, requireAuth, paymentRateLimit, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { bookingId, amount, currency = 'ZAR', return_url, cancel_url, notify_url } = req.body;

  if (!bookingId || !amount || !return_url || !cancel_url || !notify_url) {
    return res.status(400).json({ 
      error: 'Booking ID, amount, return URL, cancel URL, and notify URL are required' 
    });
  }

  try {
    // Verify booking exists and belongs to user
    const booking = await Booking.findOne({
      where: { id: bookingId, renter_id: req.user!.id.toString() }
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    if (booking.status !== 'approved') {
      return res.status(400).json({ error: 'Booking must be approved to process payment' });
    }

    // Get listing to get host_id
    const listing = await booking.listing;
    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    const result = await PaymentService.createPayFastPayment({
      bookingId: bookingId,
      amount: Number(amount),
      currency,
      renterId: req.user!.id.toString(),
      hostId: listing.host_id
    }, return_url, cancel_url, notify_url);

    logger.info(`PayFast payment created for booking ${bookingId}`);

    res.json({
      success: true,
      payment_url: result.paymentUrl,
      payment_id: result.paymentId
    });
  } catch (error) {
    logger.error('Error creating PayFast payment:', error);
    res.status(500).json({ error: 'Failed to create PayFast payment' });
  }
}));

// PayFast callback/notify endpoint
router.post('/payfast/notify', asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  try {
    const success = await PaymentService.verifyPayFastPayment(req.body);

    if (success) {
      logger.info('PayFast payment verified successfully');
      res.status(200).send('OK');
    } else {
      logger.error('PayFast payment verification failed');
      res.status(400).send('FAILED');
    }
  } catch (error) {
    logger.error('Error processing PayFast notification:', error);
    res.status(500).send('ERROR');
  }
}));

// Get payment by ID
router.get('/:id', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const payment = await PaymentService.getPayment(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Check if user has access to this payment
    const hasAccess = payment.renter_id === req.user!.id || payment.host_id === req.user!.id;
    
    if (!hasAccess) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json({
      success: true,
      payment
    });
  } catch (error) {
    logger.error('Error fetching payment:', error);
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
}));

// Get user payments
router.get('/', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { page = 1, limit = 20, status, payment_method } = req.query;

  try {
    const result = await PaymentService.getUserPayments(
      req.user!.id.toString(),
      Number(page),
      Number(limit)
    );

    // Filter by status if provided
    let payments = result.payments;
    if (status) {
      payments = payments.filter(payment => payment.status === status);
    }

    // Filter by payment method if provided
    if (payment_method) {
      payments = payments.filter(payment => payment.payment_method === payment_method);
    }

    res.json({
      success: true,
      payments,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: result.total
      }
    });
  } catch (error) {
    logger.error('Error fetching user payments:', error);
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
}));

// Refund payment
router.post('/:id/refund', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { amount, reason } = req.body;

  if (!amount || !reason) {
    return res.status(400).json({ error: 'Amount and reason are required' });
  }

  try {
    const payment = await PaymentService.getPayment(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Check if user has permission to refund
    const canRefund = payment.renter_id === req.user!.id || payment.host_id === req.user!.id;
    
    if (!canRefund) {
      return res.status(403).json({ error: 'Access denied' });
    }

    if (!payment.isCompleted()) {
      return res.status(400).json({ error: 'Only completed payments can be refunded' });
    }

    const success = await PaymentService.refundPayment(id, Number(amount), reason);

    if (success) {
      logger.info(`Payment ${id} refunded by user ${req.user!.id.toString()}`);
      res.json({
        success: true,
        message: 'Payment refunded successfully'
      });
    } else {
      res.status(400).json({ error: 'Refund failed' });
    }
  } catch (error) {
    logger.error('Error refunding payment:', error);
    res.status(500).json({ error: 'Failed to refund payment' });
  }
}));

// Get payment status
router.get('/:id/status', verifyFirebaseToken, requireAuth, asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;

  try {
    const payment = await PaymentService.getPayment(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Check if user has access to this payment
    const hasAccess = payment.renter_id === req.user!.id || payment.host_id === req.user!.id;
    
    if (!hasAccess) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json({
      success: true,
      status: payment.status,
      is_completed: payment.isCompleted(),
      is_failed: payment.isFailed(),
      is_refunded: payment.isRefunded(),
      is_pending: payment.isPending()
    });
  } catch (error) {
    logger.error('Error fetching payment status:', error);
    res.status(500).json({ error: 'Failed to fetch payment status' });
  }
}));

export default router;

