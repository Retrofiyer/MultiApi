const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use('/marvel', express.static(path.join(__dirname, 'Marvel')));
app.use('/starwars', express.static(path.join(__dirname, 'StarWars')));
app.use('/pokemon', express.static(path.join(__dirname, 'Pokemon')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en ${port}...`);
});
