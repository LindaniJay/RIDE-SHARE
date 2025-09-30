// Mock Data for Admin Dashboard Components

import { mockUsers, mockVehicles, mockBookings, mockTransactions } from './mockData';

// Mock User Management Data
export const mockUserManagementData = {
  users: mockUsers,
  pendingApprovals: mockUsers.filter(u => u.approvalStatus === 'pending'),
  recentRegistrations: mockUsers.slice(0, 5),
  userStats: {
    totalUsers: 1247,
    activeUsers: 892,
    pendingApprovals: 23,
    bannedUsers: 5,
    premiumUsers: 156
  }
};

// Mock Vehicle Management Data
export const mockVehicleManagementData = {
  vehicles: mockVehicles,
  pendingVehicles: mockVehicles.filter(v => v.status === 'pending'),
  approvedVehicles: mockVehicles.filter(v => v.status === 'approved'),
  vehicleStats: {
    totalVehicles: 456,
    activeVehicles: 398,
    pendingApprovals: 12,
    rejectedVehicles: 46,
    topPerformingVehicles: mockVehicles.slice(0, 5)
  }
};

// Mock Booking Management Data
export const mockBookingManagementData = {
  bookings: mockBookings,
  pendingBookings: mockBookings.filter(b => b.status === 'pending'),
  activeBookings: mockBookings.filter(b => b.status === 'confirmed'),
  completedBookings: mockBookings.filter(b => b.status === 'completed'),
  bookingStats: {
    totalBookings: 2891,
    pendingBookings: 8,
    activeBookings: 45,
    completedBookings: 2838,
    cancelledBookings: 12,
    totalRevenue: 2847500
  }
};

// Mock Financial Dashboard Data
export const mockFinancialData = {
  overview: {
    totalRevenue: 2847500,
    monthlyRevenue: 245000,
    platformCommission: 24500,
    hostPayouts: 220500,
    processingFees: 1500
  },
  transactions: mockTransactions,
  monthlyBreakdown: [
    { month: 'Jan', revenue: 180000, commission: 18000 },
    { month: 'Feb', revenue: 195000, commission: 19500 },
    { month: 'Mar', revenue: 210000, commission: 21000 },
    { month: 'Apr', revenue: 225000, commission: 22500 },
    { month: 'May', revenue: 240000, commission: 24000 },
    { month: 'Jun', revenue: 245000, commission: 24500 }
  ],
  topEarningHosts: [
    { hostId: '2', hostName: 'Sarah Johnson', earnings: 45000, vehicles: 3 },
    { hostId: '4', hostName: 'Lisa Brown', earnings: 32000, vehicles: 2 },
    { hostId: '6', hostName: 'Emma Davis', earnings: 28000, vehicles: 2 }
  ]
};

// Mock Content Moderation Data
export const mockContentModerationData = {
  flaggedContent: [
    {
      id: '1',
      type: 'vehicle',
      title: '2020 BMW X5',
      reason: 'Inappropriate images',
      reportedBy: 'John Smith',
      reportedAt: '2024-12-19',
      status: 'pending'
    },
    {
      id: '2',
      type: 'user',
      title: 'Mike Wilson',
      reason: 'Suspicious behavior',
      reportedBy: 'Sarah Johnson',
      reportedAt: '2024-12-18',
      status: 'under_review'
    }
  ],
  moderationStats: {
    totalReports: 23,
    pendingReports: 8,
    resolvedReports: 15,
    falseReports: 3
  }
};

// Mock Analytics Data
export const mockAnalyticsData = {
  userGrowth: [
    { month: 'Jan', users: 1200, growth: 0 },
    { month: 'Feb', users: 1350, growth: 12.5 },
    { month: 'Mar', users: 1500, growth: 11.1 },
    { month: 'Apr', users: 1650, growth: 10.0 },
    { month: 'May', users: 1800, growth: 9.1 },
    { month: 'Jun', users: 1950, growth: 8.3 }
  ],
  bookingTrends: [
    { month: 'Jan', bookings: 180, revenue: 180000 },
    { month: 'Feb', bookings: 195, revenue: 195000 },
    { month: 'Mar', bookings: 210, revenue: 210000 },
    { month: 'Apr', bookings: 225, revenue: 225000 },
    { month: 'May', bookings: 240, revenue: 240000 },
    { month: 'Jun', bookings: 245, revenue: 245000 }
  ],
  popularLocations: [
    { location: 'Cape Town', bookings: 45, revenue: 45000 },
    { location: 'Johannesburg', bookings: 38, revenue: 38000 },
    { location: 'Durban', bookings: 32, revenue: 32000 },
    { location: 'Pretoria', bookings: 28, revenue: 28000 }
  ],
  vehicleTypes: [
    { type: 'SUV', bookings: 120, percentage: 35 },
    { type: 'Sedan', bookings: 100, percentage: 29 },
    { type: 'Hatchback', bookings: 80, percentage: 23 },
    { type: 'Convertible', bookings: 45, percentage: 13 }
  ]
};

// Mock System Admin Data
export const mockSystemAdminData = {
  systemHealth: {
    uptime: '99.9%',
    responseTime: '120ms',
    activeUsers: 892,
    serverLoad: '45%'
  },
  recentErrors: [
    {
      id: '1',
      type: 'API Error',
      message: 'Payment gateway timeout',
      timestamp: '2024-12-20T10:30:00Z',
      severity: 'medium'
    },
    {
      id: '2',
      type: 'Database Error',
      message: 'Connection pool exhausted',
      timestamp: '2024-12-20T09:15:00Z',
      severity: 'high'
    }
  ],
  systemMetrics: {
    apiCalls: 125000,
    databaseQueries: 89000,
    cacheHitRate: '85%',
    errorRate: '0.2%'
  }
};

// Mock Document Management Data
export const mockDocumentManagementData = {
  pendingDocuments: [
    {
      id: '1',
      type: 'driver_license',
      userId: '3',
      userName: 'Mike Wilson',
      uploadedAt: '2024-12-18',
      status: 'pending',
      expiryDate: '2025-06-15'
    },
    {
      id: '2',
      type: 'insurance',
      userId: '6',
      userName: 'Emma Davis',
      uploadedAt: '2024-12-19',
      status: 'pending',
      expiryDate: '2025-03-20'
    }
  ],
  documentStats: {
    totalDocuments: 1247,
    pendingVerification: 23,
    verifiedDocuments: 1200,
    expiredDocuments: 24
  }
};
