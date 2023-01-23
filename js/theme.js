// JavaScript
function toggleTheme() {
    const currentTheme = document.getElementById("theme-style").getAttribute("href");
    if (currentTheme === "css/theme/light.css") {
        document.getElementById("theme-style").setAttribute("href", "css/theme/dark.css");
        localStorage.setItem("theme", "dark");
    } else {
        document.getElementById("theme-style").setAttribute("href", "css/theme/light.css");
        localStorage.setItem("theme", "light");
    }
}

// On page load
const theme = localStorage.getItem("theme");
if (theme === "dark") {
    document.getElementById("theme-style").setAttribute("href", "css/theme/dark.css");
}