// create vehicle test -> status PENDING
import request from 'supertest';
import app from '../app';

it('creates a vehicle as pending', async () => {
  const token = await getTestTokenForRole('HOST');
  const res = await request(app)
    .post('/api/vehicles')
    .set('Authorization', `Bearer ${token}`)
    .field('title', 'Test')
    .field('pricePerDay', 100);
  expect(res.status).toBe(201);
  expect(res.body.vehicle.status).toBe('PENDING');
});

// Helper function to get test token (implement based on your auth system)
async function getTestTokenForRole(role: string): Promise<string> {
  // This would need to be implemented based on your authentication system
  // For now, return a mock token
  return 'mock-token';
}
