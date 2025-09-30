import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import app from '../app';
import { ApprovalRequest } from '../models/ApprovalRequest';
import { User } from '../models/User';
import { AuditLog } from '../models/AuditLog';

describe('Approval System Integration Tests', () => {
  let authToken: string;
  let testUser: User;
  let adminToken: string;
  let adminUser: User;

  beforeEach(async () => {
    // Create test user
    testUser = await User.create({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: 'password123',
      role: 'renter'
    });

    // Create admin user
    adminUser = await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: 'password123',
      role: 'admin'
    });

    // Get auth tokens (implementation depends on your auth system)
    // authToken = await getAuthToken(testUser);
    // adminToken = await getAuthToken(adminUser);
  });

  afterEach(async () => {
    // Clean up test data
    await AuditLog.destroy({ where: {} });
    await ApprovalRequest.destroy({ where: {} });
    await User.destroy({ where: { email: ['test@example.com', 'admin@example.com'] } });
  });

  describe('Complete Approval Workflow', () => {
    it('should handle complete approval workflow from creation to completion', async () => {
      // 1. Create approval request
      const createResponse = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          requestType: 'DocumentVerification',
          entityId: testUser.id,
          submittedBy: 'renter',
          reviewNotes: 'Please verify my documents'
        })
        .expect(201);

      expect(createResponse.body.success).toBe(true);
      expect(createResponse.body.data.status).toBe('Pending');

      const requestId = createResponse.body.data.id;

      // 2. Admin approves request
      const approveResponse = await request(app)
        .patch(`/api/approval-requests/${requestId}`)
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          status: 'Approved',
          reviewNotes: 'Documents verified successfully'
        })
        .expect(200);

      expect(approveResponse.body.success).toBe(true);
      expect(approveResponse.body.data.status).toBe('Approved');

      // 3. Verify audit log was created
      const auditLogs = await AuditLog.findAll({
        where: { entityType: 'ApprovalRequest', entityId: requestId }
      });

      expect(auditLogs).toHaveLength(2); // CREATED and APPROVAL_APPROVED
      expect(auditLogs[0].action).toBe('APPROVAL_APPROVED');
      expect(auditLogs[1].action).toBe('CREATED');
    });

    it('should handle bulk approval operations', async () => {
      // Create multiple requests
      const requests = await Promise.all([
        ApprovalRequest.create({
          requestType: 'DocumentVerification',
          entityId: testUser.id,
          submittedBy: 'renter',
          submittedById: testUser.id,
          status: 'Pending'
        }),
        ApprovalRequest.create({
          requestType: 'ProfileVerification',
          entityId: testUser.id,
          submittedBy: 'renter',
          submittedById: testUser.id,
          status: 'Pending'
        })
      ]);

      const requestIds = requests.map(r => r.id);

      // Bulk approve
      const bulkResponse = await request(app)
        .patch('/api/approval-requests/bulk')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          requestIds,
          status: 'Approved',
          reviewNotes: 'Bulk approval completed'
        })
        .expect(200);

      expect(bulkResponse.body.success).toBe(true);
      expect(bulkResponse.body.data.updatedCount).toBe(2);

      // Verify all requests are approved
      const updatedRequests = await ApprovalRequest.findAll({
        where: { id: requestIds }
      });

      updatedRequests.forEach(request => {
        expect(request.status).toBe('Approved');
      });
    });

    it('should enforce rate limiting', async () => {
      // Try to create multiple requests quickly
      const promises = Array(6).fill(null).map(() =>
        request(app)
          .post('/api/approval-requests')
          .set('Authorization', `Bearer ${authToken}`)
          .send({
            requestType: 'DocumentVerification',
            entityId: testUser.id,
            submittedBy: 'renter'
          })
      );

      const responses = await Promise.all(promises);
      const rateLimitedResponses = responses.filter(r => r.status === 429);
      
      expect(rateLimitedResponses.length).toBeGreaterThan(0);
    });

    it('should handle auto-approval for eligible users', async () => {
      // Create a verified user with old account
      const verifiedUser = await User.create({
        firstName: 'Verified',
        lastName: 'User',
        email: 'verified@example.com',
        password: 'password123',
        role: 'renter',
        isEmailVerified: true,
        createdAt: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000) // 35 days ago
      });

      const response = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          requestType: 'ProfileVerification',
          entityId: verifiedUser.id,
          submittedBy: 'renter'
        })
        .expect(201);

      // Should be auto-approved
      expect(response.body.data.status).toBe('Approved');
    });
  });

  describe('Error Handling', () => {
    it('should handle invalid request data', async () => {
      const response = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          requestType: 'InvalidType',
          entityId: 'not-a-number',
          submittedBy: 'invalid-role'
        })
        .expect(400);

      expect(response.body.error).toBe('Invalid request data');
    });

    it('should prevent duplicate requests', async () => {
      // Create first request
      await ApprovalRequest.create({
        requestType: 'DocumentVerification',
        entityId: testUser.id,
        submittedBy: 'renter',
        submittedById: testUser.id,
        status: 'Pending'
      });

      // Try to create duplicate
      const response = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          requestType: 'DocumentVerification',
          entityId: testUser.id,
          submittedBy: 'renter'
        })
        .expect(409);

      expect(response.body.error).toContain('already exists');
    });
  });
});
