let copyrightYearEl = document.getElementById("lastModified");
let yearEl = document.getElementById("year");

copyrightYearEl.textContent = new Date(document.lastModified);
yearEl.textContent = new Date().getFullYear();
