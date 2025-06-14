const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".carousel-track");

track.innerHTML += track.innerHTML;

let translate = 0;
const speed = 1;
let isDragging = false;
let isPaused = false;
let startX = 0;
let lastX = 0;

// Autoplay + pause on hover
function animate() {
  if (!isDragging && !isPaused) {
    translate -= speed;
  }
  const maxScroll = track.scrollWidth / 2;
  if (Math.abs(translate) >= maxScroll) {
    translate = 0;
  }
  track.style.transform = `translateX(${translate}px)`;
  requestAnimationFrame(animate);
}
animate();


carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  lastX = e.clientX;
});
window.addEventListener("mouseup", () => {
  isDragging = false;
});
window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - lastX;
  lastX = e.clientX;
  translate += dx;
});


carousel.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  lastX = e.touches[0].clientX;
});
carousel.addEventListener("touchend", () => {
  isDragging = false;
});
carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - lastX;
  lastX = e.touches[0].clientX;
  translate += dx;
});

//pause durante hover
carousel.addEventListener("mouseenter", () => {
  isPaused = true;
});
carousel.addEventListener("mouseleave", () => {
  isPaused = false;
});
