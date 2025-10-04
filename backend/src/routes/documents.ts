import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthRequest, requireRole } from '../middlewares/auth';
import { Document, User } from '../models';
import { Op } from 'sequelize';

const router = express.Router();

// Validation schemas
const createDocumentSchema = z.object({
  documentType: z.enum(['license', 'id', 'insurance', 'registration', 'other']),
  fileUrl: z.string().url(),
  fileName: z.string(),
  fileSize: z.number().positive().optional(),
  mimeType: z.string().optional(),
  description: z.string().optional()
});

const updateDocumentStatusSchema = z.object({
  status: z.enum(['pending', 'approved', 'rejected']),
  reason: z.string().optional()
});

// Get all documents (admin only)
router.get('/', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { page = 1, limit = 20, status, document_type } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (document_type) whereClause.documentType = document_type;

    const { count, rows: documents } = await Document.findAndCountAll({
      where: whereClause,
      include: [
        { 
          model: User, 
          as: 'user', 
          attributes: ['id', 'first_name', 'last_name', 'email'] 
        }
      ],
      order: [['uploadedAt', 'DESC']],
      limit: Number(limit),
      offset
    });

    res.json({
      success: true,
      documents,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: count,
        pages: Math.ceil(count / Number(limit))
      }
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's documents
router.get('/my-documents', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const documents = await Document.findAll({
      where: { userId: req.user!.id },
      order: [['uploadedAt', 'DESC']]
    });

    res.json({
      success: true,
      documents
    });
  } catch (error) {
    console.error('Error fetching user documents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Upload document
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const documentData = createDocumentSchema.parse(req.body);

    const document = await Document.create({
      ...documentData,
      userId: req.user!.id,
      status: 'pending',
      uploadedAt: new Date()
    });

    res.status(201).json({
      success: true,
      message: 'Document uploaded successfully',
      document
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Error uploading document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update document status (admin only)
router.put('/:id/status', authenticateToken, requireRole(['admin']), async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const { status, reason } = updateDocumentStatusSchema.parse(req.body);

    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    await document.update({
      status,
      reviewedAt: new Date(),
      reviewedBy: req.user!.id,
      ...(status === 'rejected' && reason && { rejectionReason: reason })
    });

    res.json({
      success: true,
      message: `Document ${status} successfully`,
      document
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.errors
      });
    }
    
    console.error('Error updating document status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete document
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;

    const document = await Document.findByPk(id);
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Check if user owns the document or is admin
    if (document.userId !== req.user!.id && req.user!.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }

    await document.destroy();

    res.json({
      success: true,
      message: 'Document deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting document:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
