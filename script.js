function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

// Fonction pour fixer le header

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header_sticky");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Fonction pour afficher le menu hamburger au clic à partir de 500px

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  const scrollY = window.scrollY;

  if (scrollY > 500) {
    header.querySelector(".menu-icon").classList.add("active");
  } else {
    header.querySelector(".menu-icon").classList.remove("active");
  }
});