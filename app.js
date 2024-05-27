const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir los archivos HTML de los distintos proyectos
app.use('/marvel', express.static(path.join(__dirname, 'Marvel')));
app.use('/starwars', express.static(path.join(__dirname, 'StarWars')));
app.use('/pokemon', express.static(path.join(__dirname, 'Pokemon')));

// Servir la página de inicio con la navbar
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
