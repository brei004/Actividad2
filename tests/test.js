const request = require('supertest');
const app = require('../src/app');
let server;

beforeAll((done) => {
  server = app.listen(3000, () => {  // Inicia el servidor en el puerto 3000
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
