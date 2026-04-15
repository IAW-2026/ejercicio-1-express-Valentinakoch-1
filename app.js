const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta principal de la aplicación
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/contacto', (req, res) => {
  const { nombre, mensaje } = req.body;

  if (!nombre || !mensaje) {
    return res.status(400).json({
      mensaje: 'Por favor, completa nombre y mensaje para continuar.',
    });
  }

  return res.json({
    mensaje: `Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`,
  });
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
