import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface Promotion {
  id: string;
  code: string;
  title: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minBookingAmount?: number;
  validUntil: Date;
  isActive: boolean;
  usageCount: number;
  maxUsage?: number;
}

interface PromotionsProps {
  userId: string;
  className?: string;
}

export const Promotions: React.FC<PromotionsProps> = ({ userId, className = "" }) => {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [loading, setLoading] = useState(true);
  const [appliedCode, setAppliedCode] = useState<string>('');

  useEffect(() => {
    fetchPromotions();
  }, [userId]);

  const fetchPromotions = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/users/${userId}/promotions`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPromotions(data.promotions || []);
      }
    } catch (error) {
      console.error('Error fetching promotions:', error);
      // Mock data for development
      setPromotions([
        {
          id: '1',
          code: 'WELCOME20',
          title: 'Welcome Bonus',
          description: '20% off your first booking',
          discountType: 'percentage',
          discountValue: 20,
          minBookingAmount: 500,
          validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          isActive: true,
          usageCount: 0,
          maxUsage: 1
        },
        {
          id: '2',
          code: 'SAVE100',
          title: 'Fixed Discount',
          description: 'R100 off bookings over R1000',
          discountType: 'fixed',
          discountValue: 100,
          minBookingAmount: 1000,
          validUntil: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          isActive: true,
          usageCount: 0,
          maxUsage: 3
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const applyPromoCode = async (code: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/users/${userId}/promotions/apply`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code })
      });

      if (response.ok) {
        setAppliedCode(code);
        // Show success message
      }
    } catch (error) {
      console.error('Error applying promo code:', error);
    }
  };

  const getDiscountText = (promotion: Promotion) => {
    if (promotion.discountType === 'percentage') {
      return `${promotion.discountValue}% off`;
    } else {
      return `R${promotion.discountValue} off`;
    }
  };

  const isExpired = (validUntil: Date) => {
    return new Date() > validUntil;
  };

  if (loading) {
    return (
      <div className={`space-y-3 ${className}`}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-20 bg-white/10 rounded-lg"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {promotions.length === 0 ? (
        <div className="text-center py-4">
          <Icon name="Gift" size="lg" className="text-white/50 mb-2" />
          <p className="text-white/70 text-sm">No promotions available</p>
        </div>
      ) : (
        promotions.map((promotion) => (
          <div 
            key={promotion.id} 
            className={`p-4 rounded-lg border ${
              isExpired(promotion.validUntil) 
                ? 'bg-gray-500/20 border-gray-500/30' 
                : 'bg-green-500/20 border-green-500/30'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Icon name="Gift" size="sm" />
                <span className="font-semibold text-white">{promotion.title}</span>
                <span className="text-xs text-white/70">({promotion.code})</span>
              </div>
              <span className={`text-sm font-bold ${
                isExpired(promotion.validUntil) ? 'text-gray-400' : 'text-green-400'
              }`}>
                {getDiscountText(promotion)}
              </span>
            </div>
            
            <p className="text-sm text-white/80 mb-3">{promotion.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="text-xs text-white/60">
                Valid until: {promotion.validUntil.toLocaleDateString()}
                {promotion.minBookingAmount && (
                  <span className="ml-2">
                    • Min: R{promotion.minBookingAmount}
                  </span>
                )}
              </div>
              
              {!isExpired(promotion.validUntil) && (
                <button
                  onClick={() => applyPromoCode(promotion.code)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    appliedCode === promotion.code
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {appliedCode === promotion.code ? 'Applied' : 'Use Code'}
                </button>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Promotions;
