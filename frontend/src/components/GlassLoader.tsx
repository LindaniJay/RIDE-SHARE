import React from 'react';
import { motion } from 'framer-motion';
import { spinnerVariants, shimmerVariants } from '../utils/motionVariants';

interface GlassLoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'shimmer' | 'skeleton';
  text?: string;
  className?: string;
  animated?: boolean;
}

const GlassLoader: React.FC<GlassLoaderProps> = ({
  size = 'md',
  variant = 'spinner',
  text,
  className = '',
  animated = true
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      case 'xl':
        return 'w-16 h-16';
      default:
        return 'w-8 h-8';
    }
  };

  const getTextSize = () => {
    switch (size) {
      case 'sm':
        return 'text-xs';
      case 'md':
        return 'text-sm';
      case 'lg':
        return 'text-base';
      case 'xl':
        return 'text-lg';
      default:
        return 'text-sm';
    }
  };

  const renderSpinner = () => (
    <motion.div
      className={`
        ${getSizeStyles()}
        border-2 border-white/20 border-t-white rounded-full
        ${className}
      `}
      variants={animated ? spinnerVariants : undefined}
      animate={animated ? "animate" : undefined}
    />
  );

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-white/60 rounded-full"
          animate={animated ? {
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          } : undefined}
          transition={animated ? {
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          } : undefined}
        />
      ))}
    </div>
  );

  const renderPulse = () => (
    <motion.div
      className={`
        ${getSizeStyles()}
        bg-white/20 rounded-full
        ${className}
      `}
      animate={animated ? {
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      } : undefined}
      transition={animated ? {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      } : undefined}
    />
  );

  const renderShimmer = () => (
    <div className="relative overflow-hidden rounded-xl bg-white/10 w-full h-4">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        variants={animated ? shimmerVariants : undefined}
        animate={animated ? "animate" : undefined}
      />
    </div>
  );

  const renderSkeleton = () => (
    <div className="space-y-2">
      <div className="relative overflow-hidden rounded-xl bg-white/10 h-4">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
        />
      </div>
      <div className="relative overflow-hidden rounded-xl bg-white/10 h-3 w-3/4">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
        />
      </div>
    </div>
  );

  const renderLoader = () => {
    switch (variant) {
      case 'spinner':
        return renderSpinner();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'shimmer':
        return renderShimmer();
      case 'skeleton':
        return renderSkeleton();
      default:
        return renderSpinner();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      {renderLoader()}
      {text && (
        <motion.p
          className={`
            text-white/80 text-shadow-sm font-body
            ${getTextSize()}
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Skeleton loader for content
export const GlassSkeleton: React.FC<{
  lines?: number;
  className?: string;
  animated?: boolean;
}> = ({ lines = 3, className = '', animated = true }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="relative overflow-hidden rounded-xl bg-white/10 h-4">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
          style={{ animationDelay: `${index * 0.1}s` }}
        />
      </div>
    ))}
  </div>
);

// Card skeleton loader
export const GlassCardSkeleton: React.FC<{
  className?: string;
  animated?: boolean;
}> = ({ className = '', animated = true }) => (
  <div className={`glass-3 rounded-2xl p-6 ${className}`}>
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-white/10 rounded-xl mr-4">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
        />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-white/10 rounded w-3/4">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={animated ? shimmerVariants : undefined}
            animate={animated ? "animate" : undefined}
          />
        </div>
        <div className="h-3 bg-white/10 rounded w-1/2">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            variants={animated ? shimmerVariants : undefined}
            animate={animated ? "animate" : undefined}
          />
        </div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-white/10 rounded w-full">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
        />
      </div>
      <div className="h-3 bg-white/10 rounded w-5/6">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
          variants={animated ? shimmerVariants : undefined}
          animate={animated ? "animate" : undefined}
        />
      </div>
    </div>
  </div>
);

export default GlassLoader;
