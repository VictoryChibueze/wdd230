"use strict";
const inputEl = document.querySelector("#favchap");
const listEl = document.querySelector("#list");
const btnEl = document.querySelector("button");

const chapterArrays = getListChapters() || [];

btnEl.addEventListener("click", () => {
  if (inputEl.value != " ") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.innerHTML = inputEl.value;
    button.textContent = "❌";
    li.append(button);
    listEl.append(li);

    button.addEventListener("click", () => {
      listEl.removeChild(li);
      inputEl.focus();
    });
    inputEl.value = "";
  }
});
