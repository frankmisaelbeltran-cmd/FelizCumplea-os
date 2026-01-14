/* ===== CORAZONES ===== */
const pinkTones = [
  "rgba(255,105,180,0.8)",
  "rgba(255,182,193,0.8)",
  "rgba(255,20,147,0.8)"
];

const layers = ["layer-back", "layer-mid", "layer-front"];
const heartContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "❤";

  const color = pinkTones[Math.floor(Math.random() * pinkTones.length)];
  heart.style.color = color;
  heart.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 30 + 50 + "px";

  const layer = layers[Math.floor(Math.random() * layers.length)];
  heart.classList.add(layer);

  heart.style.animationDuration =
    layer === "layer-back" ? "16s" :
    layer === "layer-mid"  ? "12s" :
                             "9s";

  heartContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 17000);
}

setInterval(createHeart, 500);

/* ===== TEXTO ===== */

let fontIndex = 0;
const title = document.getElementById("title");

const styles = [
  { font: "'Playfair Display', serif", size: "30px", spacing: "2px" },
  { font: "'Cormorant Garamond', serif", size: "32px", spacing: "3px" },
  { font: "'Raleway', sans-serif", size: "26px", spacing: "4px" },
  { font: "'Merriweather', serif", size: "28px", spacing: "2px" }
];


let i = 0;

setInterval(() => {
  i = (i + 1) % styles.length;
  title.style.fontFamily = styles[i].font;
  title.style.fontSize = styles[i].size;
  title.style.letterSpacing = styles[i].spacing;
}, 4000);




/* ===== AGRANDAR FOTOS ===== */
document.querySelectorAll(".polaroid").forEach(photo => {
  photo.addEventListener("click", () => {
    photo.classList.toggle("active");
  });
});
