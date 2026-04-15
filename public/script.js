document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('cargarProductos');
  const lista = document.getElementById('listaProductos');

  button.addEventListener('click', async () => {
    lista.innerHTML = '<li>Cargando productos...</li>';

    try {
      const response = await fetch('/api/productos');

      if (!response.ok) {
        throw new Error('No se pudo cargar la lista de productos.');
      }

      const productos = await response.json();

      lista.innerHTML = productos
        .map(
          (producto) =>
            `<li>#${producto.id} - ${producto.nombre} ($${producto.precio})</li>`
        )
        .join('');
    } catch (error) {
      lista.innerHTML = `<li>${error.message}</li>`;
    }
  });
});
