import express from 'express';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { User } from '../models';
import { logger } from '../utils/logger';

const router = express.Router();

// GET /api/support/tickets - Get user's support tickets
router.get('/tickets', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user?.id;
    
    // Mock support tickets - in a real app, this would come from a tickets table
    const tickets = [
      {
        id: 1,
        subject: 'Booking issue with vehicle',
        status: 'open',
        priority: 'medium',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        subject: 'Payment not processed',
        status: 'resolved',
        priority: 'high',
        createdAt: new Date(Date.now() - 86400000).toISOString(),
        updatedAt: new Date().toISOString()
      }
    ];

    res.json({
      success: true,
      data: tickets,
      count: tickets.length
    });
  } catch (error) {
    logger.error('Error fetching support tickets:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch support tickets'
    });
  }
});

// POST /api/support/tickets - Create new support ticket
router.post('/tickets', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { subject, description, priority = 'medium' } = req.body;
    const userId = req.user?.id;
    
    if (!subject || !description) {
      return res.status(400).json({
        success: false,
        error: 'Subject and description are required'
      });
    }

    // In a real app, you would save this to a tickets table
    const ticket = {
      id: Date.now(),
      subject,
      description,
      priority,
      status: 'open',
      userId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      data: ticket,
      message: 'Support ticket created successfully'
    });
  } catch (error) {
    logger.error('Error creating support ticket:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create support ticket'
    });
  }
});

// GET /api/support/all - Get all support tickets (admin only)
router.get('/all', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    // Check if user is admin
    if (req.user?.role !== 'admin') {
      return res.status(403).json({
        success: false,
        error: 'Admin access required'
      });
    }

    // Mock all tickets - in a real app, this would come from a tickets table
    const allTickets = [
      {
        id: 1,
        subject: 'Booking issue with vehicle',
        status: 'open',
        priority: 'medium',
        userId: 1,
        userEmail: 'user@example.com',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        subject: 'Payment not processed',
        status: 'resolved',
        priority: 'high',
        userId: 2,
        userEmail: 'user2@example.com',
        createdAt: new Date(Date.now() - 86400000).toISOString()
      }
    ];

    res.json({
      success: true,
      data: allTickets,
      count: allTickets.length
    });
  } catch (error) {
    logger.error('Error fetching all support tickets:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch support tickets'
    });
  }
});

// PUT /api/support/tickets/:id - Update support ticket
router.put('/tickets/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const { status, response } = req.body;
    
    // In a real app, you would update the ticket in the database
    const updatedTicket = {
      id: parseInt(id),
      status: status || 'open',
      response: response || '',
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      data: updatedTicket,
      message: 'Support ticket updated successfully'
    });
  } catch (error) {
    logger.error('Error updating support ticket:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update support ticket'
    });
  }
});

export default router;
