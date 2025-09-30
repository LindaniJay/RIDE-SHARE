import React, { useState, useEffect } from 'react';
// import { AdminService } from '../../services/adminService';
import GlassCard from '../GlassCard';
import Icon from '../Icon';

interface FinancialDashboardProps {
  onRefresh: () => void;
}

interface FinancialData {
  totalRevenue: number;
  monthlyRevenue: number;
  commissionEarned: number;
  pendingPayouts: number;
  completedTransactions: number;
  refundedAmount: number;
  revenueByMonth: Array<{ month: string; revenue: number }>;
  topEarners: Array<{ name: string; earnings: number }>;
  recentTransactions: Array<{
    id: string;
    type: 'booking' | 'commission' | 'refund';
    amount: number;
    description: string;
    date: string;
  }>;
}

const FinancialDashboard: React.FC<FinancialDashboardProps> = ({ }) => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('month');

  useEffect(() => {
    fetchFinancialData();
  }, [dateRange]);

  const fetchFinancialData = async () => {
    try {
      setLoading(true);
      // Mock data for now - replace with actual API call
      const mockData: FinancialData = {
        totalRevenue: 125000,
        monthlyRevenue: 15000,
        commissionEarned: 18750,
        pendingPayouts: 2500,
        completedTransactions: 1250,
        refundedAmount: 1200,
        revenueByMonth: [
          { month: 'Jan', revenue: 12000 },
          { month: 'Feb', revenue: 15000 },
          { month: 'Mar', revenue: 18000 },
          { month: 'Apr', revenue: 16000 },
          { month: 'May', revenue: 20000 },
          { month: 'Jun', revenue: 15000 },
        ],
        topEarners: [
          { name: 'John Smith', earnings: 2500 },
          { name: 'Sarah Johnson', earnings: 2200 },
          { name: 'Mike Wilson', earnings: 1800 },
          { name: 'Lisa Brown', earnings: 1600 },
        ],
        recentTransactions: [
          { id: '1', type: 'booking', amount: 500, description: 'Vehicle rental - BMW X3', date: '2024-01-15' },
          { id: '2', type: 'commission', amount: 75, description: 'Commission earned', date: '2024-01-15' },
          { id: '3', type: 'booking', amount: 300, description: 'Vehicle rental - Toyota Corolla', date: '2024-01-14' },
          { id: '4', type: 'refund', amount: -150, description: 'Refund - Cancelled booking', date: '2024-01-14' },
        ]
      };
      setFinancialData(mockData);
    } catch (error) {
      console.error('Error fetching financial data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!financialData) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300">No financial data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Financial Dashboard</h2>
          <p className="text-gray-300">Platform revenue and financial overview</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button
            onClick={fetchFinancialData}
            className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <Icon name="refresh-cw" className="h-4 w-4" />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-white">R{financialData.totalRevenue.toLocaleString()}</p>
              <p className="text-green-400 text-sm mt-1">+12% from last month</p>
            </div>
            <Icon name="dollar-sign" className="h-8 w-8 text-green-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold text-white">R{financialData.monthlyRevenue.toLocaleString()}</p>
              <p className="text-blue-400 text-sm mt-1">Current month</p>
            </div>
            <Icon name="trending-up" className="h-8 w-8 text-blue-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Commission Earned</p>
              <p className="text-2xl font-bold text-white">R{financialData.commissionEarned.toLocaleString()}</p>
              <p className="text-yellow-400 text-sm mt-1">15% platform fee</p>
            </div>
            <Icon name="percent" className="h-8 w-8 text-yellow-400" />
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300 text-sm">Pending Payouts</p>
              <p className="text-2xl font-bold text-white">R{financialData.pendingPayouts.toLocaleString()}</p>
              <p className="text-orange-400 text-sm mt-1">Awaiting processing</p>
            </div>
            <Icon name="clock" className="h-8 w-8 text-orange-400" />
          </div>
        </GlassCard>
      </div>

      {/* Revenue Chart and Top Earners */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue Trend</h3>
          <div className="space-y-4">
            {financialData.revenueByMonth.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-300">{item.month}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${(item.revenue / 20000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium">R{item.revenue.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Top Earners</h3>
          <div className="space-y-3">
            {financialData.topEarners.map((earner, index) => (
              <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{index + 1}</span>
                  </div>
                  <span className="text-white font-medium">{earner.name}</span>
                </div>
                <span className="text-green-400 font-semibold">R{earner.earnings.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Transaction Summary and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Transaction Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Completed Transactions</span>
              <span className="text-white font-semibold">{financialData.completedTransactions}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Refunded Amount</span>
              <span className="text-red-400 font-semibold">R{financialData.refundedAmount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Success Rate</span>
              <span className="text-green-400 font-semibold">98.5%</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {financialData.recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    transaction.type === 'booking' ? 'bg-green-500/20' :
                    transaction.type === 'commission' ? 'bg-blue-500/20' :
                    'bg-red-500/20'
                  }`}>
                    <Icon 
                      name={transaction.type === 'booking' ? 'car' : 
                            transaction.type === 'commission' ? 'percent' : 'refresh-cw'} 
                      className={`h-4 w-4 ${
                        transaction.type === 'booking' ? 'text-green-400' :
                        transaction.type === 'commission' ? 'text-blue-400' :
                        'text-red-400'
                      }`} 
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{transaction.description}</p>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <span className={`font-semibold ${
                  transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}R{transaction.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Financial Actions */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Financial Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="download" className="h-5 w-5 text-blue-400" />
            <span className="text-white">Export Report</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="credit-card" className="h-5 w-5 text-green-400" />
            <span className="text-white">Process Payouts</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="settings" className="h-5 w-5 text-yellow-400" />
            <span className="text-white">Commission Settings</span>
          </button>
          <button className="flex items-center space-x-2 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
            <Icon name="alert-triangle" className="h-5 w-5 text-red-400" />
            <span className="text-white">Handle Disputes</span>
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default FinancialDashboard;
