import { notificationService } from './notificationService';

export interface VerificationRequest {
  type: 'identity' | 'driver_license' | 'address' | 'phone' | 'email';
  status: 'pending' | 'approved' | 'rejected' | 'expired';
  submittedAt: string;
  reviewedAt?: string;
  reviewerId?: string;
  documents: VerificationDocument[];
  notes?: string;
}

export interface VerificationDocument {
  id: string;
  type: string;
  name: string;
  url: string;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
}

export interface VideoVerification {
  id: string;
  type: 'identity' | 'vehicle_inspection' | 'testimonial';
  videoUrl: string;
  thumbnailUrl: string;
  duration: number;
  uploadedAt: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

export interface VehicleInspection {
  id: string;
  vehicleId: string;
  inspectorId: string;
  inspectionDate: string;
  status: 'pending' | 'passed' | 'failed' | 'requires_attention';
  photos: InspectionPhoto[];
  checklist: InspectionChecklistItem[];
  notes: string;
  nextInspectionDate?: string;
}

export interface InspectionPhoto {
  id: string;
  category: 'exterior' | 'interior' | 'engine' | 'tires' | 'damage';
  url: string;
  description: string;
  timestamp: string;
}

export interface InspectionChecklistItem {
  id: string;
  name: string;
  category: string;
  status: 'pass' | 'fail' | 'attention';
  notes?: string;
  photos?: string[];
}

export interface CommunityRating {
  id: string;
  userId: string;
  targetId: string; // Vehicle or User ID
  targetType: 'vehicle' | 'user';
  rating: number;
  categories: {
    cleanliness: number;
    communication: number;
    reliability: number;
    value: number;
    overall: number;
  };
  review: string;
  photos?: string[];
  helpful: number;
  reported: boolean;
  createdAt: string;
}

export interface VerifiedBadge {
  id: string;
  userId: string;
  type: 'identity' | 'driver_license' | 'address' | 'phone' | 'email' | 'vehicle_owner' | 'frequent_renter';
  level: 'bronze' | 'silver' | 'gold' | 'platinum';
  verifiedAt: string;
  expiresAt?: string;
  verifiedBy: string;
  description: string;
  benefits: string[];
}

export interface SocialMediaVerification {
  platform: 'facebook' | 'linkedin' | 'twitter' | 'instagram';
  profileUrl: string;
  verified: boolean;
  verifiedAt?: string;
  profileData: {
    name: string;
    email?: string;
    profilePicture?: string;
    followers?: number;
    verified: boolean;
  };
}

class VerificationService {
  private readonly API_BASE_URL = process.env.VITE_API_URL || 'http://localhost:5000/api';

  /**
   * Submit verification request
   */
  async submitVerificationRequest(request: Omit<VerificationRequest, 'id' | 'submittedAt' | 'status'>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(request)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Verification Submitted',
          'Your verification request has been submitted and is under review.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error submitting verification request:', error);
      throw error;
    }
  }

  /**
   * Upload verification document
   */
  async uploadVerificationDocument(
    file: File,
    type: string,
    description: string
  ): Promise<VerificationDocument> {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('type', type);
      formData.append('description', description);

      const response = await fetch(`${this.API_BASE_URL}/verification/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: formData
      });

      const data = await response.json();
      return data.document;
    } catch (error) {
      console.error('Error uploading verification document:', error);
      throw error;
    }
  }

  /**
   * Get verification status
   */
  async getVerificationStatus(): Promise<VerificationRequest[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/status`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.verifications || [];
    } catch (error) {
      console.error('Error getting verification status:', error);
      return [];
    }
  }

  /**
   * Submit video verification
   */
  async submitVideoVerification(
    videoFile: File,
    type: 'identity' | 'vehicle_inspection' | 'testimonial',
    description: string
  ): Promise<VideoVerification> {
    try {
      const formData = new FormData();
      formData.append('video', videoFile);
      formData.append('type', type);
      formData.append('description', description);

      const response = await fetch(`${this.API_BASE_URL}/verification/video`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: formData
      });

      const data = await response.json();
      return data.verification;
    } catch (error) {
      console.error('Error submitting video verification:', error);
      throw error;
    }
  }

  /**
   * Get video verifications
   */
  async getVideoVerifications(): Promise<VideoVerification[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/videos`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.verifications || [];
    } catch (error) {
      console.error('Error getting video verifications:', error);
      return [];
    }
  }

  /**
   * Create vehicle inspection
   */
  async createVehicleInspection(
    _vehicleId: string,
    inspectionData: Omit<VehicleInspection, 'id' | 'inspectorId' | 'inspectionDate' | 'status'>
  ): Promise<VehicleInspection> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/inspections`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          ...inspectionData
        })
      });

      const data = await response.json();
      return data.inspection;
    } catch (error) {
      console.error('Error creating vehicle inspection:', error);
      throw error;
    }
  }

  /**
   * Get vehicle inspections
   */
  async getVehicleInspections(vehicleId?: string): Promise<VehicleInspection[]> {
    try {
      const url = vehicleId 
        ? `${this.API_BASE_URL}/verification/inspections?vehicleId=${vehicleId}`
        : `${this.API_BASE_URL}/verification/inspections`;
        
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.inspections || [];
    } catch (error) {
      console.error('Error getting vehicle inspections:', error);
      return [];
    }
  }

  /**
   * Submit community rating
   */
  async submitCommunityRating(rating: Omit<CommunityRating, 'id' | 'createdAt' | 'helpful' | 'reported'>): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/ratings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(rating)
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Rating Submitted',
          'Thank you for your feedback! Your rating helps improve the community.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error submitting community rating:', error);
      throw error;
    }
  }

  /**
   * Get community ratings
   */
  async getCommunityRatings(targetId: string, targetType: 'vehicle' | 'user'): Promise<CommunityRating[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/ratings?targetId=${targetId}&targetType=${targetType}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.ratings || [];
    } catch (error) {
      console.error('Error getting community ratings:', error);
      return [];
    }
  }

  /**
   * Get verified badges
   */
  async getVerifiedBadges(userId?: string): Promise<VerifiedBadge[]> {
    try {
      const url = userId 
        ? `${this.API_BASE_URL}/verification/badges?userId=${userId}`
        : `${this.API_BASE_URL}/verification/badges`;
        
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.badges || [];
    } catch (error) {
      console.error('Error getting verified badges:', error);
      return [];
    }
  }

  /**
   * Link social media account
   */
  async linkSocialMediaAccount(
    platform: 'facebook' | 'linkedin' | 'twitter' | 'instagram',
    profileUrl: string
  ): Promise<SocialMediaVerification> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/social`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          platform,
          profileUrl
        })
      });

      const data = await response.json();
      return data.verification;
    } catch (error) {
      console.error('Error linking social media account:', error);
      throw error;
    }
  }

  /**
   * Get social media verifications
   */
  async getSocialMediaVerifications(): Promise<SocialMediaVerification[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/social`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.verifications || [];
    } catch (error) {
      console.error('Error getting social media verifications:', error);
      return [];
    }
  }

  /**
   * Report inappropriate content
   */
  async reportContent(
    targetId: string,
    targetType: 'rating' | 'review' | 'user' | 'vehicle',
    reason: string,
    description: string
  ): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/report`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          targetId,
          targetType,
          reason,
          description
        })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Report Submitted',
          'Your report has been submitted and will be reviewed by our team.',
          'info'
        );
      }

      return data;
    } catch (error) {
      console.error('Error reporting content:', error);
      throw error;
    }
  }

  /**
   * Get verification analytics
   */
  async getVerificationAnalytics(): Promise<any> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/verification/analytics`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting verification analytics:', error);
      return {};
    }
  }

  /**
   * Calculate trust score
   */
  calculateTrustScore(verifications: VerificationRequest[], badges: VerifiedBadge[], ratings: CommunityRating[]): number {
    let score = 0;
    let maxScore = 100;

    // Verification points (40% of total score)
    const verificationTypes = ['identity', 'driver_license', 'address', 'phone', 'email'];
    const verifiedTypes = verifications
      .filter(v => v.status === 'approved')
      .map(v => v.type);
    
    score += (verifiedTypes.length / verificationTypes.length) * 40;

    // Badge points (30% of total score)
    const badgePoints = badges.reduce((total, badge) => {
      const points = { bronze: 5, silver: 10, gold: 15, platinum: 20 };
      return total + (points[badge.level] || 0);
    }, 0);
    
    score += Math.min(badgePoints / 20, 30); // Cap at 30 points

    // Rating points (30% of total score)
    if (ratings.length > 0) {
      const averageRating = ratings.reduce((sum, rating) => sum + rating.rating, 0) / ratings.length;
      score += (averageRating / 5) * 30;
    }

    return Math.round(Math.min(score, maxScore));
  }

  /**
   * Get trust level
   */
  getTrustLevel(trustScore: number): 'low' | 'medium' | 'high' | 'excellent' {
    if (trustScore >= 90) return 'excellent';
    if (trustScore >= 70) return 'high';
    if (trustScore >= 50) return 'medium';
    return 'low';
  }

  /**
   * Get verification requirements
   */
  getVerificationRequirements(userType: 'renter' | 'host'): string[] {
    const baseRequirements = [
      'Email verification',
      'Phone number verification',
      'Identity document'
    ];

    if (userType === 'renter') {
      return [
        ...baseRequirements,
        'Driver\'s license',
        'Address verification'
      ];
    } else {
      return [
        ...baseRequirements,
        'Vehicle ownership documents',
        'Insurance documents',
        'Vehicle inspection'
      ];
    }
  }

  /**
   * Check if user is fully verified
   */
  isFullyVerified(verifications: VerificationRequest[], userType: 'renter' | 'host'): boolean {
    const requirements = this.getVerificationRequirements(userType);
    const approvedTypes = verifications
      .filter(v => v.status === 'approved')
      .map(v => v.type);

    return requirements.every(req => 
      approvedTypes.some(type => type.includes(req.toLowerCase().replace(/\s+/g, '_')))
    );
  }
}

export const verificationService = new VerificationService();
