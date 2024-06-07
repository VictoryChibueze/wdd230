let copyrightYearEl = document.getElementById("lastModified");
let yearEl = document.getElementById("year");

copyrightYearEl.textContent = new Date(document.lastModified);
yearEl.textContent = new Date().getFullYear();

// visit count
const visitFeedback = document.querySelector("#visitCount");
let numVisits = localStorage.getItem("visits");
console.log(numVisits);
if (numVisits == null) {
  visitFeedback.textContent = "You're a first timer";
  localStorage.setItem("visits", 1);
} else {
  numVisits++;
  localStorage.setItem("visits", numVisits);
  visitFeedback.innerHTML = `You have been here ${numVisits} times &#x1F440;`;
}
