import React, { useState } from 'react';
import Icon from './Icon';

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  showStrength?: boolean;
  className?: string;
  disabled?: boolean;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  placeholder = 'Enter password',
  label,
  error,
  showStrength = false,
  className = '',
  disabled = false,
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const getPasswordStrength = (password: string) => {
    if (!password) return { score: 0, label: '', color: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { score, label: 'Weak', color: 'text-red-400' };
    if (score <= 3) return { score, label: 'Fair', color: 'text-yellow-400' };
    if (score <= 4) return { score, label: 'Good', color: 'text-blue-400' };
    return { score, label: 'Strong', color: 'text-green-400' };
  };

  const strength = showStrength ? getPasswordStrength(value) : null;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full px-4 py-3 pr-12 bg-white/10 border rounded-xl text-white placeholder-white/50 
            focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300
            ${error ? 'border-red-400 focus:ring-red-500/50' : 'border-white/20 focus:border-blue-400 hover:border-white/30'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/15'}
            ${focused ? 'bg-white/15' : ''}
            backdrop-blur-md
          `}
        />
        
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors disabled:cursor-not-allowed"
        >
          <Icon name={showPassword ? 'EyeOff' : 'Eye'} size="sm" />
        </button>
      </div>

      {/* Password Strength Indicator - Compact */}
      {showStrength && value && (
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-white/10 rounded-full h-1">
            <div 
              className={`h-1 rounded-full transition-all duration-300 ${
                strength?.score <= 2 ? 'bg-red-400' :
                strength?.score <= 3 ? 'bg-yellow-400' :
                strength?.score <= 4 ? 'bg-blue-400' : 'bg-green-400'
              }`}
              style={{ width: `${(strength?.score || 0) * 20}%` }}
            />
          </div>
          <span className={`text-xs font-medium ${strength?.color}`}>
            {strength?.label}
          </span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="flex items-center space-x-1 text-red-400 text-xs">
          <Icon name="AlertCircle" size="xs" />
          <span>{error}</span>
        </div>
      )}

      {/* Password Requirements - Compact */}
      {showStrength && (
        <div className="text-xs text-white/60">
          <div className="flex flex-wrap gap-2">
            <span className={`flex items-center space-x-1 ${value.length >= 8 ? 'text-green-400' : 'text-white/40'}`}>
              <Icon name={value.length >= 8 ? 'CheckCircle' : 'Circle'} size="xs" />
              <span>8+ chars</span>
            </span>
            <span className={`flex items-center space-x-1 ${/[a-z]/.test(value) ? 'text-green-400' : 'text-white/40'}`}>
              <Icon name={/[a-z]/.test(value) ? 'CheckCircle' : 'Circle'} size="xs" />
              <span>lower</span>
            </span>
            <span className={`flex items-center space-x-1 ${/[A-Z]/.test(value) ? 'text-green-400' : 'text-white/40'}`}>
              <Icon name={/[A-Z]/.test(value) ? 'CheckCircle' : 'Circle'} size="xs" />
              <span>UPPER</span>
            </span>
            <span className={`flex items-center space-x-1 ${/[0-9]/.test(value) ? 'text-green-400' : 'text-white/40'}`}>
              <Icon name={/[0-9]/.test(value) ? 'CheckCircle' : 'Circle'} size="xs" />
              <span>123</span>
            </span>
            <span className={`flex items-center space-x-1 ${/[^A-Za-z0-9]/.test(value) ? 'text-green-400' : 'text-white/40'}`}>
              <Icon name={/[^A-Za-z0-9]/.test(value) ? 'CheckCircle' : 'Circle'} size="xs" />
              <span>!@#</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
