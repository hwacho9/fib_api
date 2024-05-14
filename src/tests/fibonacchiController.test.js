// tests/fibonacciController.test.js
const request = require('supertest');
const app = require('../../app');

test('GET /fib with valid input', async () => {
    const res = await request(app).get('/fib?n=10');
    expect(res.statusCode).toEqual(200);
    expect(res.body.result).toEqual(55);
});

test('GET /fib with invalid input', async () => {
    const res = await request(app).get('/fib?n=-1');
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual('Bad request.');
});
