const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server'); // Or your actual Express export

describe('GET /api/visitors', () => {
  it('should return the visitor count', async () => {
    const res = await request(app).get('/api/visitors');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('count');
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
