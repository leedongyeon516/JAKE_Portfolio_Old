//
const resumeButton = document.getElementById("resume");
const coverLetterButton = document.getElementById("cover-letter");
const container = document.getElementById("container");

coverLetterButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

resumeButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);
