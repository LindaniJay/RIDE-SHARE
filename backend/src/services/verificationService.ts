import { logger } from '../utils/logger';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { createHash } from 'crypto';

export interface VerificationResult {
  success: boolean;
  confidence: number;
  message: string;
  details?: any;
}

export interface FaceMatchResult {
  isMatch: boolean;
  confidence: number;
  faceDetected: boolean;
  qualityScore: number;
}

export class VerificationService {
  private static readonly MIN_CONFIDENCE = 0.7;
  private static readonly MIN_QUALITY_SCORE = 0.6;
  private static readonly MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  /**
   * Verify selfie with ID document
   */
  static async verifySelfieWithID(
    selfiePath: string,
    idPath: string
  ): Promise<VerificationResult> {
    try {
      // Validate file existence and size
      if (!fs.existsSync(selfiePath) || !fs.existsSync(idPath)) {
        return {
          success: false,
          confidence: 0,
          message: 'Verification files not found'
        };
      }

      const selfieStats = fs.statSync(selfiePath);
      const idStats = fs.statSync(idPath);

      if (selfieStats.size > this.MAX_FILE_SIZE || idStats.size > this.MAX_FILE_SIZE) {
        return {
          success: false,
          confidence: 0,
          message: 'File size too large'
        };
      }

      // Process images for face detection
      const selfieResult = await this.processImageForFaceDetection(selfiePath);
      const idResult = await this.processImageForFaceDetection(idPath);

      if (!selfieResult.faceDetected) {
        return {
          success: false,
          confidence: 0,
          message: 'No face detected in selfie. Please ensure your face is clearly visible.',
          details: { selfieResult }
        };
      }

      if (!idResult.faceDetected) {
        return {
          success: false,
          confidence: 0,
          message: 'No face detected in ID document. Please ensure the ID photo is clear.',
          details: { idResult }
        };
      }

      // Check image quality
      if (selfieResult.qualityScore < this.MIN_QUALITY_SCORE) {
        return {
          success: false,
          confidence: 0,
          message: 'Selfie quality is too low. Please take a clearer photo.',
          details: { qualityScore: selfieResult.qualityScore }
        };
      }

      if (idResult.qualityScore < this.MIN_QUALITY_SCORE) {
        return {
          success: false,
          confidence: 0,
          message: 'ID document quality is too low. Please upload a clearer image.',
          details: { qualityScore: idResult.qualityScore }
        };
      }

      // Perform face matching
      const matchResult = await this.matchFaces(selfiePath, idPath);

      if (matchResult.confidence < this.MIN_CONFIDENCE) {
        return {
          success: false,
          confidence: matchResult.confidence,
          message: 'Face verification failed. The selfie does not match the ID document. Please try again.',
          details: matchResult
        };
      }

      return {
        success: true,
        confidence: matchResult.confidence,
        message: 'Face verification successful',
        details: {
          selfieResult,
          idResult,
          matchResult
        }
      };

    } catch (error) {
      logger.error('Error in selfie verification:', error);
      return {
        success: false,
        confidence: 0,
        message: 'Verification failed due to technical error'
      };
    }
  }

  /**
   * Process image for face detection and quality assessment
   */
  private static async processImageForFaceDetection(imagePath: string): Promise<{
    faceDetected: boolean;
    qualityScore: number;
    faceCount: number;
    imageHash: string;
  }> {
    try {
      // Read and process image
      const imageBuffer = fs.readFileSync(imagePath);
      const imageHash = createHash('md5').update(imageBuffer).digest('hex');

      // Use sharp to get image metadata and process
      const metadata = await sharp(imageBuffer).metadata();
      
      // Basic quality assessment based on image properties
      const qualityScore = this.calculateImageQuality(metadata);
      
      // Simulate face detection (in production, use a proper face detection library)
      const faceDetected = await this.simulateFaceDetection(imageBuffer);
      const faceCount = faceDetected ? 1 : 0;

      return {
        faceDetected,
        qualityScore,
        faceCount,
        imageHash
      };

    } catch (error) {
      logger.error('Error processing image for face detection:', error);
      return {
        faceDetected: false,
        qualityScore: 0,
        faceCount: 0,
        imageHash: ''
      };
    }
  }

  /**
   * Calculate image quality score
   */
  private static calculateImageQuality(metadata: any): number {
    let score = 0.5; // Base score

    // Check image dimensions
    if (metadata.width && metadata.height) {
      const totalPixels = metadata.width * metadata.height;
      if (totalPixels > 1000000) score += 0.2; // High resolution
      else if (totalPixels > 500000) score += 0.1; // Medium resolution
    }

    // Check if image is not too dark or too bright
    // This is a simplified check - in production, use proper image analysis
    if (metadata.density && metadata.density > 72) score += 0.1;

    // Check file format
    if (metadata.format === 'jpeg' || metadata.format === 'png') score += 0.1;

    return Math.min(score, 1.0);
  }

  /**
   * Simulate face detection (replace with actual face detection library)
   */
  private static async simulateFaceDetection(imageBuffer: Buffer): Promise<boolean> {
    // In production, integrate with a face detection library like:
    // - OpenCV
    // - face-api.js
    // - AWS Rekognition
    // - Google Vision API
    
    // For now, simulate based on image size and properties
    const metadata = await sharp(imageBuffer).metadata();
    
    // Basic heuristics for face detection simulation
    if (metadata.width && metadata.height) {
      const aspectRatio = metadata.width / metadata.height;
      // Human faces typically have aspect ratios between 0.7 and 1.4
      return aspectRatio >= 0.7 && aspectRatio <= 1.4 && metadata.width > 200;
    }
    
    return false;
  }

  /**
   * Match faces between two images
   */
  private static async matchFaces(
    selfiePath: string,
    idPath: string
  ): Promise<FaceMatchResult> {
    try {
      // In production, use a proper face matching library like:
      // - face-api.js with face recognition
      // - AWS Rekognition CompareFaces
      // - Google Vision API
      // - Azure Face API

      // For now, simulate face matching based on image properties
      const selfieBuffer = fs.readFileSync(selfiePath);
      const idBuffer = fs.readFileSync(idPath);

      const selfieMetadata = await sharp(selfieBuffer).metadata();
      const idMetadata = await sharp(idBuffer).metadata();

      // Simulate face matching confidence
      let confidence = 0.5; // Base confidence

      // Check if images have similar properties (simplified matching)
      if (selfieMetadata.width && idMetadata.width) {
        const widthRatio = Math.min(selfieMetadata.width, idMetadata.width) / 
                          Math.max(selfieMetadata.width, idMetadata.width);
        confidence += widthRatio * 0.3;
      }

      if (selfieMetadata.height && idMetadata.height) {
        const heightRatio = Math.min(selfieMetadata.height, idMetadata.height) / 
                            Math.max(selfieMetadata.height, idMetadata.height);
        confidence += heightRatio * 0.2;
      }

      // Add some randomness to simulate real face matching
      const randomFactor = 0.1 + Math.random() * 0.3;
      confidence += randomFactor;

      // Ensure confidence is within bounds
      confidence = Math.min(Math.max(confidence, 0), 1);

      return {
        isMatch: confidence >= this.MIN_CONFIDENCE,
        confidence,
        faceDetected: true,
        qualityScore: 0.8 // Simulated quality score
      };

    } catch (error) {
      logger.error('Error matching faces:', error);
      return {
        isMatch: false,
        confidence: 0,
        faceDetected: false,
        qualityScore: 0
      };
    }
  }

  /**
   * Verify driver's license authenticity
   */
  static async verifyDriversLicense(licensePath: string): Promise<VerificationResult> {
    try {
      if (!fs.existsSync(licensePath)) {
        return {
          success: false,
          confidence: 0,
          message: 'License file not found'
        };
      }

      const licenseStats = fs.statSync(licensePath);
      if (licenseStats.size > this.MAX_FILE_SIZE) {
        return {
          success: false,
          confidence: 0,
          message: 'License file too large'
        };
      }

      // Process license image
      const licenseResult = await this.processImageForFaceDetection(licensePath);
      
      if (!licenseResult.faceDetected) {
        return {
          success: false,
          confidence: 0,
          message: 'No face detected in driver\'s license. Please ensure the license photo is clear.',
          details: { licenseResult }
        };
      }

      if (licenseResult.qualityScore < this.MIN_QUALITY_SCORE) {
        return {
          success: false,
          confidence: 0,
          message: 'Driver\'s license quality is too low. Please upload a clearer image.',
          details: { qualityScore: licenseResult.qualityScore }
        };
      }

      // In production, add OCR to extract license information
      // and verify against government databases

      return {
        success: true,
        confidence: 0.9, // High confidence for license verification
        message: 'Driver\'s license verification successful',
        details: { licenseResult }
      };

    } catch (error) {
      logger.error('Error verifying driver\'s license:', error);
      return {
        success: false,
        confidence: 0,
        message: 'License verification failed due to technical error'
      };
    }
  }

  /**
   * Clean up temporary files
   */
  static async cleanupFiles(filePaths: string[]): Promise<void> {
    for (const filePath of filePaths) {
      try {
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          logger.info(`Cleaned up file: ${filePath}`);
        }
      } catch (error) {
        logger.error(`Error cleaning up file ${filePath}:`, error);
      }
    }
  }

  /**
   * Generate verification report
   */
  static generateVerificationReport(
    selfieResult: VerificationResult,
    idResult: VerificationResult,
    licenseResult?: VerificationResult
  ): {
    overallSuccess: boolean;
    confidence: number;
    report: string;
    recommendations: string[];
  } {
    const results = [selfieResult, idResult];
    if (licenseResult) results.push(licenseResult);

    const overallSuccess = results.every(result => result.success);
    const avgConfidence = results.reduce((sum, result) => sum + result.confidence, 0) / results.length;

    let report = 'Verification Report:\n';
    report += `Selfie Verification: ${selfieResult.success ? 'PASSED' : 'FAILED'} (${(selfieResult.confidence * 100).toFixed(1)}%)\n`;
    report += `ID Verification: ${idResult.success ? 'PASSED' : 'FAILED'} (${(idResult.confidence * 100).toFixed(1)}%)\n`;
    if (licenseResult) {
      report += `License Verification: ${licenseResult.success ? 'PASSED' : 'FAILED'} (${(licenseResult.confidence * 100).toFixed(1)}%)\n`;
    }

    const recommendations: string[] = [];
    if (!selfieResult.success) {
      recommendations.push('Please retake your selfie with better lighting and ensure your face is clearly visible');
    }
    if (!idResult.success) {
      recommendations.push('Please upload a clearer image of your ID document');
    }
    if (licenseResult && !licenseResult.success) {
      recommendations.push('Please upload a clearer image of your driver\'s license');
    }

    return {
      overallSuccess,
      confidence: avgConfidence,
      report,
      recommendations
    };
  }
}

export default VerificationService;
