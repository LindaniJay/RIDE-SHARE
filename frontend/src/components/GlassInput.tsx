import React from 'react';

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'search' | 'password';
}

const GlassInput: React.FC<GlassInputProps> = ({
  label,
  error,
  icon,
  variant = 'default',
  className = '',
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'search':
        return 'bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 focus:border-white/40 dark:focus:border-white/20';
      case 'password':
        return 'bg-white/8 dark:bg-white/4 backdrop-blur-md border border-white/15 dark:border-white/8 focus:border-white/30 dark:focus:border-white/15';
      default:
        return 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 focus:border-white/40 dark:focus:border-white/20';
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-white/60 dark:text-white/40">
              {icon}
            </span>
          </div>
        )}
        <input
          className={`
            w-full px-4 py-3 rounded-xl text-white placeholder-white/50 dark:placeholder-white/40
            focus:outline-none focus:ring-2 focus:ring-white/20 dark:focus:ring-white/10
            transition-all duration-300 ease-in-out
            ${icon ? 'pl-10' : ''}
            ${getVariantStyles()}
            ${error ? 'border-red-400 dark:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-red-400 dark:text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

export default GlassInput;

