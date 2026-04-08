const greetButton = document.getElementById('greetButton');
const colorButton = document.getElementById('colorButton');
const timeButton = document.getElementById('timeButton');
const randomButton = document.getElementById('randomButton');

if (greetButton) {
  greetButton.addEventListener('click', () => {
    alert('¡Hola! Bienvenido a mi página creada con Express.');
  });
}

if (colorButton) {
  colorButton.addEventListener('click', () => {
    const colors = ['#ffb6c1', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, #e6f7ff 50%, #f0fff0 100%)`;
    alert(`¡Color cambiado a ${randomColor}!`);
  });
}

if (timeButton) {
  timeButton.addEventListener('click', () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    alert(`La hora actual es: ${timeString}`);
  });
}

if (randomButton) {
  randomButton.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    alert(`Número aleatorio: ${randomNum}`);
  });
}

