import React, { useState } from 'react';
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Car, 
  User, 
  CreditCard,
  Bell,
  AlertCircle
} from 'lucide-react';

export interface BookingConfirmationData {
  bookingId: string;
  reference: string;
  vehicle: {
    id: string;
    make: string;
    model: string;
    year: number;
    images: string[];
    location: string;
  };
  host: {
    id: string;
    name: string;
    phone: string;
    email: string;
  };
  dates: {
    start: string;
    end: string;
    duration: number;
  };
  pricing: {
    baseRate: number;
    extras: number;
    tax: number;
    total: number;
  };
  payment: {
    method: string;
    status: string;
    transactionId: string;
  };
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

interface BookingConfirmationProps {
  booking: BookingConfirmationData;
  onDownloadInvoice: () => void;
  onContactHost: () => void;
  onModifyBooking: () => void;
  onCancelBooking: () => void;
  className?: string;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  booking,
  onDownloadInvoice,
  onContactHost,
  onModifyBooking,
  onCancelBooking,
  className = ''
}) => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    push: true
  });
  const [reminders, setReminders] = useState({
    pickup: true,
    return: true,
    payment: true
  });

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Format time
  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('en-ZA', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Calculate days until pickup
  const getDaysUntilPickup = () => {
    const pickupDate = new Date(booking.dates.start);
    const today = new Date();
    const diffTime = pickupDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysUntilPickup = getDaysUntilPickup();

  return (
    <div className={`booking-confirmation ${className}`}>
      {/* Success Header */}
      <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-semibold text-green-300">Booking Confirmed!</h2>
            <p className="text-green-200/80">
              Your booking has been successfully confirmed. You will receive a confirmation email shortly.
            </p>
          </div>
        </div>

        {/* Booking Reference */}
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm">Booking Reference</p>
              <p className="text-white font-mono text-lg">#{booking.reference}</p>
            </div>
            <div className="text-right">
              <p className="text-white/70 text-sm">Status</p>
              <p className="text-green-400 font-medium capitalize">{booking.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vehicle Details */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Car className="w-5 h-5 mr-2" />
              Vehicle Details
            </h3>
            <div className="flex items-start space-x-4">
              <img
                src={booking.vehicle.images[0] || '/images/default-vehicle.jpg'}
                alt={booking.vehicle.make}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h4 className="text-white font-medium text-lg">
                  {booking.vehicle.make} {booking.vehicle.model}
                </h4>
                <p className="text-white/70">Year: {booking.vehicle.year}</p>
                <p className="text-white/70 flex items-center mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  {booking.vehicle.location}
                </p>
              </div>
            </div>
          </div>

          {/* Booking Dates */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Booking Dates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/70 text-sm mb-1">Pickup Date</p>
                <p className="text-white font-medium">{formatDate(booking.dates.start)}</p>
                <p className="text-white/60 text-sm">{formatTime(booking.dates.start)}</p>
                {daysUntilPickup > 0 && (
                  <p className="text-blue-400 text-sm mt-1">
                    {daysUntilPickup} day{daysUntilPickup !== 1 ? 's' : ''} until pickup
                  </p>
                )}
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-white/70 text-sm mb-1">Return Date</p>
                <p className="text-white font-medium">{formatDate(booking.dates.end)}</p>
                <p className="text-white/60 text-sm">{formatTime(booking.dates.end)}</p>
                <p className="text-white/60 text-sm">
                  Duration: {booking.dates.duration} day{booking.dates.duration !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>

          {/* Host Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Host Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-white/60" />
                <span className="text-white">{booking.host.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white">{booking.host.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white">{booking.host.email}</span>
              </div>
            </div>
            <button
              onClick={onContactHost}
              className="mt-4 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              Contact Host
            </button>
          </div>

          {/* Payment Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Information
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Payment Method</span>
                <span className="text-white capitalize">{booking.payment.method}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Transaction ID</span>
                <span className="text-white font-mono text-sm">{booking.payment.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Payment Status</span>
                <span className="text-green-400 capitalize">{booking.payment.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pricing Summary */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Pricing Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white/70">Base Rate</span>
                <span className="text-white">R{booking.pricing.baseRate.toFixed(2)}</span>
              </div>
              {booking.pricing.extras > 0 && (
                <div className="flex justify-between">
                  <span className="text-white/70">Extras</span>
                  <span className="text-white">R{booking.pricing.extras.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-white/70">VAT (15%)</span>
                <span className="text-white">R{booking.pricing.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-white/20 pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-white font-semibold">R{booking.pricing.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={onDownloadInvoice}
                className="w-full flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Invoice</span>
              </button>
              <button
                onClick={onModifyBooking}
                className="w-full flex items-center space-x-2 px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-lg hover:bg-yellow-500/30 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Modify Booking</span>
              </button>
              <button
                onClick={onCancelBooking}
                className="w-full flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Cancel Booking</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={(e) => setNotifications(prev => ({ ...prev, email: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">Email notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={(e) => setNotifications(prev => ({ ...prev, sms: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">SMS notifications</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={(e) => setNotifications(prev => ({ ...prev, push: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">Push notifications</span>
              </label>
            </div>
          </div>

          {/* Reminders */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Reminders</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={reminders.pickup}
                  onChange={(e) => setReminders(prev => ({ ...prev, pickup: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">Pickup reminder</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={reminders.return}
                  onChange={(e) => setReminders(prev => ({ ...prev, return: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">Return reminder</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={reminders.payment}
                  onChange={(e) => setReminders(prev => ({ ...prev, payment: e.target.checked }))}
                  className="w-4 h-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-blue-500"
                />
                <span className="text-white/80 text-sm">Payment reminder</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Important Information */}
      <div className="mt-6 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-300 mb-4">Important Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-blue-200 font-medium mb-2">Pickup Instructions</h4>
            <ul className="space-y-1 text-blue-200/80 text-sm">
              <li>• Bring a valid driver's license</li>
              <li>• Arrive 15 minutes before pickup time</li>
              <li>• Check vehicle condition before leaving</li>
              <li>• Take photos of any existing damage</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-200 font-medium mb-2">Return Instructions</h4>
            <ul className="space-y-1 text-blue-200/80 text-sm">
              <li>• Return vehicle in same condition</li>
              <li>• Fill up fuel tank if required</li>
              <li>• Remove all personal belongings</li>
              <li>• Report any issues immediately</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-6 text-center">
        <p className="text-white/70 mb-4">
          Need help? Contact our support team
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors">
            <Phone className="w-4 h-4 mr-2 inline" />
            Call Support
          </button>
          <button className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors">
            <Mail className="w-4 h-4 mr-2 inline" />
            Email Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;





