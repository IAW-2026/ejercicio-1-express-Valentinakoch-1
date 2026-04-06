const express = require('express'); // Importar Express
const app = express(); // Crear instancia de Express

// Middleware
app.use(express.json()); //permitir parsear JSON en el cuerpo de las solicitudes      
app.use(express.urlencoded({ extended: true })); // permitir parsear datos de formularios html

// ACA AGREGUE
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

// Rutas
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/acerca', (req, res) => {
  res.sendFile(__dirname + '/public/acerca.html');
});

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html');
});

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

// Iniciar servidor 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});









