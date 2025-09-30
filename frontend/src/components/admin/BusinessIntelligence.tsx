import React, { useState, useEffect } from 'react';
import Icon from '../Icon';
import GlassCard from '../GlassCard';

interface BusinessMetric {
  name: string;
  value: number;
  unit: string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  target?: number;
  category: 'revenue' | 'users' | 'operations' | 'market';
}

interface MarketInsight {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  category: 'opportunity' | 'threat' | 'trend';
  confidence: number;
  source: string;
  actionable: boolean;
}

interface CompetitorAnalysis {
  competitor: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  threats: string[];
  opportunities: string[];
}

const BusinessIntelligence: React.FC = () => {
  const [metrics, setMetrics] = useState<BusinessMetric[]>([]);
  const [insights, setInsights] = useState<MarketInsight[]>([]);
  const [competitors, setCompetitors] = useState<CompetitorAnalysis[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'competitors'>('overview');

  useEffect(() => {
    fetchBusinessData();
  }, []);

  const fetchBusinessData = async () => {
    try {
      // Mock data - replace with actual API calls
      const mockMetrics: BusinessMetric[] = [
        {
          name: 'Market Share',
          value: 15.2,
          unit: '%',
          change: 2.1,
          trend: 'up',
          target: 20,
          category: 'market'
        },
        {
          name: 'Customer Acquisition Cost',
          value: 45,
          unit: 'ZAR',
          change: -8.3,
          trend: 'down',
          target: 40,
          category: 'operations'
        },
        {
          name: 'Customer Lifetime Value',
          value: 1250,
          unit: 'ZAR',
          change: 12.5,
          trend: 'up',
          target: 1500,
          category: 'revenue'
        },
        {
          name: 'Net Promoter Score',
          value: 8.2,
          unit: '/10',
          change: 0.3,
          trend: 'up',
          target: 9,
          category: 'users'
        },
        {
          name: 'Churn Rate',
          value: 5.8,
          unit: '%',
          change: -1.2,
          trend: 'down',
          target: 5,
          category: 'users'
        },
        {
          name: 'Revenue per User',
          value: 85,
          unit: 'ZAR',
          change: 6.7,
          trend: 'up',
          target: 100,
          category: 'revenue'
        }
      ];

      const mockInsights: MarketInsight[] = [
        {
          title: 'Electric Vehicle Demand Surge',
          description: 'Growing demand for electric vehicles in urban areas presents opportunity for EV fleet expansion.',
          impact: 'high',
          category: 'opportunity',
          confidence: 85,
          source: 'Market Research',
          actionable: true
        },
        {
          title: 'Competitor Price War',
          description: 'Major competitor reducing prices by 15% may impact market share.',
          impact: 'medium',
          category: 'threat',
          confidence: 75,
          source: 'Competitive Intelligence',
          actionable: true
        },
        {
          title: 'Weekend Usage Pattern',
          description: 'Weekend bookings show 40% higher revenue potential than weekdays.',
          impact: 'medium',
          category: 'trend',
          confidence: 90,
          source: 'Internal Analytics',
          actionable: true
        }
      ];

      const mockCompetitors: CompetitorAnalysis[] = [
        {
          competitor: 'RentACar SA',
          marketShare: 25,
          strengths: ['Established brand', 'Large fleet', 'Corporate partnerships'],
          weaknesses: ['High prices', 'Limited digital presence', 'Poor customer service'],
          threats: ['Price competition', 'Digital disruption'],
          opportunities: ['Market expansion', 'Technology adoption']
        },
        {
          competitor: 'QuickRide',
          marketShare: 18,
          strengths: ['Mobile-first approach', 'Low prices', 'Quick booking'],
          weaknesses: ['Limited coverage', 'Small fleet', 'Quality issues'],
          threats: ['Service quality', 'Scalability'],
          opportunities: ['Market penetration', 'Service improvement']
        }
      ];

      setMetrics(mockMetrics);
      setInsights(mockInsights);
      setCompetitors(mockCompetitors);
    } catch (error) {
      console.error('Error fetching business data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return 'TrendingUp';
      case 'down': return 'TrendingDown';
      default: return 'Minus';
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-500';
      case 'down': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-500 bg-red-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/20';
      case 'low': return 'text-green-500 bg-green-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'opportunity': return 'text-green-500';
      case 'threat': return 'text-red-500';
      case 'trend': return 'text-blue-500';
      default: return 'text-white';
    }
  };

  if (loading) {
    return (
      <GlassCard title="Business Intelligence" icon="Brain">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard title="Business Intelligence" icon="Brain">
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="flex space-x-2">
          {[
            { key: 'overview', label: 'Overview', icon: 'BarChart' },
            { key: 'insights', label: 'Insights', icon: 'Lightbulb' },
            { key: 'competitors', label: 'Competitors', icon: 'Users' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm ${
                activeTab === tab.key
                  ? 'bg-white/20 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Icon name={tab.icon} className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <h3 className="font-medium text-white">Key Business Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">{metric.name}</h4>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name={getTrendIcon(metric.trend)}
                        className={`w-4 h-4 ${getTrendColor(metric.trend)}`}
                      />
                      <span className={`text-sm ${getTrendColor(metric.trend)}`}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-2xl font-bold text-white mb-2">
                    {metric.value}{metric.unit}
                  </div>
                  
                  {metric.target && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/50">Target:</span>
                        <span className="text-white/70">{metric.target}{metric.unit}</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-4">
            <h3 className="font-medium text-white">Market Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-white">{insight.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getImpactColor(insight.impact)}`}>
                        {insight.impact} impact
                      </span>
                      <span className={`text-xs ${getCategoryColor(insight.category)}`}>
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-white/70 mb-3">{insight.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-white/50">Confidence:</span>
                      <span className="text-white/70 ml-2">{insight.confidence}%</span>
                    </div>
                    <div>
                      <span className="text-white/50">Source:</span>
                      <span className="text-white/70 ml-2">{insight.source}</span>
                    </div>
                    <div>
                      <span className="text-white/50">Actionable:</span>
                      <span className="text-white/70 ml-2">
                        {insight.actionable ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                  
                  {insight.actionable && (
                    <div className="mt-3 flex space-x-2">
                      <button className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30">
                        Create Action Plan
                      </button>
                      <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30">
                        Add to Strategy
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competitors Tab */}
        {activeTab === 'competitors' && (
          <div className="space-y-4">
            <h3 className="font-medium text-white">Competitive Analysis</h3>
            <div className="space-y-4">
              {competitors.map((competitor, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-white">{competitor.competitor}</h4>
                    <div className="text-2xl font-bold text-white">
                      {competitor.marketShare}%
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-green-400 mb-2">Strengths</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        {competitor.strengths.map((strength, i) => (
                          <li key={i}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-red-400 mb-2">Weaknesses</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        {competitor.weaknesses.map((weakness, i) => (
                          <li key={i}>• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-orange-400 mb-2">Threats</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        {competitor.threats.map((threat, i) => (
                          <li key={i}>• {threat}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-blue-400 mb-2">Opportunities</h5>
                      <ul className="text-sm text-white/70 space-y-1">
                        {competitor.opportunities.map((opportunity, i) => (
                          <li key={i}>• {opportunity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex space-x-2">
          <button className="flex-1 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Icon name="RefreshCw" className="w-4 h-4 mr-2 inline" />
            Refresh Data
          </button>
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
            <Icon name="Download" className="w-4 h-4 mr-2 inline" />
            Export Report
          </button>
          <button className="flex-1 px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-colors">
            <Icon name="Settings" className="w-4 h-4 mr-2 inline" />
            Configure
          </button>
        </div>
      </div>
    </GlassCard>
  );
};

export default BusinessIntelligence;
