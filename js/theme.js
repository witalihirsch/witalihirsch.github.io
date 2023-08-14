const body = document.body;
const img = document.querySelector('.landing__img');
const system = document.getElementById("system-button");
const light = document.getElementById("light-button");
const dark = document.getElementById("dark-button");

system.addEventListener("click", () => setTheme("system"));
light.addEventListener("click", () => setTheme("light"));
dark.addEventListener("click", () => setTheme("dark"));

const availableThemes = ["system", "light", "dark"];

function setTheme(themeToSet) {
    if (!availableThemes.includes(themeToSet)) return;

    window.localStorage.setItem("theme", themeToSet);

    availableThemes.forEach(theme => {
        if (theme !== themeToSet && body.classList.contains(theme)) {
            body.classList.remove(theme);
        }
    });

    if (themeToSet === "dark") {
        img.src = "img/landing-dark.webp";
    } else if (themeToSet === "light") {
        img.src = "img/landing-light.webp";
    }

    if (!body.classList.contains(themeToSet)) body.classList.add(themeToSet);
}

function loadTheme() {
    let theme = window.localStorage.getItem("theme");

    if (!theme || !availableThemes.includes(theme)) {
        theme = "system";
    }

    setTheme(theme);

    if (theme === "dark") {
        img.src = "img/landing-dark.webp";
    } else if (theme === "light") {
        img.src = "img/landing-light.webp";
    }
}

loadTheme();