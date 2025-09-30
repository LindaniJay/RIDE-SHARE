import { notificationService } from './notificationService';

export interface RevenueAnalytics {
  period: {
    start: string;
    end: string;
  };
  overview: {
    totalRevenue: number;
    grossRevenue: number;
    netRevenue: number;
    platformFees: number;
    refunds: number;
    chargebacks: number;
  };
  trends: {
    daily: Array<{
      date: string;
      revenue: number;
      bookings: number;
      averageOrderValue: number;
    }>;
    weekly: Array<{
      week: string;
      revenue: number;
      bookings: number;
      growth: number;
    }>;
    monthly: Array<{
      month: string;
      revenue: number;
      bookings: number;
      growth: number;
    }>;
  };
  breakdown: {
    byVehicleType: Array<{
      type: string;
      revenue: number;
      percentage: number;
      bookings: number;
    }>;
    byLocation: Array<{
      location: string;
      revenue: number;
      percentage: number;
      bookings: number;
    }>;
    byUserSegment: Array<{
      segment: string;
      revenue: number;
      percentage: number;
      users: number;
    }>;
  };
  forecasting: {
    nextMonth: {
      predictedRevenue: number;
      confidence: number;
      factors: string[];
    };
    nextQuarter: {
      predictedRevenue: number;
      confidence: number;
      factors: string[];
    };
    nextYear: {
      predictedRevenue: number;
      confidence: number;
      factors: string[];
    };
  };
}

export interface UsagePatterns {
  period: {
    start: string;
    end: string;
  };
  userBehavior: {
    totalUsers: number;
    activeUsers: number;
    newUsers: number;
    returningUsers: number;
    churnRate: number;
    retentionRate: number;
  };
  bookingPatterns: {
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    noShowBookings: number;
    averageBookingDuration: number;
    peakBookingTimes: number[];
    peakBookingDays: string[];
  };
  seasonalPatterns: {
    byMonth: Array<{
      month: string;
      bookings: number;
      revenue: number;
      utilization: number;
    }>;
    bySeason: Array<{
      season: string;
      bookings: number;
      revenue: number;
      utilization: number;
    }>;
    byHoliday: Array<{
      holiday: string;
      bookings: number;
      revenue: number;
      utilization: number;
    }>;
  };
  geographicPatterns: {
    byRegion: Array<{
      region: string;
      bookings: number;
      revenue: number;
      growth: number;
    }>;
    byCity: Array<{
      city: string;
      bookings: number;
      revenue: number;
      growth: number;
    }>;
    topRoutes: Array<{
      from: string;
      to: string;
      bookings: number;
      revenue: number;
    }>;
  };
}

export interface MarketForecasting {
  period: {
    start: string;
    end: string;
  };
  demandForecast: {
    shortTerm: Array<{
      date: string;
      predictedDemand: number;
      confidence: number;
      factors: string[];
    }>;
    mediumTerm: Array<{
      month: string;
      predictedDemand: number;
      confidence: number;
      factors: string[];
    }>;
    longTerm: Array<{
      quarter: string;
      predictedDemand: number;
      confidence: number;
      factors: string[];
    }>;
  };
  priceForecast: {
    byVehicleType: Array<{
      type: string;
      currentPrice: number;
      predictedPrice: number;
      change: number;
      confidence: number;
    }>;
    byLocation: Array<{
      location: string;
      currentPrice: number;
      predictedPrice: number;
      change: number;
      confidence: number;
    }>;
  };
  marketTrends: {
    emergingTrends: string[];
    decliningTrends: string[];
    opportunities: string[];
    threats: string[];
    recommendations: string[];
  };
  competitiveAnalysis: {
    marketShare: number;
    competitors: Array<{
      name: string;
      marketShare: number;
      strengths: string[];
      weaknesses: string[];
    }>;
    positioning: {
      price: 'premium' | 'mid' | 'budget';
      quality: 'high' | 'medium' | 'low';
      service: 'excellent' | 'good' | 'average';
    };
  };
}

export interface CustomerBehaviorInsights {
  period: {
    start: string;
    end: string;
  };
  segments: {
    demographics: Array<{
      ageGroup: string;
      percentage: number;
      averageSpending: number;
      bookingFrequency: number;
    }>;
    psychographics: Array<{
      segment: string;
      characteristics: string[];
      percentage: number;
      averageSpending: number;
    }>;
    behavioral: Array<{
      segment: string;
      behavior: string[];
      percentage: number;
      averageSpending: number;
    }>;
  };
  preferences: {
    vehicleTypes: Array<{
      type: string;
      preference: number;
      demographics: string[];
    }>;
    locations: Array<{
      location: string;
      preference: number;
      demographics: string[];
    }>;
    features: Array<{
      feature: string;
      preference: number;
      demographics: string[];
    }>;
    pricing: Array<{
      priceRange: string;
      preference: number;
      demographics: string[];
    }>;
  };
  journey: {
    touchpoints: Array<{
      stage: string;
      actions: string[];
      conversion: number;
      dropoff: number;
    }>;
    funnel: Array<{
      stage: string;
      users: number;
      conversion: number;
      dropoff: number;
    }>;
    retention: Array<{
      cohort: string;
      retention: number[];
      lifetimeValue: number;
    }>;
  };
  insights: Array<{
    type: 'opportunity' | 'risk' | 'trend' | 'recommendation';
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    actionable: boolean;
    priority: number;
  }>;
}

export interface PerformanceMetrics {
  period: {
    start: string;
    end: string;
  };
  kpis: {
    revenue: {
      total: number;
      growth: number;
      target: number;
      achievement: number;
    };
    bookings: {
      total: number;
      growth: number;
      target: number;
      achievement: number;
    };
    utilization: {
      average: number;
      growth: number;
      target: number;
      achievement: number;
    };
    satisfaction: {
      score: number;
      growth: number;
      target: number;
      achievement: number;
    };
  };
  operational: {
    efficiency: {
      bookingProcess: number;
      paymentProcessing: number;
      customerSupport: number;
      vehicleMaintenance: number;
    };
    quality: {
      serviceQuality: number;
      vehicleCondition: number;
      communication: number;
      reliability: number;
    };
    cost: {
      acquisition: number;
      retention: number;
      support: number;
      maintenance: number;
    };
  };
  benchmarks: {
    industry: {
      revenue: number;
      utilization: number;
      satisfaction: number;
      growth: number;
    };
    competitors: Array<{
      name: string;
      revenue: number;
      utilization: number;
      satisfaction: number;
      growth: number;
    }>;
    performance: {
      above: number;
      average: number;
      below: number;
    };
  };
}

export interface BusinessIntelligenceReport {
  id: string;
  title: string;
  type: 'revenue' | 'usage' | 'forecasting' | 'behavior' | 'performance' | 'comprehensive';
  period: {
    start: string;
    end: string;
  };
  generatedAt: string;
  generatedBy: string;
  data: {
    revenue?: RevenueAnalytics;
    usage?: UsagePatterns;
    forecasting?: MarketForecasting;
    behavior?: CustomerBehaviorInsights;
    performance?: PerformanceMetrics;
  };
  insights: Array<{
    category: string;
    insight: string;
    impact: 'high' | 'medium' | 'low';
    actionable: boolean;
    priority: number;
  }>;
  recommendations: Array<{
    category: string;
    recommendation: string;
    impact: 'high' | 'medium' | 'low';
    effort: 'high' | 'medium' | 'low';
    timeline: string;
    priority: number;
  }>;
  executiveSummary: string;
  keyFindings: string[];
  nextSteps: string[];
}

class BusinessIntelligenceService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Revenue Analytics
   */
  async getRevenueAnalytics(period: { start: string; end: string }): Promise<RevenueAnalytics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/revenue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting revenue analytics:', error);
      return this.getDefaultRevenueAnalytics(period);
    }
  }

  /**
   * Usage Patterns
   */
  async getUsagePatterns(period: { start: string; end: string }): Promise<UsagePatterns> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/usage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.patterns;
    } catch (error) {
      console.error('Error getting usage patterns:', error);
      return this.getDefaultUsagePatterns(period);
    }
  }

  /**
   * Market Forecasting
   */
  async getMarketForecasting(period: { start: string; end: string }): Promise<MarketForecasting> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/forecasting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.forecasting;
    } catch (error) {
      console.error('Error getting market forecasting:', error);
      return this.getDefaultMarketForecasting(period);
    }
  }

  /**
   * Customer Behavior Insights
   */
  async getCustomerBehaviorInsights(period: { start: string; end: string }): Promise<CustomerBehaviorInsights> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/behavior`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.insights;
    } catch (error) {
      console.error('Error getting customer behavior insights:', error);
      return this.getDefaultCustomerBehaviorInsights(period);
    }
  }

  /**
   * Performance Metrics
   */
  async getPerformanceMetrics(period: { start: string; end: string }): Promise<PerformanceMetrics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/performance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.metrics;
    } catch (error) {
      console.error('Error getting performance metrics:', error);
      return this.getDefaultPerformanceMetrics(period);
    }
  }

  /**
   * Generate Business Intelligence Report
   */
  async generateBIReport(
    type: 'revenue' | 'usage' | 'forecasting' | 'behavior' | 'performance' | 'comprehensive',
    period: { start: string; end: string },
    title: string
  ): Promise<BusinessIntelligenceReport> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ type, period, title })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Report Generated',
          'Your business intelligence report has been generated successfully.',
          'info'
        );
      }

      return data.report;
    } catch (error) {
      console.error('Error generating BI report:', error);
      throw error;
    }
  }

  /**
   * Get BI Reports
   */
  async getBIReports(limit: number = 20, offset: number = 0): Promise<BusinessIntelligenceReport[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/reports?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.reports || [];
    } catch (error) {
      console.error('Error getting BI reports:', error);
      return [];
    }
  }

  /**
   * Export BI Report
   */
  async exportBIReport(reportId: string, format: 'pdf' | 'excel' | 'csv'): Promise<Blob> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/reports/${reportId}/export?format=${format}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error exporting BI report:', error);
      throw error;
    }
  }

  /**
   * Get BI Dashboard
   */
  async getBIDashboard(): Promise<{
    overview: {
      totalRevenue: number;
      totalBookings: number;
      activeUsers: number;
      utilizationRate: number;
    };
    charts: Array<{
      type: string;
      title: string;
      data: any;
    }>;
    insights: Array<{
      type: string;
      title: string;
      description: string;
      impact: string;
    }>;
    alerts: Array<{
      type: string;
      message: string;
      severity: string;
      timestamp: string;
    }>;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/business-intelligence/dashboard`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.dashboard;
    } catch (error) {
      console.error('Error getting BI dashboard:', error);
      return {
        overview: {
          totalRevenue: 0,
          totalBookings: 0,
          activeUsers: 0,
          utilizationRate: 0
        },
        charts: [],
        insights: [],
        alerts: []
      };
    }
  }

  /**
   * Set BI Alerts
   */
  async setBIAlerts(alerts: Array<{
    metric: string;
    condition: 'greater_than' | 'less_than' | 'equals' | 'not_equals';
    value: number;
    frequency: 'realtime' | 'hourly' | 'daily' | 'weekly';
    enabled: boolean;
  }>): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/business-intelligence/alerts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ alerts })
      });

      await notificationService.showSystemNotification(
        'Alerts Configured',
        'Business intelligence alerts have been configured.',
        'info'
      );
    } catch (error) {
      console.error('Error setting BI alerts:', error);
      throw error;
    }
  }

  // Default data methods
  private getDefaultRevenueAnalytics(period: { start: string; end: string }): RevenueAnalytics {
    return {
      period,
      overview: {
        totalRevenue: 0,
        grossRevenue: 0,
        netRevenue: 0,
        platformFees: 0,
        refunds: 0,
        chargebacks: 0
      },
      trends: {
        daily: [],
        weekly: [],
        monthly: []
      },
      breakdown: {
        byVehicleType: [],
        byLocation: [],
        byUserSegment: []
      },
      forecasting: {
        nextMonth: { predictedRevenue: 0, confidence: 0, factors: [] },
        nextQuarter: { predictedRevenue: 0, confidence: 0, factors: [] },
        nextYear: { predictedRevenue: 0, confidence: 0, factors: [] }
      }
    };
  }

  private getDefaultUsagePatterns(period: { start: string; end: string }): UsagePatterns {
    return {
      period,
      userBehavior: {
        totalUsers: 0,
        activeUsers: 0,
        newUsers: 0,
        returningUsers: 0,
        churnRate: 0,
        retentionRate: 0
      },
      bookingPatterns: {
        totalBookings: 0,
        completedBookings: 0,
        cancelledBookings: 0,
        noShowBookings: 0,
        averageBookingDuration: 0,
        peakBookingTimes: [],
        peakBookingDays: []
      },
      seasonalPatterns: {
        byMonth: [],
        bySeason: [],
        byHoliday: []
      },
      geographicPatterns: {
        byRegion: [],
        byCity: [],
        topRoutes: []
      }
    };
  }

  private getDefaultMarketForecasting(period: { start: string; end: string }): MarketForecasting {
    return {
      period,
      demandForecast: {
        shortTerm: [],
        mediumTerm: [],
        longTerm: []
      },
      priceForecast: {
        byVehicleType: [],
        byLocation: []
      },
      marketTrends: {
        emergingTrends: [],
        decliningTrends: [],
        opportunities: [],
        threats: [],
        recommendations: []
      },
      competitiveAnalysis: {
        marketShare: 0,
        competitors: [],
        positioning: {
          price: 'mid',
          quality: 'medium',
          service: 'good'
        }
      }
    };
  }

  private getDefaultCustomerBehaviorInsights(period: { start: string; end: string }): CustomerBehaviorInsights {
    return {
      period,
      segments: {
        demographics: [],
        psychographics: [],
        behavioral: []
      },
      preferences: {
        vehicleTypes: [],
        locations: [],
        features: [],
        pricing: []
      },
      journey: {
        touchpoints: [],
        funnel: [],
        retention: []
      },
      insights: []
    };
  }

  private getDefaultPerformanceMetrics(period: { start: string; end: string }): PerformanceMetrics {
    return {
      period,
      kpis: {
        revenue: { total: 0, growth: 0, target: 0, achievement: 0 },
        bookings: { total: 0, growth: 0, target: 0, achievement: 0 },
        utilization: { average: 0, growth: 0, target: 0, achievement: 0 },
        satisfaction: { score: 0, growth: 0, target: 0, achievement: 0 }
      },
      operational: {
        efficiency: {
          bookingProcess: 0,
          paymentProcessing: 0,
          customerSupport: 0,
          vehicleMaintenance: 0
        },
        quality: {
          serviceQuality: 0,
          vehicleCondition: 0,
          communication: 0,
          reliability: 0
        },
        cost: {
          acquisition: 0,
          retention: 0,
          support: 0,
          maintenance: 0
        }
      },
      benchmarks: {
        industry: { revenue: 0, utilization: 0, satisfaction: 0, growth: 0 },
        competitors: [],
        performance: { above: 0, average: 0, below: 0 }
      }
    };
  }
}

export const businessIntelligenceService = new BusinessIntelligenceService();
