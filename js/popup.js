let popup = document.querySelector(".popup");
let headerIcon = document.querySelector(".header__icon");

let links = document.querySelectorAll("[id^='item__link-']");
let popups = document.querySelectorAll("[id^='popup-']");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    popup.style.display = "flex";
    popups[i].style.display = "flex";
  });
}

headerIcon.addEventListener("click", function() {
  popup.style.display = "none";
  for (let i = 0; i < popups.length; i++) {
    popups[i].style.display = "none";
  }
});
