const request = require('supertest');
const app = require('../server'); // where Express app is exported from

describe('GET /api/visitors', () => {
  it('should return the visitor count (empty db)', async () => {
    const res = await request(app).get('/api/visitors');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
    expect(typeof res.body.count).toBe('number');
    // For a fresh DB, count should be 0 or 1 depending on logic
  });

  // Add more edge case tests here

  it('should increment visitor count', async () => {
    await request(app).get('/api/visitors');
    const res = await request(app).get('/api/visitors');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('count');
    expect(typeof res.body.count).toBe('number');
    // Check if the count has incremented
  });
});
