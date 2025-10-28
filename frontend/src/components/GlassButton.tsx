import React from 'react';
import { motion } from 'framer-motion';
import { buttonVariants } from '../utils/motionVariants';

interface GlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  animated?: boolean;
  glow?: boolean;
  fullWidth?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  animated = true,
  glow = false,
  fullWidth = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-500/20 hover:bg-primary-500/30 text-white border-primary-500/30 hover:border-primary-500/50';
      case 'secondary':
        return 'bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30';
      case 'accent':
        return 'bg-accent-500/20 hover:bg-accent-500/30 text-white border-accent-500/30 hover:border-accent-500/50';
      case 'ghost':
        return 'bg-transparent hover:bg-white/10 text-white border-white/10 hover:border-white/20';
      case 'danger':
        return 'bg-red-500/20 hover:bg-red-500/30 text-white border-red-500/30 hover:border-red-500/50';
      case 'outline':
        return 'bg-transparent hover:bg-white/10 text-white border-white/30 hover:border-white/50';
      default:
        return 'bg-primary-500/20 hover:bg-primary-500/30 text-white border-primary-500/30 hover:border-primary-500/50';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      case 'xl':
        return 'px-8 py-4 text-xl';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  const buttonClasses = `
    ${getVariantStyles()}
    ${getSizeStyles()}
    ${fullWidth ? 'w-full' : ''}
    ${glow ? 'shadow-glow' : 'shadow-glass'}
    backdrop-blur-md
    border
    rounded-xl
    font-medium
    font-heading
    transition-all
    duration-300
    ease-in-out
    relative
    overflow-hidden
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:hover:shadow-glass
    ${className}
  `;

  const ButtonComponent = animated ? motion.button : 'button';
  const buttonProps = animated ? {
    variants: buttonVariants,
    initial: 'rest',
    whileHover: disabled ? 'rest' : 'hover',
    whileTap: disabled ? 'rest' : 'tap',
    onClick: disabled ? undefined : onClick,
  } : {
    onClick: disabled ? undefined : onClick,
  };

  return (
    <ButtonComponent
      type={type}
      disabled={disabled || loading}
      className={buttonClasses}
      {...buttonProps}
    >
      {/* Shimmer effect */}
      {animated && !disabled && (
        <div className="absolute inset-0 -top-2 -left-2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full hover:translate-x-full" />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center gap-2">
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        
        {!loading && icon && iconPosition === 'left' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
        
        <span className="text-shadow-sm">{children}</span>
        
        {!loading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </div>
      
      {/* Reflection highlight */}
      {animated && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />
      )}
    </ButtonComponent>
  );
};

export default GlassButton;