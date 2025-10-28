import { User } from '../models/User';
import { logger } from '../utils/logger';

export interface SecurityCheckRequest {
  userId: string;
  sessionId: string;
  deviceInfo: {
    userAgent: string;
    platform: string;
    language: string;
    screenResolution: string;
    timezone: string;
  };
  location?: {
    latitude: number;
    longitude: number;
    accuracy: number;
  };
  ipAddress: string;
  bookingAmount: number;
  paymentMethod: string;
}

export interface SecurityCheckResult {
  overallRisk: 'low' | 'medium' | 'high';
  checks: {
    sessionValidation: SecurityCheck;
    emailVerification: SecurityCheck;
    phoneVerification: SecurityCheck;
    deviceVerification: SecurityCheck;
    locationVerification: SecurityCheck;
    fraudDetection: SecurityCheck;
    paymentRisk: SecurityCheck;
  };
  recommendations: string[];
  blocked: boolean;
  reason?: string;
}

export interface SecurityCheck {
  name: string;
  status: 'passed' | 'failed' | 'warning';
  risk: 'low' | 'medium' | 'high';
  score: number;
  details: string;
  required: boolean;
}

export class SecurityChecksService {
  private static readonly HIGH_RISK_THRESHOLD = 0.7;
  private static readonly MEDIUM_RISK_THRESHOLD = 0.4;
  private static readonly MAX_FAILED_ATTEMPTS = 3;

  /**
   * Perform comprehensive security checks
   */
  static async performSecurityChecks(request: SecurityCheckRequest): Promise<SecurityCheckResult> {
    try {
      const user = await User.findByPk(request.userId);
      if (!user) {
        throw new Error('User not found');
      }

      const checks = {
        sessionValidation: await this.validateSession(request),
        emailVerification: await this.verifyEmail(user),
        phoneVerification: await this.verifyPhone(user),
        deviceVerification: await this.verifyDevice(request),
        locationVerification: await this.verifyLocation(request),
        fraudDetection: await this.detectFraud(request),
        paymentRisk: await this.assessPaymentRisk(request)
      };

      const overallRisk = this.calculateOverallRisk(checks);
      const recommendations = this.generateRecommendations(checks);
      const blocked = this.shouldBlockTransaction(checks, overallRisk);

      const result: SecurityCheckResult = {
        overallRisk,
        checks,
        recommendations,
        blocked,
        reason: blocked ? this.getBlockReason(checks) : undefined
      };

      // Log security check results
      await this.logSecurityCheck(request, result);

      return result;

    } catch (error) {
      logger.error('Security checks error:', error);
      throw error;
    }
  }

  /**
   * Validate session
   */
  private static async validateSession(request: SecurityCheckRequest): Promise<SecurityCheck> {
    try {
      // Check session validity
      const sessionValid = await this.isSessionValid(request.sessionId, request.userId);
      
      // Check session age
      const sessionAge = await this.getSessionAge(request.sessionId);
      const isRecentSession = sessionAge < 30 * 60 * 1000; // 30 minutes

      // Check for suspicious session patterns
      const suspiciousPatterns = await this.detectSuspiciousSessionPatterns(request);

      let status: 'passed' | 'failed' | 'warning' = 'passed';
      let risk: 'low' | 'medium' | 'high' = 'low';
      let score = 1.0;
      let details = 'Session is valid and secure';

      if (!sessionValid) {
        status = 'failed';
        risk = 'high';
        score = 0.0;
        details = 'Invalid or expired session';
      } else if (!isRecentSession) {
        status = 'warning';
        risk = 'medium';
        score = 0.6;
        details = 'Session is older than 30 minutes';
      } else if (suspiciousPatterns.length > 0) {
        status = 'warning';
        risk = 'medium';
        score = 0.4;
        details = `Suspicious patterns detected: ${suspiciousPatterns.join(', ')}`;
      }

      return {
        name: 'Session Validation',
        status,
        risk,
        score,
        details,
        required: true
      };

    } catch (error) {
      logger.error('Session validation error:', error);
      return {
        name: 'Session Validation',
        status: 'failed',
        risk: 'high',
        score: 0.0,
        details: 'Session validation failed',
        required: true
      };
    }
  }

  /**
   * Verify email
   */
  private static async verifyEmail(user: User): Promise<SecurityCheck> {
    const isVerified = user.is_email_verified;
    const hasRecentActivity = await this.hasRecentEmailActivity(user.id.toString());

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'Email is verified and active';

    if (!isVerified) {
      status = 'failed';
      risk = 'high';
      score = 0.0;
      details = 'Email not verified';
    } else if (!hasRecentActivity) {
      status = 'warning';
      risk = 'medium';
      score = 0.6;
      details = 'No recent email activity';
    }

    return {
      name: 'Email Verification',
      status,
      risk,
      score,
      details,
      required: true
    };
  }

  /**
   * Verify phone
   */
  private static async verifyPhone(user: User): Promise<SecurityCheck> {
    const hasPhone = !!user.phone_number;
    const isPhoneVerified = await this.isPhoneVerified(user.id.toString());

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'Phone number is verified';

    if (!hasPhone) {
      status = 'failed';
      risk = 'high';
      score = 0.0;
      details = 'No phone number provided';
    } else if (!isPhoneVerified) {
      status = 'warning';
      risk = 'medium';
      score = 0.5;
      details = 'Phone number not verified';
    }

    return {
      name: 'Phone Verification',
      status,
      risk,
      score,
      details,
      required: true
    };
  }

  /**
   * Verify device
   */
  private static async verifyDevice(request: SecurityCheckRequest): Promise<SecurityCheck> {
    const deviceConsistency = await this.checkDeviceConsistency(request);
    const deviceReputation = await this.checkDeviceReputation(request.deviceInfo);

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'Device is consistent and trusted';

    if (!deviceConsistency) {
      status = 'failed';
      risk = 'high';
      score = 0.0;
      details = 'Device inconsistency detected';
    } else if (deviceReputation < 0.5) {
      status = 'warning';
      risk = 'medium';
      score = 0.4;
      details = 'Device has poor reputation';
    }

    return {
      name: 'Device Verification',
      status,
      risk,
      score,
      details,
      required: false
    };
  }

  /**
   * Verify location
   */
  private static async verifyLocation(request: SecurityCheckRequest): Promise<SecurityCheck> {
    if (!request.location) {
      return {
        name: 'Location Verification',
        status: 'warning',
        risk: 'medium',
        score: 0.5,
        details: 'Location not provided',
        required: false
      };
    }

    const locationConsistency = await this.checkLocationConsistency(request);
    const locationRisk = await this.assessLocationRisk(request.location);

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'Location is consistent and safe';

    if (!locationConsistency) {
      status = 'failed';
      risk = 'high';
      score = 0.0;
      details = 'Location inconsistency detected';
    } else if (locationRisk === 'high') {
      status = 'warning';
      risk = 'high';
      score = 0.2;
      details = 'High-risk location detected';
    } else if (locationRisk === 'medium') {
      status = 'warning';
      risk = 'medium';
      score = 0.6;
      details = 'Medium-risk location detected';
    }

    return {
      name: 'Location Verification',
      status,
      risk,
      score,
      details,
      required: false
    };
  }

  /**
   * Detect fraud
   */
  private static async detectFraud(request: SecurityCheckRequest): Promise<SecurityCheck> {
    const fraudIndicators = await this.checkFraudIndicators(request);
    const behavioralAnalysis = await this.analyzeBehavior(request);

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'No fraud indicators detected';

    if (fraudIndicators.length > 0) {
      status = 'failed';
      risk = 'high';
      score = 0.0;
      details = `Fraud indicators: ${fraudIndicators.join(', ')}`;
    } else if (behavioralAnalysis.risk === 'high') {
      status = 'warning';
      risk = 'high';
      score = 0.3;
      details = 'Suspicious behavior detected';
    } else if (behavioralAnalysis.risk === 'medium') {
      status = 'warning';
      risk = 'medium';
      score = 0.6;
      details = 'Unusual behavior patterns';
    }

    return {
      name: 'Fraud Detection',
      status,
      risk,
      score,
      details,
      required: true
    };
  }

  /**
   * Assess payment risk
   */
  private static async assessPaymentRisk(request: SecurityCheckRequest): Promise<SecurityCheck> {
    const paymentHistory = await this.checkPaymentHistory(request.userId);
    const amountRisk = this.assessAmountRisk(request.bookingAmount);
    const methodRisk = this.assessPaymentMethodRisk(request.paymentMethod);

    let status: 'passed' | 'failed' | 'warning' = 'passed';
    let risk: 'low' | 'medium' | 'high' = 'low';
    let score = 1.0;
    let details = 'Payment appears legitimate';

    if (paymentHistory.hasFailedPayments) {
      status = 'warning';
      risk = 'medium';
      score = 0.5;
      details = 'Previous failed payments detected';
    }

    if (amountRisk === 'high') {
      status = 'warning';
      risk = 'high';
      score = 0.3;
      details = 'High-value transaction requires additional verification';
    } else if (amountRisk === 'medium') {
      status = 'warning';
      risk = 'medium';
      score = 0.6;
      details = 'Above-average transaction amount';
    }

    if (methodRisk === 'high') {
      status = 'warning';
      risk = 'high';
      score = 0.4;
      details = 'High-risk payment method';
    }

    return {
      name: 'Payment Risk Assessment',
      status,
      risk,
      score,
      details,
      required: true
    };
  }

  /**
   * Calculate overall risk
   */
  private static calculateOverallRisk(checks: any): 'low' | 'medium' | 'high' {
    const scores = Object.values(checks).map((check: any) => check.score);
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    if (averageScore >= 0.8) return 'low';
    if (averageScore >= 0.5) return 'medium';
    return 'high';
  }

  /**
   * Generate recommendations
   */
  private static generateRecommendations(checks: any): string[] {
    const recommendations: string[] = [];

    Object.values(checks).forEach((check: any) => {
      if (check.status === 'failed' && check.required) {
        recommendations.push(`Fix ${check.name}: ${check.details}`);
      } else if (check.status === 'warning') {
        recommendations.push(`Review ${check.name}: ${check.details}`);
      }
    });

    return recommendations;
  }

  /**
   * Determine if transaction should be blocked
   */
  private static shouldBlockTransaction(checks: any, overallRisk: string): boolean {
    const failedRequiredChecks = Object.values(checks).filter(
      (check: any) => check.status === 'failed' && check.required
    );

    return failedRequiredChecks.length > 0 || overallRisk === 'high';
  }

  /**
   * Get block reason
   */
  private static getBlockReason(checks: any): string {
    const failedChecks = Object.values(checks).filter(
      (check: any) => check.status === 'failed' && check.required
    );

    if (failedChecks.length > 0) {
      return `Transaction blocked due to: ${failedChecks.map((c: any) => c.name).join(', ')}`;
    }

    return 'Transaction blocked due to high risk assessment';
  }

  // Helper methods (simplified implementations)
  private static async isSessionValid(sessionId: string, userId: string): Promise<boolean> {
    // In real implementation, check session in database
    return true;
  }

  private static async getSessionAge(sessionId: string): Promise<number> {
    // In real implementation, get session creation time
    return 5 * 60 * 1000; // 5 minutes
  }

  private static async detectSuspiciousSessionPatterns(request: SecurityCheckRequest): Promise<string[]> {
    // In real implementation, analyze session patterns
    return [];
  }

  private static async hasRecentEmailActivity(userId: string): Promise<boolean> {
    // In real implementation, check email activity
    return true;
  }

  private static async isPhoneVerified(userId: string): Promise<boolean> {
    // In real implementation, check phone verification status
    return true;
  }

  private static async checkDeviceConsistency(request: SecurityCheckRequest): Promise<boolean> {
    // In real implementation, check device consistency
    return true;
  }

  private static async checkDeviceReputation(deviceInfo: any): Promise<number> {
    // In real implementation, check device reputation
    return 0.8;
  }

  private static async checkLocationConsistency(request: SecurityCheckRequest): Promise<boolean> {
    // In real implementation, check location consistency
    return true;
  }

  private static async assessLocationRisk(location: any): Promise<'low' | 'medium' | 'high'> {
    // In real implementation, assess location risk
    return 'low';
  }

  private static async checkFraudIndicators(request: SecurityCheckRequest): Promise<string[]> {
    // In real implementation, check fraud indicators
    return [];
  }

  private static async analyzeBehavior(request: SecurityCheckRequest): Promise<{ risk: 'low' | 'medium' | 'high' }> {
    // In real implementation, analyze behavior patterns
    return { risk: 'low' };
  }

  private static async checkPaymentHistory(userId: string): Promise<{ hasFailedPayments: boolean }> {
    // In real implementation, check payment history
    return { hasFailedPayments: false };
  }

  private static assessAmountRisk(amount: number): 'low' | 'medium' | 'high' {
    if (amount > 10000) return 'high';
    if (amount > 5000) return 'medium';
    return 'low';
  }

  private static assessPaymentMethodRisk(method: string): 'low' | 'medium' | 'high' {
    const highRiskMethods = ['crypto', 'wire_transfer'];
    const mediumRiskMethods = ['bank_transfer'];
    
    if (highRiskMethods.includes(method)) return 'high';
    if (mediumRiskMethods.includes(method)) return 'medium';
    return 'low';
  }

  /**
   * Log security check results
   */
  private static async logSecurityCheck(request: SecurityCheckRequest, result: SecurityCheckResult): Promise<void> {
    const logData = {
      userId: request.userId,
      sessionId: request.sessionId,
      overallRisk: result.overallRisk,
      blocked: result.blocked,
      reason: result.reason,
      timestamp: new Date(),
      deviceInfo: request.deviceInfo,
      location: request.location,
      ipAddress: request.ipAddress
    };

    logger.info('Security check completed:', logData);
  }
}

export default SecurityChecksService;
