
export interface PersonalDashboard {
  userId: string;
  period: {
    start: string;
    end: string;
  };
  overview: {
    totalBookings: number;
    totalSpending: number;
    averageBookingValue: number;
    favoriteVehicleType: string;
    mostUsedLocation: string;
  };
  spending: {
    total: number;
    byCategory: Array<{
      category: string;
      amount: number;
      percentage: number;
    }>;
    monthlyTrend: Array<{
      month: string;
      amount: number;
    }>;
    budget: {
      limit: number;
      used: number;
      remaining: number;
    };
  };
  behavior: {
    bookingFrequency: number;
    averageAdvanceBooking: number; // days
    preferredBookingDays: string[];
    peakUsageHours: number[];
    seasonalPatterns: Array<{
      season: string;
      bookings: number;
      spending: number;
    }>;
  };
  recommendations: Array<{
    type: 'savings' | 'convenience' | 'safety' | 'environmental';
    title: string;
    description: string;
    potentialSavings?: number;
    actionRequired: string;
  }>;
}

export interface HostEarnings {
  hostId: string;
  period: {
    start: string;
    end: string;
  };
  overview: {
    totalEarnings: number;
    totalBookings: number;
    averageBookingValue: number;
    utilizationRate: number;
    topPerformingVehicle: string;
  };
  earnings: {
    grossEarnings: number;
    platformFees: number;
    netEarnings: number;
    byVehicle: Array<{
      vehicleId: string;
      make: string;
      model: string;
      earnings: number;
      bookings: number;
    }>;
    monthlyTrend: Array<{
      month: string;
      earnings: number;
      bookings: number;
    }>;
  };
  optimization: {
    underperformingVehicles: Array<{
      vehicleId: string;
      make: string;
      model: string;
      utilizationRate: number;
      recommendations: string[];
    }>;
    pricingSuggestions: Array<{
      vehicleId: string;
      currentPrice: number;
      suggestedPrice: number;
      expectedImpact: number;
    }>;
    demandForecast: Array<{
      date: string;
      expectedDemand: number;
      recommendedPrice: number;
    }>;
  };
  insights: Array<{
    type: 'performance' | 'pricing' | 'demand' | 'seasonal';
    title: string;
    description: string;
    impact: 'positive' | 'negative' | 'neutral';
    actionable: boolean;
  }>;
}

export interface MarketTrends {
  period: {
    start: string;
    end: string;
  };
  demand: {
    totalBookings: number;
    growthRate: number;
    peakDays: string[];
    peakHours: number[];
    seasonalPatterns: Array<{
      season: string;
      demand: number;
      averagePrice: number;
    }>;
  };
  pricing: {
    averagePrice: number;
    priceRange: {
      min: number;
      max: number;
    };
    priceTrends: Array<{
      date: string;
      averagePrice: number;
      medianPrice: number;
    }>;
    byVehicleType: Array<{
      type: string;
      averagePrice: number;
      demand: number;
    }>;
  };
  geography: {
    topLocations: Array<{
      location: string;
      bookings: number;
      averagePrice: number;
      growthRate: number;
    }>;
    regionalTrends: Array<{
      region: string;
      demand: number;
      pricing: number;
      competition: number;
    }>;
  };
  competition: {
    totalHosts: number;
    newHosts: number;
    averageUtilization: number;
    marketShare: Array<{
      segment: string;
      percentage: number;
    }>;
  };
}

export interface EnvironmentalImpact {
  userId: string;
  period: {
    start: string;
    end: string;
  };
  metrics: {
    totalDistance: number; // km
    co2Saved: number; // kg
    fuelSaved: number; // liters
    treesEquivalent: number;
  };
  comparison: {
    personalCar: {
      distance: number;
      co2: number;
      fuel: number;
    };
    rideShare: {
      distance: number;
      co2: number;
      fuel: number;
    };
    savings: {
      co2: number;
      fuel: number;
      cost: number;
    };
  };
  achievements: Array<{
    id: string;
    name: string;
    description: string;
    earnedAt: string;
    impact: number;
  }>;
  goals: Array<{
    id: string;
    name: string;
    target: number;
    current: number;
    unit: string;
    deadline: string;
  }>;
}

export interface PerformanceMetrics {
  period: {
    start: string;
    end: string;
  };
  technical: {
    uptime: number;
    responseTime: number;
    errorRate: number;
    pageLoadTime: number;
  };
  business: {
    totalUsers: number;
    activeUsers: number;
    newUsers: number;
    retentionRate: number;
    conversionRate: number;
  };
  financial: {
    revenue: number;
    costs: number;
    profit: number;
    averageTransactionValue: number;
    customerLifetimeValue: number;
  };
  operational: {
    totalBookings: number;
    completedBookings: number;
    cancelledBookings: number;
    averageBookingDuration: number;
    customerSatisfaction: number;
  };
}

export interface PredictiveAnalytics {
  demandForecast: Array<{
    date: string;
    predictedDemand: number;
    confidence: number;
    factors: string[];
  }>;
  priceOptimization: Array<{
    vehicleId: string;
    currentPrice: number;
    optimalPrice: number;
    expectedImpact: number;
    confidence: number;
  }>;
  userBehavior: {
    churnRisk: Array<{
      userId: string;
      riskScore: number;
      factors: string[];
      recommendations: string[];
    }>;
    upsellOpportunities: Array<{
      userId: string;
      opportunity: string;
      potentialValue: number;
      probability: number;
    }>;
  };
  marketInsights: {
    emergingTrends: string[];
    competitiveThreats: string[];
    opportunities: string[];
    recommendations: string[];
  };
}

class AnalyticsService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Get personal dashboard analytics
   */
  async getPersonalDashboard(
    userId: string,
    period: { start: string; end: string }
  ): Promise<PersonalDashboard> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/personal-dashboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ userId, period })
      });

      const data = await response.json();
      return data.dashboard;
    } catch (error) {
      console.error('Error getting personal dashboard:', error);
      return this.getDefaultPersonalDashboard(userId, period);
    }
  }

  /**
   * Get host earnings analytics
   */
  async getHostEarnings(
    hostId: string,
    period: { start: string; end: string }
  ): Promise<HostEarnings> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/host-earnings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ hostId, period })
      });

      const data = await response.json();
      return data.earnings;
    } catch (error) {
      console.error('Error getting host earnings:', error);
      return this.getDefaultHostEarnings(hostId, period);
    }
  }

  /**
   * Get market trends
   */
  async getMarketTrends(period: { start: string; end: string }): Promise<MarketTrends> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/market-trends`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ period })
      });

      const data = await response.json();
      return data.trends;
    } catch (error) {
      console.error('Error getting market trends:', error);
      return this.getDefaultMarketTrends(period);
    }
  }

  /**
   * Get environmental impact
   */
  async getEnvironmentalImpact(
    userId: string,
    period: { start: string; end: string }
  ): Promise<EnvironmentalImpact> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/environmental-impact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ userId, period })
      });

      const data = await response.json();
      return data.impact;
    } catch (error) {
      console.error('Error getting environmental impact:', error);
      return this.getDefaultEnvironmentalImpact(userId, period);
    }
  }

  /**
   * Get performance metrics
   */
  async getPerformanceMetrics(period: { start: string; end: string }): Promise<PerformanceMetrics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/performance-metrics`, {
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
   * Get predictive analytics
   */
  async getPredictiveAnalytics(): Promise<PredictiveAnalytics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/predictive`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting predictive analytics:', error);
      return this.getDefaultPredictiveAnalytics();
    }
  }

  /**
   * Export analytics data
   */
  async exportAnalyticsData(
    type: 'personal' | 'host' | 'market' | 'environmental',
    format: 'csv' | 'pdf' | 'excel',
    period: { start: string; end: string }
  ): Promise<Blob> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/export`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ type, format, period })
      });

      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error exporting analytics data:', error);
      throw error;
    }
  }

  /**
   * Set analytics preferences
   */
  async setAnalyticsPreferences(preferences: {
    dashboardLayout: string[];
    notifications: {
      weeklyReport: boolean;
      monthlyReport: boolean;
      insights: boolean;
      alerts: boolean;
    };
    privacy: {
      shareData: boolean;
      anonymousUsage: boolean;
    };
  }): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/preferences`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(preferences)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error setting analytics preferences:', error);
      throw error;
    }
  }

  /**
   * Get analytics insights
   */
  async getAnalyticsInsights(): Promise<Array<{
    id: string;
    type: 'insight' | 'recommendation' | 'alert';
    title: string;
    description: string;
    impact: 'high' | 'medium' | 'low';
    actionable: boolean;
    category: string;
    createdAt: string;
  }>> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/analytics/insights`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.insights || [];
    } catch (error) {
      console.error('Error getting analytics insights:', error);
      return [];
    }
  }

  /**
   * Calculate spending efficiency
   */
  calculateSpendingEfficiency(spending: number, bookings: number, distance: number): {
    costPerBooking: number;
    costPerKm: number;
    efficiency: 'excellent' | 'good' | 'average' | 'poor';
    recommendations: string[];
  } {
    const costPerBooking = bookings > 0 ? spending / bookings : 0;
    const costPerKm = distance > 0 ? spending / distance : 0;

    let efficiency: 'excellent' | 'good' | 'average' | 'poor';
    const recommendations: string[] = [];

    if (costPerBooking < 200) {
      efficiency = 'excellent';
    } else if (costPerBooking < 400) {
      efficiency = 'good';
    } else if (costPerBooking < 600) {
      efficiency = 'average';
      recommendations.push('Consider booking longer rentals for better value');
      recommendations.push('Look for vehicles with better fuel efficiency');
    } else {
      efficiency = 'poor';
      recommendations.push('Review your vehicle choices and booking patterns');
      recommendations.push('Consider alternative transportation options');
      recommendations.push('Look for promotional discounts and deals');
    }

    return {
      costPerBooking,
      costPerKm,
      efficiency,
      recommendations
    };
  }

  /**
   * Calculate utilization rate
   */
  calculateUtilizationRate(
    totalDays: number,
    bookedDays: number,
    maintenanceDays: number = 0
  ): {
    utilizationRate: number;
    efficiency: 'excellent' | 'good' | 'average' | 'poor';
    recommendations: string[];
  } {
    const availableDays = totalDays - maintenanceDays;
    const utilizationRate = availableDays > 0 ? (bookedDays / availableDays) * 100 : 0;

    let efficiency: 'excellent' | 'good' | 'average' | 'poor';
    const recommendations: string[] = [];

    if (utilizationRate >= 80) {
      efficiency = 'excellent';
    } else if (utilizationRate >= 60) {
      efficiency = 'good';
    } else if (utilizationRate >= 40) {
      efficiency = 'average';
      recommendations.push('Consider adjusting pricing to increase demand');
      recommendations.push('Improve vehicle listing with better photos and descriptions');
    } else {
      efficiency = 'poor';
      recommendations.push('Review pricing strategy and market positioning');
      recommendations.push('Consider relocating vehicle to higher-demand area');
      recommendations.push('Improve vehicle features and amenities');
    }

    return {
      utilizationRate,
      efficiency,
      recommendations
    };
  }

  // Default data methods
  private getDefaultPersonalDashboard(userId: string, period: { start: string; end: string }): PersonalDashboard {
    return {
      userId,
      period,
      overview: {
        totalBookings: 0,
        totalSpending: 0,
        averageBookingValue: 0,
        favoriteVehicleType: 'car',
        mostUsedLocation: 'Cape Town'
      },
      spending: {
        total: 0,
        byCategory: [],
        monthlyTrend: [],
        budget: { limit: 5000, used: 0, remaining: 5000 }
      },
      behavior: {
        bookingFrequency: 0,
        averageAdvanceBooking: 7,
        preferredBookingDays: [],
        peakUsageHours: [],
        seasonalPatterns: []
      },
      recommendations: []
    };
  }

  private getDefaultHostEarnings(hostId: string, period: { start: string; end: string }): HostEarnings {
    return {
      hostId,
      period,
      overview: {
        totalEarnings: 0,
        totalBookings: 0,
        averageBookingValue: 0,
        utilizationRate: 0,
        topPerformingVehicle: 'N/A'
      },
      earnings: {
        grossEarnings: 0,
        platformFees: 0,
        netEarnings: 0,
        byVehicle: [],
        monthlyTrend: []
      },
      optimization: {
        underperformingVehicles: [],
        pricingSuggestions: [],
        demandForecast: []
      },
      insights: []
    };
  }

  private getDefaultMarketTrends(period: { start: string; end: string }): MarketTrends {
    return {
      period,
      demand: {
        totalBookings: 0,
        growthRate: 0,
        peakDays: [],
        peakHours: [],
        seasonalPatterns: []
      },
      pricing: {
        averagePrice: 0,
        priceRange: { min: 0, max: 0 },
        priceTrends: [],
        byVehicleType: []
      },
      geography: {
        topLocations: [],
        regionalTrends: []
      },
      competition: {
        totalHosts: 0,
        newHosts: 0,
        averageUtilization: 0,
        marketShare: []
      }
    };
  }

  private getDefaultEnvironmentalImpact(userId: string, period: { start: string; end: string }): EnvironmentalImpact {
    return {
      userId,
      period,
      metrics: {
        totalDistance: 0,
        co2Saved: 0,
        fuelSaved: 0,
        treesEquivalent: 0
      },
      comparison: {
        personalCar: { distance: 0, co2: 0, fuel: 0 },
        rideShare: { distance: 0, co2: 0, fuel: 0 },
        savings: { co2: 0, fuel: 0, cost: 0 }
      },
      achievements: [],
      goals: []
    };
  }

  private getDefaultPerformanceMetrics(period: { start: string; end: string }): PerformanceMetrics {
    return {
      period,
      technical: {
        uptime: 99.9,
        responseTime: 200,
        errorRate: 0.1,
        pageLoadTime: 1.5
      },
      business: {
        totalUsers: 0,
        activeUsers: 0,
        newUsers: 0,
        retentionRate: 0,
        conversionRate: 0
      },
      financial: {
        revenue: 0,
        costs: 0,
        profit: 0,
        averageTransactionValue: 0,
        customerLifetimeValue: 0
      },
      operational: {
        totalBookings: 0,
        completedBookings: 0,
        cancelledBookings: 0,
        averageBookingDuration: 0,
        customerSatisfaction: 0
      }
    };
  }

  private getDefaultPredictiveAnalytics(): PredictiveAnalytics {
    return {
      demandForecast: [],
      priceOptimization: [],
      userBehavior: {
        churnRisk: [],
        upsellOpportunities: []
      },
      marketInsights: {
        emergingTrends: [],
        competitiveThreats: [],
        opportunities: [],
        recommendations: []
      }
    };
  }
}

export const analyticsService = new AnalyticsService();
