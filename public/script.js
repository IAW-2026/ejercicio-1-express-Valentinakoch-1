document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactoForm');
  const respuesta = document.getElementById('respuesta');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // no recargues la pagina, yo lo hago con fetch

    const formData = new FormData(form);
    const payload = {
      nombre: formData.get('nombre')?.toString().trim(),
      mensaje: formData.get('mensaje')?.toString().trim(),
    };

    respuesta.textContent = 'Enviando mensaje...';
    respuesta.className = 'respuesta';

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || 'No se pudo enviar el mensaje.');
      }

      respuesta.textContent = data.mensaje;
      respuesta.classList.add('ok');
      form.reset();
    } catch (error) {
      respuesta.textContent = error.message;
      respuesta.classList.add('error');
    }
  });
});
