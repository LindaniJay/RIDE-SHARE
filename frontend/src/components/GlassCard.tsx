import React from 'react';
import Glassmorphism from './Glassmorphism';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  icon,
  hover = true
}) => {
  return (
    <Glassmorphism 
      variant="card" 
      className={`rounded-2xl p-6 ${hover ? 'hover:scale-105' : ''} ${className}`}
      shadow={true}
    >
      {(title || subtitle || icon) && (
        <div className="flex items-center mb-4">
          {icon && (
            <div className="w-12 h-12 bg-white/20 dark:bg-white/10 rounded-xl flex items-center justify-center mr-4">
              {icon}
            </div>
          )}
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-white dark:text-white mb-1">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-white/70 dark:text-white/60 text-sm">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
      {children}
    </Glassmorphism>
  );
};

export default GlassCard;
