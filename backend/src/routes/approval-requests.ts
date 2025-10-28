import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthenticatedRequest, requireRole } from '../middleware/auth';
import { ApprovalRequest } from '../models/ApprovalRequest';
import { User } from '../models/User';
import { Op } from 'sequelize';
import { emailService } from '../services/emailService';
import { autoApprovalService } from '../services/autoApprovalService';
import { cacheService } from '../services/cacheService';
import { approvalRequestRateLimit, approvalUpdateRateLimit, bulkApprovalRateLimit } from '../middlewares/approvalRateLimit';
import { auditService } from '../services/auditService';

const router = express.Router();

// Validation schemas
const createApprovalRequestSchema = z.object({
  requestType: z.enum(['DocumentVerification', 'VehicleListing', 'InsuranceVerification', 'ProfileVerification', 'VehicleApproval']),
  entityId: z.number().int().positive(),
  submittedBy: z.enum(['renter', 'host']),
  reviewNotes: z.string().optional()
});

const updateApprovalRequestSchema = z.object({
  status: z.enum(['UnderReview', 'Approved', 'Declined', 'RequiresMoreInfo']),
  reviewNotes: z.string().optional()
});

// Create approval request (renter/host)
router.post('/', approvalRequestRateLimit, authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const validation = createApprovalRequestSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ 
        error: 'Invalid request data', 
        details: validation.error.errors 
      });
    }

    const { requestType, entityId, submittedBy, reviewNotes } = validation.data;

    // Verify the user's role matches the submittedBy field
    const userRole = req.user!.role.toLowerCase();
    if (userRole !== submittedBy && req.user!.role !== 'admin') {
      return res.status(403).json({ 
        error: 'You can only submit requests for your own role' 
      });
    }

    // Check if there's already a pending request for this entity and type
    const existingRequest = await ApprovalRequest.findOne({
      where: {
        requestType,
        entityId,
        status: 'Pending'
      }
    });

    if (existingRequest) {
      return res.status(409).json({ 
        error: 'A pending approval request already exists for this entity' 
      });
    }

    const approvalRequest = await ApprovalRequest.create({
      requestType,
      entityId,
      submittedBy,
      submittedById: req.user!.id.toString(),
      reviewNotes,
      status: 'Pending'
    });

    // Check for auto-approval
    const wasAutoApproved = await autoApprovalService.checkAutoApproval(approvalRequest);

    // Fetch the created request with user details
    const createdRequest = await ApprovalRequest.findByPk(approvalRequest.id, {
      include: [
        { model: User, as: 'submittedByUser', attributes: ['id', 'firstName', 'lastName', 'email'] }
      ]
    });

    // Send email notification for auto-approval
    if (wasAutoApproved && (createdRequest as any)?.submittedByUser?.email) {
      try {
        await emailService.sendApprovalNotification(
          (createdRequest as any).submittedByUser.email,
          `${(createdRequest as any).submittedByUser.firstName} ${(createdRequest as any).submittedByUser.lastName}`,
          createdRequest?.requestType || 'Unknown',
          'Approved',
          'Auto-approved based on user criteria'
        );
      } catch (emailError) {
        console.error('Failed to send auto-approval email:', emailError);
      }
    }

    // Log audit action
    await auditService.logApprovalAction({
      action: wasAutoApproved ? 'AUTO_APPROVED' : 'CREATED',
      entityType: 'ApprovalRequest',
      entityId: approvalRequest.id,
      userId: Number(req.user!.id) || 0,
      userRole: req.user!.role,
      newValues: { requestType, entityId, submittedBy, status: wasAutoApproved ? 'Approved' : 'Pending' },
      req
    });

    res.status(201).json({
      success: true,
      message: 'Approval request submitted successfully',
      data: createdRequest
    });
  } catch (error) {
    console.error('Error creating approval request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get approval requests for current user (renter/host)
router.get('/my-requests', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { status, requestType, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {
      submittedById: req.user!.id
    };

    if (status) whereClause.status = status;
    if (requestType) whereClause.requestType = requestType;

    const requests = await ApprovalRequest.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'reviewedByUser', attributes: ['id', 'firstName', 'lastName'] }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        requests: requests.rows,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: requests.count,
          pages: Math.ceil(requests.count / Number(limit))
        }
      }
    });
  } catch (error) {
    console.error('Error fetching user approval requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all approval requests (admin only)
router.get('/', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { status, requestType, submittedBy, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (requestType) whereClause.requestType = requestType;
    if (submittedBy) whereClause.submittedBy = submittedBy;

    const requests = await ApprovalRequest.findAndCountAll({
      where: whereClause,
      include: [
        { model: User, as: 'submittedByUser', attributes: ['id', 'firstName', 'lastName', 'email', 'role'] },
        { model: User, as: 'reviewedByUser', attributes: ['id', 'firstName', 'lastName'] }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'DESC']]
    });

    res.json({
      success: true,
      data: {
        requests: requests.rows,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: requests.count,
          pages: Math.ceil(requests.count / Number(limit))
        }
      }
    });
  } catch (error) {
    console.error('Error fetching approval requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get pending approval requests (admin only)
router.get('/pending', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    const cacheKey = `approval:pending:${page}:${limit}`;

    // Try cache first
    const cached = await cacheService.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const requests = await ApprovalRequest.findAndCountAll({
      where: { status: 'Pending' },
      include: [
        { model: User, as: 'submittedByUser', attributes: ['id', 'firstName', 'lastName', 'email', 'role'] }
      ],
      limit: Number(limit),
      offset,
      order: [['createdAt', 'ASC']] // Oldest first for admin queue
    });

    const response = {
      success: true,
      data: {
        requests: requests.rows,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total: requests.count,
          pages: Math.ceil(requests.count / Number(limit))
        }
      }
    };

    // Cache for 5 minutes
    await cacheService.set(cacheKey, response, 300);

    res.json(response);
  } catch (error) {
    console.error('Error fetching pending approval requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update approval request status (admin only)
router.patch('/:id', approvalUpdateRateLimit, authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;
    const validation = updateApprovalRequestSchema.safeParse(req.body);
    
    if (!validation.success) {
      return res.status(400).json({ 
        error: 'Invalid request data', 
        details: validation.error.errors 
      });
    }

    const { status, reviewNotes } = validation.data;

    const approvalRequest = await ApprovalRequest.findByPk(id);
    if (!approvalRequest) {
      return res.status(404).json({ error: 'Approval request not found' });
    }

    if (approvalRequest.status !== 'Pending') {
      return res.status(400).json({ 
        error: 'This request has already been processed' 
      });
    }

    await approvalRequest.update({
      status,
      reviewedById: req.user!.id.toString(),
      reviewedAt: new Date(),
      reviewNotes
    });

    // Fetch updated request with user details
    const updatedRequest = await ApprovalRequest.findByPk(id, {
      include: [
        { model: User, as: 'submittedByUser', attributes: ['id', 'firstName', 'lastName', 'email', 'role'] },
        { model: User, as: 'reviewedByUser', attributes: ['id', 'firstName', 'lastName'] }
      ]
    });

    // Send email notification
    if ((updatedRequest as any)?.submittedByUser?.email) {
      try {
        await emailService.sendApprovalNotification(
          (updatedRequest as any).submittedByUser.email,
          `${(updatedRequest as any).submittedByUser.firstName} ${(updatedRequest as any).submittedByUser.lastName}`,
          updatedRequest?.requestType || 'Unknown',
          status as 'Approved' | 'Declined',
          reviewNotes
        );
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Don't fail the request if email fails
      }
    }

    // Log audit action
    await auditService.logApprovalAction({
      action: `APPROVAL_${status.toUpperCase()}`,
      entityType: 'ApprovalRequest',
      entityId: parseInt(id),
      userId: Number(req.user!.id) || 0,
      userRole: req.user!.role,
      oldValues: { status: 'Pending' },
      newValues: { status, reviewNotes },
      req
    });

    // Invalidate cache
    await cacheService.invalidatePattern('approval:*');

    res.json({
      success: true,
      message: `Request ${status.toLowerCase()} successfully`,
      data: updatedRequest
    });
  } catch (error) {
    console.error('Error updating approval request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get approval request by ID
router.get('/:id', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { id } = req.params;

    const approvalRequest = await ApprovalRequest.findByPk(id, {
      include: [
        { model: User, as: 'submittedByUser', attributes: ['id', 'firstName', 'lastName', 'email', 'role'] },
        { model: User, as: 'reviewedByUser', attributes: ['id', 'firstName', 'lastName'] }
      ]
    });

    if (!approvalRequest) {
      return res.status(404).json({ error: 'Approval request not found' });
    }

    // Check if user can access this request
    if (req.user!.role !== 'admin' && approvalRequest.submittedById !== req.user!.id.toString()) {
      return res.status(403).json({ error: 'Access denied' });
    }

    res.json({
      success: true,
      data: approvalRequest
    });
  } catch (error) {
    console.error('Error fetching approval request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Bulk update approval requests (admin only)
router.patch('/bulk', bulkApprovalRateLimit, authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const { requestIds, status, reviewNotes } = req.body;

    if (!Array.isArray(requestIds) || requestIds.length === 0) {
      return res.status(400).json({ error: 'Request IDs array is required' });
    }

    if (!['Approved', 'Declined'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const updatedRequests = await ApprovalRequest.update(
      {
        status,
        reviewedById: req.user!.id.toString(),
        reviewedAt: new Date(),
        reviewNotes
      },
      {
        where: {
          id: { [Op.in]: requestIds },
          status: 'Pending'
        },
        returning: true
      }
    );

    res.json({
      success: true,
      message: `${updatedRequests[0]} requests ${status.toLowerCase()} successfully`,
      data: { updatedCount: updatedRequests[0] }
    });
  } catch (error) {
    console.error('Error bulk updating approval requests:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get approval statistics (admin only)
router.get('/stats/overview', authenticateToken, requireRole(['admin']), async (req: AuthenticatedRequest, res) => {
  try {
    const stats = await ApprovalRequest.findAll({
      attributes: [
        'status',
        [ApprovalRequest.sequelize!.fn('COUNT', ApprovalRequest.sequelize!.col('id')), 'count']
      ],
      group: ['status'],
      raw: true
    });

    const requestTypeStats = await ApprovalRequest.findAll({
      attributes: [
        'requestType',
        [ApprovalRequest.sequelize!.fn('COUNT', ApprovalRequest.sequelize!.col('id')), 'count']
      ],
      group: ['requestType'],
      raw: true
    });

    res.json({
      success: true,
      data: {
        statusStats: stats,
        requestTypeStats
      }
    });
  } catch (error) {
    console.error('Error fetching approval statistics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;


