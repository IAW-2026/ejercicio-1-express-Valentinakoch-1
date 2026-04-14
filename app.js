const express = require('express');
const app = express();

let contadorVisitas = 0;

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  contadorVisitas += 1;
  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contador de visitas</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <header>
    <nav>
      <a href="/">Inicio</a>
    </nav>
  </header>
  <main class="hero">
    <section class="hero-card">
      <p class="eyebrow">Bienvenido</p>
      <h1>Contador de visitas</h1>
      <p>Este es el ejercicio 6 de la guia de IAW.</p>
      <p><strong>Visitas a esta pagina:</strong> ${contadorVisitas}</p>
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
