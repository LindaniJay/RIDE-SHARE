import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';
import { cn } from '../utils/cn';

export interface DropdownOption {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

export interface GlassDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  searchable?: boolean;
}

const GlassDropdown: React.FC<GlassDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  error,
  disabled = false,
  className,
  required = false,
  searchable = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(option => option.value === value);

  const filteredOptions = searchable 
    ? options.filter(option => 
        option.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !option.disabled
      )
    : options.filter(option => !option.disabled);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(!isOpen);
    } else if (event.key === 'Escape') {
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-white/90 mb-2 text-shadow-sm">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-3 rounded-xl text-white placeholder-white/50 bg-white/10 backdrop-blur-md border transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-shadow-sm',
            error 
              ? 'border-red-400 focus:border-red-400 focus:ring-red-500/50' 
              : 'border-white/20 hover:border-white/30',
            disabled && 'opacity-50 cursor-not-allowed',
            isOpen && 'border-blue-400 ring-2 ring-blue-500/50'
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {selectedOption?.icon && (
                <Icon name={selectedOption.icon} className="h-4 w-4 text-white/70" />
              )}
              <span className={cn(
                selectedOption ? 'text-white text-shadow-sm' : 'text-white/50',
                'text-shadow-sm'
              )}>
                {selectedOption ? selectedOption.label : placeholder}
              </span>
            </div>
            <Icon 
              name="chevron-down" 
              className={cn(
                'h-4 w-4 text-white/70 transition-transform duration-200',
                isOpen && 'rotate-180'
              )} 
            />
          </div>
        </button>

        {isOpen && (
          <div className="absolute z-50 w-full mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden relative">
            {/* Enhanced readability overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/5 rounded-inherit pointer-events-none" />
            {searchable && (
              <div className="p-3 border-b border-white/10 relative z-10">
                <div className="relative">
                  <Icon name="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  <input
                    ref={searchRef}
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search options..."
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-shadow-sm"
                  />
                </div>
              </div>
            )}
            
            <div className="max-h-60 overflow-y-auto relative z-10">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleOptionClick(option.value)}
                    disabled={option.disabled}
                    className={cn(
                      'glass-dropdown-option text-shadow-sm',
                      value === option.value && 'selected',
                      option.disabled && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {option.icon && (
                      <Icon name={option.icon} className="h-4 w-4" />
                    )}
                    <span className="text-shadow-sm">{option.label}</span>
                    {value === option.value && (
                      <Icon name="check" className="h-4 w-4 text-blue-400 ml-auto" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-white/50 text-center text-shadow-sm">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-400 text-shadow-sm">{error}</p>
      )}
    </div>
  );
};

export default GlassDropdown;
