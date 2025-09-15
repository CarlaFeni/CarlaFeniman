const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = document.querySelector('.hero').offsetHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = document.querySelector('.hero').offsetHeight;
});

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 2 + Math.random() * 4; // tamaño de la bolita
    this.speedX = (Math.random() - 0.5) * 1.5; // velocidad horizontal
    this.speedY = (Math.random() - 0.5) * 1.5; // velocidad vertical
    this.alpha = 0.3 + Math.random() * 0.7; // transparencia
  }
  draw() {
    this.x += this.speedX;
    this.y += this.speedY;

    // rebote en los bordes
    if (this.x > width || this.x < 0) this.speedX *= -1;
    if (this.y > height || this.y < 0) this.speedY *= -1;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(138, 43, 226, ${this.alpha})`; // morado fluorescente
    ctx.shadowColor = 'rgba(138, 43, 226, 0.8)';
    ctx.shadowBlur = 8; // efecto glow
    ctx.fill();
  }
}

const particles = [];
for (let i = 0; i < 50; i++) particles.push(new Particle()); // número de bolitas

function animate() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach(p => p.draw());
  requestAnimationFrame(animate);
}

animate();
