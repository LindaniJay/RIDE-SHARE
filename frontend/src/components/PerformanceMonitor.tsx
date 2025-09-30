import React, { useEffect, useState, useCallback } from 'react';
import { reportWebVitals } from '../utils/performance';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  cls: number;
  fid: number;
  fcp: number;
  lcp: number;
  ttfb: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    cls: 0,
    fid: 0,
    fcp: 0,
    lcp: 0,
    ttfb: 0
  });

  const updateMetrics = useCallback((metric: any) => {
    setMetrics(prev => ({
      ...prev,
      [metric.name]: metric.value
    }));
  }, []);

  useEffect(() => {
    // Monitor performance metrics
      const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
          setMetrics(prev => ({
            ...prev,
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            ttfb: navEntry.responseStart - navEntry.requestStart
          }));
        }
        
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              fcp: paintEntry.startTime
            }));
          }
          }
        });
      });
      
    observer.observe({ entryTypes: ['navigation', 'paint'] });

    // Monitor memory usage
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        setMetrics(prev => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1048576 // Convert to MB
        }));
      }
    };

    // Report Web Vitals
    reportWebVitals(updateMetrics);

    const interval = setInterval(checkMemory, 5000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [updateMetrics]);

  const getPerformanceColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg">Performance Metrics</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70 text-sm">Live</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">Load Time</span>
            <span className={`font-medium ${getPerformanceColor(metrics.loadTime, { good: 1000, poor: 3000 })}`}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">Memory Usage</span>
            <span className={`font-medium ${getPerformanceColor(metrics.memoryUsage, { good: 50, poor: 100 })}`}>
              {metrics.memoryUsage.toFixed(1)}MB
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">First Paint</span>
            <span className={`font-medium ${getPerformanceColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">Largest Paint</span>
            <span className={`font-medium ${getPerformanceColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">Layout Shift</span>
            <span className={`font-medium ${getPerformanceColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-white/80 text-sm">Interaction</span>
            <span className={`font-medium ${getPerformanceColor(metrics.fid, { good: 100, poor: 300 })}`}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="flex items-center justify-between">
          <span className="text-white/60 text-xs">Performance Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-500"
                style={{ 
                  width: `${Math.max(0, Math.min(100, 100 - (metrics.loadTime / 50)))}%` 
                }}
              ></div>
            </div>
            <span className="text-white/80 text-xs font-medium">
              {Math.max(0, Math.min(100, 100 - (metrics.loadTime / 50))).toFixed(0)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;
