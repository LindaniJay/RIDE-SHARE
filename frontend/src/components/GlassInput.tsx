import React, { forwardRef } from 'react';
import Icon from './Icon';
import { cn } from '../utils/cn';

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: string;
  rightIcon?: string;
  icon?: string; // Alias for leftIcon for backward compatibility
  required?: boolean;
  variant?: 'default' | 'error' | 'success';
}

const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({
    className,
    label,
    error,
    helperText,
    leftIcon,
    rightIcon,
    icon,
    required = false,
    variant = 'default',
    id,
    ...props
  }, ref) => {
    const effectiveLeftIcon = leftIcon || icon;
    const inputId = id || `glass-input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;
    const finalVariant = hasError ? 'error' : variant;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-white/90 mb-2"
          >
            {label}
            {required && <span className="text-red-400 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          {effectiveLeftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon name={effectiveLeftIcon} className="h-4 w-4 text-white/70" />
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={cn(
              'w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-white/10 backdrop-blur-md border transition-all duration-300 ease-in-out focus:outline-none',
              effectiveLeftIcon && 'pl-10',
              rightIcon && 'pr-10',
              finalVariant === 'error' && 'border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-500/50',
              finalVariant === 'success' && 'border-green-400 focus:border-green-400 focus:ring-2 focus:ring-green-500/50',
              finalVariant === 'default' && 'border-white/20 hover:border-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/50',
              props.disabled && 'opacity-50 cursor-not-allowed',
              className
            )}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <Icon name={rightIcon} className="h-4 w-4 text-white/70" />
            </div>
          )}
        </div>

        {error && (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-red-400">
            {error}
          </p>
        )}
        
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-white/60">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

GlassInput.displayName = 'GlassInput';

export default GlassInput;