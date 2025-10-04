import React, { useEffect, useState } from 'react';

interface CheckoutAnalyticsProps {
  bookingId?: string;
  listingId?: string;
  step: string;
  action: 'view' | 'start' | 'complete' | 'abandon';
  metadata?: Record<string, any>;
}

interface AnalyticsEvent {
  event: string;
  timestamp: number;
  sessionId: string;
  userId?: string;
  properties: Record<string, any>;
}

const CheckoutAnalytics: React.FC<CheckoutAnalyticsProps> = ({
  bookingId,
  listingId,
  step,
  action,
  metadata = {}
}) => {
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    trackEvent();
  }, [step, action]);

  const trackEvent = async () => {
    const event: AnalyticsEvent = {
      event: `checkout_${action}`,
      timestamp: Date.now(),
      sessionId,
      userId: localStorage.getItem('userId') || undefined,
      properties: {
        step,
        bookingId,
        listingId,
        ...metadata,
        userAgent: navigator.userAgent,
        url: window.location.href,
        referrer: document.referrer
      }
    };

    // Send to analytics service
    try {
      await sendAnalyticsEvent(event);
    } catch (error) {
      console.error('Analytics tracking failed:', error);
    }
  };

  const sendAnalyticsEvent = async (event: AnalyticsEvent) => {
    // In a real implementation, this would send to your analytics service
    // For now, we'll just log it and store locally
    console.log('Analytics Event:', event);
    
    // Store in localStorage for debugging
    const existingEvents = JSON.parse(localStorage.getItem('checkout_analytics') || '[]');
    existingEvents.push(event);
    localStorage.setItem('checkout_analytics', JSON.stringify(existingEvents.slice(-100))); // Keep last 100 events
  };

  return null; // This component doesn't render anything
};

export default CheckoutAnalytics;

// Analytics service for checkout optimization
export class CheckoutAnalyticsService {
  private static instance: CheckoutAnalyticsService;
  private events: AnalyticsEvent[] = [];

  static getInstance(): CheckoutAnalyticsService {
    if (!CheckoutAnalyticsService.instance) {
      CheckoutAnalyticsService.instance = new CheckoutAnalyticsService();
    }
    return CheckoutAnalyticsService.instance;
  }

  trackCheckoutStep(step: string, action: string, metadata: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      event: `checkout_${action}`,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      properties: {
        step,
        ...metadata,
        userAgent: navigator.userAgent,
        url: window.location.href
      }
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackConversion(bookingId: string, totalValue: number, paymentMethod: string) {
    const event: AnalyticsEvent = {
      event: 'checkout_conversion',
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      properties: {
        bookingId,
        totalValue,
        paymentMethod,
        conversionType: 'booking'
      }
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackAbandonment(step: string, reason?: string) {
    const event: AnalyticsEvent = {
      event: 'checkout_abandonment',
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      properties: {
        step,
        reason,
        abandonmentType: 'checkout'
      }
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackPaymentMethodSelection(method: string, step: string) {
    const event: AnalyticsEvent = {
      event: 'payment_method_selected',
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      properties: {
        method,
        step,
        selectionType: 'payment_method'
      }
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackError(error: string, step: string, context: Record<string, any> = {}) {
    const event: AnalyticsEvent = {
      event: 'checkout_error',
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      properties: {
        error,
        step,
        ...context,
        errorType: 'checkout'
      }
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  getConversionRate(): number {
    const totalSessions = new Set(this.events.map(e => e.sessionId)).size;
    const conversions = this.events.filter(e => e.event === 'checkout_conversion').length;
    return totalSessions > 0 ? (conversions / totalSessions) * 100 : 0;
  }

  getAbandonmentRate(): number {
    const totalSessions = new Set(this.events.map(e => e.sessionId)).size;
    const abandonments = this.events.filter(e => e.event === 'checkout_abandonment').length;
    return totalSessions > 0 ? (abandonments / totalSessions) * 100 : 0;
  }

  getStepCompletionRates(): Record<string, number> {
    const stepStats: Record<string, { started: number; completed: number }> = {};
    
    this.events.forEach(event => {
      const step = event.properties.step;
      if (!stepStats[step]) {
        stepStats[step] = { started: 0, completed: 0 };
      }
      
      if (event.event === 'checkout_start') {
        stepStats[step].started++;
      } else if (event.event === 'checkout_complete') {
        stepStats[step].completed++;
      }
    });

    const completionRates: Record<string, number> = {};
    Object.entries(stepStats).forEach(([step, stats]) => {
      completionRates[step] = stats.started > 0 ? (stats.completed / stats.started) * 100 : 0;
    });

    return completionRates;
  }

  getPopularPaymentMethods(): Record<string, number> {
    const methodCounts: Record<string, number> = {};
    
    this.events
      .filter(e => e.event === 'payment_method_selected')
      .forEach(event => {
        const method = event.properties.method;
        methodCounts[method] = (methodCounts[method] || 0) + 1;
      });

    return methodCounts;
  }

  getAverageCheckoutTime(): number {
    const sessionTimes: Record<string, { start: number; end?: number }> = {};
    
    this.events.forEach(event => {
      const sessionId = event.sessionId;
      if (!sessionTimes[sessionId]) {
        sessionTimes[sessionId] = { start: event.timestamp };
      }
      
      if (event.event === 'checkout_conversion') {
        sessionTimes[sessionId].end = event.timestamp;
      }
    });

    const completedSessions = Object.values(sessionTimes).filter(s => s.end);
    if (completedSessions.length === 0) return 0;

    const totalTime = completedSessions.reduce((sum, session) => {
      return sum + (session.end! - session.start);
    }, 0);

    return totalTime / completedSessions.length; // Average in milliseconds
  }

  generateOptimizationReport(): {
    conversionRate: number;
    abandonmentRate: number;
    stepCompletionRates: Record<string, number>;
    popularPaymentMethods: Record<string, number>;
    averageCheckoutTime: number;
    recommendations: string[];
  } {
    const conversionRate = this.getConversionRate();
    const abandonmentRate = this.getAbandonmentRate();
    const stepCompletionRates = this.getStepCompletionRates();
    const popularPaymentMethods = this.getPopularPaymentMethods();
    const averageCheckoutTime = this.getAverageCheckoutTime();

    const recommendations: string[] = [];
    
    // Analyze step completion rates
    Object.entries(stepCompletionRates).forEach(([step, rate]) => {
      if (rate < 70) {
        recommendations.push(`Improve ${step} step - only ${rate.toFixed(1)}% completion rate`);
      }
    });

    // Analyze payment method preferences
    const totalPaymentSelections = Object.values(popularPaymentMethods).reduce((sum, count) => sum + count, 0);
    Object.entries(popularPaymentMethods).forEach(([method, count]) => {
      const percentage = (count / totalPaymentSelections) * 100;
      if (percentage < 5) {
        recommendations.push(`Consider removing or improving ${method} - only ${percentage.toFixed(1)}% usage`);
      }
    });

    // Analyze checkout time
    if (averageCheckoutTime > 300000) { // 5 minutes
      recommendations.push('Checkout process is taking too long - consider simplifying steps');
    }

    // Analyze conversion rate
    if (conversionRate < 20) {
      recommendations.push('Low conversion rate - consider A/B testing different checkout flows');
    }

    return {
      conversionRate,
      abandonmentRate,
      stepCompletionRates,
      popularPaymentMethods,
      averageCheckoutTime,
      recommendations
    };
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('checkout_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('checkout_session_id', sessionId);
    }
    return sessionId;
  }

  private getUserId(): string | undefined {
    return localStorage.getItem('userId') || undefined;
  }

  private async sendToAnalytics(event: AnalyticsEvent): Promise<void> {
    try {
      // In a real implementation, this would send to your analytics service
      // For now, we'll just store locally for debugging
      const existingEvents = JSON.parse(localStorage.getItem('checkout_analytics') || '[]');
      existingEvents.push(event);
      localStorage.setItem('checkout_analytics', JSON.stringify(existingEvents.slice(-1000))); // Keep last 1000 events
      
      // Simulate API call
      await fetch('/api/analytics/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      }).catch(() => {
        // Silently fail if API is not available
      });
    } catch (error) {
      console.error('Failed to send analytics event:', error);
    }
  }
}

export const checkoutAnalytics = CheckoutAnalyticsService.getInstance();
