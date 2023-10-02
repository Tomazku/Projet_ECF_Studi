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

const nav = document.querySelector(".main-nav");
const navToggler = document.querySelector(".nav-toggler");
const togglerImg = navToggler.querySelector("img");
const navLinks = document.querySelectorAll(".main-nav a");

navToggler.addEventListener("click", toggleNav)

function toggleNav(){
  nav.classList.toggle("active");
  if(togglerImg.src.includes("hamburger")) {
    togglerImg.src = "ressources/cross.svg";
    navToggler.ariaExpanded = true;
  }
  else {
    togglerImg.src = "ressources/hamburger.svg";
    navToggler.ariaExpanded = false;
  }
}