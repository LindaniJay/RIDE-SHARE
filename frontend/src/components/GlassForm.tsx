import React from 'react';
import Glassmorphism from './Glassmorphism';

interface GlassFormProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

const GlassForm: React.FC<GlassFormProps> = ({
  children,
  className = '',
  title,
  subtitle,
  onSubmit
}) => {
  return (
    <Glassmorphism 
      variant="form" 
      className={`rounded-2xl p-8 ${className}`}
      shadow={true}
    >
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && (
            <h2 className="text-3xl font-bold text-white dark:text-white mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-white/70 dark:text-white/60">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        {children}
      </form>
    </Glassmorphism>
  );
};

export default GlassForm;

