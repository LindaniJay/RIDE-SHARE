import express from 'express';
import { sequelize } from '../config/database';

const router = express.Router();

// Simple test endpoint
router.get('/simple', async (req, res) => {
  try {
    res.json({ 
      success: true, 
      message: 'Simple test endpoint working',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Simple test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

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

export default router;


