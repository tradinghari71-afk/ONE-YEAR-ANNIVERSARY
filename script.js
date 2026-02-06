const btn = document.getElementById("btn");
const msg = document.getElementById("msg");
const music = document.getElementById("music");

/* Canvas */
const canvas = document.getElementById("effects");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

/* Button click */
btn.onclick = () => {
  msg.classList.remove("hidden");
  btn.style.display = "none";
  music.play();
  startConfetti();
};

/* Confetti */
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 1,
    color: `hsl(${Math.random() * 360},100%,60%)`
  });
}

function startConfetti() {
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/* 🎆 Fireworks */
canvas.addEventListener("click", e => {
  for (let i = 0; i < 30; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: 4,
      speed: Math.random() * 6 + 2,
      color: `hsl(${Math.random() * 360},100%,60%)`
    });
  }
});

/* 🎈 Balloons */
function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.left = Math.random() * window.innerWidth + "px";
  balloon.style.background = `hsl(${Math.random() * 360},100%,65%)`;
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 8000);
}
setInterval(createBalloon, 1000);
