const pinkTones = [
  "rgba(255,105,180,0.8)",
  "rgba(255,182,193,0.8)",
  "rgba(255,20,147,0.8)",
  "rgba(255,150,200,0.8)"
];

const layers = ["layer-back", "layer-mid", "layer-front"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";

  // posición
  heart.style.left = Math.random() * 100 + "vw";

  // tamaño
  heart.style.fontSize = (Math.random() * 20 + 30) + "px";

  // color
  const color = pinkTones[Math.floor(Math.random() * pinkTones.length)];
  heart.style.color = color;

  // glow
  heart.style.textShadow = `
    0 0 10px ${color},
    0 0 20px ${color},
    0 0 30px ${color}
  `;

  // capa
  const layer = layers[Math.floor(Math.random() * layers.length)];
  heart.classList.add(layer);

  // velocidad según profundidad
  heart.style.animationDuration =
    layer === "layer-back" ? "16s" :
    layer === "layer-mid"  ? "12s" :
                             "9s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 17000);
}

setInterval(createHeart, 500);
