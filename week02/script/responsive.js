const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

const items = document.querySelectorAll("a");

items.forEach(function (item) {
  item.addEventListener("click", function () {
    items.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
