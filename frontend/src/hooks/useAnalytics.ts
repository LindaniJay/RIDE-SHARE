import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Removed unused ImportMeta import

// Analytics service
class AnalyticsService {
  private isInitialized = false;

  init() {
    if (this.isInitialized) return;
    
    // Initialize analytics (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      this.isInitialized = true;
    }
  }

  trackPageView(path: string, title?: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', (import.meta as ImportMeta).env?.VITE_GA_TRACKING_ID || '', {
        page_path: path,
        page_title: title
      });
    }
  }

  trackEvent(eventName: string, parameters?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }

  trackUserAction(action: string, category: string, label?: string, value?: number) {
    this.trackEvent(action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }

  trackSearch(searchTerm: string, resultsCount?: number) {
    this.trackEvent('search', {
      search_term: searchTerm,
      results_count: resultsCount
    });
  }

  trackBooking(vehicleId: string, price: number, duration: number) {
    this.trackEvent('booking_created', {
      vehicle_id: vehicleId,
      price: price,
      duration: duration,
      currency: 'ZAR'
    });
  }

  trackVehicleView(vehicleId: string, vehicleType: string, price: number) {
    this.trackEvent('vehicle_view', {
      vehicle_id: vehicleId,
      vehicle_type: vehicleType,
      price: price
    });
  }

  trackUserRegistration(role: string) {
    this.trackEvent('user_registration', {
      user_role: role
    });
  }

  trackUserLogin(method: string) {
    this.trackEvent('user_login', {
      login_method: method
    });
  }
}

export const analyticsService = new AnalyticsService();

// React hook for page tracking
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    analyticsService.trackPageView(location.pathname, document.title);
  }, [location]);
};

// React hook for user action tracking
export const useAnalytics = () => {
  return {
    trackEvent: analyticsService.trackEvent.bind(analyticsService),
    trackUserAction: analyticsService.trackUserAction.bind(analyticsService),
    trackSearch: analyticsService.trackSearch.bind(analyticsService),
    trackBooking: analyticsService.trackBooking.bind(analyticsService),
    trackVehicleView: analyticsService.trackVehicleView.bind(analyticsService),
    trackUserRegistration: analyticsService.trackUserRegistration.bind(analyticsService),
    trackUserLogin: analyticsService.trackUserLogin.bind(analyticsService),
  };
};

// Performance monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Track Core Web Vitals
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS((metric) => analyticsService.trackEvent('web_vital_cls', { value: metric.value }));
      onFID((metric) => analyticsService.trackEvent('web_vital_fid', { value: metric.value }));
      onFCP((metric) => analyticsService.trackEvent('web_vital_fcp', { value: metric.value }));
      onLCP((metric) => analyticsService.trackEvent('web_vital_lcp', { value: metric.value }));
      onTTFB((metric) => analyticsService.trackEvent('web_vital_ttfb', { value: metric.value }));
    }).catch(() => {
      // Web vitals not available
    });

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      analyticsService.trackEvent('page_load_time', {
        load_time: Math.round(loadTime)
      });
    });
  }, []);
};

// Error tracking
export const useErrorTracking = () => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      analyticsService.trackEvent('javascript_error', {
        error_message: event.message,
        error_filename: event.filename,
        error_line: event.lineno,
        error_column: event.colno
      });
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      analyticsService.trackEvent('unhandled_promise_rejection', {
        error_message: event.reason?.message || 'Unknown error',
        error_stack: event.reason?.stack
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
};

// Declare global types
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
