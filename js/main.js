//
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuShowcase = document.querySelector(".menu-showcase");
const navItems = document.querySelectorAll(".nav-item");
let showMenu = false;

//
const secondaryColorBtn = document.querySelector(".secondary-color-btn");
const overlay = document.querySelector(".overlay");
const lgHeading = document.querySelector(".lg-heading");
const smHeading = document.querySelector(".sm-heading");
const menuBtnLine = document.querySelectorAll(".menu-btn-line");

//
menuBtn.addEventListener("click", toggleMenu);
//
secondaryColorBtn.addEventListener("click", toggleSecondaryColor);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuShowcase.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuShowcase.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

//
function toggleSecondaryColor() {
  secondaryColorBtn.classList.toggle("secondary-theme");
  overlay.classList.toggle("secondary-theme");
  lgHeading.classList.toggle("secondary-theme");
  smHeading.classList.toggle("secondary-theme");
  menuBtnLine.forEach(item => item.classList.toggle("secondary-theme"));
  menuShowcase.classList.toggle("secondary-theme");
  menuNav.classList.toggle("secondary-theme");
}
