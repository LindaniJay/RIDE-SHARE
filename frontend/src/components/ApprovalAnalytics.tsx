import React, { useState, useEffect } from 'react';
import { approvalRequestsAPI } from '../api';
import GlassCard from './GlassCard';

interface ApprovalStats {
  statusStats: Array<{ status: string; count: number }>;
  requestTypeStats: Array<{ requestType: string; count: number }>;
}

const ApprovalAnalytics: React.FC = () => {
  const [stats, setStats] = useState<ApprovalStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await approvalRequestsAPI.getStats();
      if (response.data.success) {
        setStats(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching approval stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <GlassCard title="Approval Analytics" icon="BarChart">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <GlassCard title="Status Distribution" icon="PieChart">
        <div className="space-y-3">
          {stats?.statusStats.map((stat) => (
            <div key={stat.status} className="flex items-center justify-between">
              <span className="text-white/70 capitalize">{stat.status}</span>
              <div className="flex items-center space-x-2">
                <div className="w-20 bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(stat.count / (stats?.statusStats.reduce((sum, s) => sum + s.count, 0) || 1)) * 100}%` }}
                  />
                </div>
                <span className="text-white font-semibold">{stat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard title="Request Types" icon="FileText">
        <div className="space-y-3">
          {stats?.requestTypeStats.map((stat) => (
            <div key={stat.requestType} className="flex items-center justify-between">
              <span className="text-white/70">{stat.requestType}</span>
              <span className="text-white font-semibold">{stat.count}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default ApprovalAnalytics;
