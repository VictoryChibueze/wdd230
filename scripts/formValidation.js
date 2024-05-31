document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
      errorMessage.style.display = "block";
      event.preventDefault(); // Prevent form submission
    } else {
      errorMessage.style.display = "none";
    }
  });
