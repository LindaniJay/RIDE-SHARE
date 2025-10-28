import { notificationService } from './notificationService';

export interface CDNConfiguration {
  enabled: boolean;
  provider: 'cloudflare' | 'aws' | 'azure' | 'google';
  domains: string[];
  cacheSettings: {
    staticAssets: number; // TTL in seconds
    images: number;
    apiResponses: number;
  };
  optimization: {
    imageCompression: boolean;
    minification: boolean;
    gzip: boolean;
    brotli: boolean;
  };
}

export interface CacheConfiguration {
  redis: {
    enabled: boolean;
    host: string;
    port: number;
    password?: string;
    ttl: number;
  };
  memory: {
    enabled: boolean;
    maxSize: number; // MB
    ttl: number;
  };
  strategies: {
    userSessions: 'redis' | 'memory';
    vehicleData: 'redis' | 'memory';
    searchResults: 'redis' | 'memory';
    analytics: 'redis' | 'memory';
  };
}

export interface DatabaseOptimization {
  indexes: Array<{
    table: string;
    columns: string[];
    type: 'btree' | 'hash' | 'gin' | 'gist';
    unique: boolean;
  }>;
  queries: Array<{
    query: string;
    executionTime: number;
    optimization: string;
    status: 'optimized' | 'needs_optimization' | 'critical';
  }>;
  connections: {
    max: number;
    current: number;
    idle: number;
    active: number;
  };
  performance: {
    averageQueryTime: number;
    slowQueries: number;
    cacheHitRatio: number;
  };
}

export interface RealTimeAnalytics {
  metrics: {
    activeUsers: number;
    concurrentBookings: number;
    systemLoad: number;
    responseTime: number;
    errorRate: number;
  };
  events: Array<{
    id: string;
    type: 'user_action' | 'system_event' | 'error' | 'performance';
    timestamp: string;
    data: any;
    severity: 'low' | 'medium' | 'high' | 'critical';
  }>;
  alerts: Array<{
    id: string;
    type: 'performance' | 'error' | 'security' | 'capacity';
    message: string;
    severity: 'info' | 'warning' | 'error' | 'critical';
    timestamp: string;
    resolved: boolean;
  }>;
}

export interface MicroserviceHealth {
  service: string;
  status: 'healthy' | 'degraded' | 'down';
  responseTime: number;
  uptime: number;
  lastCheck: string;
  dependencies: Array<{
    service: string;
    status: 'healthy' | 'degraded' | 'down';
    responseTime: number;
  }>;
}

export interface PerformanceMetrics {
  frontend: {
    pageLoadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  };
  backend: {
    averageResponseTime: number;
    p95ResponseTime: number;
    p99ResponseTime: number;
    throughput: number;
    errorRate: number;
  };
  database: {
    queryTime: number;
    connectionPool: number;
    cacheHitRatio: number;
    slowQueries: number;
  };
}

class TechnicalService {
  private readonly API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

  /**
   * CDN Management
   */
  async getCDNConfiguration(): Promise<CDNConfiguration> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/cdn`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.configuration;
    } catch (error) {
      console.error('Error getting CDN configuration:', error);
      return {
        enabled: false,
        provider: 'cloudflare',
        domains: [],
        cacheSettings: {
          staticAssets: 86400,
          images: 604800,
          apiResponses: 300
        },
        optimization: {
          imageCompression: true,
          minification: true,
          gzip: true,
          brotli: true
        }
      };
    }
  }

  async updateCDNConfiguration(config: CDNConfiguration): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/technical/cdn`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(config)
      });

      await notificationService.showSystemNotification(
        'CDN Configuration Updated',
        'CDN settings have been updated successfully.',
        'info'
      );
    } catch (error) {
      console.error('Error updating CDN configuration:', error);
      throw error;
    }
  }

  /**
   * Cache Management
   */
  async getCacheConfiguration(): Promise<CacheConfiguration> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/cache`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.configuration;
    } catch (error) {
      console.error('Error getting cache configuration:', error);
      return {
        redis: {
          enabled: false,
          host: 'localhost',
          port: 6379,
          ttl: 3600
        },
        memory: {
          enabled: true,
          maxSize: 100,
          ttl: 1800
        },
        strategies: {
          userSessions: 'redis',
          vehicleData: 'memory',
          searchResults: 'redis',
          analytics: 'redis'
        }
      };
    }
  }

  async updateCacheConfiguration(config: CacheConfiguration): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/technical/cache`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(config)
      });

      await notificationService.showSystemNotification(
        'Cache Configuration Updated',
        'Cache settings have been updated successfully.',
        'info'
      );
    } catch (error) {
      console.error('Error updating cache configuration:', error);
      throw error;
    }
  }

  async clearCache(type: 'all' | 'user' | 'vehicle' | 'search' | 'analytics'): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/technical/cache/clear`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ type })
      });

      await notificationService.showSystemNotification(
        'Cache Cleared',
        `${type} cache has been cleared successfully.`,
        'info'
      );
    } catch (error) {
      console.error('Error clearing cache:', error);
      throw error;
    }
  }

  /**
   * Database Optimization
   */
  async getDatabaseOptimization(): Promise<DatabaseOptimization> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/database`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.optimization;
    } catch (error) {
      console.error('Error getting database optimization:', error);
      return {
        indexes: [],
        queries: [],
        connections: {
          max: 100,
          current: 0,
          idle: 0,
          active: 0
        },
        performance: {
          averageQueryTime: 0,
          slowQueries: 0,
          cacheHitRatio: 0
        }
      };
    }
  }

  async optimizeDatabase(): Promise<void> {
    try {
      await fetch(`${this.API_BASE_URL}/technical/database/optimize`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      await notificationService.showSystemNotification(
        'Database Optimization',
        'Database optimization has been completed.',
        'info'
      );
    } catch (error) {
      console.error('Error optimizing database:', error);
      throw error;
    }
  }

  /**
   * Real-time Analytics
   */
  async getRealTimeAnalytics(): Promise<RealTimeAnalytics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/analytics/realtime`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.analytics;
    } catch (error) {
      console.error('Error getting real-time analytics:', error);
      return {
        metrics: {
          activeUsers: 0,
          concurrentBookings: 0,
          systemLoad: 0,
          responseTime: 0,
          errorRate: 0
        },
        events: [],
        alerts: []
      };
    }
  }

  /**
   * Microservice Health
   */
  async getMicroserviceHealth(): Promise<MicroserviceHealth[]> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/health`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.services || [];
    } catch (error) {
      console.error('Error getting microservice health:', error);
      return [];
    }
  }

  /**
   * Performance Metrics
   */
  async getPerformanceMetrics(): Promise<PerformanceMetrics> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/performance`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.metrics;
    } catch (error) {
      console.error('Error getting performance metrics:', error);
      return {
        frontend: {
          pageLoadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0
        },
        backend: {
          averageResponseTime: 0,
          p95ResponseTime: 0,
          p99ResponseTime: 0,
          throughput: 0,
          errorRate: 0
        },
        database: {
          queryTime: 0,
          connectionPool: 0,
          cacheHitRatio: 0,
          slowQueries: 0
        }
      };
    }
  }

  /**
   * System Monitoring
   */
  async getSystemStatus(): Promise<{
    overall: 'healthy' | 'degraded' | 'down';
    components: Array<{
      name: string;
      status: 'healthy' | 'degraded' | 'down';
      uptime: number;
      lastCheck: string;
    }>;
    alerts: Array<{
      id: string;
      message: string;
      severity: 'info' | 'warning' | 'error' | 'critical';
      timestamp: string;
    }>;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/status`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.status;
    } catch (error) {
      console.error('Error getting system status:', error);
      return {
        overall: 'down',
        components: [],
        alerts: []
      };
    }
  }

  /**
   * Load Testing
   */
  async runLoadTest(config: {
    duration: number; // seconds
    concurrentUsers: number;
    endpoints: string[];
  }): Promise<{
    results: {
      totalRequests: number;
      successfulRequests: number;
      failedRequests: number;
      averageResponseTime: number;
      p95ResponseTime: number;
      p99ResponseTime: number;
      throughput: number;
    };
    recommendations: string[];
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/load-test`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(config)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error running load test:', error);
      throw error;
    }
  }

  /**
   * Security Monitoring
   */
  async getSecurityMetrics(): Promise<{
    threats: Array<{
      id: string;
      type: 'ddos' | 'brute_force' | 'sql_injection' | 'xss' | 'csrf';
      severity: 'low' | 'medium' | 'high' | 'critical';
      timestamp: string;
      source: string;
      blocked: boolean;
    }>;
    securityScore: number;
    recommendations: string[];
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/security`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.security;
    } catch (error) {
      console.error('Error getting security metrics:', error);
      return {
        threats: [],
        securityScore: 100,
        recommendations: []
      };
    }
  }

  /**
   * Backup Management
   */
  async createBackup(type: 'full' | 'incremental' | 'differential'): Promise<{
    backupId: string;
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
    estimatedSize: number;
    estimatedDuration: number;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/backup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ type })
      });

      const data = await response.json();

      if (data.success) {
        await notificationService.showSystemNotification(
          'Backup Started',
          `${type} backup has been initiated.`,
          'info'
        );
      }

      return data.backup;
    } catch (error) {
      console.error('Error creating backup:', error);
      throw error;
    }
  }

  async getBackupStatus(backupId: string): Promise<{
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
    progress: number;
    size: number;
    duration: number;
    error?: string;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/backup/${backupId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.status;
    } catch (error) {
      console.error('Error getting backup status:', error);
      throw error;
    }
  }

  /**
   * Log Management
   */
  async getLogs(filters: {
    level?: 'debug' | 'info' | 'warn' | 'error';
    service?: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
  }): Promise<Array<{
    id: string;
    timestamp: string;
    level: string;
    service: string;
    message: string;
    data?: any;
  }>> {
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value.toString());
      });

      const response = await fetch(`${this.API_BASE_URL}/technical/logs?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.logs || [];
    } catch (error) {
      console.error('Error getting logs:', error);
      return [];
    }
  }

  /**
   * API Rate Limiting
   */
  async getRateLimitStatus(): Promise<{
    limits: Array<{
      endpoint: string;
      limit: number;
      remaining: number;
      resetTime: string;
    }>;
    usage: Array<{
      endpoint: string;
      requests: number;
      timeWindow: string;
    }>;
  }> {
    try {
      const response = await fetch(`${this.API_BASE_URL}/technical/rate-limits`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      });

      const data = await response.json();
      return data.rateLimits;
    } catch (error) {
      console.error('Error getting rate limit status:', error);
      return {
        limits: [],
        usage: []
      };
    }
  }
}

export const technicalService = new TechnicalService();
