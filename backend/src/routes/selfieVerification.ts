import express from 'express';
import { z } from 'zod';
import { authenticateToken, AuthenticatedRequest } from '../middleware/auth';
import SelfieVerificationService from '../services/selfieVerificationService';
import { logger } from '../utils/logger';

const router = express.Router();

// Validation schemas
const selfieVerificationSchema = z.object({
  selfieData: z.string().min(1, 'Selfie data is required'),
  sessionId: z.string().min(1, 'Session ID is required'),
  deviceInfo: z.object({
    userAgent: z.string(),
    platform: z.string(),
    language: z.string()
  }),
  location: z.object({
    latitude: z.number(),
    longitude: z.number()
  }).optional()
});

const createSessionSchema = z.object({
  purpose: z.enum(['booking', 'profile_update', 'security_check']).optional()
});

// POST /api/selfie-verification/session - Create verification session
router.post('/session', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { purpose } = createSessionSchema.parse(req.body);
    const userId = req.user!.id;

    // Check if user is eligible for verification
    const eligibility = await SelfieVerificationService.isEligibleForVerification(String(userId));
    if (!eligibility.eligible) {
      return res.status(400).json({
        success: false,
        error: 'Not eligible for verification',
        reason: eligibility.reason
      });
    }

    // Create verification session
    const sessionId = await SelfieVerificationService.createVerificationSession(String(userId));

    res.status(201).json({
      success: true,
      sessionId,
      message: 'Verification session created successfully'
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    }

    logger.error('Create verification session error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to create verification session'
    });
  }
});

// POST /api/selfie-verification/verify - Verify selfie
router.post('/verify', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { selfieData, sessionId, deviceInfo, location } = selfieVerificationSchema.parse(req.body);
    const userId = req.user!.id;

    // Verify selfie
    const result = await SelfieVerificationService.verifySelfie({
      userId: String(userId),
      selfieData,
      sessionId,
      deviceInfo,
      location
    });

    // Log verification result
    logger.info(`Selfie verification result for user ${userId}:`, {
      verified: result.verified,
      confidence: result.confidence,
      fraudRisk: result.fraudRisk
    });

    res.json({
      success: true,
      result
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    }

    logger.error('Selfie verification error:', error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Verification failed'
    });
  }
});

// GET /api/selfie-verification/eligibility - Check verification eligibility
router.get('/eligibility', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user!.id;
    const eligibility = await SelfieVerificationService.isEligibleForVerification(String(userId));

    res.json({
      success: true,
      eligible: eligibility.eligible,
      reason: eligibility.reason
    });

  } catch (error) {
    logger.error('Check eligibility error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to check eligibility'
    });
  }
});

// GET /api/selfie-verification/history - Get verification history
router.get('/history', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const userId = req.user!.id;
    const limit = parseInt(req.query.limit as string) || 10;
    
    const history = await SelfieVerificationService.getVerificationHistory(String(userId), limit);

    res.json({
      success: true,
      history
    });

  } catch (error) {
    logger.error('Get verification history error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get verification history'
    });
  }
});

// POST /api/selfie-verification/liveness-check - Perform liveness detection
router.post('/liveness-check', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { selfieData } = z.object({
      selfieData: z.string().min(1, 'Selfie data is required')
    }).parse(req.body);

    // In a real implementation, this would call a liveness detection API
    // For now, we'll simulate the process
    await new Promise(resolve => setTimeout(resolve, 1000));

    const livenessScore = Math.random() * 0.4 + 0.5; // 0.5 to 0.9
    const isLive = livenessScore >= 0.6;

    res.json({
      success: true,
      livenessScore,
      isLive,
      confidence: livenessScore
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    }

    logger.error('Liveness check error:', error);
    res.status(500).json({
      success: false,
      error: 'Liveness check failed'
    });
  }
});

// POST /api/selfie-verification/fraud-check - Perform fraud detection
router.post('/fraud-check', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { selfieData, deviceInfo, location } = z.object({
      selfieData: z.string().min(1, 'Selfie data is required'),
      deviceInfo: z.object({
        userAgent: z.string(),
        platform: z.string(),
        language: z.string()
      }),
      location: z.object({
        latitude: z.number(),
        longitude: z.number()
      }).optional()
    }).parse(req.body);

    // In a real implementation, this would call a fraud detection API
    // For now, we'll simulate the process
    await new Promise(resolve => setTimeout(resolve, 800));

    const fraudScore = Math.random();
    const fraudRisk = fraudScore < 0.3 ? 'low' : fraudScore < 0.7 ? 'medium' : 'high';
    const isSuspicious = fraudRisk !== 'low';

    res.json({
      success: true,
      fraudScore,
      fraudRisk,
      isSuspicious,
      reasons: isSuspicious ? ['Suspicious activity detected'] : []
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation error',
        details: error.errors
      });
    }

    logger.error('Fraud check error:', error);
    res.status(500).json({
      success: false,
      error: 'Fraud check failed'
    });
  }
});

// GET /api/selfie-verification/status/:sessionId - Get verification status
router.get('/status/:sessionId', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user!.id;

    // In a real implementation, this would check the session status in database
    // For now, we'll return a mock status
    res.json({
      success: true,
      sessionId,
      status: 'active',
      attempts: 0,
      maxAttempts: 3,
      lockedUntil: null
    });

  } catch (error) {
    logger.error('Get verification status error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to get verification status'
    });
  }
});

// DELETE /api/selfie-verification/session/:sessionId - Cancel verification session
router.delete('/session/:sessionId', authenticateToken, async (req: AuthenticatedRequest, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user!.id;

    // In a real implementation, this would cancel the session in database
    logger.info(`Verification session cancelled: ${sessionId} for user: ${userId}`);

    res.json({
      success: true,
      message: 'Verification session cancelled'
    });

  } catch (error) {
    logger.error('Cancel verification session error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to cancel verification session'
    });
  }
});

export default router;





