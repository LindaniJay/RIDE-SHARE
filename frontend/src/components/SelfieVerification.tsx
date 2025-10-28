import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Camera, RotateCcw, CheckCircle, AlertCircle, User, Shield, Eye, EyeOff } from 'lucide-react';

export interface SelfieVerificationProps {
  onVerificationComplete: (verified: boolean, selfieData?: string) => void;
  onCancel: () => void;
  userProfile?: {
    id: string;
    firstName: string;
    lastName: string;
    profileImage?: string;
    idDocument?: string;
  };
  isRequired?: boolean;
  className?: string;
}

export interface SelfieVerificationState {
  isCapturing: boolean;
  isProcessing: boolean;
  isVerified: boolean;
  hasError: boolean;
  errorMessage: string;
  retryCount: number;
  selfieData: string | null;
  confidence: number;
}

const SelfieVerification: React.FC<SelfieVerificationProps> = ({
  onVerificationComplete,
  onCancel,
  userProfile,
  isRequired = true,
  className = ''
}) => {
  const [state, setState] = useState<SelfieVerificationState>({
    isCapturing: false,
    isProcessing: false,
    isVerified: false,
    hasError: false,
    errorMessage: '',
    retryCount: 0,
    selfieData: null,
    confidence: 0
  });

  const [showInstructions, setShowInstructions] = useState(true);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');
  const [showLivenessDetection, setShowLivenessDetection] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const maxRetries = 3;

  // Initialize camera
  const initializeCamera = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, hasError: false, errorMessage: '' }));
      
      const constraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 640 },
          height: { ideal: 480 }
        },
        audio: false
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      setCameraPermission(true);

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (error) {
      console.error('Camera initialization error:', error);
      setCameraPermission(false);
      setState(prev => ({
        ...prev,
        hasError: true,
        errorMessage: 'Camera access denied. Please allow camera access to continue.'
      }));
    }
  }, [facingMode]);

  // Capture selfie
  const captureSelfie = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setState(prev => ({ ...prev, isCapturing: true }));

    try {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const context = canvas.getContext('2d');

      if (!context) throw new Error('Canvas context not available');

      // Set canvas dimensions
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw video frame to canvas
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to base64
      const selfieData = canvas.toDataURL('image/jpeg', 0.8);
      
      setState(prev => ({ 
        ...prev, 
        selfieData,
        isCapturing: false,
        isProcessing: true 
      }));

      // Simulate verification process
      await verifySelfie(selfieData);

    } catch (error) {
      console.error('Selfie capture error:', error);
      setState(prev => ({
        ...prev,
        isCapturing: false,
        hasError: true,
        errorMessage: 'Failed to capture selfie. Please try again.'
      }));
    }
  }, []);

  // Verify selfie against profile
  const verifySelfie = useCallback(async (selfieData: string) => {
    try {
      // Simulate API call to verification service
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock verification logic (in real implementation, this would call a verification API)
      const isVerified = Math.random() > 0.3; // 70% success rate for demo
      const confidence = isVerified ? Math.random() * 0.3 + 0.7 : Math.random() * 0.6;

      setState(prev => ({
        ...prev,
        isProcessing: false,
        isVerified,
        confidence,
        hasError: !isVerified,
        errorMessage: !isVerified ? 'Selfie verification failed. Please try again.' : ''
      }));

      if (isVerified) {
        onVerificationComplete(true, selfieData);
      } else {
        setState(prev => ({ ...prev, retryCount: prev.retryCount + 1 }));
      }

    } catch (error) {
      console.error('Verification error:', error);
      setState(prev => ({
        ...prev,
        isProcessing: false,
        hasError: true,
        errorMessage: 'Verification service unavailable. Please try again.'
      }));
    }
  }, [onVerificationComplete]);

  // Retry verification
  const retryVerification = useCallback(() => {
    if (state.retryCount >= maxRetries) {
      setState(prev => ({
        ...prev,
        hasError: true,
        errorMessage: 'Maximum retry attempts reached. Please contact support.'
      }));
      return;
    }

    setState(prev => ({
      ...prev,
      hasError: false,
      errorMessage: '',
      isVerified: false,
      selfieData: null
    }));
  }, [state.retryCount, maxRetries]);

  // Switch camera
  const switchCamera = useCallback(() => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  }, []);

  // Stop camera
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Initialize camera on mount
  useEffect(() => {
    initializeCamera();
  }, [initializeCamera]);

  const canRetry = state.retryCount < maxRetries && !state.isVerified;
  const isBlocked = state.retryCount >= maxRetries;

  return (
    <div className={`selfie-verification ${className}`}>
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Identity Verification</h2>
              <p className="text-white/70 text-sm">
                {isRequired ? 'Required for booking security' : 'Optional verification'}
              </p>
            </div>
          </div>
          <button
            onClick={onCancel}
            className="p-2 text-white/60 hover:text-white/80 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${state.isVerified ? 'bg-green-400' : 'bg-white/30'}`} />
            <span className="text-sm text-white/70">Capture</span>
          </div>
          <div className="flex-1 h-px bg-white/20" />
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${state.isProcessing ? 'bg-blue-400' : state.isVerified ? 'bg-green-400' : 'bg-white/30'}`} />
            <span className="text-sm text-white/70">Verify</span>
          </div>
          <div className="flex-1 h-px bg-white/20" />
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${state.isVerified ? 'bg-green-400' : 'bg-white/30'}`} />
            <span className="text-sm text-white/70">Complete</span>
          </div>
        </div>
      </div>

      {/* Instructions */}
      {showInstructions && (
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <h3 className="text-blue-300 font-medium mb-2">Verification Instructions</h3>
              <ul className="space-y-1 text-blue-200/80 text-sm">
                <li>• Look directly at the camera</li>
                <li>• Ensure good lighting on your face</li>
                <li>• Remove glasses if possible</li>
                <li>• Keep a neutral expression</li>
                <li>• Stay still while capturing</li>
              </ul>
              <button
                onClick={() => setShowInstructions(false)}
                className="mt-2 text-blue-300 hover:text-blue-200 text-sm underline"
              >
                Hide instructions
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Camera View */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-6">
        <div className="relative">
          {cameraPermission === false ? (
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-white/70 mb-2">Camera access denied</p>
                <button
                  onClick={initializeCamera}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Retry Camera Access
                </button>
              </div>
            </div>
          ) : (
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                playsInline
                muted
              />
              
              {/* Camera Controls */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <button
                  onClick={switchCamera}
                  className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                  title="Switch camera"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setShowLivenessDetection(!showLivenessDetection)}
                  className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors"
                  title="Toggle liveness detection"
                >
                  {showLivenessDetection ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Liveness Detection Overlay */}
              {showLivenessDetection && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-2 border-green-400 rounded-full animate-pulse" />
                </div>
              )}

              {/* Capture Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <button
                  onClick={captureSelfie}
                  disabled={state.isCapturing || state.isProcessing}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Camera className="w-8 h-8 text-gray-800" />
                </button>
              </div>
            </div>
          )}

          {/* Hidden canvas for capture */}
          <canvas ref={canvasRef} className="hidden" />
        </div>

        {/* Status Messages */}
        {state.isCapturing && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-400">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span>Capturing selfie...</span>
            </div>
          </div>
        )}

        {state.isProcessing && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-400">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span>Verifying identity...</span>
            </div>
          </div>
        )}

        {state.isVerified && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span>Identity verified successfully!</span>
            </div>
            <p className="text-white/60 text-sm mt-1">
              Confidence: {Math.round(state.confidence * 100)}%
            </p>
          </div>
        )}

        {state.hasError && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span>{state.errorMessage}</span>
            </div>
            {canRetry && (
              <button
                onClick={retryVerification}
                className="mt-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                Try Again ({maxRetries - state.retryCount} attempts left)
              </button>
            )}
          </div>
        )}

        {isBlocked && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center space-x-2 text-red-400">
              <AlertCircle className="w-5 h-5" />
              <span>Verification blocked. Please contact support.</span>
            </div>
          </div>
        )}
      </div>

      {/* User Profile Info */}
      {userProfile && (
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <h3 className="text-white/90 font-medium mb-2">Verifying against profile:</h3>
          <div className="flex items-center space-x-3">
            {userProfile.profileImage ? (
              <img
                src={userProfile.profileImage}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-400" />
              </div>
            )}
            <div>
              <p className="text-white/90 font-medium">
                {userProfile.firstName} {userProfile.lastName}
              </p>
              <p className="text-white/60 text-sm">Profile ID: {userProfile.id}</p>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onCancel}
          className="px-6 py-2 bg-gray-500/20 text-gray-300 rounded-lg hover:bg-gray-500/30 transition-colors"
        >
          Cancel
        </button>
        
        {state.isVerified && (
          <button
            onClick={() => onVerificationComplete(true, state.selfieData || undefined)}
            className="px-6 py-2 bg-green-500/20 text-green-300 rounded-lg hover:bg-green-500/30 transition-colors"
          >
            Continue to Payment
          </button>
        )}
      </div>
    </div>
  );
};

export default SelfieVerification;





