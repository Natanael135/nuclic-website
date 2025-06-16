const track = document.querySelector(".carousel-track");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
let cards = Array.from(document.querySelectorAll(".profile-card"));

function getCardWidth() {
  const card = cards[0].offsetWidth;
  const margin = window.innerWidth >= 768 ? 20 : 0;
  return card + margin;
}

function getSlidesPerView() {
  return window.innerWidth >= 768 ? 3 : 1;
}

// Clonar slides para loop infinito (fazer 1 vez)
cards.forEach((card) => {
  const clone = card.cloneNode(true);
  track.appendChild(clone);
});

let index = 0;

function updatePosition() {
  track.style.transition = "transform 0.5s ease";
  track.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

// Loop infinito: se chegar no fim ou início, pula para original
track.addEventListener("transitionend", () => {
  const total = cards.length;
  const perView = getSlidesPerView();
  if (index >= total) {
    track.style.transition = "none";
    index = 0;
    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
  } else if (index < 0) {
    track.style.transition = "none";
    index = total - perView;
    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
  }
});

// Botões
next.addEventListener("click", () => {
  index += getSlidesPerView();
  updatePosition();
  restartAutoplay();
});

prev.addEventListener("click", () => {
  index -= getSlidesPerView();
  updatePosition();
  restartAutoplay();
});

// Autoplay
let autoplay = setInterval(() => {
  index += getSlidesPerView();
  updatePosition();
}, 5000);

function pauseAutoplay() {
  clearInterval(autoplay);
}

function restartAutoplay() {
  pauseAutoplay();
  autoplay = setInterval(() => {
    index += getSlidesPerView();
    updatePosition();
  }, 5000);
}

track.addEventListener("mouseenter", pauseAutoplay);
track.addEventListener("mouseleave", restartAutoplay);

window.addEventListener("resize", () => {
  updatePosition();
});
