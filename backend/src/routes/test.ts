import express from 'express';
import { sequelize } from '../config/database';

const router = express.Router();

// Test database connection
router.get('/db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ 
      success: true, 
      message: 'Database connection successful',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Database connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Test models
router.get('/models', async (req, res) => {
  try {
    const { Listing, User } = await import('../models');
    
    // Test if models are accessible
    res.json({ 
      success: true, 
      message: 'Models loaded successfully',
      models: {
        Listing: !!Listing,
        User: !!User
      }
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Models loading failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Test simple query
router.get('/query', async (req, res) => {
  try {
    const { User } = await import('../models');
    
    // Test simple query
    const userCount = await User.count();
    
    res.json({ 
      success: true, 
      message: 'Query successful',
      userCount
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Query failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;

