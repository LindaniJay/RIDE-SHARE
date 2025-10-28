// import { paymentService } from './paymentService';

export interface PaymentGateway {
  id: string;
  name: string;
  type: 'card' | 'eft' | 'mobile' | 'bank_transfer';
  enabled: boolean;
  processingFee: number;
  minAmount: number;
  maxAmount: number;
  supportedCurrencies: string[];
  features: string[];
}

export interface PaymentRequest {
  amount: number;
  currency: string;
  paymentMethod: string;
  gateway: string;
  bookingId?: string;
  listingId?: string;
  metadata?: Record<string, any>;
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    name?: string;
    address?: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
  };
}

export interface PaymentResponse {
  success: boolean;
  paymentId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  gateway: string;
  transactionId?: string;
  redirectUrl?: string;
  qrCode?: string;
  error?: string;
  metadata?: Record<string, any>;
}

export interface PaymentErrorData {
  code: string;
  message: string;
  details?: string;
  retryable: boolean;
  suggestedAction?: string;
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

class EnhancedPaymentService {
  private readonly API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';
  private retryAttempts = 3;
  private retryDelay = 1000; // 1 second

  // Available payment gateways
  private gateways: PaymentGateway[] = [
    {
      id: 'payfast',
      name: 'PayFast',
      type: 'card',
      enabled: true,
      processingFee: 0.029,
      minAmount: 10,
      maxAmount: 100000,
      supportedCurrencies: ['ZAR'],
      features: ['instant', 'secure', 'mobile_optimized']
    },
    {
      id: 'ozow',
      name: 'Ozow',
      type: 'eft',
      enabled: true,
      processingFee: 0.015,
      minAmount: 5,
      maxAmount: 50000,
      supportedCurrencies: ['ZAR'],
      features: ['instant', 'eft', 'mobile_optimized']
    },
    {
      id: 'snapscan',
      name: 'SnapScan',
      type: 'mobile',
      enabled: true,
      processingFee: 0.025,
      minAmount: 5,
      maxAmount: 50000,
      supportedCurrencies: ['ZAR'],
      features: ['qr_code', 'mobile_optimized', 'instant']
    },
    {
      id: 'stripe',
      name: 'Stripe',
      type: 'card',
      enabled: true,
      processingFee: 0.029,
      minAmount: 10,
      maxAmount: 100000,
      supportedCurrencies: ['ZAR', 'USD', 'EUR'],
      features: ['international', 'recurring', 'secure']
    },
    {
      id: 'bank_transfer',
      name: 'Bank Transfer',
      type: 'bank_transfer',
      enabled: true,
      processingFee: 0,
      minAmount: 100,
      maxAmount: 1000000,
      supportedCurrencies: ['ZAR'],
      features: ['no_fees', 'secure', 'manual_processing']
    }
  ];

  /**
   * Get available payment gateways
   */
  async getAvailableGateways(amount: number, currency: string = 'ZAR'): Promise<PaymentGateway[]> {
    return this.gateways.filter(gateway => 
      gateway.enabled &&
      gateway.supportedCurrencies.includes(currency) &&
      amount >= gateway.minAmount &&
      amount <= gateway.maxAmount
    );
  }

  /**
   * Process payment with enhanced error handling and retry logic
   */
  async processPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      // Validate payment request
      this.validatePaymentRequest(request);

      // Select appropriate gateway
      const gateway = this.selectOptimalGateway(request);
      if (!gateway) {
        throw new PaymentError(
          'NO_GATEWAY_AVAILABLE',
          'No suitable payment gateway available for this transaction',
          'Please try a different payment method or amount',
          false,
          'Contact support if the issue persists'
        );
      }

      // Process payment with retry logic
      return await this.processWithRetry(request, gateway);

    } catch (error) {
      if (error instanceof PaymentError) {
        throw error;
      }
      
      throw new PaymentError(
        'PAYMENT_PROCESSING_ERROR',
        'An unexpected error occurred during payment processing',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please try again or contact support'
      );
    }
  }

  /**
   * Process payment with retry logic
   */
  private async processWithRetry(request: PaymentRequest, gateway: PaymentGateway): Promise<PaymentResponse> {
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await this.processPaymentWithGateway(request, gateway);
        return response;
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < this.retryAttempts) {
          // Wait before retry with exponential backoff
          await this.delay(this.retryDelay * Math.pow(2, attempt - 1));
        }
      }
    }

    throw new PaymentError(
      'PAYMENT_RETRY_FAILED',
      'Payment failed after multiple attempts',
      lastError?.message || 'Unknown error',
      false,
      'Please try a different payment method'
    );
  }

  /**
   * Process payment with specific gateway
   */
  private async processPaymentWithGateway(request: PaymentRequest, gateway: PaymentGateway): Promise<PaymentResponse> {
    const endpoint = this.getGatewayEndpoint(gateway.id);
    
    const response = await fetch(`${this.API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.getAuthToken()}`
      },
      body: JSON.stringify({
        ...request,
        gateway: gateway.id,
        metadata: {
          ...request.metadata,
          userAgent: navigator.userAgent,
          timestamp: Date.now(),
          sessionId: this.getSessionId()
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    
    if (!result.success) {
      throw new Error(result.error || 'Payment processing failed');
    }

    return result.data;
  }

  /**
   * Get gateway-specific endpoint
   */
  private getGatewayEndpoint(gatewayId: string): string {
    const endpoints: Record<string, string> = {
      'payfast': '/payments/payfast/create',
      'ozow': '/payments/ozow/create',
      'snapscan': '/payments/snapscan/create',
      'stripe': '/payments/stripe/create-intent',
      'bank_transfer': '/payments/bank-transfer/create'
    };

    return endpoints[gatewayId] || '/payments/process';
  }

  /**
   * Select optimal payment gateway
   */
  private selectOptimalGateway(request: PaymentRequest): PaymentGateway | null {
    const availableGateways = this.gateways.filter(gateway => 
      gateway.enabled &&
      gateway.supportedCurrencies.includes(request.currency) &&
      request.amount >= gateway.minAmount &&
      request.amount <= gateway.maxAmount
    );

    if (availableGateways.length === 0) {
      return null;
    }

    // Prefer user's preferred payment method
    const preferredGateway = availableGateways.find(g => g.id === request.paymentMethod);
    if (preferredGateway) {
      return preferredGateway;
    }

    // Select based on amount and fees
    if (request.amount < 50) {
      // For small amounts, prefer low-fee gateways
      return availableGateways.reduce((best, current) => 
        current.processingFee < best.processingFee ? current : best
      );
    } else if (request.amount > 10000) {
      // For large amounts, prefer secure gateways
      return availableGateways.find(g => g.features.includes('secure')) || availableGateways[0];
    }

    // Default to first available gateway
    return availableGateways[0];
  }

  /**
   * Validate payment request
   */
  private validatePaymentRequest(request: PaymentRequest): void {
    if (!request.amount || request.amount <= 0) {
      throw new PaymentError(
        'INVALID_AMOUNT',
        'Invalid payment amount',
        'Amount must be greater than zero',
        false
      );
    }

    if (!request.currency || request.currency.length !== 3) {
      throw new PaymentError(
        'INVALID_CURRENCY',
        'Invalid currency code',
        'Currency must be a valid 3-letter code',
        false
      );
    }

    if (!request.customerInfo.email || !this.isValidEmail(request.customerInfo.email)) {
      throw new PaymentError(
        'INVALID_EMAIL',
        'Invalid email address',
        'Please provide a valid email address',
        false
      );
    }

    if (!request.customerInfo.firstName || !request.customerInfo.lastName) {
      throw new PaymentError(
        'MISSING_CUSTOMER_INFO',
        'Missing customer information',
        'First name and last name are required',
        false
      );
    }
  }

  /**
   * Check payment status
   */
  async getPaymentStatus(paymentId: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/${paymentId}/status`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      throw new PaymentError(
        'STATUS_CHECK_FAILED',
        'Failed to check payment status',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please try again later'
      );
    }
  }

  /**
   * Cancel payment
   */
  async cancelPayment(paymentId: string, reason?: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/${paymentId}/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify({ reason })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      throw new PaymentError(
        'CANCEL_FAILED',
        'Failed to cancel payment',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please contact support'
      );
    }
  }

  /**
   * Refund payment
   */
  async refundPayment(paymentId: string, amount?: number, reason?: string): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/${paymentId}/refund`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify({ amount, reason })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      throw new PaymentError(
        'REFUND_FAILED',
        'Failed to process refund',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please contact support'
      );
    }
  }

  /**
   * Get payment history
   */
  async getPaymentHistory(limit: number = 50, offset: number = 0): Promise<PaymentResponse[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/payments/history?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      throw new PaymentError(
        'HISTORY_FETCH_FAILED',
        'Failed to fetch payment history',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please try again later'
      );
    }
  }

  /**
   * Calculate processing fees
   */
  calculateProcessingFees(amount: number, gatewayId: string): number {
    const gateway = this.gateways.find(g => g.id === gatewayId);
    if (!gateway) {
      return 0;
    }

    return amount * gateway.processingFee;
  }

  /**
   * Get payment summary with fees
   */
  getPaymentSummary(amount: number, gatewayId: string, currency: string = 'ZAR'): {
    subtotal: number;
    processingFee: number;
    total: number;
    currency: string;
    gateway: string;
  } {
    const processingFee = this.calculateProcessingFees(amount, gatewayId);
    const total = amount + processingFee;

    return {
      subtotal: amount,
      processingFee,
      total,
      currency,
      gateway: gatewayId
    };
  }

  /**
   * Utility methods
   */
  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private getAuthToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('payment_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('payment_session_id', sessionId);
    }
    return sessionId;
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Get loyalty points
   */
  async getLoyaltyPoints(): Promise<LoyaltyPoints> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/loyalty/points`, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.data || this.getDefaultLoyaltyPoints();
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
          'Authorization': `Bearer ${this.getAuthToken()}`
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
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        body: JSON.stringify({
          points,
          description
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      return result.data;
    } catch (error) {
      throw new PaymentError(
        'REDEEM_FAILED',
        'Failed to redeem loyalty points',
        error instanceof Error ? error.message : 'Unknown error',
        true,
        'Please try again later'
      );
    }
  }
}

/**
 * Custom Payment Error class
 */
class PaymentError extends Error {
  public readonly code: string;
  public readonly retryable: boolean;
  public readonly suggestedAction?: string;

  constructor(
    code: string,
    message: string,
    details?: string,
    retryable: boolean = false,
    suggestedAction?: string
  ) {
    super(message);
    this.name = 'PaymentError';
    this.code = code;
    this.retryable = retryable;
    this.suggestedAction = suggestedAction;
    
    if (details) {
      this.message += ` (${details})`;
    }
  }
}

export const enhancedPaymentService = new EnhancedPaymentService();
export { PaymentError };
