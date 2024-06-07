"use strict";

const baseURL = "https://victorychibueze.github.io/wdd230/";

const linkURL = "https://victorychibueze.github.io/wdd230/data/links.json";

const learningActivitiesEl = document.querySelector(".learning-activities");

async function getLinks() {
  const response = await fetch(linkURL);
  const data = await response.json();

  console.table(data.weeks);

  displayLinks(data.weeks);
}
getLinks();

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    const li = document.createElement("li");
  });
};
