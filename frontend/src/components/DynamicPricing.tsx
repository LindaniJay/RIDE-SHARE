import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface PricingRule {
  id: string;
  name: string;
  type: 'time' | 'demand' | 'seasonal' | 'event';
  conditions: {
    dayOfWeek?: number[];
    timeRange?: { start: string; end: string };
    demandLevel?: 'low' | 'medium' | 'high';
    season?: 'summer' | 'winter' | 'spring' | 'autumn';
    event?: string;
  };
  multiplier: number;
  isActive: boolean;
}

interface DynamicPricingProps {
  vehicleId: string;
  basePrice: number;
  onPriceUpdate: (newPrice: number) => void;
  className?: string;
}

export const DynamicPricing: React.FC<DynamicPricingProps> = ({ 
  vehicleId, 
  basePrice, 
  onPriceUpdate, 
  className = "" 
}) => {
  const [pricingRules, setPricingRules] = useState<PricingRule[]>([]);
  const [currentPrice, setCurrentPrice] = useState(basePrice);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPricingRules();
  }, [vehicleId]);

  useEffect(() => {
    calculateCurrentPrice();
  }, [pricingRules, basePrice]);

  const fetchPricingRules = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/vehicles/${vehicleId}/pricing-rules`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPricingRules(data.rules || []);
      }
    } catch (error) {
      console.error('Error fetching pricing rules:', error);
      // Mock data for development
      setPricingRules([
        {
          id: '1',
          name: 'Weekend Premium',
          type: 'time',
          conditions: { dayOfWeek: [0, 6] }, // Saturday, Sunday
          multiplier: 1.5,
          isActive: true
        },
        {
          id: '2',
          name: 'Peak Hours',
          type: 'time',
          conditions: { timeRange: { start: '07:00', end: '09:00' } },
          multiplier: 1.3,
          isActive: true
        },
        {
          id: '3',
          name: 'High Demand',
          type: 'demand',
          conditions: { demandLevel: 'high' },
          multiplier: 1.4,
          isActive: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const calculateCurrentPrice = () => {
    let price = basePrice;
    const now = new Date();
    const dayOfWeek = now.getDay();
    const currentTime = now.toTimeString().slice(0, 5);

    // Apply active pricing rules
    const applicableRules = pricingRules.filter(rule => {
      if (!rule.isActive) return false;

      switch (rule.type) {
        case 'time':
          if (rule.conditions.dayOfWeek?.includes(dayOfWeek)) return true;
          if (rule.conditions.timeRange) {
            const { start, end } = rule.conditions.timeRange;
            return currentTime >= start && currentTime <= end;
          }
          return false;
        case 'demand':
          // Mock demand level - in real app, this would come from analytics
          return rule.conditions.demandLevel === 'high';
        default:
          return false;
      }
    });

    // Apply multipliers (use the highest applicable multiplier)
    const maxMultiplier = applicableRules.reduce((max, rule) => 
      Math.max(max, rule.multiplier), 1
    );

    price = Math.round(basePrice * maxMultiplier);
    setCurrentPrice(price);
    onPriceUpdate(price);
  };

  // const addPricingRule = (rule: Omit<PricingRule, 'id'>) => {
  //   const newRule = { ...rule, id: Date.now().toString() };
  //   setPricingRules(prev => [...prev, newRule]);
  // };

  const toggleRule = (ruleId: string) => {
    setPricingRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, isActive: !rule.isActive } : rule
    ));
  };

  const deleteRule = (ruleId: string) => {
    setPricingRules(prev => prev.filter(rule => rule.id !== ruleId));
  };

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
      {/* Current Price Display */}
      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Current Price</h3>
            <p className="text-white/70 text-sm">Based on active pricing rules</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-400">R{currentPrice}</div>
            <div className="text-sm text-white/70">
              {currentPrice > basePrice ? `+${Math.round(((currentPrice - basePrice) / basePrice) * 100)}%` : 'Base price'}
            </div>
          </div>
        </div>
      </div>

      {/* Active Rules */}
      <div>
        <h4 className="text-sm font-medium text-white/90 mb-3">Active Pricing Rules</h4>
        <div className="space-y-2">
          {pricingRules.filter(rule => rule.isActive).map((rule) => (
            <div key={rule.id} className="flex items-center justify-between p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon name="Zap" size="sm" />
                <div>
                  <p className="text-sm font-medium text-white">{rule.name}</p>
                  <p className="text-xs text-white/70">
                    {rule.type === 'time' && 'Time-based'}
                    {rule.type === 'demand' && 'Demand-based'}
                    {rule.type === 'seasonal' && 'Seasonal'}
                    {rule.type === 'event' && 'Event-based'}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-300">+{Math.round((rule.multiplier - 1) * 100)}%</span>
                <button
                  onClick={() => toggleRule(rule.id)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inactive Rules */}
      {pricingRules.filter(rule => !rule.isActive).length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-white/90 mb-3">Inactive Rules</h4>
          <div className="space-y-2">
            {pricingRules.filter(rule => !rule.isActive).map((rule) => (
              <div key={rule.id} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Pause" size="sm" />
                  <div>
                    <p className="text-sm font-medium text-white/70">{rule.name}</p>
                    <p className="text-xs text-white/50">
                      {rule.type === 'time' && 'Time-based'}
                      {rule.type === 'demand' && 'Demand-based'}
                      {rule.type === 'seasonal' && 'Seasonal'}
                      {rule.type === 'event' && 'Event-based'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleRule(rule.id)}
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <Icon name="Play" size="sm" />
                  </button>
                  <button
                    onClick={() => deleteRule(rule.id)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Icon name="Trash" size="sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Add New Rule Button */}
      <button className="w-full p-3 border-2 border-dashed border-white/30 rounded-lg text-white/70 hover:border-white/50 hover:text-white transition-colors">
        + Add New Pricing Rule
      </button>
    </div>
  );
};

export default DynamicPricing;
