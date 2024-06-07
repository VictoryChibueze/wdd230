"use strict";

const baseURL = "https://victorychibueze.github.io/wdd230/";

const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linkURL);
  const data = await response.json();

  console.table(data.weeks);

  displayLinks(data.weeks);
}
getLinks();

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

function displayLinks(weeks) {
  const learningActivitiesEl = document.querySelector(".learning-activities");
  learningActivitiesEl.innerHTML = "";

  weeks.forEach((week) => {
    const weekSection = document.createElement("section");
    const weekHeader = document.createElement("h3");
    weekHeader.textContent = week.week;
    weekSection.appendChild(weekHeader);

    const linkList = document.createElement("ul");

    week.links.forEach((link) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    weekSection.appendChild(linkList);
    learningActivitiesEl.appendChild(weekSection);
  });
}

document.addEventListener("DOMContentLoaded", getLinks);

const myAPI = "437209d363a4387bb2f5dffcea58bbee";
const myWeather = `//api.openweathermap.org/data/2.5/weather?zip=84653,us&appid=437209d363a4387bb2f5dffcea58bbee&units=imperial`;

fetch(myWeather)
  .then((response) => response.json())
  .then((allData) => {
    currentWeather(allData);
  }); // end waiting

function currentWeather(weatherResults) {
  console.log(weatherResults);
  const myTemperature = document.querySelector("#temp");
  myTemperature.textContent = `${weatherResults.main.temp}°F`;
  const myDescription = document.querySelector("#desc");
  myDescription.textContent = weatherResults.weather[0].description;
  const myIcon = document.querySelector("#icon");
  myIcon.src = `https://openweathermap.org/img/w/${weatherResults.weather[0].icon}.png`;
  myIcon.alt = weatherResults.weather[0].description;
}
