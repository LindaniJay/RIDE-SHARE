import { logger } from '../utils/logger';
import Stripe from 'stripe';
import crypto from 'crypto';
import { Booking } from '../models';

export interface PaymentResult {
  success: boolean;
  paymentId?: string;
  clientSecret?: string;
  redirectUrl?: string;
  error?: string;
}

export interface PaymentWebhookData {
  eventType: string;
  paymentId: string;
  amount: number;
  currency: string;
  status: string;
  metadata?: any;
}

export class PaymentService {
  private static stripe: Stripe;
  private static payfastMerchantId: string;
  private static payfastMerchantKey: string;
  private static payfastPassphrase: string;
  private static payfastSandbox: boolean;

  static initialize() {
    // Initialize Stripe
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2023-10-16',
    });

    // Initialize PayFast
    this.payfastMerchantId = process.env.PAYFAST_MERCHANT_ID || '';
    this.payfastMerchantKey = process.env.PAYFAST_MERCHANT_KEY || '';
    this.payfastPassphrase = process.env.PAYFAST_PASSPHRASE || '';
    this.payfastSandbox = process.env.PAYFAST_SANDBOX === 'true';
  }

  /**
   * Process payment with Stripe
   */
  static async processStripePayment(
    amount: number,
    currency: string,
    bookingId: number,
    customerEmail: string,
    customerName: string
  ): Promise<PaymentResult> {
    try {
      // Create payment intent
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency.toLowerCase(),
        metadata: {
          bookingId: bookingId.toString(),
          customerEmail,
          customerName
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });

      return {
        success: true,
        paymentId: paymentIntent.id,
        clientSecret: paymentIntent.client_secret!,
      };

    } catch (error) {
      logger.error('Stripe payment error:', error);
      return {
        success: false,
        error: 'Failed to create Stripe payment intent'
      };
    }
  }

  /**
   * Process payment with PayFast
   */
  static async processPayFastPayment(
    amount: number,
    bookingId: number,
    customerEmail: string,
    customerName: string,
    returnUrl: string,
    cancelUrl: string,
    notifyUrl: string
  ): Promise<PaymentResult> {
    try {
      const baseUrl = this.payfastSandbox 
        ? 'https://sandbox.payfast.co.za/eng/process' 
        : 'https://www.payfast.co.za/eng/process';

      const data = {
        merchant_id: this.payfastMerchantId,
        merchant_key: this.payfastMerchantKey,
        return_url: returnUrl,
        cancel_url: cancelUrl,
        notify_url: notifyUrl,
        name_first: customerName.split(' ')[0] || '',
        name_last: customerName.split(' ').slice(1).join(' ') || '',
        email_address: customerEmail,
        m_payment_id: bookingId.toString(),
        amount: amount.toFixed(2),
        item_name: `RideShare SA Booking #${bookingId}`,
        item_description: `Vehicle rental booking for ${customerName}`,
      };

      // Generate signature
      const signature = this.generatePayFastSignature(data);

      const formData = {
        ...data,
        signature
      };

      // Create form HTML for redirect
      const formHtml = this.createPayFastForm(baseUrl, formData);

      return {
        success: true,
        redirectUrl: baseUrl,
        paymentId: `pf_${bookingId}_${Date.now()}`,
      };

    } catch (error) {
      logger.error('PayFast payment error:', error);
      return {
        success: false,
        error: 'Failed to create PayFast payment'
      };
    }
  }

  /**
   * Generate PayFast signature
   */
  private static generatePayFastSignature(data: any): string {
    const passphrase = this.payfastPassphrase;
    
    // Create parameter string
    const parameters: string[] = [];
    Object.keys(data)
      .sort()
      .forEach(key => {
        if (data[key] !== '' && data[key] !== null && data[key] !== undefined) {
          parameters.push(`${key}=${encodeURIComponent(data[key])}`);
        }
      });

    const parameterString = parameters.join('&');
    const signatureString = parameterString + (passphrase ? `&passphrase=${passphrase}` : '');
    
    return crypto.createHash('md5').update(signatureString).digest('hex');
  }

  /**
   * Create PayFast form HTML
   */
  private static createPayFastForm(baseUrl: string, formData: any): string {
    let formHtml = `<form id="payfast-form" action="${baseUrl}" method="post">`;
    
    Object.keys(formData).forEach(key => {
      formHtml += `<input type="hidden" name="${key}" value="${formData[key]}">`;
    });
    
    formHtml += '</form>';
    formHtml += '<script>document.getElementById("payfast-form").submit();</script>';
    
    return formHtml;
  }

  /**
   * Handle Stripe webhook
   */
  static async handleStripeWebhook(
    payload: string,
    signature: string
  ): Promise<PaymentWebhookData | null> {
    try {
      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';
      const event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);

      if (event.type === 'payment_intent.succeeded') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        return {
          eventType: 'payment.succeeded',
          paymentId: paymentIntent.id,
          amount: paymentIntent.amount / 100, // Convert from cents
          currency: paymentIntent.currency,
          status: 'completed',
          metadata: paymentIntent.metadata
        };
      }

      if (event.type === 'payment_intent.payment_failed') {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        
        return {
          eventType: 'payment.failed',
          paymentId: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          currency: paymentIntent.currency,
          status: 'failed',
          metadata: paymentIntent.metadata
        };
      }

      return null;

    } catch (error) {
      logger.error('Stripe webhook error:', error);
      return null;
    }
  }

  /**
   * Handle PayFast webhook
   */
  static async handlePayFastWebhook(
    data: any,
    signature: string
  ): Promise<PaymentWebhookData | null> {
    try {
      // Verify PayFast signature
      const calculatedSignature = this.generatePayFastSignature(data);
      
      if (calculatedSignature !== signature) {
        logger.error('PayFast signature verification failed');
        return null;
      }

      const status = data.payment_status;
      const bookingId = parseInt(data.m_payment_id);

      if (status === 'COMPLETE') {
        return {
          eventType: 'payment.succeeded',
          paymentId: data.pf_payment_id,
          amount: parseFloat(data.amount_gross),
          currency: 'ZAR',
          status: 'completed',
          metadata: { bookingId }
        };
      }

      if (status === 'FAILED' || status === 'CANCELLED') {
        return {
          eventType: 'payment.failed',
          paymentId: data.pf_payment_id,
          amount: parseFloat(data.amount_gross),
          currency: 'ZAR',
          status: 'failed',
          metadata: { bookingId }
        };
      }

      return null;

    } catch (error) {
      logger.error('PayFast webhook error:', error);
      return null;
    }
  }

  /**
   * Process payment webhook and update booking
   */
  static async processPaymentWebhook(webhookData: PaymentWebhookData): Promise<boolean> {
    try {
      const bookingId = webhookData.metadata?.bookingId;
      if (!bookingId) {
        logger.error('No booking ID in webhook data');
        return false;
      }

      const booking = await Booking.findByPk(bookingId);
      if (!booking) {
        logger.error(`Booking ${bookingId} not found`);
        return false;
      }

      if (webhookData.eventType === 'payment.succeeded') {
        await booking.update({
          paymentStatus: 'paid',
          status: 'pending' // Still pending host approval
        });

        logger.info(`Payment succeeded for booking ${bookingId}`);
        return true;
      }

      if (webhookData.eventType === 'payment.failed') {
        await booking.update({
          paymentStatus: 'failed',
          status: 'cancelled'
        });

        logger.info(`Payment failed for booking ${bookingId}`);
        return true;
      }

      return false;

    } catch (error) {
      logger.error('Error processing payment webhook:', error);
      return false;
    }
  }

  /**
   * Create refund
   */
  static async createRefund(
    paymentId: string,
    amount: number,
    reason: string = 'requested_by_customer'
  ): Promise<{ success: boolean; refundId?: string; error?: string }> {
    try {
      // Try Stripe first
      if (paymentId.startsWith('pi_')) {
        const refund = await this.stripe.refunds.create({
          payment_intent: paymentId,
          amount: Math.round(amount * 100),
          reason: reason as any,
        });

        return {
          success: true,
          refundId: refund.id
        };
      }

      // PayFast refunds need to be processed manually
      // For now, just mark as refunded in our system
      return {
        success: true,
        refundId: `manual_refund_${Date.now()}`
      };

    } catch (error) {
      logger.error('Refund error:', error);
      return {
        success: false,
        error: 'Failed to process refund'
      };
    }
  }

  /**
   * Get payment status
   */
  static async getPaymentStatus(paymentId: string): Promise<{
    status: string;
    amount: number;
    currency: string;
    created: Date;
  } | null> {
    try {
      if (paymentId.startsWith('pi_')) {
        const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentId);
        
        return {
          status: paymentIntent.status,
          amount: paymentIntent.amount / 100,
          currency: paymentIntent.currency,
          created: new Date(paymentIntent.created * 1000)
        };
      }

      // PayFast status would need to be checked via their API
      return null;

    } catch (error) {
      logger.error('Error getting payment status:', error);
      return null;
    }
  }

  /**
   * Calculate payment fees
   */
  static calculatePaymentFees(amount: number, paymentMethod: 'stripe' | 'payfast'): {
    baseAmount: number;
    fee: number;
    total: number;
  } {
    let feeRate = 0;
    
    if (paymentMethod === 'stripe') {
      // Stripe fees: 2.9% + 30¢
      feeRate = 0.029;
      const fee = (amount * feeRate) + 0.30;
      return {
        baseAmount: amount,
        fee: fee,
        total: amount + fee
      };
    }
    
    if (paymentMethod === 'payfast') {
      // PayFast fees: 3.5% + R2.00
      feeRate = 0.035;
      const fee = (amount * feeRate) + 2.00;
      return {
        baseAmount: amount,
        fee: fee,
        total: amount + fee
      };
    }

    return {
      baseAmount: amount,
      fee: 0,
      total: amount
    };
  }
}

// Initialize payment service
PaymentService.initialize();

export default PaymentService;
