import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  MapPin, 
  Calendar, 
  Star, 
  Heart, 
  Plus,
  Settings,
  User,
  Bell,
  Home,
  Car,
  CreditCard,
  FileText,
  HelpCircle
} from 'lucide-react';

interface EnhancedMobileUIProps {
  userType: 'renter' | 'host' | 'admin';
  currentView: string;
  onViewChange: (view: string) => void;
}

const EnhancedMobileUI: React.FC<EnhancedMobileUIProps> = ({
  userType,
  currentView,
  onViewChange
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [notifications] = useState(3);

  const navigationItems = {
    renter: [
      { id: 'home', label: 'Home', icon: Home, color: 'text-blue-600' },
      { id: 'search', label: 'Search', icon: Search, color: 'text-green-600' },
      { id: 'bookings', label: 'Bookings', icon: Calendar, color: 'text-purple-600' },
      { id: 'profile', label: 'Profile', icon: User, color: 'text-orange-600' }
    ],
    host: [
      { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-blue-600' },
      { id: 'vehicles', label: 'Vehicles', icon: Car, color: 'text-green-600' },
      { id: 'bookings', label: 'Bookings', icon: Calendar, color: 'text-purple-600' },
      { id: 'earnings', label: 'Earnings', icon: CreditCard, color: 'text-yellow-600' }
    ],
    admin: [
      { id: 'dashboard', label: 'Dashboard', icon: Home, color: 'text-blue-600' },
      { id: 'users', label: 'Users', icon: User, color: 'text-green-600' },
      { id: 'vehicles', label: 'Vehicles', icon: Car, color: 'text-purple-600' },
      { id: 'analytics', label: 'Analytics', icon: FileText, color: 'text-orange-600' }
    ]
  };

  const quickActions = {
    renter: [
      { id: 'book_now', label: 'Book Now', icon: Plus, color: 'bg-blue-600' },
      { id: 'my_bookings', label: 'My Bookings', icon: Calendar, color: 'bg-green-600' },
      { id: 'favorites', label: 'Favorites', icon: Heart, color: 'bg-red-600' },
      { id: 'support', label: 'Support', icon: HelpCircle, color: 'bg-purple-600' }
    ],
    host: [
      { id: 'add_vehicle', label: 'Add Vehicle', icon: Plus, color: 'bg-blue-600' },
      { id: 'manage_bookings', label: 'Bookings', icon: Calendar, color: 'bg-green-600' },
      { id: 'earnings', label: 'Earnings', icon: CreditCard, color: 'bg-yellow-600' },
      { id: 'support', label: 'Support', icon: HelpCircle, color: 'bg-purple-600' }
    ],
    admin: [
      { id: 'user_management', label: 'Users', icon: User, color: 'bg-blue-600' },
      { id: 'vehicle_management', label: 'Vehicles', icon: Car, color: 'bg-green-600' },
      { id: 'analytics', label: 'Analytics', icon: FileText, color: 'bg-purple-600' },
      { id: 'settings', label: 'Settings', icon: Settings, color: 'bg-gray-600' }
    ]
  };

  const currentNavItems = navigationItems[userType];
  const currentQuickActions = quickActions[userType];

  const MobileHeader = () => (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-bold text-gray-800">RideShare SA</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          
          <div className="relative">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell className="w-5 h-5 text-gray-700" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      {isSearchOpen && (
        <div className="px-4 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const MobileSidebar = () => (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-2">
          {currentNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onViewChange(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                activeTab === item.id ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
              }`}
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );

  const QuickActionsGrid = () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {currentQuickActions.map((action) => (
          <button
            key={action.id}
            onClick={() => onViewChange(action.id)}
            className={`${action.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
          >
            <div className="flex flex-col items-center gap-2">
              <action.icon className="w-6 h-6" />
              <span className="font-medium text-sm">{action.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const StatusCards = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold text-gray-800">Status Overview</h3>
      
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Active Bookings</h4>
              <p className="text-blue-100 text-sm">2 bookings in progress</p>
            </div>
            <Calendar className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Earnings</h4>
              <p className="text-green-100 text-sm">R 2,450 this month</p>
            </div>
            <CreditCard className="w-8 h-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Rating</h4>
              <p className="text-purple-100 text-sm">4.8/5 stars</p>
            </div>
            <Star className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>
    </div>
  );

  const RecentActivity = () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      
      <div className="space-y-3">
        {[
          { id: 1, title: 'Booking Confirmed', description: 'Your booking for Toyota Corolla has been confirmed', time: '2 hours ago', status: 'success' },
          { id: 2, title: 'Payment Processed', description: 'Payment of R 450 has been processed', time: '3 hours ago', status: 'success' },
          { id: 3, title: 'Vehicle Ready', description: 'Your vehicle is ready for pickup', time: '5 hours ago', status: 'info' },
          { id: 4, title: 'Booking Request', description: 'New booking request for your BMW X3', time: '1 day ago', status: 'pending' }
        ].map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              activity.status === 'success' ? 'bg-green-500' :
              activity.status === 'info' ? 'bg-blue-500' :
              activity.status === 'pending' ? 'bg-yellow-500' :
              'bg-gray-500'
            }`} />
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800">{activity.title}</h4>
              <p className="text-sm text-gray-600">{activity.description}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const BottomNavigation = () => (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="flex">
        {currentNavItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              onViewChange(item.id);
            }}
            className={`flex-1 flex flex-col items-center py-2 px-1 transition-colors ${
              activeTab === item.id ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <item.icon className={`w-5 h-5 mb-1 ${activeTab === item.id ? item.color : 'text-gray-500'}`} />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileHeader />
      
      <MobileSidebar />
      
      <main className="pb-20">
        {currentView === 'home' && (
          <>
            <QuickActionsGrid />
            <StatusCards />
            <RecentActivity />
          </>
        )}
        
        {currentView === 'search' && (
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Search Vehicles</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">Dates</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm text-gray-600">Pickup</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Return</label>
                    <input
                      type="date"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search Vehicles
              </button>
            </div>
          </div>
        )}
        
        {currentView === 'bookings' && (
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">My Bookings</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((booking) => (
                <div key={booking} className="bg-white p-4 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">Toyota Corolla</h3>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">Confirmed</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Dec 15 - Dec 17, 2024</p>
                  <p className="text-sm text-gray-600">R 450 per day</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default EnhancedMobileUI;
