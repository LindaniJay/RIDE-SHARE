import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { fabVariants } from '../utils/motionVariants';

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  className?: string;
  children?: React.ReactNode;
  tooltip?: string;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon = 'Plus',
  variant = 'primary',
  size = 'md',
  position = 'bottom-right',
  className = '',
  children,
  tooltip
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500/20 hover:bg-primary-500/30 text-white border-primary-500/30 hover:border-primary-500/50 shadow-glow';
      case 'secondary':
        return 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30';
      case 'accent':
        return 'bg-accent-500/20 hover:bg-accent-500/30 text-white border-accent-500/30 hover:border-accent-500/50 shadow-glow-gold';
      default:
        return 'bg-primary-500/20 hover:bg-primary-500/30 text-white border-primary-500/30 hover:border-primary-500/50 shadow-glow';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'w-12 h-12';
      case 'md':
        return 'w-14 h-14';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-14 h-14';
    }
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom-right':
        return 'bottom-4 right-4';
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'top-left':
        return 'top-4 left-4';
      default:
        return 'bottom-4 right-4';
    }
  };

  const buttonClasses = `
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${getPositionStyles()}
    fixed z-50
    glass-4
    backdrop-blur-md
    border
    rounded-full
    flex
    items-center
    justify-center
    transition-all
    duration-300
    ease-in-out
    relative
    overflow-hidden
    ${className}
  `;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      variants={fabVariants}
      whileHover="hover"
      whileTap="tap"
      title={tooltip}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        {children || <Icon name={icon} size="md" />}
      </div>
      
      {/* Reflection highlight */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
    </motion.button>
  );
};

export default FloatingActionButton;
