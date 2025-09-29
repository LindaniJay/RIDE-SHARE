import React, { useState } from 'react';
import Icon from './Icon';

interface SAPaymentGatewayProps {
  amount: number;
  currency?: string;
  onPaymentSuccess: (paymentId: string, method: string) => void;
  onPaymentError: (error: string) => void;
  className?: string;
}

export const SAPaymentGateway: React.FC<SAPaymentGatewayProps> = ({
  amount,
  currency = 'ZAR',
  onPaymentSuccess,
  onPaymentError,
  className = ""
}) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    {
      id: 'payfast',
      name: 'PayFast',
      icon: 'CreditCard',
      description: 'Secure online payments',
      fees: '2.9% + R2.00'
    },
    {
      id: 'ozow',
      name: 'Ozow',
      icon: 'Phone',
      description: 'Instant EFT payments',
      fees: '1.5% + R1.50'
    },
    {
      id: 'snapscan',
      name: 'SnapScan',
      icon: 'CreditCard',
      description: 'QR code payments',
      fees: '2.5% + R1.00'
    },
    {
      id: 'eft',
      name: 'Bank Transfer',
      icon: 'CreditCard',
      description: 'Direct bank transfer',
      fees: 'R15.00'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, American Express',
      fees: '3.5% + R2.50'
    }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) {
      onPaymentError('Please select a payment method');
      return;
    }

    setProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const paymentId = `pay_${Date.now()}`;
      onPaymentSuccess(paymentId, selectedMethod);
    } catch (error) {
      onPaymentError('Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  const calculateTotal = (method: string) => {
    const methodData = paymentMethods.find(m => m.id === method);
    if (!methodData) return amount;

    const feeText = methodData.fees;
    const isPercentage = feeText.includes('%');
    
    if (isPercentage) {
      const percentage = parseFloat(feeText.split('%')[0]);
      const fixedFee = parseFloat(feeText.split('+ R')[1] || '0');
      return amount + (amount * percentage / 100) + fixedFee;
    } else {
      const fixedFee = parseFloat(feeText.replace('R', ''));
      return amount + fixedFee;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Payment Amount */}
      <div className="bg-white/10 rounded-lg p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Payment Amount</h3>
            <p className="text-white/70 text-sm">Total including fees</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              R{selectedMethod ? calculateTotal(selectedMethod).toFixed(2) : amount.toFixed(2)}
            </div>
            {selectedMethod && (
              <div className="text-sm text-white/70">
                Base: R{amount.toFixed(2)} + Fees: R{(calculateTotal(selectedMethod) - amount).toFixed(2)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div>
        <h4 className="text-md font-medium text-white/90 mb-4">Choose Payment Method</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'bg-blue-500/20 border-blue-500/30'
                  : 'bg-white/10 border-white/20 hover:bg-white/20'
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center space-x-3">
                <Icon name={method.icon} size="lg" />
                <div className="flex-1">
                  <h5 className="text-white font-medium">{method.name}</h5>
                  <p className="text-white/70 text-sm">{method.description}</p>
                  <p className="text-white/60 text-xs">Fees: {method.fees}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/70">
                    R{calculateTotal(method.id).toFixed(2)}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Payment Button */}
      <button
        onClick={handlePayment}
        disabled={!selectedMethod || processing}
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
          !selectedMethod || processing
            ? 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
            : 'bg-green-500/20 text-green-300 hover:bg-green-500/30 border border-green-500/30'
        }`}
      >
        {processing ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-green-300 border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Payment...</span>
          </div>
        ) : (
          `Pay R${selectedMethod ? calculateTotal(selectedMethod).toFixed(2) : amount.toFixed(2)}`
        )}
      </button>

      {/* Security Notice */}
      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3">
        <div className="flex items-center space-x-2">
          <Icon name="Lock" size="sm" className="text-blue-400" />
          <p className="text-blue-300 text-sm">
            Your payment is secured with bank-level encryption. We support POPIA compliance for data protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SAPaymentGateway;
