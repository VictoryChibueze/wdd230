let copyrightYearEl = document.getElementById("lastModified");
let yearEl = document.getElementById("year");

copyrightYearEl.textContent = new Date(document.lastModified);
yearEl.textContent = new Date().getFullYear();

const visits = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
  visits.textContent = numVisits;
} else {
  visits.textContent = `This is your first visit. Welcome!`;
}

numVisits++;
