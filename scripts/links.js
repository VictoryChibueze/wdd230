"use strict";

const baseURL = "https://victorychibueze.github.io/wdd230/";

const linkURL = "https://victorychibueze.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linkURL);
  const data = await response.json();

  console.table(data);
}
getLinks();
