import React, { useState } from 'react';
import Icon from './Icon';

interface RentalCalculatorProps {
  basePrice: number;
  onCalculate: (total: number, breakdown: any) => void;
  className?: string;
}

export const RentalCalculator: React.FC<RentalCalculatorProps> = ({ 
  basePrice, 
  onCalculate, 
  className = '' 
}) => {
  const [rentalType, setRentalType] = useState<'hourly' | 'daily' | 'weekly'>('daily');
  const [duration, setDuration] = useState(1);
  const [addOns, setAddOns] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
    driver: false,
    fuel: false
  });

  const addOnPrices = {
    insurance: 50,
    gps: 30,
    childSeat: 25,
    driver: 200,
    fuel: 100
  };

  const calculateTotal = () => {
    let baseTotal = basePrice * duration;
    
    // Apply rental type multipliers
    if (rentalType === 'hourly') {
      baseTotal = basePrice * duration;
    } else if (rentalType === 'weekly') {
      baseTotal = basePrice * duration * 7 * 0.85; // 15% weekly discount
    }

    // Add selected add-ons
    let addOnTotal = 0;
    const selectedAddOns = Object.entries(addOns)
      .filter(([, selected]) => selected)
      .map(([addOn]) => ({ name: addOn, price: addOnPrices[addOn as keyof typeof addOnPrices] }));

    addOnTotal = selectedAddOns.reduce((sum, addOn) => sum + addOn.price, 0);

    const serviceFee = (baseTotal + addOnTotal) * 0.1; // 10% service fee
    const total = baseTotal + addOnTotal + serviceFee;

    const breakdown = {
      baseTotal,
      addOns: selectedAddOns,
      addOnTotal,
      serviceFee,
      total,
      rentalType,
      duration
    };

    onCalculate(total, breakdown);
    return breakdown;
  };

  const handleAddOnChange = (addOn: string, checked: boolean) => {
    setAddOns(prev => ({ ...prev, [addOn]: checked }));
  };

  React.useEffect(() => {
    calculateTotal();
  }, [rentalType, duration, addOns, basePrice]);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Rental Type */}
      <div>
        <label className="block text-sm font-medium text-white/90 mb-2">
          Rental Type
        </label>
        <div className="flex space-x-2">
          {[
            { value: 'hourly', label: 'Hourly', icon: 'Clock' },
            { value: 'daily', label: 'Daily', icon: 'Calendar' },
            { value: 'weekly', label: 'Weekly', icon: 'Calendar' }
          ].map((type) => (
            <button
              key={type.value}
              onClick={() => setRentalType(type.value as any)}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                rentalType === type.value
                  ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  : 'bg-white/10 text-white/70 border border-white/20 hover:bg-white/20'
              }`}
              >
                <Icon name={type.icon} size="sm" className="mr-1" />
                {type.label}
              </button>
          ))}
        </div>
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium text-white/90 mb-2">
          Duration ({rentalType === 'hourly' ? 'Hours' : rentalType === 'daily' ? 'Days' : 'Weeks'})
        </label>
        <input
          type="number"
          min="1"
          value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Add-ons */}
      <div>
        <label className="block text-sm font-medium text-white/90 mb-2">
          Add-ons
        </label>
        <div className="space-y-2">
          {[
            { key: 'insurance', label: 'Comprehensive Insurance', icon: 'Shield', price: addOnPrices.insurance },
            { key: 'gps', label: 'GPS Navigation', icon: 'MapPin', price: addOnPrices.gps },
            { key: 'childSeat', label: 'Child Safety Seat', icon: 'Baby', price: addOnPrices.childSeat },
            { key: 'driver', label: 'Professional Driver', icon: 'User', price: addOnPrices.driver },
            { key: 'fuel', label: 'Full Tank of Fuel', icon: 'Fuel', price: addOnPrices.fuel }
          ].map((addOn) => (
            <label key={addOn.key} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={addOns[addOn.key as keyof typeof addOns]}
                  onChange={(e) => handleAddOnChange(addOn.key, e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <Icon name={addOn.icon} size="sm" />
                <span className="text-white/90 text-sm">{addOn.label}</span>
              </div>
              <span className="text-white/70 text-sm">R{addOn.price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Calculation Summary */}
      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
        <h4 className="text-sm font-medium text-white/90 mb-3">Cost Breakdown</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-white/70">Base ({rentalType}):</span>
            <span className="text-white">R{basePrice} × {duration}</span>
          </div>
          {Object.entries(addOns).filter(([, selected]) => selected).map(([addOn]) => (
            <div key={addOn} className="flex justify-between">
              <span className="text-white/70 capitalize">{addOn.replace(/([A-Z])/g, ' $1')}:</span>
              <span className="text-white">R{addOnPrices[addOn as keyof typeof addOnPrices]}</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-white/20 pt-2">
            <span className="text-white/70">Service Fee (10%):</span>
            <span className="text-white">R{Math.round((basePrice * duration) * 0.1)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg border-t border-white/20 pt-2">
            <span className="text-white">Total:</span>
            <span className="text-green-400">R{Math.round(calculateTotal().total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalCalculator;
