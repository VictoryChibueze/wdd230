const navElement = document.querySelector("nav");
const hamButton = document.querySelector("#ham-button");
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
hamButton.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamButton.classList.toggle("open");
});

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌙")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "🌙";
  }
});
