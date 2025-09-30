import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface Promotion {
  id: string;
  name: string;
  type: 'discount' | 'cashback' | 'free_delivery' | 'bonus_points';
  value: number;
  valueType: 'percentage' | 'fixed' | 'points';
  description: string;
  status: 'draft' | 'active' | 'paused' | 'expired';
  startDate: string;
  endDate: string;
  targetAudience: {
    type: 'all' | 'new_users' | 'returning_users' | 'premium_users';
    criteria: string[];
  };
  usage: {
    totalUses: number;
    maxUses?: number;
    uniqueUsers: number;
    totalSavings: number;
  };
  conditions: {
    minAmount?: number;
    maxDiscount?: number;
    applicableVehicles?: string[];
    excludedVehicles?: string[];
  };
  createdAt: string;
  createdBy: string;
}

const PromotionManager: React.FC = () => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'draft' | 'expired'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = async () => {
    try {
      // Mock data - replace with actual API call
      const mockPromotions: Promotion[] = [
        {
          id: 'PROM001',
          name: 'New User Welcome Discount',
          type: 'discount',
          value: 20,
          valueType: 'percentage',
          description: '20% off first booking for new users',
          status: 'active',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          targetAudience: {
            type: 'new_users',
            criteria: ['first_booking']
          },
          usage: {
            totalUses: 1250,
            maxUses: 5000,
            uniqueUsers: 1200,
            totalSavings: 25000
          },
          conditions: {
            minAmount: 100,
            maxDiscount: 500
          },
          createdAt: new Date().toISOString(),
          createdBy: 'Admin User'
        },
        {
          id: 'PROM002',
          name: 'Weekend Special',
          type: 'cashback',
          value: 50,
          valueType: 'fixed',
          description: 'R50 cashback on weekend bookings',
          status: 'active',
          startDate: new Date().toISOString(),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          targetAudience: {
            type: 'all',
            criteria: ['weekend_booking']
          },
          usage: {
            totalUses: 450,
            uniqueUsers: 400,
            totalSavings: 22500
          },
          conditions: {
            minAmount: 200
          },
          createdAt: new Date(Date.now() - 86400000).toISOString(),
          createdBy: 'Admin User'
        },
        {
          id: 'PROM003',
          name: 'Premium User Bonus',
          type: 'bonus_points',
          value: 100,
          valueType: 'points',
          description: '100 bonus points for premium users',
          status: 'draft',
          startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
          targetAudience: {
            type: 'premium_users',
            criteria: ['premium_membership']
          },
          usage: {
            totalUses: 0,
            uniqueUsers: 0,
            totalSavings: 0
          },
          conditions: {},
          createdAt: new Date(Date.now() - 172800000).toISOString(),
          createdBy: 'Admin User'
        }
      ];
      setPromotions(mockPromotions);
    } catch (error) {
      console.error('Error fetching promotions:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-500 bg-green-500/20';
      case 'draft': return 'text-yellow-500 bg-yellow-500/20';
      case 'paused': return 'text-orange-500 bg-orange-500/20';
      case 'expired': return 'text-gray-500 bg-gray-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'discount': return 'Percent';
      case 'cashback': return 'DollarSign';
      case 'free_delivery': return 'Truck';
      case 'bonus_points': return 'Star';
      default: return 'Gift';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'discount': return 'text-blue-500';
      case 'cashback': return 'text-green-500';
      case 'free_delivery': return 'text-purple-500';
      case 'bonus_points': return 'text-yellow-500';
      default: return 'text-white';
    }
  };

  const formatValue = (promotion: Promotion) => {
    if (promotion.valueType === 'percentage') {
      return `${promotion.value}%`;
    } else if (promotion.valueType === 'fixed') {
      return `R${promotion.value}`;
    } else {
      return `${promotion.value} points`;
    }
  };

  const filteredPromotions = promotions.filter(promotion => {
    if (filter === 'all') return true;
    return promotion.status === filter;
  });

  const activePromotions = promotions.filter(p => p.status === 'active').length;
  const totalSavings = promotions.reduce((sum, p) => sum + p.usage.totalSavings, 0);

  if (loading) {
    return (
      <GlassCard title="Promotion Manager" icon="Gift">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Promotion Manager" icon="Gift">
      <div className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{promotions.length}</div>
            <div className="text-sm text-white/70">Total Promotions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">{activePromotions}</div>
            <div className="text-sm text-white/70">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">R{totalSavings.toLocaleString()}</div>
            <div className="text-sm text-white/70">Total Savings</div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {['all', 'active', 'draft', 'expired'].map((filterType) => (
            <button
              key={filterType}
              onClick={() => setFilter(filterType as any)}
              className={`px-3 py-1 rounded text-sm capitalize ${
                filter === filterType 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {filterType}
            </button>
          ))}
        </div>

        {/* Promotions List */}
        <div className="space-y-4">
          {filteredPromotions.map((promotion) => (
            <div key={promotion.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3">
                  <Icon
                    name={getTypeIcon(promotion.type)}
                    className={`w-5 h-5 ${getTypeColor(promotion.type)}`}
                  />
                  <div>
                    <h4 className="font-medium text-white">{promotion.name}</h4>
                    <p className="text-sm text-white/70 mt-1">{promotion.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(promotion.status)}`}>
                    {promotion.status}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                <div>
                  <span className="text-white/50">Value:</span>
                  <span className="text-white/70 ml-2">{formatValue(promotion)}</span>
                </div>
                <div>
                  <span className="text-white/50">Uses:</span>
                  <span className="text-white/70 ml-2">
                    {promotion.usage.totalUses.toLocaleString()}
                    {promotion.usage.maxUses && ` / ${promotion.usage.maxUses.toLocaleString()}`}
                  </span>
                </div>
                <div>
                  <span className="text-white/50">Savings:</span>
                  <span className="text-white/70 ml-2">R{promotion.usage.totalSavings.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                <div>
                  <span className="text-white/50">Start Date:</span>
                  <span className="text-white/70 ml-2">
                    {new Date(promotion.startDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-white/50">End Date:</span>
                  <span className="text-white/70 ml-2">
                    {new Date(promotion.endDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {promotion.conditions.minAmount && (
                <div className="mb-3 p-3 bg-white/5 rounded">
                  <h5 className="text-sm font-medium text-white mb-2">Conditions</h5>
                  <div className="text-sm text-white/70">
                    {promotion.conditions.minAmount && (
                      <div>Minimum amount: R{promotion.conditions.minAmount}</div>
                    )}
                    {promotion.conditions.maxDiscount && (
                      <div>Maximum discount: R{promotion.conditions.maxDiscount}</div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded">
                    {promotion.targetAudience.type.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30">
                    Analytics
                  </button>
                  {promotion.status === 'active' && (
                    <button className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-sm hover:bg-orange-500/30">
                      Pause
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPromotions.length === 0 && (
          <div className="text-center py-8 text-white/50">
            No promotions found
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="Plus" className="w-4 h-4 mr-2 inline" />
            Create Promotion
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="BarChart" className="w-4 h-4 mr-2 inline" />
            View Analytics
          </button>
          <button className="flex-1 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default PromotionManager;
