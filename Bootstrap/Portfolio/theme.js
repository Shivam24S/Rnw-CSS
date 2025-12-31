const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);
updateIcon(savedTheme);

// Toggle theme
toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

function updateIcon(theme) {
  icon.className = theme === "light"
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
}
