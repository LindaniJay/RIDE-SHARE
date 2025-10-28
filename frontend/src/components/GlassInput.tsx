import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { formFieldVariants } from '../utils/motionVariants';

interface GlassInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
  disabled?: boolean;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'floating' | 'outlined';
  className?: string;
  animated?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  title?: string;
  id?: string;
  name?: string;
  min?: string;
  max?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const GlassInput: React.FC<GlassInputProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  error,
  success,
  icon,
  iconPosition = 'left',
  size = 'md',
  variant = 'default',
  className = '',
  animated = true,
  required = false,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  title,
  id,
  name,
  min,
  max,
  onKeyPress
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'md':
        return 'px-4 py-3 text-base';
      case 'lg':
        return 'px-5 py-4 text-lg';
      default:
        return 'px-4 py-3 text-base';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'floating':
        return 'bg-transparent border-0 border-b-2 border-white/20 focus:border-primary-500 rounded-none';
      case 'outlined':
        return 'bg-transparent border-2 border-white/20 focus:border-primary-500 rounded-xl';
      default:
        return 'glass-2 border border-white/20 focus:border-primary-500/50 rounded-xl';
    }
  };

  const getStatusStyles = () => {
    if (error) return 'border-red-500/50 focus:border-red-500';
    if (success) return 'border-green-500/50 focus:border-green-500';
    return '';
  };

  const inputClasses = `
    ${getSizeStyles()}
    ${getVariantStyles()}
    ${getStatusStyles()}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    text-white
    placeholder-white/50
    backdrop-blur-md
    transition-all
    duration-300
    ease-in-out
    w-full
    focus:outline-none
    focus:ring-2
    focus:ring-primary-500/20
    ${className}
  `;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setHasValue(!!newValue);
    onChange?.(newValue);
  };

  const InputComponent = animated ? motion.input : 'input';
  const inputProps = animated ? {
    variants: formFieldVariants,
    animate: isFocused ? "focus" : "blur",
  } : {};

  return (
    <div className="relative">
      {/* Floating label */}
      {variant === 'floating' && label && (
        <motion.label
          className={`
            absolute left-4 transition-all duration-300 ease-in-out pointer-events-none
            ${isFocused || hasValue 
              ? 'top-1 text-xs text-primary-400' 
              : 'top-1/2 -translate-y-1/2 text-white/70'
            }
          `}
          animate={{
            y: isFocused || hasValue ? -8 : 0,
            scale: isFocused || hasValue ? 0.85 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </motion.label>
      )}

      {/* Regular label */}
      {variant !== 'floating' && label && (
        <label className="block text-white text-sm font-medium mb-2 text-shadow-sm">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Input container */}
      <div className="relative">
        {/* Left icon */}
        {icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
            {icon}
          </div>
        )}

        {/* Input field */}
        <InputComponent
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={onKeyPress}
          placeholder={variant === 'floating' ? '' : placeholder}
          disabled={disabled}
          required={required}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          title={title}
          min={min}
          max={max}
          className={`
            ${inputClasses}
            ${icon && iconPosition === 'left' ? 'pl-10' : ''}
            ${icon && iconPosition === 'right' ? 'pr-10' : ''}
          `}
          {...inputProps}
        />

        {/* Right icon */}
        {icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50">
            {icon}
          </div>
        )}

        {/* Focus indicator */}
        {animated && isFocused && (
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary-500/50 pointer-events-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>

      {/* Status messages */}
      <div className="mt-2 min-h-[1.25rem]">
        {error && (
          <motion.p
            className="text-red-400 text-sm text-shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            className="text-green-400 text-sm text-shadow-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {success}
          </motion.p>
        )}
      </div>

      {/* Shimmer effect on focus */}
      {animated && isFocused && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-primary-500/10 to-transparent opacity-0 animate-shimmer pointer-events-none" />
      )}
    </div>
  );
};

export default GlassInput;