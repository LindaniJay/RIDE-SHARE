import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../utils/cn';

interface AdaptiveGlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  hover?: boolean;
  variant?: 'adaptive' | 'contrast' | 'standard';
}

const AdaptiveGlassCard: React.FC<AdaptiveGlassCardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  icon,
  hover = true,
  variant = 'adaptive'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isLightBackground, setIsLightBackground] = useState(false);

  useEffect(() => {
    const checkBackgroundBrightness = () => {
      if (!cardRef.current) return;

      // Get the computed style of the element
      const computedStyle = window.getComputedStyle(cardRef.current);
      const backgroundColor = computedStyle.backgroundColor;
      
      // Parse RGB values
      const rgbMatch = backgroundColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (rgbMatch) {
        const [, r, g, b] = rgbMatch.map(Number);
        // Calculate brightness using luminance formula
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        setIsLightBackground(brightness > 0.5);
      }
    };

    checkBackgroundBrightness();
    
    // Recheck on resize or scroll
    window.addEventListener('resize', checkBackgroundBrightness);
    window.addEventListener('scroll', checkBackgroundBrightness);
    
    return () => {
      window.removeEventListener('resize', checkBackgroundBrightness);
      window.removeEventListener('scroll', checkBackgroundBrightness);
    };
  }, []);

  const getVariantClasses = () => {
    switch (variant) {
      case 'contrast':
        return 'glass-card-contrast';
      case 'standard':
        return 'glass-card';
      default:
        return 'glass-card-adaptive';
    }
  };

  const getTextClasses = () => {
    if (variant === 'contrast') {
      return 'text-adaptive-dark';
    }
    return isLightBackground ? 'text-adaptive-light' : 'text-adaptive';
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        getVariantClasses(),
        'rounded-2xl p-6 transition-all duration-300',
        hover && 'hover:scale-105',
        className
      )}
    >
      {(title || subtitle || icon) && (
        <div className="flex items-center mb-4">
          {icon && (
            <div className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm border',
              isLightBackground 
                ? 'bg-gray-800/20 border-gray-700/30' 
                : 'bg-white/20 border-white/30'
            )}>
              {icon}
            </div>
          )}
          <div>
            {title && (
              <h3 className={cn(
                'text-lg font-semibold mb-1',
                getTextClasses()
              )}>
                {title}
              </h3>
            )}
            {subtitle && (
              <p className={cn(
                'text-sm opacity-90',
                getTextClasses()
              )}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      <div className={getTextClasses()}>
        {children}
      </div>
    </div>
  );
};

export default AdaptiveGlassCard;
