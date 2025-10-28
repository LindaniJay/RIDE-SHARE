export interface RenterBehaviorAnalytics {
  bookingPatterns: {
    preferredDays: string[];
    averageBookingDuration: number;
    peakBookingTimes: string[];
    seasonalTrends: { month: string; bookings: number }[];
  };
  spendingBehavior: {
    totalSpent: number;
    averageSpendingPerBooking: number;
    spendingTrends: { month: string; amount: number }[];
    preferredPriceRange: { min: number; max: number };
  };
  vehiclePreferences: {
    topMakes: { make: string; count: number }[];
    topModels: { model: string; count: number }[];
    preferredFeatures: string[];
    averageRating: number;
  };
  engagementMetrics: {
    totalBookings: number;
    repeatBookingRate: number;
    cancellationRate: number;
    reviewSubmissionRate: number;
    platformUsageFrequency: number;
  };
}

export interface CrossRoleAnalytics {
  userGrowth: {
    totalUsers: number;
    newUsersThisMonth: number;
    userGrowthRate: number;
    roleDistribution: { role: string; count: number; percentage: number }[];
  };
  revenueAnalytics: {
    totalRevenue: number;
    monthlyRevenue: { month: string; revenue: number }[];
    revenueByRole: { role: string; revenue: number }[];
    averageTransactionValue: number;
  };
  platformHealth: {
    activeUsers: number;
    bookingSuccessRate: number;
    userSatisfactionScore: number;
    systemUptime: number;
  };
  geographicInsights: {
    topCities: { city: string; bookings: number }[];
    regionalPerformance: { region: string; revenue: number }[];
    travelPatterns: { from: string; to: string; frequency: number }[];
  };
}

class AnalyticsService {
  private static baseUrl = '/api/analytics';

  static async getRenterBehaviorAnalytics(renterId?: number): Promise<RenterBehaviorAnalytics> {
    try {
      const url = renterId 
        ? `${this.baseUrl}/renter-behavior/${renterId}`
        : `${this.baseUrl}/renter-behavior`;
      
      const authHeaders = await import('../utils/firebaseAuth').then(module => module.getAuthHeaders());
      const response = await fetch(url, {
        headers: authHeaders
      });

      if (!response.ok) {
        throw new Error('Failed to fetch renter behavior analytics');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching renter behavior analytics:', error);
      throw error;
    }
  }

  static async getCrossRoleAnalytics(): Promise<CrossRoleAnalytics> {
    try {
      const authHeaders = await import('../utils/firebaseAuth').then(module => module.getAuthHeaders());
      const response = await fetch(`${this.baseUrl}/cross-role`, {
        headers: authHeaders
      });

      if (!response.ok) {
        throw new Error('Failed to fetch cross-role analytics');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching cross-role analytics:', error);
      throw error;
    }
  }

  static async getRealTimeMetrics(): Promise<any> {
    try {
      const authHeaders = await import('../utils/firebaseAuth').then(module => module.getAuthHeaders());
      const response = await fetch(`${this.baseUrl}/real-time`, {
        headers: authHeaders
      });

      if (!response.ok) {
        throw new Error('Failed to fetch real-time metrics');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching real-time metrics:', error);
      throw error;
    }
  }

  static async generateReport(reportType: 'renter' | 'host' | 'admin' | 'cross-role', filters?: any): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(await import('../utils/firebaseAuth').then(module => module.getAuthHeaders()))
        },
        body: JSON.stringify({
          reportType,
          filters
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate report');
      }

      return await response.json();
    } catch (error) {
      console.error('Error generating report:', error);
      throw error;
    }
  }
}

export { AnalyticsService };
export default AnalyticsService;
