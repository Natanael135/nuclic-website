const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const overlay = document.getElementById("overlay");
const menuIcon = document.getElementById("menuIcon");

// Troque os caminhos conforme o nome dos seus SVGs
const iconMenu = "../assets/icons/menu.svg";
const iconClose = "../assets/icons/closemenu.svg";

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  overlay.classList.toggle("show");
  menuIcon.src = isOpen ? iconClose : iconMenu;
  menuIcon.alt = isOpen ? "Fechar menu" : "Abrir menu";
});

overlay.addEventListener("click", () => {
  navMenu.classList.remove("open");
  overlay.classList.remove("show");
  menuIcon.src = iconMenu;
  menuIcon.alt = "Abrir menu";
});
