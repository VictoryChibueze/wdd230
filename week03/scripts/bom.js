"use strict";
const inputEl = document.querySelector("#favchap");
const listEl = document.querySelector("#list");
const btnEl = document.querySelector("button");

const chapterArrays = getChaptersList() || [];

chapterArrays.forEach((chapter) => {
  displayList(chapter);
});

btnEl.addEventListener("click", () => {
  if (inputEl.value != " ") {
    displayList(inputEl.value);
    chapterArrays.push(inputEl.value);
    setChapterList();
    inputEl.value = "";
    inputEl.focus();
  }
});

function displayList(item) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.innerHTML = item;
  button.textContent = "❌";
  button.classList.add("delete");
  li.append(button);
  listEl.append(li);

  button.addEventListener("click", () => {
    listEl.removeChild(li);
    deleteChapter(li.textContent);
    inputEl.focus();
  });
}

function setChapterList() {
  localStorage.setItem("favBOMList", JSON.stringify(chapterArrays));
}

function getChapterList() {}
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
