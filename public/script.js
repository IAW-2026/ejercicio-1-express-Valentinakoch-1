document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('greetButton');

  button.addEventListener('click', () => {
    alert('¡Servidor Express diciendo hola mundo desde JavaScript!');
  });

  console.log('Archivos estáticos servidos correctamente desde public/.');
});
