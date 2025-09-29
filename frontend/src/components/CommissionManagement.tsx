import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface CommissionRule {
  id: string;
  name: string;
  type: 'percentage' | 'fixed';
  value: number;
  minAmount?: number;
  maxAmount?: number;
  applicableTo: 'all' | 'new_hosts' | 'premium_hosts';
  isActive: boolean;
}

interface Payout {
  id: string;
  hostId: string;
  hostName: string;
  amount: number;
  commission: number;
  netAmount: number;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  scheduledDate: Date;
  completedDate?: Date;
}

interface CommissionManagementProps {
  className?: string;
}

export const CommissionManagement: React.FC<CommissionManagementProps> = ({ className = "" }) => {
  const [commissionRules, setCommissionRules] = useState<CommissionRule[]>([]);
  const [payouts, setPayouts] = useState<Payout[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'rules' | 'payouts'>('rules');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      
      // Fetch commission rules
      const rulesResponse = await fetch('/api/admin/commission-rules', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      // Fetch payouts
      const payoutsResponse = await fetch('/api/admin/payouts', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (rulesResponse.ok) {
        const rulesData = await rulesResponse.json();
        setCommissionRules(rulesData.rules || []);
      }

      if (payoutsResponse.ok) {
        const payoutsData = await payoutsResponse.json();
        setPayouts(payoutsData.payouts || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      // Mock data for development
      setCommissionRules([
        {
          id: '1',
          name: 'Standard Commission',
          type: 'percentage',
          value: 15,
          applicableTo: 'all',
          isActive: true
        },
        {
          id: '2',
          name: 'New Host Bonus',
          type: 'percentage',
          value: 10,
          applicableTo: 'new_hosts',
          isActive: true
        },
        {
          id: '3',
          name: 'Premium Host Rate',
          type: 'percentage',
          value: 20,
          applicableTo: 'premium_hosts',
          isActive: true
        }
      ]);

      setPayouts([
        {
          id: '1',
          hostId: 'host1',
          hostName: 'John M.',
          amount: 5000,
          commission: 750,
          netAmount: 4250,
          status: 'pending',
          scheduledDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
        },
        {
          id: '2',
          hostId: 'host2',
          hostName: 'Sarah K.',
          amount: 3200,
          commission: 480,
          netAmount: 2720,
          status: 'processing',
          scheduledDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) // 3 days from now
        },
        {
          id: '3',
          hostId: 'host3',
          hostName: 'Mike D.',
          amount: 1800,
          commission: 270,
          netAmount: 1530,
          status: 'completed',
          scheduledDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
          completedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) // 1 day ago
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const updateCommissionRule = async (ruleId: string, updates: Partial<CommissionRule>) => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/admin/commission-rules/${ruleId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      setCommissionRules(prev => prev.map(rule => 
        rule.id === ruleId ? { ...rule, ...updates } : rule
      ));
    } catch (error) {
      console.error('Error updating commission rule:', error);
    }
  };

  const processPayout = async (payoutId: string) => {
    try {
      const token = localStorage.getItem('authToken');
      await fetch(`/api/admin/payouts/${payoutId}/process`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setPayouts(prev => prev.map(payout => 
        payout.id === payoutId 
          ? { ...payout, status: 'processing' }
          : payout
      ));
    } catch (error) {
      console.error('Error processing payout:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'processing':
        return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'completed':
        return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'failed':
        return 'text-red-400 bg-red-500/20 border-red-500/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Clock';
      case 'processing':
        return 'Settings';
      case 'completed':
        return 'CheckCircle';
      case 'failed':
        return 'XCircle';
      default:
        return 'FileText';
    }
  };

  const totalPendingPayouts = payouts
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.netAmount, 0);

  const totalCommission = payouts
    .filter(p => p.status === 'completed')
    .reduce((sum, p) => sum + p.commission, 0);

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-8 bg-white/10 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-white/10 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Commission & Payouts</h3>
          <p className="text-white/70 text-sm">Manage platform commissions and host payouts</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('rules')}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              activeTab === 'rules'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Commission Rules
          </button>
          <button
            onClick={() => setActiveTab('payouts')}
            className={`px-3 py-1 rounded-lg text-sm transition-colors ${
              activeTab === 'payouts'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                : 'bg-white/10 text-white/70 hover:bg-white/20'
            }`}
          >
            Payouts
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Pending Payouts</p>
              <p className="text-2xl font-bold text-white">R{totalPendingPayouts.toLocaleString()}</p>
            </div>
            <Icon name="DollarSign" size="lg" />
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Total Commission</p>
              <p className="text-2xl font-bold text-white">R{totalCommission.toLocaleString()}</p>
            </div>
            <Icon name="BarChart" size="lg" />
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-4 border border-white/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Active Rules</p>
              <p className="text-2xl font-bold text-white">
                {commissionRules.filter(r => r.isActive).length}
              </p>
            </div>
            <Icon name="Settings" size="lg" />
          </div>
        </div>
      </div>

      {/* Commission Rules Tab */}
      {activeTab === 'rules' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-medium text-white">Commission Rules</h4>
            <button className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-sm hover:bg-green-500/30 transition-colors">
              + Add Rule
            </button>
          </div>
          
          <div className="space-y-3">
            {commissionRules.map((rule) => (
              <div key={rule.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Settings" size="sm" />
                    <div>
                      <h5 className="text-white font-medium">{rule.name}</h5>
                      <p className="text-white/70 text-sm">
                        {rule.type === 'percentage' ? `${rule.value}%` : `R${rule.value}`} • 
                        {rule.applicableTo.replace('_', ' ')} • 
                        {rule.isActive ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateCommissionRule(rule.id, { isActive: !rule.isActive })}
                      className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                        rule.isActive
                          ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30'
                          : 'bg-gray-500/20 text-gray-300 hover:bg-gray-500/30'
                      }`}
                    >
                      {rule.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="px-3 py-1 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-colors">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Payouts Tab */}
      {activeTab === 'payouts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-md font-medium text-white">Host Payouts</h4>
            <button className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
              Process All Pending
            </button>
          </div>
          
          <div className="space-y-3">
            {payouts.map((payout) => (
              <div key={payout.id} className="bg-white/10 rounded-lg p-4 border border-white/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getStatusIcon(payout.status)}</span>
                    <div>
                      <h5 className="text-white font-medium">{payout.hostName}</h5>
                      <p className="text-white/70 text-sm">
                        R{payout.amount.toLocaleString()} • Commission: R{payout.commission.toLocaleString()} • 
                        Net: R{payout.netAmount.toLocaleString()}
                      </p>
                      <p className="text-white/50 text-xs">
                        Scheduled: {payout.scheduledDate.toLocaleDateString()}
                        {payout.completedDate && (
                          <span> • Completed: {payout.completedDate.toLocaleDateString()}</span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(payout.status)}`}>
                      {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                    </span>
                    {payout.status === 'pending' && (
                      <button
                        onClick={() => processPayout(payout.id)}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm hover:bg-blue-500/30 transition-colors"
                      >
                        Process
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionManagement;
