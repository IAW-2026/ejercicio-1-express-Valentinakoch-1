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

// Middleware para parsear datos de formularios POST
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta POST para /contacto
app.post('/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;
  res.send(`<!doctype html>
            <html lang="es">
            <meta charset="utf-8">
            <title>Datos recibidos</title>
            <h1>Datos enviados correctamente</h1>
            <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
            <p><strong>Mensaje:</strong> ${escapeHtml(mensaje)}</p>
            <a href="/">Volver</a>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
