const menuBtn = document.querySelector(".menu-btn");
const hamBurger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".header__nav");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamBurger.classList.add("open");
    nav.classList.add("open");

    showMenu = true;
  } else {
    hamBurger.classList.remove("open");
    nav.classList.remove("open");

    showMenu = false;
  }
}
