#!/usr/bin/env node

const express = require('express');
const { User, Listing } = require('./dist/models');

const app = express();
app.use(express.json());

// Simple test endpoint without authentication
app.get('/test-pending', async (req, res) => {
  try {
    console.log('🔍 Test endpoint called');
    
    const { count, rows: vehicles } = await Listing.findAndCountAll({
      where: { 
        approved: false,
        is_available: true
      },
      include: [
        { 
          model: User, 
          as: 'host', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['created_at', 'DESC']],
      limit: 20,
      offset: 0
    });
    
    console.log(`📊 Found ${count} vehicles`);
    
    res.json({
      success: true,
      vehicles: vehicles,
      count: count,
      message: `Found ${count} pending vehicles`
    });
    
  } catch (error) {
    console.error('❌ Error in test endpoint:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`🧪 Test server running on port ${PORT}`);
  console.log(`🔗 Test endpoint: http://localhost:${PORT}/test-pending`);
});






