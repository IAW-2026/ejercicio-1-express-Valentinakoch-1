const express = require('express');
const path = require('path');
const app = express();

const productos = [
  { id: 1, nombre: 'Teclado mecanico', precio: 65 },
  { id: 2, nombre: 'Mouse inalambrico', precio: 30 },
  { id: 3, nombre: 'Monitor 24 pulgadas', precio: 180 },
  { id: 4, nombre: 'Auriculares', precio: 45 },
];

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
