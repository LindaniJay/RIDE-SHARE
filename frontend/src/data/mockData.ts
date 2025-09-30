// Mock Data for RideShare SA Dashboards

export interface MockUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'renter' | 'host' | 'admin';
  approvalStatus: 'pending' | 'approved' | 'declined';
  joinDate: string;
  lastActive: string;
  totalBookings?: number;
  totalEarnings?: number;
  rating?: number;
  profileImage?: string;
}

export interface MockVehicle {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  type: string;
  pricePerDay: number;
  location: string;
  status: 'pending' | 'approved' | 'declined' | 'active';
  images: string[];
  bookings: number;
  earnings: number;
  createdAt: string;
  hostId: string;
  hostName: string;
  rating: number;
  features: string[];
}

export interface MockBooking {
  id: string;
  vehicleId: string;
  vehicleTitle: string;
  vehicleImage: string;
  hostId: string;
  hostName: string;
  renterId: string;
  renterName: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';
  createdAt: string;
  paymentStatus: 'pending' | 'paid' | 'refunded';
  rating?: number;
  review?: string;
}

export interface MockTransaction {
  id: string;
  type: 'booking' | 'payout' | 'refund' | 'commission';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  date: string;
  description: string;
  bookingId?: string;
}

export interface MockAdminStats {
  overview: {
    totalUsers: number;
    pendingUsers: number;
    totalVehicles: number;
    pendingVehicles: number;
    totalBookings: number;
    pendingBookings: number;
    totalRevenue: number;
  };
  recentActivity: {
    recentUsers: MockUser[];
    recentVehicles: MockVehicle[];
    recentBookings: MockBooking[];
  };
  financial: {
    monthlyRevenue: number;
    commission: number;
    payouts: number;
    transactions: MockTransaction[];
  };
}

// Mock Users
export const mockUsers: MockUser[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '+27 82 123 4567',
    role: 'renter',
    approvalStatus: 'approved',
    joinDate: '2024-01-15',
    lastActive: '2024-12-20',
    totalBookings: 12,
    rating: 4.8,
    profileImage: '/images/avatars/john.jpg'
  },
  {
    id: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+27 83 234 5678',
    role: 'host',
    approvalStatus: 'approved',
    joinDate: '2024-02-20',
    lastActive: '2024-12-19',
    totalEarnings: 45000,
    rating: 4.9,
    profileImage: '/images/avatars/sarah.jpg'
  },
  {
    id: '3',
    firstName: 'Mike',
    lastName: 'Wilson',
    email: 'mike.wilson@email.com',
    phone: '+27 84 345 6789',
    role: 'renter',
    approvalStatus: 'pending',
    joinDate: '2024-12-18',
    lastActive: '2024-12-20',
    totalBookings: 0,
    rating: 0,
    profileImage: '/images/avatars/mike.jpg'
  },
  {
    id: '4',
    firstName: 'Lisa',
    lastName: 'Brown',
    email: 'lisa.brown@email.com',
    phone: '+27 85 456 7890',
    role: 'host',
    approvalStatus: 'approved',
    joinDate: '2024-03-10',
    lastActive: '2024-12-19',
    totalEarnings: 32000,
    rating: 4.7,
    profileImage: '/images/avatars/lisa.jpg'
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Taylor',
    email: 'david.taylor@email.com',
    phone: '+27 86 567 8901',
    role: 'renter',
    approvalStatus: 'approved',
    joinDate: '2024-04-05',
    lastActive: '2024-12-20',
    totalBookings: 8,
    rating: 4.6,
    profileImage: '/images/avatars/david.jpg'
  }
];

// Mock Vehicles
export const mockVehicles: MockVehicle[] = [
  {
    id: '1',
    title: '2022 Toyota Hilux Double Cab',
    make: 'Toyota',
    model: 'Hilux',
    year: 2022,
    type: 'Bakkie',
    pricePerDay: 850,
    location: 'Cape Town, Western Cape',
    status: 'active',
    images: ['/images/vehicles/hilux-1.jpg', '/images/vehicles/hilux-2.jpg'],
    bookings: 24,
    earnings: 20400,
    createdAt: '2024-01-15',
    hostId: '2',
    hostName: 'Sarah Johnson',
    rating: 4.8,
    features: ['4x4', 'Air Conditioning', 'Bluetooth', 'GPS']
  },
  {
    id: '2',
    title: '2021 BMW X3 SUV',
    make: 'BMW',
    model: 'X3',
    year: 2021,
    type: 'SUV',
    pricePerDay: 1200,
    location: 'Johannesburg, Gauteng',
    status: 'active',
    images: ['/images/vehicles/x3-1.jpg', '/images/vehicles/x3-2.jpg'],
    bookings: 18,
    earnings: 21600,
    createdAt: '2024-02-10',
    hostId: '4',
    hostName: 'Lisa Brown',
    rating: 4.9,
    features: ['Leather Seats', 'Sunroof', 'Navigation', 'Backup Camera']
  },
  {
    id: '3',
    title: '2023 Volkswagen Polo',
    make: 'Volkswagen',
    model: 'Polo',
    year: 2023,
    type: 'Hatchback',
    pricePerDay: 450,
    location: 'Durban, KwaZulu-Natal',
    status: 'pending',
    images: ['/images/vehicles/polo-1.jpg'],
    bookings: 0,
    earnings: 0,
    createdAt: '2024-12-18',
    hostId: '6',
    hostName: 'Emma Davis',
    rating: 0,
    features: ['Manual Transmission', 'Air Conditioning', 'Radio']
  },
  {
    id: '4',
    title: '2020 Ford Ranger Wildtrak',
    make: 'Ford',
    model: 'Ranger',
    year: 2020,
    type: 'Bakkie',
    pricePerDay: 950,
    location: 'Cape Town, Western Cape',
    status: 'active',
    images: ['/images/vehicles/ranger-1.jpg', '/images/vehicles/ranger-2.jpg'],
    bookings: 31,
    earnings: 29450,
    createdAt: '2024-01-20',
    hostId: '2',
    hostName: 'Sarah Johnson',
    rating: 4.7,
    features: ['4x4', 'Tonneau Cover', 'Tow Bar', 'Bluetooth']
  }
];

// Mock Bookings
export const mockBookings: MockBooking[] = [
  {
    id: '1',
    vehicleId: '1',
    vehicleTitle: '2022 Toyota Hilux Double Cab',
    vehicleImage: '/images/vehicles/hilux-1.jpg',
    hostId: '2',
    hostName: 'Sarah Johnson',
    renterId: '1',
    renterName: 'John Smith',
    startDate: '2024-12-25',
    endDate: '2024-12-28',
    totalPrice: 2550,
    status: 'confirmed',
    createdAt: '2024-12-20',
    paymentStatus: 'paid',
    rating: 5,
    review: 'Excellent vehicle, very clean and well maintained!'
  },
  {
    id: '2',
    vehicleId: '2',
    vehicleTitle: '2021 BMW X3 SUV',
    vehicleImage: '/images/vehicles/x3-1.jpg',
    hostId: '4',
    hostName: 'Lisa Brown',
    renterId: '5',
    renterName: 'David Taylor',
    startDate: '2024-12-22',
    endDate: '2024-12-24',
    totalPrice: 2400,
    status: 'active',
    createdAt: '2024-12-19',
    paymentStatus: 'paid'
  },
  {
    id: '3',
    vehicleId: '1',
    vehicleTitle: '2022 Toyota Hilux Double Cab',
    vehicleImage: '/images/vehicles/hilux-1.jpg',
    hostId: '2',
    hostName: 'Sarah Johnson',
    renterId: '3',
    renterName: 'Mike Wilson',
    startDate: '2024-12-30',
    endDate: '2025-01-02',
    totalPrice: 2550,
    status: 'pending',
    createdAt: '2024-12-20',
    paymentStatus: 'pending'
  }
];

// Mock Transactions
export const mockTransactions: MockTransaction[] = [
  {
    id: '1',
    type: 'booking',
    amount: 2550,
    status: 'completed',
    date: '2024-12-20',
    description: 'Booking payment for Toyota Hilux',
    bookingId: '1'
  },
  {
    id: '2',
    type: 'payout',
    amount: 2040,
    status: 'completed',
    date: '2024-12-19',
    description: 'Host payout for completed bookings'
  },
  {
    id: '3',
    type: 'commission',
    amount: 255,
    status: 'completed',
    date: '2024-12-20',
    description: 'Platform commission',
    bookingId: '1'
  },
  {
    id: '4',
    type: 'booking',
    amount: 2400,
    status: 'completed',
    date: '2024-12-19',
    description: 'Booking payment for BMW X3',
    bookingId: '2'
  }
];

// Mock Admin Stats
export const mockAdminStats: MockAdminStats = {
  overview: {
    totalUsers: 1247,
    pendingUsers: 23,
    totalVehicles: 456,
    pendingVehicles: 12,
    totalBookings: 2891,
    pendingBookings: 8,
    totalRevenue: 2847500
  },
  recentActivity: {
    recentUsers: mockUsers.slice(0, 5),
    recentVehicles: mockVehicles.slice(0, 5),
    recentBookings: mockBookings.slice(0, 5)
  },
  financial: {
    monthlyRevenue: 245000,
    commission: 24500,
    payouts: 220500,
    transactions: mockTransactions
  }
};

// Mock Host Dashboard Data
export const mockHostStats = {
  totalVehicles: 3,
  activeVehicles: 2,
  totalBookings: 55,
  monthlyEarnings: 18500,
  totalEarnings: 45000,
  averageRating: 4.8,
  pendingApprovals: 1,
  pendingBookings: 3,
  activeBookings: 2,
  completedBookings: 50,
  totalRevenue: 45000,
  pendingPayouts: 2500,
  nextPayoutDate: '2024-12-25',
  topPerformingVehicle: 'Toyota Hilux Double Cab',
  recentReviews: [
    {
      id: '1',
      rating: 5,
      comment: 'Excellent vehicle, very clean and well maintained!',
      renterName: 'John Smith',
      date: '2024-12-15'
    },
    {
      id: '2',
      rating: 4,
      comment: 'Great bakkie for weekend trips. Highly recommended!',
      renterName: 'David Taylor',
      date: '2024-12-10'
    }
  ],
  upcomingBookings: [
    {
      id: '1',
      vehicleTitle: '2022 Toyota Hilux Double Cab',
      renterName: 'Mike Wilson',
      startDate: '2024-12-25',
      endDate: '2024-12-28',
      totalPrice: 2550,
      status: 'confirmed'
    }
  ]
};

// Mock Host Analytics Data
export const mockHostAnalytics = {
  monthlyEarnings: [
    { month: 'Jan', earnings: 12000 },
    { month: 'Feb', earnings: 13500 },
    { month: 'Mar', earnings: 15000 },
    { month: 'Apr', earnings: 16500 },
    { month: 'May', earnings: 18000 },
    { month: 'Jun', earnings: 18500 }
  ],
  vehiclePerformance: [
    {
      vehicleId: '1',
      vehicleTitle: '2022 Toyota Hilux Double Cab',
      bookings: 24,
      earnings: 20400,
      averageRating: 4.8,
      utilizationRate: 85
    },
    {
      vehicleId: '4',
      vehicleTitle: '2020 Ford Ranger Wildtrak',
      bookings: 31,
      earnings: 29450,
      averageRating: 4.7,
      utilizationRate: 92
    }
  ],
  bookingTrends: [
    { month: 'Jan', bookings: 8 },
    { month: 'Feb', bookings: 9 },
    { month: 'Mar', bookings: 10 },
    { month: 'Apr', bookings: 11 },
    { month: 'May', bookings: 12 },
    { month: 'Jun', bookings: 13 }
  ],
  customerFeedback: {
    averageRating: 4.8,
    totalReviews: 45,
    recentReviews: [
      { rating: 5, comment: 'Perfect vehicle for our family trip!', date: '2024-12-15' },
      { rating: 4, comment: 'Great service, clean vehicle.', date: '2024-12-10' },
      { rating: 5, comment: 'Excellent host, highly recommended!', date: '2024-12-05' }
    ]
  }
};

// Mock Host Financial Data
export const mockHostFinancial = {
  payoutHistory: [
    { date: '2024-11-25', amount: 8500, status: 'completed' },
    { date: '2024-10-25', amount: 9200, status: 'completed' },
    { date: '2024-09-25', amount: 7800, status: 'completed' }
  ],
  upcomingPayouts: [
    { date: '2024-12-25', amount: 2500, status: 'pending' }
  ],
  transactionHistory: [
    { id: '1', type: 'booking', amount: 2550, date: '2024-12-20', status: 'completed' },
    { id: '2', type: 'booking', amount: 2400, date: '2024-12-19', status: 'completed' },
    { id: '3', type: 'payout', amount: 8500, date: '2024-11-25', status: 'completed' }
  ]
};

// Mock Renter Dashboard Data
export const mockRenterStats = {
  totalBookings: 12,
  activeBookings: 2,
  completedBookings: 10,
  totalSpent: 8450,
  averageRating: 4.8,
  savedVehicles: 5,
  upcomingBookings: 1
};

// Mock Financial Data
export const mockFinancialData = {
  monthlyRevenue: [
    { month: 'Jan', revenue: 180000 },
    { month: 'Feb', revenue: 195000 },
    { month: 'Mar', revenue: 210000 },
    { month: 'Apr', revenue: 225000 },
    { month: 'May', revenue: 240000 },
    { month: 'Jun', revenue: 245000 }
  ],
  topEarningVehicles: [
    { vehicle: 'Toyota Hilux', earnings: 20400, bookings: 24 },
    { vehicle: 'BMW X3', earnings: 21600, bookings: 18 },
    { vehicle: 'Ford Ranger', earnings: 29450, bookings: 31 }
  ],
  commissionBreakdown: {
    platformCommission: 24500,
    hostPayouts: 220500,
    processingFees: 1500
  }
};

// Mock Analytics Data
export const mockAnalyticsData = {
  userGrowth: [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1350 },
    { month: 'Mar', users: 1500 },
    { month: 'Apr', users: 1650 },
    { month: 'May', users: 1800 },
    { month: 'Jun', users: 1950 }
  ],
  bookingTrends: [
    { month: 'Jan', bookings: 180 },
    { month: 'Feb', bookings: 195 },
    { month: 'Mar', bookings: 210 },
    { month: 'Apr', bookings: 225 },
    { month: 'May', bookings: 240 },
    { month: 'Jun', bookings: 245 }
  ],
  popularLocations: [
    { location: 'Cape Town', bookings: 45 },
    { location: 'Johannesburg', bookings: 38 },
    { location: 'Durban', bookings: 32 },
    { location: 'Pretoria', bookings: 28 }
  ]
};
