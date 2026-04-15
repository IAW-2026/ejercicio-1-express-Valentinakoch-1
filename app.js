const express = require('express');
const path = require('path');
const app = express();

const frases = [
  'Cada linea de codigo es una oportunidad para aprender algo nuevo.',
  'La practica constante convierte errores en experiencia.',
  'Resolver problemas pequenos todos los dias crea grandes resultados.',
  'Si algo falla, depura con calma y observa los detalles.',
  'Una buena idea implementada vale mas que mil ideas sin probar.',
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/frase', (req, res) => {
  const indice = Math.floor(Math.random() * frases.length);
  res.json({ frase: frases[indice] });
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
