import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  height?: string;
  width?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = '', 
  lines = 1, 
  height = 'h-4', 
  width = 'w-full' 
}) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`bg-white/20 rounded ${height} ${width} ${
            index < lines - 1 ? 'mb-2' : ''
          }`}
        />
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
    <div className="animate-pulse">
      <div className="bg-white/20 rounded h-6 w-3/4 mb-4"></div>
      <div className="bg-white/20 rounded h-4 w-1/2 mb-2"></div>
      <div className="bg-white/20 rounded h-4 w-2/3"></div>
    </div>
  </div>
);

export const DashboardSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Array.from({ length: 3 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <CardSkeleton />
      <CardSkeleton />
    </div>
  </div>
);

export const TableSkeleton: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, index) => (
      <div key={index} className="animate-pulse">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded h-12 w-12"></div>
            <div className="flex-1 space-y-2">
              <div className="bg-white/20 rounded h-4 w-3/4"></div>
              <div className="bg-white/20 rounded h-3 w-1/2"></div>
            </div>
            <div className="bg-white/20 rounded h-6 w-16"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
