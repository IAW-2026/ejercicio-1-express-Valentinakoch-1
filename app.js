const express = require('express');
const app = express();

// Servir archivos estáticos desde la raíz del proyecto
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});


