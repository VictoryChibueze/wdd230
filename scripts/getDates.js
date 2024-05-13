let copyrightYearEl = document.getElementById("lastModified");
let yearEl = document.getElementById("year");

copyrightYearEl.textContent = new Date(document.lastModified);
yearEl.textContent = new Date().getFullYear();

const navElement = document.querySelector("nav");
const hamButton = document.querySelector("#ham-button");

hamButton.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamButton.classList.toggle("open");
});
