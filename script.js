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

const hamburgerMenu = document.getElementById(".hamburger-menu");
const mainNav = document.getElementById(".main-nav");

hamburgerMenu.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

const mediaQuery = window.matchMedia("(min-width: 900px)");
function checkMediaQuery(mediaQuery) {
  if (mediaQuery.matches) {
    mainNav.classList.remove("open");
  }
}

mediaQuery.addListener(checkMediaQuery);
checkMediaQuery(mediaQuery);
