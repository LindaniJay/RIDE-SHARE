
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:5173',
      'http://localhost:4173'
    ],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }
});
const PORT = 5001;


// Middleware
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:4173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Session-ID'],
  exposedHeaders: ['X-Total-Count', 'X-Page-Count']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Debug middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});


// Mock data with realistic South African pricing
const vehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    type: 'economy',
    category: 'economy',
    pricePerDay: 450,
    pricePerWeek: 2500,
    pricePerMonth: 6500,
    location: 'Cape Town',
    images: ['/images/toyota-corolla.jpg'],
    status: 'approved',
    features: ['Fuel efficient', 'Easy parking', 'City friendly'],
    description: 'Perfect for city driving and daily commutes',
    hostName: 'John Smith'
  },
  {
    id: '2',
    make: 'Ford',
    model: 'Ranger',
    year: 2021,
    type: 'bakkie',
    category: 'bakkie',
    pricePerDay: 750,
    pricePerWeek: 4200,
    pricePerMonth: 12000,
    location: 'Johannesburg',
    images: ['/images/ford-ranger.jpg'],
    status: 'approved',
    features: ['Cargo capacity', 'Work ready', 'Durable'],
    description: 'Work vehicle perfect for construction and outdoor activities',
    hostName: 'Mike Wilson'
  },
  {
    id: '3',
    make: 'BMW',
    model: 'X3',
    year: 2022,
    type: 'suv',
    category: 'compact-suv',
    pricePerDay: 1200,
    pricePerWeek: 6500,
    pricePerMonth: 15000,
    location: 'Durban',
    images: ['/images/bmw-x3.jpg'],
    status: 'approved',
    features: ['Higher ground clearance', 'Versatile', 'All-weather'],
    description: 'Versatile SUV for city and light off-road use',
    hostName: 'Sarah Johnson'
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2021,
    type: 'sedan',
    category: 'executive',
    pricePerDay: 1400,
    pricePerWeek: 8000,
    pricePerMonth: 18000,
    location: 'Cape Town',
    images: ['/images/mercedes-e-class.jpg'],
    status: 'approved',
    features: ['Premium comfort', 'Business class', 'Luxury features'],
    description: 'Premium vehicle for business and luxury travel',
    hostName: 'David Brown'
  },
  {
    id: '5',
    make: 'Toyota',
    model: 'Hilux',
    year: 2023,
    type: 'bakkie',
    category: 'bakkie',
    pricePerDay: 850,
    pricePerWeek: 4800,
    pricePerMonth: 14000,
    location: 'Pretoria',
    images: ['/images/toyota-hilux.jpg'],
    status: 'approved',
    features: ['4x4 capability', 'Off-road ready', 'Durable'],
    description: 'Legendary South African bakkie for farm work and outdoor adventures',
    hostName: 'Peter van der Merwe'
  },
  {
    id: '6',
    make: 'Volkswagen',
    model: 'Polo',
    year: 2022,
    type: 'economy',
    category: 'economy',
    pricePerDay: 380,
    pricePerWeek: 2200,
    pricePerMonth: 5800,
    location: 'Port Elizabeth',
    images: ['/images/vw-polo.jpg'],
    status: 'approved',
    features: ['Fuel efficient', 'Easy parking', 'Budget friendly'],
    description: 'Compact and efficient city car',
    hostName: 'Lisa Anderson'
  }
];

// Mock bookings data
const bookings = [
  {
    id: '1',
    vehicleName: 'Toyota Corolla',
    renterName: 'Mike Wilson',
    hostName: 'John Smith',
    pickupDate: '2024-01-15',
    returnDate: '2024-01-17',
    totalAmount: 700,
    status: 'completed',
    createdAt: '2024-01-10'
  }
];



// Vehicles route
app.get('/api/vehicles', (req, res) => {
  res.json(vehicles);
});

// Stats route
app.get('/api/stats', (req, res) => {
  res.json({
    totalUsers: 0,
    totalVehicles: vehicles.length,
    totalBookings: 0,
    totalRevenue: 0,
    activeBookings: 0,
    pendingApprovals: 0
  });
});

// Bookings route for frontend
app.get('/api/bookings', (req, res) => {
  try {
    res.json({
      success: true,
      data: bookings.map(booking => ({
        id: booking.id,
        vehicleName: booking.vehicleName,
        renterName: booking.renterName,
        hostName: booking.hostName,
        pickupDate: booking.pickupDate,
        returnDate: booking.returnDate,
        totalAmount: booking.totalAmount,
        status: booking.status,
        createdAt: booking.createdAt
      }))
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Admin API endpoints
app.get('/api/admin/users', (req, res) => {
  try {
    // Return empty users list since we removed authentication
    res.json({
      success: true,
      users: []
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/vehicles', (req, res) => {
  try {
    // Return all vehicles with their status
    res.json({
      success: true,
      vehicles: vehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        hostName: vehicle.hostName,
        location: vehicle.location,
        pricePerDay: vehicle.pricePerDay,
        status: vehicle.status || 'pending',
        totalBookings: vehicle.totalBookings || 0,
        rating: vehicle.rating || 0
      }))
    });
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/bookings', (req, res) => {
  try {
    // Return all bookings with enhanced data structure
    res.json({
      success: true,
      bookings: bookings.map(booking => ({
        id: booking.id,
        vehicle: {
          make: booking.vehicleName?.split(' ')[0] || 'Unknown',
          model: booking.vehicleName?.split(' ').slice(1).join(' ') || 'Unknown',
          location: 'Cape Town',
          images: ['/images/vehicle.jpg']
        },
        renter: {
          name: booking.renterName,
          email: 'renter@example.com'
        },
        host: {
          name: booking.hostName,
          email: 'host@example.com',
          avatar: '/images/avatar.jpg'
        },
        startDate: booking.pickupDate,
        endDate: booking.returnDate,
        totalDays: Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24)),
        totalPrice: booking.totalAmount,
        status: booking.status,
        paymentStatus: booking.status === 'completed' ? 'paid' : 'pending',
        createdAt: booking.createdAt
      }))
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/documents', (req, res) => {
  try {
    // Return pending documents for approval
    const pendingDocs = [
      {
        id: '1',
        type: 'license',
        user: 'John Smith',
        userEmail: 'host1@rideshare.co.za',
        fileName: 'drivers_license.pdf',
        uploadedAt: new Date().toISOString(),
        status: 'pending'
      },
      {
        id: '2',
        type: 'id',
        user: 'Mike Wilson',
        userEmail: 'renter1@rideshare.co.za',
        fileName: 'id_document.pdf',
        uploadedAt: new Date().toISOString(),
        status: 'pending'
      }
    ];
    
    res.json({
      success: true,
      documents: pendingDocs
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/disputes', (req, res) => {
  try {
    // Return disputes
    const disputes = [
      {
        id: '1',
        type: 'booking_dispute',
        title: 'Vehicle damage claim',
        description: 'Renter claims vehicle was damaged before rental',
        renter: 'Mike Wilson',
        host: 'John Smith',
        status: 'open',
        createdAt: new Date().toISOString(),
        priority: 'high'
      }
    ];
    
    res.json({
      success: true,
      disputes: disputes
    });
  } catch (error) {
    console.error('Error fetching disputes:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/stats', (req, res) => {
  try {
    // Calculate real-time stats
    const totalUsers = 0; // No users since auth removed
    const totalVehicles = vehicles.length;
    const totalBookings = bookings.length;
    const totalRevenue = bookings.reduce((sum, booking) => sum + (booking.totalAmount || 0), 0);
    const activeUsers = 0; // No users since auth removed
    const pendingBookings = bookings.filter(b => b.status === 'pending').length;
    const supportTickets = 1; // Number of disputes
    
    res.json({
      success: true,
      stats: {
        overview: {
          totalUsers,
          pendingUsers: 0,
          totalVehicles,
          pendingVehicles: 0,
          totalBookings,
          pendingBookings,
          totalRevenue
        },
        recentActivity: {
          recentUsers: [],
          recentVehicles: vehicles.map(v => ({
            id: v.id,
            title: `${v.make} ${v.model}`,
            make: v.make,
            model: v.model,
            status: v.status || 'pending'
          }))
        }
      }
    });
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Payments route
app.get('/api/payments', (req, res) => {
  try {
    // Mock payments data
    const payments = [
      {
        id: '1',
        bookingId: '1',
        amount: 700,
        status: 'completed',
        paymentMethod: 'payfast',
        transactionId: 'PF123456789',
        createdAt: '2024-01-10T10:00:00Z',
        completedAt: '2024-01-10T10:05:00Z'
      }
    ];
    
    res.json({
      success: true,
      data: payments
    });
  } catch (error) {
    console.error('Error fetching payments:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Additional API endpoints for frontend compatibility
app.get('/api/listings', (req, res) => {
  try {
    const { approved_only } = req.query;
    let filteredVehicles = vehicles;
    
    if (approved_only === 'true') {
      filteredVehicles = vehicles.filter(v => v.status === 'approved');
    }
    
    res.json({
      success: true,
      listings: filteredVehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        type: vehicle.type,
        category: vehicle.category,
        pricePerDay: vehicle.pricePerDay,
        pricePerWeek: vehicle.pricePerWeek,
        pricePerMonth: vehicle.pricePerMonth,
        location: vehicle.location,
        images: vehicle.images,
        status: vehicle.status,
        features: vehicle.features,
        description: vehicle.description,
        hostName: vehicle.hostName,
        hostId: 'mock-host-id',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }))
    });
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/listings/host', (req, res) => {
  try {
    res.json({
      success: true,
      listings: vehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        location: vehicle.location,
        pricePerDay: vehicle.pricePerDay,
        status: vehicle.status,
        totalBookings: Math.floor(Math.random() * 10),
        rating: (Math.random() * 2 + 3).toFixed(1)
      }))
    });
  } catch (error) {
    console.error('Error fetching host listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/listings/host/:hostId', (req, res) => {
  try {
    const { hostId } = req.params;
    res.json({
      success: true,
      vehicles: vehicles.map(vehicle => ({
        id: vehicle.id,
        make: vehicle.make,
        model: vehicle.model,
        year: vehicle.year,
        location: vehicle.location,
        pricePerDay: vehicle.pricePerDay,
        status: vehicle.status,
        totalBookings: Math.floor(Math.random() * 10),
        rating: (Math.random() * 2 + 3).toFixed(1)
      }))
    });
  } catch (error) {
    console.error('Error fetching host vehicles:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST endpoint for creating new listings
app.post('/api/listings', (req, res) => {
  try {
    const listingData = req.body;
    console.log('Creating new listing:', listingData);
    
    // Generate a new ID
    const newId = (vehicles.length + 1).toString();
    
    // Create new vehicle object
    const newVehicle = {
      id: newId,
      make: listingData.make,
      model: listingData.model,
      year: listingData.year,
      type: listingData.vehicle_type,
      category: listingData.category,
      pricePerDay: listingData.price_per_day,
      pricePerWeek: Math.floor(listingData.price_per_day * 7 * 0.8), // 20% discount for weekly
      pricePerMonth: Math.floor(listingData.price_per_day * 30 * 0.7), // 30% discount for monthly
      location: listingData.location?.city || listingData.location?.address || 'Cape Town',
      images: listingData.images || ['/images/vehicle-placeholder.jpg'],
      status: 'pending', // New listings are pending approval
      features: listingData.features || [],
      description: listingData.description || `${listingData.make} ${listingData.model} - Perfect for your next adventure`,
      hostName: 'Current User', // This would come from auth in real implementation
      totalBookings: 0,
      rating: 0
    };
    
    // Add to vehicles array
    vehicles.push(newVehicle);
    
    res.json({
      success: true,
      message: 'Vehicle listing created successfully',
      listing: {
        id: newVehicle.id,
        make: newVehicle.make,
        model: newVehicle.model,
        year: newVehicle.year,
        status: newVehicle.status,
        pricePerDay: newVehicle.pricePerDay,
        location: newVehicle.location
      }
    });
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ 
      success: false,
      error: 'Internal server error',
      message: 'Failed to create vehicle listing'
    });
  }
});

app.get('/api/bookings/host', (req, res) => {
  try {
    res.json({
      success: true,
      bookings: bookings.map(booking => ({
        id: booking.id,
        vehicle: {
          make: booking.vehicleName?.split(' ')[0] || 'Unknown',
          model: booking.vehicleName?.split(' ').slice(1).join(' ') || 'Unknown',
          location: 'Cape Town',
          images: ['/images/vehicle.jpg']
        },
        renter: {
          name: booking.renterName,
          email: 'renter@example.com'
        },
        host: {
          name: booking.hostName,
          email: 'host@example.com',
          avatar: '/images/avatar.jpg'
        },
        startDate: booking.pickupDate,
        endDate: booking.returnDate,
        totalDays: Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24)),
        totalPrice: booking.totalAmount,
        status: booking.status,
        paymentStatus: booking.status === 'completed' ? 'paid' : 'pending',
        createdAt: booking.createdAt
      }))
    });
  } catch (error) {
    console.error('Error fetching host bookings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/host/earnings', (req, res) => {
  try {
    res.json({
      success: true,
      earnings: {
        totalEarnings: 15000,
        thisMonth: 3500,
        lastMonth: 4200,
        pendingPayouts: 1200,
        completedBookings: 8,
        averagePerBooking: 1875
      }
    });
  } catch (error) {
    console.error('Error fetching earnings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/host/analytics', (req, res) => {
  try {
    res.json({
      success: true,
      analytics: {
        views: 1250,
        bookings: 8,
        conversionRate: 0.64,
        averageRating: 4.7,
        responseTime: '2 hours',
        occupancyRate: 0.75
      }
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/host/financial', (req, res) => {
  try {
    res.json({
      success: true,
      financial: {
        totalRevenue: 15000,
        platformFees: 2250,
        netEarnings: 12750,
        pendingPayouts: 1200,
        completedPayouts: 11550
      }
    });
  } catch (error) {
    console.error('Error fetching financial data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/notifications/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    res.json({
      success: true,
      notifications: [
        {
          id: '1',
          type: 'booking_request',
          title: 'New Booking Request',
          message: 'You have a new booking request for your Toyota Corolla',
          read: false,
          createdAt: new Date().toISOString()
        },
        {
          id: '2',
          type: 'payment_received',
          title: 'Payment Received',
          message: 'Payment of R700 has been received for booking #123',
          read: false,
          createdAt: new Date().toISOString()
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/notifications/booking', (req, res) => {
  try {
    const { userRole, userId } = req.query;
    res.json({
      success: true,
      notifications: [
        {
          id: '1',
          type: 'booking_request',
          title: 'New Booking Request',
          message: 'You have a new booking request',
          read: false,
          createdAt: new Date().toISOString()
        }
      ]
    });
  } catch (error) {
    console.error('Error fetching booking notifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fleet management endpoints
app.get('/api/hosts/:hostId/fleet', (req, res) => {
  try {
    const { hostId } = req.params;
    res.json({
      success: true,
      fleet: {
        totalVehicles: vehicles.length,
        activeVehicles: vehicles.filter(v => v.status === 'approved').length,
        pendingVehicles: vehicles.filter(v => v.status === 'pending').length,
        totalBookings: bookings.length,
        totalEarnings: bookings.reduce((sum, booking) => sum + (booking.totalAmount || 0), 0),
        vehicles: vehicles.map(vehicle => ({
          id: vehicle.id,
          make: vehicle.make,
          model: vehicle.model,
          year: vehicle.year,
          status: vehicle.status,
          pricePerDay: vehicle.pricePerDay,
          location: vehicle.location,
          totalBookings: Math.floor(Math.random() * 10),
          rating: (Math.random() * 2 + 3).toFixed(1),
          lastBooking: bookings.length > 0 ? bookings[0].pickupDate : null
        }))
      }
    });
  } catch (error) {
    console.error('Error fetching fleet data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/hosts/:hostId/fleet/analytics', (req, res) => {
  try {
    const { hostId } = req.params;
    res.json({
      success: true,
      analytics: {
        utilizationRate: 0.75,
        averageRating: 4.7,
        totalRevenue: 15000,
        monthlyRevenue: 3500,
        bookingTrends: [
          { month: 'Jan', bookings: 5, revenue: 2500 },
          { month: 'Feb', bookings: 8, revenue: 4000 },
          { month: 'Mar', bookings: 6, revenue: 3000 }
        ],
        popularVehicles: vehicles.slice(0, 3).map(v => ({
          id: v.id,
          name: `${v.make} ${v.model}`,
          bookings: Math.floor(Math.random() * 10),
          revenue: Math.floor(Math.random() * 5000)
        }))
      }
    });
  } catch (error) {
    console.error('Error fetching fleet analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
  
  socket.on('join_room', (room) => {
    socket.join(room);
    console.log(`Client ${socket.id} joined room: ${room}`);
  });
  
  socket.on('leave_room', (room) => {
    socket.leave(room);
    console.log(`Client ${socket.id} left room: ${room}`);
  });
  
  socket.on('message', (data) => {
    console.log('Message received:', data);
    // Broadcast to all clients in the same room
    socket.to(data.room || 'default').emit('message', data);
  });
});

server.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
  console.log(`WebSocket server available at ws://localhost:${PORT}`);
});
