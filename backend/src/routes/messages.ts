import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import { User } from '../models/User';
import { Op } from 'sequelize';
import { Server as SocketIOServer } from 'socket.io';

// Extend global type to include io
declare global {
  var io: SocketIOServer | undefined;
}

const router = express.Router();

// Message validation schemas
const sendMessageSchema = z.object({
  recipientId: z.number(),
  message: z.string().min(1).max(1000),
  type: z.enum(['text', 'image', 'file']).default('text'),
  bookingId: z.number().optional()
});

const markAsReadSchema = z.object({
  messageIds: z.array(z.number())
});

// In-memory message storage (in production, use a proper database)
const messages: any[] = [
  {
    id: 1,
    senderId: 2,
    recipientId: 1,
    message: 'Hello! I saw your booking request for my BMW X3. I\'m happy to confirm it!',
    type: 'text',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    read: false
  },
  {
    id: 2,
    senderId: 1,
    recipientId: 2,
    message: 'Thank you! When can I pick up the vehicle?',
    type: 'text',
    timestamp: new Date(Date.now() - 1800000).toISOString(),
    read: true
  }
];

const conversations: any[] = [
  {
    id: '1-2',
    participants: [1, 2],
    lastMessage: {
      id: 2,
      senderId: 1,
      recipientId: 2,
      message: 'Thank you! When can I pick up the vehicle?',
      type: 'text',
      timestamp: new Date(Date.now() - 1800000).toISOString(),
      read: true
    },
    updatedAt: new Date(Date.now() - 1800000),
    unreadCount: { 2: 0 }
  }
];

// Get conversations
router.get('/conversations', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userIdNum = Number(req.user!.id);
    const userConversations = conversations.filter(c => 
      c.participants.includes(userIdNum)
    ).map(conversation => {
      const otherParticipantId = conversation.participants.find((id: number) => id !== userIdNum);
      const otherParticipant = { id: otherParticipantId, firstName: 'John', lastName: 'Doe', email: 'john@example.com' };
      
      return {
        id: conversation.id,
        participants: conversation.participants,
        lastMessage: conversation.lastMessage,
        otherParticipant,
        unreadCount: conversation.unreadCount[String(userIdNum)] || 0
      };
    });

    res.json({
      success: true,
      conversations: userConversations
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get messages for a conversation
router.get('/conversations/:conversationId/messages', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { conversationId } = req.params;
    const userIdNum = Number(req.user!.id);
    const otherId = conversationId
      .split('-')
      .map((id) => parseInt(id, 10))
      .find((id) => id !== userIdNum) || 0;
    const conversationMessages = messages.filter((m) =>
      (m.senderId === userIdNum && m.recipientId === otherId) ||
      (m.recipientId === userIdNum && m.senderId === otherId)
    ).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    res.json({
      success: true,
      messages: conversationMessages
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Send message
router.post('/send', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { recipientId, message, type, bookingId } = sendMessageSchema.parse(req.body);

    // Verify recipient exists
    const recipient = await User.findByPk(recipientId);
    if (!recipient) {
      return res.status(404).json({ error: 'Recipient not found' });
    }

    // Create message
    const newMessage = {
      id: Date.now(),
      senderId: req.user!.id.toString(),
      recipientId,
      message,
      type,
      bookingId,
      timestamp: new Date(),
      read: false
    };

    messages.push(newMessage);

    // Update or create conversation
    const conversationId = [req.user!.id.toString(), recipientId].sort().join('-');
    let conversation = conversations.find(c => c.id === conversationId);
    
    if (!conversation) {
      conversation = {
        id: conversationId,
        participants: [req.user!.id.toString(), recipientId],
        lastMessage: newMessage,
        updatedAt: new Date(),
        unreadCount: { [recipientId]: 1 }
      };
      conversations.push(conversation);
    } else {
      conversation.lastMessage = newMessage;
      conversation.updatedAt = new Date();
      conversation.unreadCount = {
        ...conversation.unreadCount,
        [recipientId]: (conversation.unreadCount[recipientId] || 0) + 1
      };
    }

    // Emit real-time message to recipient
    if (global.io) {
      global.io.to(`user:${recipientId}`).emit('new_message', {
        message: newMessage,
        conversation: conversation
      });
    }

    res.json({
      success: true,
      message: newMessage
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get conversations
router.get('/conversations', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userIdNum = Number(req.user!.id);
    const userConversations = conversations.filter(c => 
      c.participants.includes(userIdNum)
    );

    // Get participant details
    const conversationIds = userConversations.flatMap(c => c.participants);
    const participants = await User.findAll({
      where: { id: { [Op.in]: conversationIds } },
      attributes: ['id', 'firstName', 'lastName', 'email']
    });

    const conversationsWithDetails = userConversations.map(conversation => {
      const otherParticipantId = conversation.participants.find((id: number) => id !== Number(req.user!.id));
      const otherParticipant = participants.find(p => p.id === otherParticipantId);
      
      return {
        ...conversation,
        otherParticipant,
        unreadCount: conversation.unreadCount[String(userIdNum)] || 0
      };
    });

    res.json({
      success: true,
      conversations: conversationsWithDetails
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get messages for a conversation
router.get('/conversations/:conversationId/messages', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { conversationId } = req.params;
    const { page = 1, limit = 50 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    // Verify user is part of this conversation
    const conversation = conversations.find(c => c.id === conversationId);
    if (!conversation || !conversation.participants.includes(Number(req.user!.id))) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    // Get messages for this conversation
    const userIdNum = Number(req.user!.id);
    const otherId = conversation.participants.find((id: number) => id !== userIdNum) as number;
    const conversationMessages = messages
      .filter(m => 
        (m.senderId === userIdNum && m.recipientId === otherId) ||
        (m.recipientId === userIdNum && m.senderId === otherId)
      )
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(offset, offset + Number(limit));

    res.json({
      success: true,
      messages: conversationMessages.reverse(), // Return in chronological order
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: conversationMessages.length
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Mark messages as read
router.patch('/read', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { messageIds } = markAsReadSchema.parse(req.body);

    // Update message read status
    messageIds.forEach(messageId => {
      const message = messages.find(m => m.id === messageId);
      if (message && message.recipientId === Number(req.user!.id)) {
        message.read = true;
      }
    });

    // Update conversation unread count
    const conversationsToUpdate = conversations.filter(c => 
      c.participants.includes(Number(req.user!.id))
    );

    conversationsToUpdate.forEach(conversation => {
      const key = String(req.user!.id);
      if (conversation.unreadCount && conversation.unreadCount[key]) {
        conversation.unreadCount[key] = 0;
      }
    });

    res.json({
      success: true,
      message: 'Messages marked as read'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: 'Validation error', details: error.errors });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get unread message count
router.get('/unread-count', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const unreadCount = messages.filter(m => 
      m.recipientId === Number(req.user!.id) && !m.read
    ).length;

    res.json({
      success: true,
      unreadCount
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get support messages (admin)
router.get('/support', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    if (req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    // Get all messages marked as support requests
    const supportMessages = messages.filter(m => m.type === 'support');
    
    res.json({
      success: true,
      messages: supportMessages
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Send support message
router.post('/support', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { message, priority = 'normal' } = req.body;

    const supportMessage = {
      id: Date.now(),
      senderId: req.user!.id.toString(),
      recipientId: 'admin',
      message,
      type: 'support',
      priority,
      timestamp: new Date(),
      read: false
    };

    messages.push(supportMessage);

    // Notify admin
    if (global.io) {
      global.io.emit('support_message', supportMessage);
    }

    res.json({
      success: true,
      message: supportMessage
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Socket.IO connection handler
export const setupMessageSocket = (io: SocketIOServer) => {
  global.io = io;

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    // Join user room
    socket.on('join_user_room', (userId) => {
      socket.join(`user:${userId}`);
      console.log(`User ${userId} joined their room`);
    });

    // Leave user room
    socket.on('leave_user_room', (userId) => {
      socket.leave(`user:${userId}`);
      console.log(`User ${userId} left their room`);
    });

    // Join conversation room
    socket.on('join_conversation', (conversationId) => {
      socket.join(`conversation:${conversationId}`);
      console.log(`User joined conversation ${conversationId}`);
    });

    // Leave conversation room
    socket.on('leave_conversation', (conversationId) => {
      socket.leave(`conversation:${conversationId}`);
      console.log(`User left conversation ${conversationId}`);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

export default router;


