"use strict";

const url =
  " https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const cards = document.querySelector("#cards");
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);

  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const section = document.createElement("section");
    const fullName = document.createElement("h2");
    const portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", "A Potrait of a latter day prophet");
    portrait.setAttribute("width", 340);
    portrait.setAttribute("height", 440);
    portrait.setAttribute("loading", "lazy");

    card.append(fullName);
    card.append(portrait);

    cards.append(card);
  });
};

getProphetData();
