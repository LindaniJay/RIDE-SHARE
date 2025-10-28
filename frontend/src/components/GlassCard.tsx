import React from 'react';
import { motion } from 'framer-motion';
import { glassCardVariants } from '../utils/motionVariants';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  hover?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  gradient?: boolean;
  glow?: boolean;
  animated?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  icon,
  level = 3,
  hover = true,
  clickable = false,
  onClick,
  gradient = false,
  glow = false,
  animated = true
}) => {
  const getGlassLevel = () => {
    switch (level) {
      case 1: return 'glass-1';
      case 2: return 'glass-2';
      case 3: return 'glass-3';
      case 4: return 'glass-4';
      case 5: return 'glass-5';
      default: return 'glass-3';
    }
  };

  const cardClasses = `
    ${getGlassLevel()}
    rounded-2xl p-6
    ${hover ? 'hover:scale-105 hover:shadow-glass-lg' : ''}
    ${clickable ? 'cursor-pointer' : ''}
    ${glow ? 'shadow-glow' : 'shadow-glass'}
    ${gradient ? 'bg-gradient-to-br from-white/20 to-white/10' : ''}
    transition-all duration-300 ease-in-out
    relative overflow-hidden
    ${className}
  `;

  const CardComponent = animated ? motion.div : 'div';
  const cardProps = animated ? {
    variants: glassCardVariants,
    initial: "rest",
    whileHover: hover ? "hover" : "rest",
    whileTap: clickable ? "tap" : undefined,
    onClick: clickable ? onClick : undefined,
  } : {};

  return (
    <CardComponent
      className={cardClasses}
      {...cardProps}
    >
      {/* Shimmer effect overlay */}
      {animated && (
        <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
      )}
      
      {/* Content with improved text styling */}
      <div className="relative z-10">
        {(title || subtitle || icon) && (
          <div className="flex items-center mb-4">
            {icon && (
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4 backdrop-blur-sm border border-white/30 shadow-lg">
                {icon}
              </div>
            )}
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-white mb-1 text-shadow-md font-heading">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-white/90 text-sm text-shadow-sm font-body">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
        
        <div className="text-shadow-sm font-body">
          {children}
        </div>
      </div>
      
      {/* Reflection highlight */}
      {animated && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
      )}
    </CardComponent>
  );
};

export default GlassCard;
