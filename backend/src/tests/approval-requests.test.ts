import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import request from 'supertest';
import app from '../app';
import { ApprovalRequest } from '../models/ApprovalRequest';
import { User } from '../models/User';
import { createTestUser, generateTestToken } from './test-helpers';

describe('Approval Requests API', () => {
  let authToken: string;
  let testUser: User;

  beforeEach(async () => {
    // Create test user and get auth token
    testUser = await createTestUser();
    authToken = generateTestToken(testUser.id, testUser.role);
  });

  afterEach(async () => {
    // Clean up test data
    await ApprovalRequest.destroy({ where: {} });
  });

  describe('POST /api/approval-requests', () => {
    it('should create a new approval request', async () => {
      const requestData = {
        requestType: 'DocumentVerification',
        entityId: 1,
        submittedBy: 'renter',
        reviewNotes: 'Test request'
      };

      const response = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send(requestData)
        .expect(201);

      expect(response.body.success).toBe(true);
      expect(response.body.data.requestType).toBe('DocumentVerification');
    });

    it('should reject duplicate pending requests', async () => {
      // Create first request
      await ApprovalRequest.create({
        requestType: 'DocumentVerification',
        entityId: 1,
        submittedBy: 'renter',
        submittedById: testUser.id,
        status: 'Pending'
      });

      const requestData = {
        requestType: 'DocumentVerification',
        entityId: 1,
        submittedBy: 'renter'
      };

      const response = await request(app)
        .post('/api/approval-requests')
        .set('Authorization', `Bearer ${authToken}`)
        .send(requestData)
        .expect(409);

      expect(response.body.error).toContain('already exists');
    });
  });

  describe('PATCH /api/approval-requests/:id', () => {
    it('should update approval request status', async () => {
      const approvalRequest = await ApprovalRequest.create({
        requestType: 'DocumentVerification',
        entityId: 1,
        submittedBy: 'renter',
        submittedById: testUser.id,
        status: 'Pending'
      });

      const response = await request(app)
        .patch(`/api/approval-requests/${approvalRequest.id}`)
        .set('Authorization', `Bearer ${authToken}`)
        .send({ status: 'Approved', reviewNotes: 'Looks good' })
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.data.status).toBe('Approved');
    });
  });
});
