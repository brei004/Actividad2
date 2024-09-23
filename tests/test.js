const request = require('supertest');
const app = require('../src/app');
let server;
let address;

beforeAll((done) => {
  server = app.listen(0, () => {
    address = server.address();
    done();
  });
});

afterAll((done) => {
  server.close(done);  // Cierra el servidor al terminar las pruebas
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, World!');
  });
});
