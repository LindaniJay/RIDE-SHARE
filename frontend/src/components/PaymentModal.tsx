import React, { useState, useEffect } from 'react';
import { paymentsAPI } from '../api';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    id: string;
    totalAmount: number;
    vehicleName: string;
    pickupDate: string;
    returnDate: string;
  };
  userInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };
  onSuccess: () => void;
}

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: string;
  supported: boolean;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  bookingData,
  userInfo,
  onSuccess
}) => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetchPaymentMethods();
    }
  }, [isOpen]);

  const fetchPaymentMethods = async () => {
    try {
      const response = await paymentsAPI.getPaymentMethods();
      setPaymentMethods(response.data.methods);
      // Default to Payfast for South African users
      setSelectedMethod('payfast');
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
  };

  const handlePayment = async () => {
    if (!selectedMethod) {
      setError('Please select a payment method');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (selectedMethod === 'stripe') {
        // Handle Stripe payment
        await paymentsAPI.createPaymentIntent(
          bookingData.id,
          bookingData.totalAmount
        );
        
        // In a real app, you would integrate with Stripe Elements here
        alert('Stripe integration would be implemented here');
        onSuccess();
      } else if (selectedMethod === 'payfast') {
        // Handle Payfast payment
        const paymentData = {
          bookingId: parseInt(bookingData.id),
          amount: bookingData.totalAmount,
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          email: userInfo.email,
          cellNumber: userInfo.phone
        };

        const response = await paymentsAPI.createPayfastPayment(paymentData);
        
        // Redirect to Payfast
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = response.data.redirectUrl;
        
        Object.entries(response.data.payfastData).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value as string;
          form.appendChild(input);
        });
        
        document.body.appendChild(form);
        form.submit();
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error && 'response' in error 
        ? (error as { response?: { data?: { error?: string } } }).response?.data?.error 
        : 'Payment failed. Please try again.';
      setError(errorMessage || 'Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price: number) => `R${price.toLocaleString()}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Complete Your Booking
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Booking Summary */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
            {bookingData.vehicleName}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {bookingData.pickupDate} - {bookingData.returnDate}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Total: {formatPrice(bookingData.totalAmount)}
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Choose Payment Method
          </h4>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedMethod === method.id
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedMethod === method.id}
                  onChange={(e) => setSelectedMethod(e.target.value)}
                  className="mr-3 text-primary-600 focus:ring-primary-500"
                />
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {method.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {method.description}
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md p-3 mb-4">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* Payment Info */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md p-4 mb-6">
          <div className="flex items-start">
            <span className="text-blue-600 dark:text-blue-400 text-lg mr-2">ℹ️</span>
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <p className="font-medium mb-1">Payment Security</p>
              <p>
                Your payment is processed securely. You'll only be charged after the host 
                confirms your booking. All transactions are protected by our insurance coverage.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={loading || !selectedMethod}
            className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </div>

        {/* Terms */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
          By proceeding, you agree to our{' '}
          <a href="#" className="text-primary-600 hover:text-primary-700">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-primary-600 hover:text-primary-700">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
