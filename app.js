const express = require('express');
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});


