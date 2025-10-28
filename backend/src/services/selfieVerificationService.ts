import { User } from '../models/User';
import { logger } from '../utils/logger';

export interface SelfieVerificationRequest {
  userId: string;
  selfieData: string; // Base64 encoded image
  sessionId: string;
  deviceInfo: {
    userAgent: string;
    platform: string;
    language: string;
  };
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface SelfieVerificationResponse {
  verified: boolean;
  confidence: number;
  matchScore: number;
  livenessScore: number;
  fraudRisk: 'low' | 'medium' | 'high';
  reasons: string[];
  sessionId: string;
  timestamp: Date;
}

export interface VerificationSession {
  id: string;
  userId: string;
  attempts: number;
  maxAttempts: number;
  lockedUntil?: Date;
  createdAt: Date;
  lastAttempt?: Date;
}

export class SelfieVerificationService {
  private static readonly MAX_ATTEMPTS = 3;
  private static readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
  private static readonly MIN_CONFIDENCE = 0.7;
  private static readonly MIN_LIVENESS_SCORE = 0.6;

  /**
   * Verify selfie against user profile
   */
  static async verifySelfie(request: SelfieVerificationRequest): Promise<SelfieVerificationResponse> {
    try {
      // Check session lockout
      const session = await this.getVerificationSession(request.sessionId);
      if (session && session.lockedUntil && session.lockedUntil > new Date()) {
        throw new Error('Verification session is locked. Please try again later.');
      }

      // Get user profile
      const user = await User.findByPk(request.userId);
      if (!user) {
        throw new Error('User not found');
      }

      // Check if user has profile image for comparison
      if (!user.profile_image_url) {
        throw new Error('User profile image not found. Please upload a profile image first.');
      }

      // Perform verification checks
      const verificationResults = await this.performVerificationChecks(request, user);
      
      // Update session
      await this.updateVerificationSession(request.sessionId, request.userId, verificationResults.verified);

      // Log verification attempt
      await this.logVerificationAttempt(request, verificationResults);

      return verificationResults;

    } catch (error) {
      logger.error('Selfie verification error:', error);
      throw error;
    }
  }

  /**
   * Perform comprehensive verification checks
   */
  private static async performVerificationChecks(
    request: SelfieVerificationRequest,
    user: User
  ): Promise<SelfieVerificationResponse> {
    const results: SelfieVerificationResponse = {
      verified: false,
      confidence: 0,
      matchScore: 0,
      livenessScore: 0,
      fraudRisk: 'low',
      reasons: [],
      sessionId: request.sessionId,
      timestamp: new Date()
    };

    try {
      // 1. Face matching against profile image
      const faceMatchResult = await this.performFaceMatching(request.selfieData, user.profile_image_url || '');
      results.matchScore = faceMatchResult.score;
      results.confidence = faceMatchResult.confidence;

      // 2. Liveness detection
      const livenessResult = await this.performLivenessDetection(request.selfieData);
      results.livenessScore = livenessResult.score;

      // 3. Fraud detection
      const fraudResult = await this.performFraudDetection(request);
      results.fraudRisk = fraudResult.risk;

      // 4. Determine overall verification result
      const isFaceMatch = results.matchScore >= this.MIN_CONFIDENCE;
      const isLivenessPassed = results.livenessScore >= this.MIN_LIVENESS_SCORE;
      const isLowFraudRisk = results.fraudRisk === 'low';

      results.verified = isFaceMatch && isLivenessPassed && isLowFraudRisk;

      // 5. Generate reasons
      if (!isFaceMatch) {
        results.reasons.push('Face does not match profile image');
      }
      if (!isLivenessPassed) {
        results.reasons.push('Liveness detection failed');
      }
      if (!isLowFraudRisk) {
        results.reasons.push('High fraud risk detected');
      }

      if (results.verified) {
        results.reasons.push('Verification successful');
      }

      return results;

    } catch (error) {
      logger.error('Verification checks error:', error);
      results.reasons.push('Verification service error');
      return results;
    }
  }

  /**
   * Perform face matching against profile image
   */
  private static async performFaceMatching(
    selfieData: string,
    profileImage: string
  ): Promise<{ score: number; confidence: number }> {
    try {
      // In a real implementation, this would use a face recognition API
      // For now, we'll simulate the process
      
      // Simulate API call to face recognition service
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock face matching logic
      const baseScore = Math.random() * 0.4 + 0.5; // 0.5 to 0.9
      const confidence = Math.random() * 0.3 + 0.6; // 0.6 to 0.9

      return {
        score: baseScore,
        confidence
      };

    } catch (error) {
      logger.error('Face matching error:', error);
      return { score: 0, confidence: 0 };
    }
  }

  /**
   * Perform liveness detection
   */
  private static async performLivenessDetection(selfieData: string): Promise<{ score: number }> {
    try {
      // In a real implementation, this would use a liveness detection API
      // For now, we'll simulate the process
      
      // Simulate API call to liveness detection service
      await new Promise(resolve => setTimeout(resolve, 800));

      // Mock liveness detection logic
      const score = Math.random() * 0.4 + 0.5; // 0.5 to 0.9

      return { score };

    } catch (error) {
      logger.error('Liveness detection error:', error);
      return { score: 0 };
    }
  }

  /**
   * Perform fraud detection
   */
  private static async performFraudDetection(request: SelfieVerificationRequest): Promise<{ risk: 'low' | 'medium' | 'high' }> {
    try {
      // Check for suspicious patterns
      const riskFactors = [];

      // Check device consistency
      if (this.isSuspiciousDevice(request.deviceInfo)) {
        riskFactors.push('suspicious_device');
      }

      // Check location consistency
      if (request.location && this.isSuspiciousLocation(request.location)) {
        riskFactors.push('suspicious_location');
      }

      // Check session patterns
      if (this.isSuspiciousSession(request.sessionId)) {
        riskFactors.push('suspicious_session');
      }

      // Determine risk level
      let risk: 'low' | 'medium' | 'high' = 'low';
      if (riskFactors.length >= 3) {
        risk = 'high';
      } else if (riskFactors.length >= 1) {
        risk = 'medium';
      }

      return { risk };

    } catch (error) {
      logger.error('Fraud detection error:', error);
      return { risk: 'medium' };
    }
  }

  /**
   * Check for suspicious device patterns
   */
  private static isSuspiciousDevice(deviceInfo: any): boolean {
    // Check for known bot user agents
    const botPatterns = [
      /bot/i,
      /crawler/i,
      /spider/i,
      /scraper/i
    ];

    return botPatterns.some(pattern => pattern.test(deviceInfo.userAgent));
  }

  /**
   * Check for suspicious location patterns
   */
  private static isSuspiciousLocation(location: any): boolean {
    // Check for impossible locations (e.g., in the ocean, at 0,0)
    if (location.latitude === 0 && location.longitude === 0) {
      return true;
    }

    // Check for locations outside reasonable bounds
    if (Math.abs(location.latitude) > 90 || Math.abs(location.longitude) > 180) {
      return true;
    }

    return false;
  }

  /**
   * Check for suspicious session patterns
   */
  private static isSuspiciousSession(sessionId: string): boolean {
    // In a real implementation, this would check session history
    // For now, we'll do basic validation
    return sessionId.length < 10;
  }

  /**
   * Get verification session
   */
  private static async getVerificationSession(sessionId: string): Promise<VerificationSession | null> {
    // In a real implementation, this would query a database
    // For now, we'll simulate with in-memory storage
    return null;
  }

  /**
   * Update verification session
   */
  private static async updateVerificationSession(
    sessionId: string,
    userId: string,
    verified: boolean
  ): Promise<void> {
    // In a real implementation, this would update a database
    // For now, we'll simulate the update
    logger.info(`Verification session updated: ${sessionId}, user: ${userId}, verified: ${verified}`);
  }

  /**
   * Log verification attempt
   */
  private static async logVerificationAttempt(
    request: SelfieVerificationRequest,
    result: SelfieVerificationResponse
  ): Promise<void> {
    const logData = {
      userId: request.userId,
      sessionId: request.sessionId,
      verified: result.verified,
      confidence: result.confidence,
      matchScore: result.matchScore,
      livenessScore: result.livenessScore,
      fraudRisk: result.fraudRisk,
      deviceInfo: request.deviceInfo,
      location: request.location,
      timestamp: new Date(),
      reasons: result.reasons
    };

    logger.info('Selfie verification attempt:', logData);
  }

  /**
   * Create verification session
   */
  static async createVerificationSession(userId: string): Promise<string> {
    const sessionId = `verify_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // In a real implementation, this would store in database
    logger.info(`Verification session created: ${sessionId} for user: ${userId}`);
    
    return sessionId;
  }

  /**
   * Check if user is eligible for selfie verification
   */
  static async isEligibleForVerification(userId: string): Promise<{ eligible: boolean; reason?: string }> {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return { eligible: false, reason: 'User not found' };
      }

      // Check if user has profile image
      if (!user.profile_image_url) {
        return { eligible: false, reason: 'Profile image required' };
      }

      // Check if user is verified
      if (!user.isVerified) {
        return { eligible: false, reason: 'User not verified' };
      }

      // Check if user is not blocked
      if (user.role === 'renter' && user.is_active === false) {
        return { eligible: false, reason: 'User account is blocked' };
      }

      return { eligible: true };

    } catch (error) {
      logger.error('Eligibility check error:', error);
      return { eligible: false, reason: 'System error' };
    }
  }

  /**
   * Get verification history for user
   */
  static async getVerificationHistory(userId: string, limit: number = 10): Promise<any[]> {
    try {
      // In a real implementation, this would query verification logs
      // For now, we'll return empty array
      return [];

    } catch (error) {
      logger.error('Get verification history error:', error);
      return [];
    }
  }
}

export default SelfieVerificationService;
