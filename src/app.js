const express = require('express');
const app = express(); // Variable app

app.get('/', (req, res) => {  // Ruta GET
    res.send('Hello, World!'); // Respuesta GET
});

const port = process.env.PORT || 3003; // Puerto
app.listen(port, () => {    // Inicia servidor
    console.log(`Server running on port ${port}`);
});
const timeoutDuration = 5000; // Duración en milisegundos (5 segundos)
setTimeout(() => {
    server.close(() => {
        console.log('Server closed after timeout');
    });
}, timeoutDuration);
module.exports = app;   // Exporta app
