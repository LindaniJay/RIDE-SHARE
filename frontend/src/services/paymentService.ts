import { notificationService } from './notificationService';

export interface PaymentMethod {
  id: string;
  type: 'card' | 'eft' | 'payfast' | 'snapscan' | 'zapper' | 'bank_transfer';
  name: string;
  description: string;
  icon: string;
  enabled: boolean;
  processingFee: number;
  minAmount: number;
  maxAmount: number;
}

export interface PaymentRequest {
  amount: number;
  currency: string;
  bookingId: string;
  paymentMethod: string;
  customerInfo: {
    email: string;
    name: string;
    phone?: string;
  };
  metadata?: any;
}

export interface PaymentResponse {
  success: boolean;
  paymentId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  redirectUrl?: string;
  qrCode?: string;
  reference?: string;
  error?: string;
}

export interface SplitPaymentRequest {
  totalAmount: number;
  currency: string;
  participants: Array<{
    email: string;
    name: string;
    amount: number;
    paymentMethod: string;
  }>;
  bookingId: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: 'monthly' | 'yearly';
  features: string[];
  benefits: string[];
  popular?: boolean;
}

export interface LoyaltyPoints {
  total: number;
  available: number;
  used: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  nextTierPoints: number;
  history: Array<{
    date: string;
    points: number;
    description: string;
    type: 'earned' | 'redeemed' | 'expired';
  }>;
}

class PaymentService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Get available payment methods
   */
  async getPaymentMethods(): Promise<PaymentMethod[]> {
    return [
      {
        id: 'card',
        type: 'card',
        name: 'Credit/Debit Card',
        description: 'Visa, Mastercard, American Express',
        icon: 'credit-card',
        enabled: true,
        processingFee: 0.029, // 2.9%
        minAmount: 10,
        maxAmount: 50000
      },
      {
        id: 'eft',
        type: 'eft',
        name: 'EFT Transfer',
        description: 'Electronic Funds Transfer',
        icon: 'bank',
        enabled: true,
        processingFee: 0,
        minAmount: 50,
        maxAmount: 100000
      },
      {
        id: 'payfast',
        type: 'payfast',
        name: 'PayFast',
        description: 'South African payment gateway',
        icon: 'smartphone',
        enabled: true,
        processingFee: 0.035, // 3.5%
        minAmount: 10,
        maxAmount: 100000
      },
      {
        id: 'snapscan',
        type: 'snapscan',
        name: 'SnapScan',
        description: 'Mobile payment solution',
        icon: 'smartphone',
        enabled: true,
        processingFee: 0.025, // 2.5%
        minAmount: 5,
        maxAmount: 50000
      },
      {
        id: 'zapper',
        type: 'zapper',
        name: 'Zapper',
        description: 'Mobile payment app',
        icon: 'smartphone',
        enabled: true,
        processingFee: 0.025, // 2.5%
        minAmount: 5,
        maxAmount: 50000
      },
      {
        id: 'bank_transfer',
        type: 'bank_transfer',
        name: 'Bank Transfer',
        description: 'Direct bank transfer',
        icon: 'bank',
        enabled: true,
        processingFee: 0,
        minAmount: 100,
        maxAmount: 500000
      }
    ];
  }

  /**
   * Process payment
   */
  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/process`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        // Show success notification
        await notificationService.showPaymentNotification(
          'success',
          request.amount,
          request.currency
        );
      } else {
        // Show failure notification
        await notificationService.showPaymentNotification(
          'failed',
          request.amount,
          request.currency
        );
      }

      return data;
    } catch (error) {
      console.error('Error processing payment:', error);
      return {
        success: false,
        paymentId: '',
        status: 'failed',
        error: 'Payment processing failed'
      };
    }
  }

  /**
   * Process split payment
   */
  async processSplitPayment(request: SplitPaymentRequest): Promise<PaymentResponse[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/split`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();
      return data.payments || [];
    } catch (error) {
      console.error('Error processing split payment:', error);
      return [];
    }
  }

  /**
   * Get subscription plans
   */
  async getSubscriptionPlans(): Promise<SubscriptionPlan[]> {
    return [
      {
        id: 'basic',
        name: 'Basic',
        description: 'Perfect for occasional renters',
        price: 99,
        currency: 'ZAR',
        interval: 'monthly',
        features: [
          '5% discount on all bookings',
          'Priority customer support',
          'Free cancellation up to 48 hours',
          'Basic insurance coverage'
        ],
        benefits: [
          'Save on frequent rentals',
          'Better booking flexibility',
          'Enhanced protection'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        description: 'Great for regular renters',
        price: 199,
        currency: 'ZAR',
        interval: 'monthly',
        features: [
          '10% discount on all bookings',
          'Priority customer support',
          'Free cancellation up to 24 hours',
          'Comprehensive insurance coverage',
          'Free delivery and pickup',
          'Exclusive vehicle access'
        ],
        benefits: [
          'Maximum savings',
          'Premium service',
          'Exclusive perks'
        ],
        popular: true
      },
      {
        id: 'business',
        name: 'Business',
        description: 'Designed for business users',
        price: 499,
        currency: 'ZAR',
        interval: 'monthly',
        features: [
          '15% discount on all bookings',
          'Dedicated account manager',
          'Free cancellation up to 12 hours',
          'Full insurance coverage',
          'Free delivery and pickup',
          'Corporate billing',
          'Fleet management tools',
          'API access'
        ],
        benefits: [
          'Corporate benefits',
          'Fleet management',
          'Business tools'
        ]
      }
    ];
  }

  /**
   * Subscribe to a plan
   */
  async subscribeToPlan(planId: string, paymentMethod: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/subscriptions/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          planId,
          paymentMethod
        })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error subscribing to plan:', error);
      return {
        success: false,
        paymentId: '',
        status: 'failed',
        error: 'Subscription failed'
      };
    }
  }

  /**
   * Get loyalty points
   */
  async getLoyaltyPoints(): Promise<LoyaltyPoints> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/loyalty/points`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.points || this.getDefaultLoyaltyPoints();
    } catch (error) {
      console.error('Error getting loyalty points:', error);
      return this.getDefaultLoyaltyPoints();
    }
  }

  /**
   * Get default loyalty points
   */
  private getDefaultLoyaltyPoints(): LoyaltyPoints {
    return {
      total: 0,
      available: 0,
      used: 0,
      tier: 'bronze',
      nextTierPoints: 100,
      history: []
    };
  }

  /**
   * Earn loyalty points
   */
  async earnLoyaltyPoints(amount: number, description: string): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/loyalty/earn`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          amount,
          description
        })
      });
    } catch (error) {
      console.error('Error earning loyalty points:', error);
    }
  }

  /**
   * Redeem loyalty points
   */
  async redeemLoyaltyPoints(points: number, description: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/loyalty/redeem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          points,
          description
        })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error redeeming loyalty points:', error);
      return {
        success: false,
        paymentId: '',
        status: 'failed',
        error: 'Redemption failed'
      };
    }
  }

  /**
   * Get payment history
   */
  async getPaymentHistory(limit: number = 20, offset: number = 0): Promise<any[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/history?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.payments || [];
    } catch (error) {
      console.error('Error getting payment history:', error);
      return [];
    }
  }

  /**
   * Request refund
   */
  async requestRefund(paymentId: string, reason: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/refund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          paymentId,
          reason
        })
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error requesting refund:', error);
      return {
        success: false,
        paymentId: '',
        status: 'failed',
        error: 'Refund request failed'
      };
    }
  }

  /**
   * Get payment status
   */
  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/status/${paymentId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error getting payment status:', error);
      return {
        success: false,
        paymentId,
        status: 'failed',
        error: 'Status check failed'
      };
    }
  }

  /**
   * Calculate processing fees
   */
  calculateProcessingFees(amount: number, paymentMethod: string): number {
    const fees: { [key: string]: number } = {
      'card': 0.029,
      'eft': 0,
      'payfast': 0.035,
      'snapscan': 0.025,
      'zapper': 0.025,
      'bank_transfer': 0
    };

    const feeRate = fees[paymentMethod] || 0;
    return Math.round(amount * feeRate * 100) / 100;
  }

  /**
   * Get payment summary
   */
  getPaymentSummary(amount: number, paymentMethod: string): {
    subtotal: number;
    processingFee: number;
    total: number;
    currency: string;
  } {
    const processingFee = this.calculateProcessingFees(amount, paymentMethod);
    
    return {
      subtotal: amount,
      processingFee,
      total: amount + processingFee,
      currency: 'ZAR'
    };
  }

  /**
   * Validate payment method
   */
  validatePaymentMethod(amount: number, paymentMethod: string): {
    valid: boolean;
    error?: string;
  } {
    const methods = {
      'card': { min: 10, max: 50000 },
      'eft': { min: 50, max: 100000 },
      'payfast': { min: 10, max: 100000 },
      'snapscan': { min: 5, max: 50000 },
      'zapper': { min: 5, max: 50000 },
      'bank_transfer': { min: 100, max: 500000 }
    };

    const limits = methods[paymentMethod as keyof typeof methods];
    if (!limits) {
      return { valid: false, error: 'Invalid payment method' };
    }

    if (amount < limits.min) {
      return { valid: false, error: `Minimum amount is R${limits.min}` };
    }

    if (amount > limits.max) {
      return { valid: false, error: `Maximum amount is R${limits.max}` };
    }

    return { valid: true };
  }

  /**
   * Get payment analytics
   */
  async getPaymentAnalytics(): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics || {};
    } catch (error) {
      console.error('Error getting payment analytics:', error);
      return {};
    }
  }
}

export const paymentService = new PaymentService();
