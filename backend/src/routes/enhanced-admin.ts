import express from 'express';
import { z } from 'zod';
import { authenticateAdmin, AdminRequest, auditAdminAction } from '../middleware/adminAuth';
import { EnhancedVehicle, User, Notification, ApprovalRequest } from '../models';
import { logger } from '../utils/logger';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const approveVehicleSchema = z.object({
  reason: z.string().optional(),
  notes: z.string().optional()
});

const rejectVehicleSchema = z.object({
  reason: z.string().min(1, 'Rejection reason is required'),
  notes: z.string().optional()
});

// GET /api/admin/enhanced-vehicles/pending - Get pending vehicle listings
router.get('/pending', authenticateAdmin, auditAdminAction('VIEW_PENDING_VEHICLES'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const { count, rows: vehicles } = await EnhancedVehicle.findAndCountAll({
      where: { listingStatus: 'pending' },
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number', 'isVerified', 'role']
      }],
      order: [['createdAt', 'ASC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: vehicles,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching pending vehicles:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch pending vehicles'
    });
  }
});

// PATCH /api/admin/enhanced-vehicles/:id/approve - Approve vehicle listing
router.patch('/:id/approve', authenticateAdmin, auditAdminAction('APPROVE_VEHICLE'), async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { reason, notes } = approveVehicleSchema.parse(req.body);
    
    const vehicle = await EnhancedVehicle.findByPk(id, {
      include: [{ model: User, as: 'host' }]
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle listing not found'
      });
    }

    if (vehicle.listingStatus !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not pending approval'
      });
    }

    // Update vehicle status
    await vehicle.update({ 
      listingStatus: 'approved',
      verified: true,
      verificationDate: new Date(),
      verificationNotes: notes || 'Approved by admin'
    });

    // Create approval request record
    await ApprovalRequest.create({
      requestType: 'VehicleApproval',
      entityId: vehicle.id,
      submittedBy: 'host',
      submittedById: vehicle.hostId, // UUID, not Number
      reviewedById: req.admin?.id, // UUID, not Number
      status: 'Approved',
      reviewNotes: notes || 'Vehicle approved by admin',
      reviewedAt: new Date()
    });

    // Create notification for host
    await Notification.create({
      userId: String(vehicle.hostId),
      message: `Your ${vehicle.make} ${vehicle.model} listing has been approved!`,
      type: 'vehicle_approved',
      isRead: false
    });

    logger.info(`Vehicle approved: ${vehicle.id}`, {
      adminId: req.admin?.id,
      hostId: vehicle.hostId,
      make: vehicle.make,
      model: vehicle.model
    });

    res.json({
      success: true,
      data: vehicle,
      message: 'Vehicle listing approved successfully'
    });
  } catch (error) {
    logger.error('Error approving vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to approve vehicle listing'
    });
  }
});

// PATCH /api/admin/enhanced-vehicles/:id/reject - Reject vehicle listing
router.patch('/:id/reject', authenticateAdmin, auditAdminAction('REJECT_VEHICLE'), async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;
    const { reason, notes } = rejectVehicleSchema.parse(req.body);
    
    const vehicle = await EnhancedVehicle.findByPk(id, {
      include: [{ model: User, as: 'host' }]
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle listing not found'
      });
    }

    if (vehicle.listingStatus !== 'pending') {
      return res.status(400).json({
        success: false,
        error: 'Vehicle is not pending approval'
      });
    }

    // Update vehicle status
    await vehicle.update({ 
      listingStatus: 'rejected',
      rejectionReason: reason,
      adminNotes: notes
    });

    // Create approval request record
    await ApprovalRequest.create({
      requestType: 'VehicleApproval',
      entityId: vehicle.id,
      submittedBy: 'host',
      submittedById: vehicle.hostId, // UUID, not Number
      reviewedById: req.admin?.id, // UUID, not Number
      status: 'Declined',
      reviewNotes: `${reason}. ${notes || ''}`,
      reviewedAt: new Date()
    });

    // Create notification for host
    await Notification.create({
      userId: String(vehicle.hostId),
      message: `Your ${vehicle.make} ${vehicle.model} listing was rejected. Reason: ${reason}`,
      type: 'vehicle_rejected',
      isRead: false
    });

    logger.info(`Vehicle rejected: ${vehicle.id}`, {
      adminId: req.admin?.id,
      hostId: vehicle.hostId,
      make: vehicle.make,
      model: vehicle.model,
      reason
    });

    res.json({
      success: true,
      data: vehicle,
      message: 'Vehicle listing rejected'
    });
  } catch (error) {
    logger.error('Error rejecting vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to reject vehicle listing'
    });
  }
});

// GET /api/admin/enhanced-vehicles - Get all vehicles with admin details
router.get('/', authenticateAdmin, auditAdminAction('VIEW_ALL_VEHICLES'), async (req: AdminRequest, res) => {
  try {
    const { page = 1, limit = 20, status, type, city } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.listingStatus = status;
    if (type) whereClause.type = type;
    if (city) whereClause['location.city'] = city;

    const { count, rows: vehicles } = await EnhancedVehicle.findAndCountAll({
      where: whereClause,
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number', 'isVerified', 'role', 'createdAt']
      }],
      order: [['createdAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      data: vehicles,
      pagination: {
        total: count,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching vehicles:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicles'
    });
  }
});

// GET /api/admin/enhanced-vehicles/:id - Get single vehicle with admin details
router.get('/:id', authenticateAdmin, auditAdminAction('VIEW_VEHICLE_DETAILS'), async (req: AdminRequest, res) => {
  try {
    const { id } = req.params;

    const vehicle = await EnhancedVehicle.findByPk(id, {
      include: [{
        model: User,
        as: 'host',
        attributes: ['id', 'firstName', 'lastName', 'email', 'phone_number', 'isVerified', 'role', 'createdAt', 'last_login_at']
      }]
    });

    if (!vehicle) {
      return res.status(404).json({
        success: false,
        error: 'Vehicle not found'
      });
    }

    res.json({
      success: true,
      data: vehicle
    });
  } catch (error) {
    logger.error('Error fetching vehicle:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicle'
    });
  }
});

// GET /api/admin/enhanced-vehicles/stats - Vehicle statistics
router.get('/stats/overview', authenticateAdmin, auditAdminAction('VIEW_VEHICLE_STATS'), async (req: AdminRequest, res) => {
  try {
    const [
      totalVehicles,
      pendingVehicles,
      approvedVehicles,
      rejectedVehicles,
      activeVehicles,
      vehiclesByType,
      vehiclesByStatus
    ] = await Promise.all([
      EnhancedVehicle.count(),
      EnhancedVehicle.count({ where: { listingStatus: 'pending' } }),
      EnhancedVehicle.count({ where: { listingStatus: 'approved' } }),
      EnhancedVehicle.count({ where: { listingStatus: 'rejected' } }),
      EnhancedVehicle.count({ where: { listingStatus: 'active' } }),
      EnhancedVehicle.findAll({
        attributes: [
          'type',
          [EnhancedVehicle.sequelize!.fn('COUNT', EnhancedVehicle.sequelize!.col('id')), 'count']
        ],
        group: ['type'],
        raw: true
      }),
      EnhancedVehicle.findAll({
        attributes: [
          'listingStatus',
          [EnhancedVehicle.sequelize!.fn('COUNT', EnhancedVehicle.sequelize!.col('id')), 'count']
        ],
        group: ['listingStatus'],
        raw: true
      })
    ]);

    res.json({
      success: true,
      data: {
        overview: {
          total: totalVehicles,
          pending: pendingVehicles,
          approved: approvedVehicles,
          rejected: rejectedVehicles,
          active: activeVehicles
        },
        byType: vehiclesByType,
        byStatus: vehiclesByStatus
      }
    });
  } catch (error) {
    logger.error('Error fetching vehicle stats:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch vehicle statistics'
    });
  }
});

export default router;
