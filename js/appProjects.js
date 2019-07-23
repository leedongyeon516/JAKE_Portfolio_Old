//
const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

function init() {
  setTimeout(() => {
    main.style.display = "block";
    setTimeout(() => (main.style.opacity = 1), 50);
  }, 1200);
}

init();
