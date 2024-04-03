const popups = document.querySelectorAll("[id^='popup-']");
const popupsWeb = document.querySelectorAll("[id^='popupweb-']");
const popupUIUX = document.querySelector(".popup__uiux");
const popupWebsite = document.querySelector(".popup__website");
const headerIcon = document.querySelector(".header__icon");
const headerWebIcon = document.querySelector(".headerweb__icon");
const linksUIUX = document.querySelectorAll("#item__link");
const linksWebsite = document.querySelectorAll("#website__link");
const backToTop = document.querySelector(".back-to-top");

function disableHtmlScroll() {
    document.documentElement.style.overflow = 'hidden';
    backToTop.style.display = 'none';
}

function enableHtmlScroll() {
    document.documentElement.style.overflow = '';
    backToTop.style.display = '';
}

function closePopups() {
    popupUIUX.style.display = "none";
    popupWebsite.style.display = "none";
    popups.forEach(popup => popup.style.display = "none");
    popupsWeb.forEach(popup => popup.style.display = "none");
    enableHtmlScroll();
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePopups();
    }
});

function addLinkClickListener(links, popup, popups) {
    links.forEach((link, i) => {
        link.addEventListener("click", () => {
            popup.style.display = "flex";
            popups[i].style.display = "flex";
            disableHtmlScroll();
        });
    });
}

addLinkClickListener(linksUIUX, popupUIUX, popups);
addLinkClickListener(linksWebsite, popupWebsite, popupsWeb);

headerIcon.addEventListener("click", closePopups);
headerWebIcon.addEventListener("click", closePopups);
