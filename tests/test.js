const request = require('supertest');
const app = require('../src/app');

beforeAll((done) => {
    server = app.listen(3000, done);  // Inicia el servidor para las pruebas
  });
  
  afterAll((done) => {
    server.close(done);  // Cierra el servidor al terminar las pruebas
  });
  

// prueba para la ruta GET '/'
describe('GET /', () => {
    it('should return Hello, World!', async () => {
        // solicitud GET a '/'
        const res = await request(app).get('/');
        // verificación de respuesta código 200
        expect(res.statusCode).toEqual(200);
        // verificación del cuerpo de la puesta
        expect(res.text).toBe('Hello, World!');
    });
});
