import React, { useState, useEffect, useRef } from 'react';

interface CarVideoBackgroundProps {
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
  variant?: 'hero' | 'subtle' | 'minimal';
}

const CarVideoBackground: React.FC<CarVideoBackgroundProps> = ({
  className = '',
  overlay = true,
  overlayOpacity = 0.4,
  children,
  variant = 'hero'
}) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Multiple car video sources for variety
  const videoSources = [
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/456789012.sd.mp4?s=1234567890abcdef&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/789012345.sd.mp4?s=abcdef1234567890&profile_id=165&oauth2_token_id=57447761'
  ];

  // Fallback images for different variants
  const fallbackImages = {
    hero: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    subtle: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    minimal: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  };

  // Video settings based on variant
  const videoSettings = {
    hero: { opacity: 1, blur: 0, scale: 1 },
    subtle: { opacity: 0.3, blur: 2, scale: 1.1 },
    minimal: { opacity: 0.2, blur: 4, scale: 1.2 }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video && video.play) {
      video.play().catch(console.error);
    }
  }, [currentVideo]);

  // Rotate videos every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const settings = videoSettings[variant];

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
        poster={fallbackImages[variant]}
        muted
        loop
        autoPlay
        playsInline
        style={{
          opacity: settings.opacity,
          filter: `blur(${settings.blur}px)`,
          transform: `scale(${settings.scale})`
        }}
      >
        <source src={videoSources[currentVideo]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/60"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Additional gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {/* Content */}
      {children && (
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default CarVideoBackground;
