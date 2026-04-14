const express = require('express');
const path = require('path');
const app = express();

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

app.use(express.urlencoded({ extended: true }));

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/encuesta', (req, res) => {
  const { lenguaje } = req.body;
  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultado encuesta</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <main class="hero">
    <section class="hero-card">
      <h1>Respuesta recibida</h1>
      <p>Tu lenguaje favorito es: <strong>${escapeHtml(lenguaje)}</strong></p>
      <a href="/">Volver</a>
    </section>
  </main>
</body>
</html>`);
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
