
const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
  }
});
const PORT = 5001;


// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
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


// Mock data
const vehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    type: 'car',
    pricePerDay: 350,
    location: 'Cape Town',
    images: ['/images/toyota-corolla.jpg'],
    status: 'approved'
  },
  {
    id: '2',
    make: 'Ford',
    model: 'Ranger',
    year: 2021,
    type: 'bakkie',
    pricePerDay: 450,
    location: 'Johannesburg',
    images: ['/images/ford-ranger.jpg'],
    status: 'approved'
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

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
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
