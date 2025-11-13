import { AuditLog } from '../models/AuditLog';
import { Request } from 'express';

interface AuditData {
  action: string;
  entityType: string;
  entityId: number;
  userId: string; // UUID string
  userRole: string;
  oldValues?: any;
  newValues?: any;
  req?: Request;
}

class AuditService {
  async logApprovalAction(data: AuditData) {
    try {
      await AuditLog.create({
        action: data.action,
        entityType: data.entityType,
        entityId: data.entityId,
        userId: String(data.userId),
        userRole: data.userRole,
        oldValues: data.oldValues,
        newValues: data.newValues,
        ipAddress: data.req?.ip,
        userAgent: data.req?.get('User-Agent'),
      });
    } catch (error) {
      console.error('Failed to log audit action:', error);
      // Don't throw error to avoid breaking the main flow
    }
  }

  async getAuditLogs(entityType: string, entityId: number) {
    return await AuditLog.findAll({
      where: { entityType, entityId },
      order: [['createdAt', 'DESC']]
    });
  }

  async getUserAuditLogs(userId: number, limit = 50) {
    return await AuditLog.findAll({
      where: { userId },
      order: [['createdAt', 'DESC']],
      limit
    });
  }
}

export const auditService = new AuditService();
export default auditService;
