//
$(".navbar a").on("click", function(e) {
  if (this.has !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

//
const cardLink = document.querySelector(".card-link");
const moreContent = document.querySelector(".more-content");

cardLink.addEventListener("click", toggleDisplay);
cardLink.addEventListener("click", toggleOption);

function toggleDisplay() {
  moreContent.classList.toggle("display");
}

function toggleOption() {
  if (cardLink.innerHTML === "Read More") {
    cardLink.innerHTML = "Read Less";
  } else {
    cardLink.innerHTML = "Read More";
  }
}

//
const viewWorkBtn = document.querySelector(".view-work-btn");
const cardContentBack = document.querySelector(".card-content-back");
const slideHidden = document.querySelector(".slide-hidden");

viewWorkBtn.addEventListener("click", toggleCardContentBack);
cardContentBack.addEventListener("click", toggleCardContentBack);

function toggleCardContentBack() {
  slideHidden.classList.toggle("display-back");
  cardContentBack.classList.toggle("display-back");
}

//
const menuButton = document.querySelector(".menu-btn");
const navBarA = document.querySelector(".style-1");
const navBarB = document.querySelector(".style-2");
const navBarC = document.querySelector(".style-3");
const navBarD = document.querySelector(".style-4");
const navBar = document.querySelector(".navbar");

navBarA.addEventListener("click", unchangeNavBarColor);
navBarB.addEventListener("click", changeNavBarColor);
navBarC.addEventListener("click", changeNavBarColor);
navBarD.addEventListener("click", unchangeNavBarColor);

function changeNavBarColor() {
  menuButton.classList.add("color");
  navBar.classList.add("color");
}

function unchangeNavBarColor() {
  menuButton.classList.remove("color");
  navBar.classList.remove("color");
}

//
const slides = document.querySelectorAll(".slider");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const automatic = true;
const interval = 5000;
let slideInterval;
//
const slide1 = document.querySelector(".slide-1");
const slide4 = document.querySelector(".slide-4");
const buttons = document.querySelector(".buttons");

const prevSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active !== slide1) {
    active.previousElementSibling.classList.add("active");
  } else {
    slide4.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

const nextSlide = () => {
  const active = document.querySelector(".active");

  active.classList.remove("active");

  if (active.nextElementSibling !== buttons) {
    active.nextElementSibling.classList.add("active");
  } else {
    slide1.classList.add("active");
  }

  setTimeout(() => {
    active.classList.remove("active");
  }, 200);
};

prev.addEventListener("click", e => {
  prevSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

next.addEventListener("click", e => {
  nextSlide();
  if (automatic) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, interval);
  }
});

if (automatic) {
  slideInterval = setInterval(nextSlide, interval);
}

//
const arrow = document.querySelector(".arrow");
const leftImage = document.querySelector(".modified-card-img-1");
const centerImage = document.querySelector(".modified-card-img-2");

arrow.addEventListener("click", changeLineShape);
centerImage.addEventListener("click", changeLineShape);

function changeLineShape() {
  arrow.classList.toggle("change");
  leftImage.classList.toggle("change");
  centerImage.classList.toggle("change");
}
