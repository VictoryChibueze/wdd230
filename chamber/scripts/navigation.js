"use strict";
const hamburgerMenu = document.querySelector("#menu");
const navEl = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("close");
  navEl.classList.toggle("close");
});
