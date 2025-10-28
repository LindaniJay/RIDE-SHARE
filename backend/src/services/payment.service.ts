import Stripe from 'stripe';
import { Op } from 'sequelize';
import { Payment } from '../models/Payment';
import { Booking } from '../models/Booking';
import { env } from '../config/env';
import { logger } from '../utils/logger';
import { NotificationService } from './notification.service';

export interface PaymentIntentData {
  amount: number;
  currency: string;
  bookingId: string;
  renterId: string;
  hostId: string;
}

export interface PayFastData {
  amount: number;
  item_name: string;
  item_description: string;
  return_url: string;
  cancel_url: string;
  notify_url: string;
  m_payment_id: string;
}

export class PaymentService {
  private static stripe: Stripe | null = null;

  // Initialize Stripe
  static initializeStripe(): Stripe | null {
    if (!this.stripe && env.STRIPE_SECRET_KEY) {
      this.stripe = new Stripe(env.STRIPE_SECRET_KEY, {
        apiVersion: '2023-10-16',
      });
    }
    return this.stripe;
  }

  // Create Stripe payment intent
  static async createStripePaymentIntent(data: PaymentIntentData): Promise<{ clientSecret: string; paymentId: string }> {
    try {
      const stripe = this.initializeStripe();
      if (!stripe) {
        throw new Error('Stripe not configured');
      }

      // Create payment record
      const payment = await Payment.create({
        bookingId: parseInt(data.bookingId),
        renter_id: parseInt(data.renterId),
        host_id: parseInt(data.hostId),
        amount: data.amount,
        currency: data.currency,
        paymentMethod: 'stripe',
        payment_provider: 'stripe',
        status: 'pending',
      });

      // Create Stripe payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(data.amount * 100), // Convert to cents
        currency: data.currency.toLowerCase(),
        metadata: {
          booking_id: data.bookingId,
          payment_id: payment.id,
        },
      });

      // Update payment with Stripe details
      payment.stripe_payment_intent_id = paymentIntent.id;
      await payment.save();

      return {
        clientSecret: paymentIntent.client_secret!,
        paymentId: payment.id.toString(),
      };
    } catch (error) {
      logger.error('Error creating Stripe payment intent:', error);
      throw error;
    }
  }

  // Confirm Stripe payment
  static async confirmStripePayment(paymentIntentId: string): Promise<boolean> {
    try {
      const stripe = this.initializeStripe();
      if (!stripe) {
        throw new Error('Stripe not configured');
      }

      const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
      
      if (paymentIntent.status === 'succeeded') {
        // Find and update payment
        const payment = await Payment.findOne({
          where: { stripe_payment_intent_id: paymentIntentId },
        });

        if (payment) {
          payment.markAsCompleted(paymentIntent.id);
          await payment.save();

          // Update booking status
          const booking = await Booking.findByPk(payment.booking_id);
          if (booking) {
            booking.approve();
            await booking.save();
          }

          // Notify host
          await NotificationService.notifyPaymentReceived(
            payment.host_id?.toString() || '',
            payment.amount,
            payment.currency
          );

          logger.info(`Stripe payment confirmed: ${paymentIntentId}`);
          return true;
        }
      }

      return false;
    } catch (error) {
      logger.error('Error confirming Stripe payment:', error);
      throw error;
    }
  }

  // Create PayFast payment
  static async createPayFastPayment(data: PaymentIntentData, returnUrl: string, cancelUrl: string, notifyUrl: string): Promise<{ paymentUrl: string; paymentId: string }> {
    try {
      if (!env.PAYFAST_MERCHANT_ID || !env.PAYFAST_MERCHANT_KEY) {
        throw new Error('PayFast not configured');
      }

      // Create payment record
      const payment = await Payment.create({
        bookingId: parseInt(data.bookingId),
        renter_id: parseInt(data.renterId),
        host_id: parseInt(data.hostId),
        amount: data.amount,
        currency: data.currency,
        paymentMethod: 'payfast',
        payment_provider: 'payfast',
        status: 'pending',
      });

      // Get booking details for PayFast
      const booking = await Booking.findByPk(data.bookingId);
      if (!booking) {
        throw new Error('Booking not found');
      }

      // Create PayFast payment data
      const payFastData: PayFastData = {
        amount: data.amount,
        item_name: `Booking #${booking.id}`,
        item_description: 'Vehicle rental booking',
        return_url: returnUrl,
        cancel_url: cancelUrl,
        notify_url: notifyUrl,
        m_payment_id: payment.id.toString(),
      };

      // Generate PayFast signature
      const signature = this.generatePayFastSignature(payFastData);
      
      // Build PayFast URL
      const baseUrl = env.PAYFAST_SANDBOX ? 'https://sandbox.payfast.co.za' : 'https://www.payfast.co.za';
      const params = new URLSearchParams();
      params.append('amount', payFastData.amount.toString());
      params.append('item_name', payFastData.item_name);
      params.append('item_description', payFastData.item_description);
      params.append('return_url', payFastData.return_url);
      params.append('cancel_url', payFastData.cancel_url);
      params.append('notify_url', payFastData.notify_url);
      params.append('m_payment_id', payFastData.m_payment_id);
      params.append('signature', signature);
      params.append('merchant_id', env.PAYFAST_MERCHANT_ID);
      params.append('merchant_key', env.PAYFAST_MERCHANT_KEY);

      const paymentUrl = `${baseUrl}/eng/process?${params.toString()}`;

      return {
        paymentUrl,
        paymentId: payment.id.toString(),
      };
    } catch (error) {
      logger.error('Error creating PayFast payment:', error);
      throw error;
    }
  }

  // Generate PayFast signature
  private static generatePayFastSignature(data: PayFastData): string {
    const crypto = require('crypto');
    const passphrase = env.PAYFAST_PASSPHRASE || '';
    
    // Create parameter string
    const paramString = Object.keys(data)
      .sort()
      .map(key => `${key}=${encodeURIComponent(data[key as keyof PayFastData])}`)
      .join('&');

    // Add passphrase if provided
    const stringToSign = passphrase ? `${paramString}&passphrase=${passphrase}` : paramString;
    
    // Generate MD5 hash
    return crypto.createHash('md5').update(stringToSign).digest('hex');
  }

  // Verify PayFast payment
  static async verifyPayFastPayment(paymentData: any): Promise<boolean> {
    try {
      const { m_payment_id, signature, ...otherData } = paymentData;
      
      // Find payment
      const payment = await Payment.findByPk(m_payment_id);
      if (!payment) {
        return false;
      }

      // Verify signature
      const expectedSignature = this.generatePayFastSignature(otherData);
      if (signature !== expectedSignature) {
        logger.error('PayFast signature verification failed');
        return false;
      }

      // Update payment status
      payment.markAsCompleted(m_payment_id);
      await payment.save();

      // Update booking status
      const booking = await Booking.findByPk(payment.booking_id);
      if (booking) {
        booking.approve();
        await booking.save();
      }

      // Notify host
      await NotificationService.notifyPaymentReceived(
        payment.host_id?.toString() || '',
        payment.amount,
        payment.currency
      );

      logger.info(`PayFast payment verified: ${m_payment_id}`);
      return true;
    } catch (error) {
      logger.error('Error verifying PayFast payment:', error);
      return false;
    }
  }

  // Get payment by ID
  static async getPayment(paymentId: string): Promise<Payment | null> {
    try {
      return await Payment.findByPk(paymentId);
    } catch (error) {
      logger.error('Error fetching payment:', error);
      throw error;
    }
  }

  // Get user payments
  static async getUserPayments(userId: string, page: number = 1, limit: number = 20): Promise<{ payments: Payment[]; total: number }> {
    try {
      const offset = (page - 1) * limit;
      
      const { count, rows } = await Payment.findAndCountAll({
        where: {
          [Op.or]: [
            { renter_id: userId },
            { host_id: userId }
          ]
        },
        order: [['created_at', 'DESC']],
        limit,
        offset,
      });

      return {
        payments: rows,
        total: count,
      };
    } catch (error) {
      logger.error('Error fetching user payments:', error);
      throw error;
    }
  }

  // Refund payment
  static async refundPayment(paymentId: string, amount: number, reason: string): Promise<boolean> {
    try {
      const payment = await Payment.findByPk(paymentId);
      if (!payment) {
        return false;
      }

      if (payment.payment_provider === 'stripe') {
        const stripe = this.initializeStripe();
        if (stripe && payment.stripe_payment_intent_id) {
          await stripe.refunds.create({
            payment_intent: payment.stripe_payment_intent_id,
            amount: Math.round(amount * 100),
            reason: 'requested_by_customer',
          });
        }
      }

      // Update payment record
      payment.refund(amount, reason);
      await payment.save();

      logger.info(`Payment ${paymentId} refunded: ${amount}`);
      return true;
    } catch (error) {
      logger.error('Error refunding payment:', error);
      return false;
    }
  }
}
