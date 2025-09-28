import React from 'react';

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  loading?: boolean;
  gradient?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  loading = false,
  gradient = false,
  className = '',
  children,
  disabled,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return gradient 
          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 text-white border border-white/30'
          : 'bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white border border-white/30';
      case 'secondary':
        return 'bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white border border-white/20';
      case 'outline':
        return 'bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-white border border-white/30 hover:border-white/50';
      case 'ghost':
        return 'bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-white border-none';
      default:
        return 'bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 text-white border border-white/30';
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-3 text-base';
      case 'lg':
        return 'px-6 py-4 text-lg';
      default:
        return 'px-4 py-3 text-base';
    }
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-xl font-medium
        backdrop-blur-md transition-all duration-300 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2" />
      ) : icon ? (
        <span className="mr-2">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default GlassButton;

