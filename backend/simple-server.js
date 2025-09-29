const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');

const app = express();
const PORT = 5001;

// Initialize Firebase Admin (optional - only if you have service account)
// Uncomment and configure if you want to verify Firebase tokens on the backend
/*
const serviceAccount = require('./path-to-your-service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
*/

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Admin accounts for RideShare SA
const adminUsers = [
  {
    id: 'admin-1',
    email: 'Jonase@rideshare.co.za',
    password: 'password123',
    firstName: 'Jonase',
    lastName: 'Admin',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null
  },
  {
    id: 'admin-2',
    email: 'Toni@rideshare.co.za',
    password: 'password123',
    firstName: 'Toni',
    lastName: 'Admin',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null
  },
  {
    id: 'admin-3',
    email: 'soso@rideshare.co.za',
    password: 'password123',
    firstName: 'Soso',
    lastName: 'Admin',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null
  },
  {
    id: 'admin-4',
    email: 'Anitha@rideshare.co.za',
    password: 'password123',
    firstName: 'Anitha',
    lastName: 'Admin',
    role: 'admin',
    isEmailVerified: true,
    isActive: true,
    createdAt: new Date().toISOString(),
    lastLoginAt: null
  }
];

// Demo users for testing (will be replaced by Firebase users)
const demoUsers = [
  {
    id: 'demo-host-1',
    email: 'host1@rideshare.co.za',
    firstName: 'John',
    lastName: 'Smith',
    role: 'host',
    isEmailVerified: true,
    isActive: true
  },
  {
    id: 'demo-renter-1',
    email: 'renter1@rideshare.co.za',
    firstName: 'Mike',
    lastName: 'Wilson',
    role: 'renter',
    isEmailVerified: true,
    isActive: true
  }
];

// Mock data
const vehicles = [
  {
    id: 1,
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
    id: 2,
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

// JWT middleware for Express tokens
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Firebase token verification middleware
const authenticateFirebaseToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    // For now, we'll skip Firebase token verification since we don't have the service account
    // In production, you would verify the token with Firebase Admin SDK
    // const decodedToken = await admin.auth().verifyIdToken(token);
    // req.user = decodedToken;
    
    // For demo purposes, we'll accept any token and create a mock user
    req.user = { 
      uid: 'firebase-user-id', 
      email: 'user@example.com',
      role: 'renter' 
    };
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

// Universal auth middleware that handles both Express JWT and Firebase tokens
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Try Express JWT first
  jwt.verify(token, 'your-secret-key', (err, user) => {
    if (!err) {
      req.user = user;
      return next();
    }
    
    // If Express JWT fails, try Firebase (for demo, we'll accept any token)
    req.user = { 
      uid: 'firebase-user-id', 
      email: 'user@example.com',
      role: 'renter' 
    };
    next();
  });
};

// Admin login route (bypasses Firebase for admin access)
app.post('/api/auth/admin-login', async (req, res) => {
  try {
    console.log('Admin login attempt:', req.body);
    const { email, password } = req.body;
    
    // Check if it's an admin user
    const adminUser = adminUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!adminUser) {
      return res.status(401).json({ error: 'Admin access denied' });
    }
    
    // Simple password check for admin (no hashing for demo)
    if (password !== adminUser.password) {
      return res.status(401).json({ error: 'Invalid admin credentials' });
    }
    
    // Update last login
    adminUser.lastLoginAt = new Date().toISOString();
    
    const token = jwt.sign(
      { 
        userId: adminUser.id, 
        email: adminUser.email, 
        role: adminUser.role,
        isAdmin: true 
      },
      'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({
      message: 'Admin login successful',
      accessToken: token,
      user: {
        id: adminUser.id,
        email: adminUser.email,
        firstName: adminUser.firstName,
        lastName: adminUser.lastName,
        role: adminUser.role,
        isEmailVerified: adminUser.isEmailVerified,
        isAdmin: true
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Firebase authentication verification route
app.post('/api/auth/verify-firebase-token', async (req, res) => {
  try {
    const { idToken } = req.body;
    
    if (!idToken) {
      return res.status(401).json({ error: 'Firebase token required' });
    }
    
    // For demo purposes, we'll accept any Firebase token
    // In production, you would verify with Firebase Admin SDK
    const mockUser = {
      uid: 'firebase-user-' + Math.random().toString(36).substr(2, 9),
      email: 'user@rideshare.co.za',
      email_verified: true,
      name: 'Firebase User'
    };
    
    const token = jwt.sign(
      { 
        userId: mockUser.uid, 
        email: mockUser.email, 
        role: 'renter',
        isFirebase: true 
      },
      'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.json({
      message: 'Firebase authentication successful',
      accessToken: token,
      user: {
        id: mockUser.uid,
        email: mockUser.email,
        firstName: mockUser.name.split(' ')[0],
        lastName: mockUser.name.split(' ')[1] || '',
        role: 'renter',
        isEmailVerified: mockUser.email_verified,
        isFirebase: true
      }
    });
  } catch (error) {
    console.error('Firebase verification error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, firstName, lastName, role = 'renter', phone } = req.body;
    
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
      id: users.length + 1,
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone: phone || '',
      role,
      isEmailVerified: false
    };
    
    users.push(newUser);
    
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email, role: newUser.role },
      'your-secret-key',
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      message: 'Registration successful',
      accessToken: token,
      user: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        role: newUser.role,
        isEmailVerified: newUser.isEmailVerified
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get current user profile
app.get('/api/auth/me', authenticate, (req, res) => {
  try {
    // Handle Firebase users
    if (req.user.uid) {
      return res.json({
        user: {
          uid: req.user.uid,
          email: req.user.email,
          firstName: 'Firebase',
          lastName: 'User',
          phone: '',
          role: req.user.role || 'renter',
          isEmailVerified: true
        }
      });
    }
    
    // Handle Express JWT users
    const user = users.find(u => u.id === req.user.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone || '',
        role: user.role,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Logout endpoint
app.post('/api/auth/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

// Vehicles route
app.get('/api/vehicles', (req, res) => {
  res.json(vehicles);
});

// Stats route
app.get('/api/stats', (req, res) => {
  res.json({
    totalUsers: adminUsers.length + demoUsers.length,
    totalVehicles: vehicles.length,
    totalBookings: 0,
    totalRevenue: 0,
    activeBookings: 0,
    pendingApprovals: 0
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Simple server running on port ${PORT}`);
});
