document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnFrase');
  const frase = document.getElementById('frase');

  boton.addEventListener('click', async () => {
    frase.textContent = 'Cargando frase...';
    frase.className = 'frase';

    try {
      const response = await fetch('/frase');

      const data = await response.json();

      if (!response.ok) {
        throw new Error('No se pudo obtener una frase.');
      }

      frase.textContent = data.frase;
      frase.classList.add('ok');
    } catch (error) {
      frase.textContent = error.message;
      frase.classList.add('error');
    }
  });
});
