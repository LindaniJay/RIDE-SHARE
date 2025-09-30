import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface RevenueData {
  total: number;
  monthly: number;
  daily: number;
  growth: number;
  breakdown: {
    bookings: number;
    fees: number;
    commissions: number;
  };
  trends: {
    period: string;
    revenue: number;
  }[];
  topSources: {
    source: string;
    revenue: number;
    percentage: number;
  }[];
}

const RevenueAnalytics: React.FC = () => {
  const [data, setData] = useState<RevenueData | null>(null);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRevenueData();
  }, [timeRange]);

  const fetchRevenueData = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData: RevenueData = {
        total: 1250000,
        monthly: 45000,
        daily: 1500,
        growth: 12.5,
        breakdown: {
          bookings: 80000,
          fees: 25000,
          commissions: 20000
        },
        trends: [
          { period: 'Jan', revenue: 35000 },
          { period: 'Feb', revenue: 42000 },
          { period: 'Mar', revenue: 38000 },
          { period: 'Apr', revenue: 45000 },
          { period: 'May', revenue: 52000 },
          { period: 'Jun', revenue: 48000 }
        ],
        topSources: [
          { source: 'Vehicle Rentals', revenue: 60000, percentage: 75 },
          { source: 'Service Fees', revenue: 15000, percentage: 18.75 },
          { source: 'Insurance', revenue: 5000, percentage: 6.25 }
        ]
      };
      setData(mockData);
    } catch (error) {
      console.error('Error fetching revenue data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR'
    }).format(amount);
  };

  if (loading) {
    return (
      <GlassCard title="Revenue Analytics" icon="DollarSign">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  if (!data) {
    return (
      <GlassCard title="Revenue Analytics" icon="DollarSign">
        <div className="text-center py-8 text-white/50">
          Unable to fetch revenue data
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Revenue Analytics" icon="DollarSign">
      <div className="space-y-6">
        {/* Time Range Selector */}
        <div className="flex space-x-2">
          {(['7d', '30d', '90d', '1y'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded text-sm ${
                timeRange === range 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-white/5">
            <div className="text-2xl font-bold text-white">{formatCurrency(data.total)}</div>
            <div className="text-sm text-white/70">Total Revenue</div>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <div className="text-2xl font-bold text-white">{formatCurrency(data.monthly)}</div>
            <div className="text-sm text-white/70">This Month</div>
          </div>
          <div className="p-4 rounded-lg bg-white/5">
            <div className="text-2xl font-bold text-white">{formatCurrency(data.daily)}</div>
            <div className="text-sm text-white/70">Today</div>
          </div>
        </div>

        {/* Growth Indicator */}
        <div className="flex items-center space-x-2">
          <Icon 
            name={data.growth >= 0 ? "TrendingUp" : "TrendingDown"} 
            className={`w-5 h-5 ${data.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}
          />
          <span className={`font-medium ${data.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {data.growth >= 0 ? '+' : ''}{data.growth}%
          </span>
          <span className="text-white/70">vs last period</span>
        </div>

        {/* Revenue Breakdown */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Revenue Breakdown</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/70">Bookings</span>
              <span className="text-white">{formatCurrency(data.breakdown.bookings)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Service Fees</span>
              <span className="text-white">{formatCurrency(data.breakdown.fees)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/70">Commissions</span>
              <span className="text-white">{formatCurrency(data.breakdown.commissions)}</span>
            </div>
          </div>
        </div>

        {/* Top Revenue Sources */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Top Revenue Sources</h4>
          <div className="space-y-3">
            {data.topSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">{source.source}</span>
                  <span className="text-white">{formatCurrency(source.revenue)}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-white/50">{source.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Trend Chart */}
        <div className="space-y-4">
          <h4 className="font-medium text-white">Revenue Trend</h4>
          <div className="h-32 flex items-end space-x-2">
            {data.trends.map((trend, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t"
                  style={{ 
                    height: `${(trend.revenue / Math.max(...data.trends.map(t => t.revenue))) * 100}%`,
                    minHeight: '4px'
                  }}
                />
                <div className="text-xs text-white/50 mt-1">{trend.period}</div>
                <div className="text-xs text-white/70">{formatCurrency(trend.revenue)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="TrendingUp" className="w-4 h-4 mr-2 inline" />
            Forecast
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default RevenueAnalytics;
