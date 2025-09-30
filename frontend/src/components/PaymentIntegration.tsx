import React, { useState } from 'react';
import Icon from './Icon';

interface PaymentIntegrationProps {
  bookingId: number;
  amount: number;
  onPaymentSuccess: (paymentData: any) => void;
  onPaymentError: (error: string) => void;
}

const PaymentIntegration: React.FC<PaymentIntegrationProps> = ({
  bookingId,
  amount,
  onPaymentSuccess,
  onPaymentError
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'payfast'>('stripe');
  const [loading, setLoading] = useState(false);

  const serviceFee = Math.round(amount * 0.05);
  const totalAmount = amount + serviceFee;

  const handleStripePayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payments/stripe/create-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          bookingId,
          amount,
          currency: 'ZAR',
          paymentMethod: 'stripe'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Payment data received
        // In a real implementation, you would integrate with Stripe Elements
        // For now, we'll simulate a successful payment
        setTimeout(() => {
          onPaymentSuccess(data.paymentIntent);
          setLoading(false);
        }, 2000);
      } else {
        onPaymentError(data.error || 'Payment failed');
        setLoading(false);
      }
    } catch (error) {
      onPaymentError('Network error');
      setLoading(false);
    }
  };

  const handlePayfastPayment = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/payments/payfast/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          bookingId,
          amount,
          currency: 'ZAR',
          paymentMethod: 'payfast'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        // Redirect to Payfast
        window.location.href = `${data.payfastUrl}?${new URLSearchParams(data.paymentData).toString()}`;
      } else {
        onPaymentError(data.error || 'Payment failed');
        setLoading(false);
      }
    } catch (error) {
      onPaymentError('Network error');
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">Payment Details</h3>
      
      <div className="space-y-4">
        {/* Amount Breakdown */}
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70">Base Amount</span>
            <span className="text-white">R{amount.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/70">Service Fee (5%)</span>
            <span className="text-white">R{serviceFee.toLocaleString()}</span>
          </div>
          <div className="border-t border-white/20 pt-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold">Total</span>
              <span className="text-white font-bold text-lg">R{totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="space-y-3">
          <label className="text-white font-medium">Payment Method</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentMethod('stripe')}
              className={`p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'stripe'
                  ? 'border-blue-400 bg-blue-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size="sm" />
                <span className="text-white text-sm">Stripe</span>
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod('payfast')}
              className={`p-3 rounded-lg border-2 transition-all ${
                paymentMethod === 'payfast'
                  ? 'border-blue-400 bg-blue-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size="sm" />
                <span className="text-white text-sm">Payfast</span>
              </div>
            </button>
          </div>
        </div>

        {/* Payment Button */}
        <button
          onClick={paymentMethod === 'stripe' ? handleStripePayment : handlePayfastPayment}
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Processing...</span>
            </div>
          ) : (
            `Pay R${totalAmount.toLocaleString()} with ${paymentMethod === 'stripe' ? 'Stripe' : 'Payfast'}`
          )}
        </button>

        {/* Security Notice */}
        <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size="sm" className="text-green-400" />
            <span className="text-green-200 text-sm">
              Your payment is secure and encrypted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegration;
