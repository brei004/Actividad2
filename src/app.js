const express = require('express');
const app = express(); // Variable app

app.get('/', (req, res) => {  // Ruta GET
    res.send('Hello, World!'); // Respuesta GET
});

const port = process.env.PORT || 3000; // Puerto
app.listen(port, () => {    // Inicia servidor
    console.log(`Server running on port ${port}`);
});

module.exports = app;   // Exporta app
