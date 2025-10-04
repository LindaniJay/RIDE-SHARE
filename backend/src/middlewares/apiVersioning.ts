import { Request, Response, NextFunction } from 'express';

// API versioning middleware
export const apiVersioning = (req: Request, res: Response, next: NextFunction) => {
  // Extract version from URL path
  const versionMatch = req.path.match(/^\/api\/v(\d+)\//);
  const version = versionMatch ? parseInt(versionMatch[1]) : 1;
  
  // Add version to request object
  (req as any).apiVersion = version;
  
  // Set version header
  res.setHeader('API-Version', `v${version}`);
  
  next();
};

// Standardized response format
export const standardizeResponse = (req: Request, res: Response, next: NextFunction) => {
  const originalJson = res.json;
  
  res.json = function(data: any) {
    const version = (req as any).apiVersion || 1;
    
    // Standardize response format based on version
    if (version === 1) {
      // Legacy format
      return originalJson.call(this, data);
    } else {
      // Enhanced format for v2+
      const standardizedData = {
        success: res.statusCode < 400,
        version: `v${version}`,
        timestamp: new Date().toISOString(),
        data: data,
        ...(res.statusCode >= 400 && { error: data.error || 'Unknown error' })
      };
      
      return originalJson.call(this, standardizedData);
    }
  };
  
  next();
};

// API deprecation warnings
export const deprecationWarning = (version: number, sunsetDate?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const currentVersion = (req as any).apiVersion || 1;
    
    if (currentVersion < version) {
      const warning = {
        warning: 'API version deprecated',
        currentVersion: `v${currentVersion}`,
        recommendedVersion: `v${version}`,
        ...(sunsetDate && { sunsetDate })
      };
      
      res.setHeader('X-API-Deprecation', JSON.stringify(warning));
    }
    
    next();
  };
};
