let popup = document.querySelector(".popup");
let headerIcon = document.querySelector(".header__icon");

let link1 = document.querySelector("#item__link-1");
let link2 = document.querySelector("#item__link-2");
let link3 = document.querySelector("#item__link-3");
let link4 = document.querySelector("#item__link-4");
let link5 = document.querySelector("#item__link-5");

let popup1 = document.querySelector("#popup-1");
let popup2 = document.querySelector("#popup-2");
let popup3 = document.querySelector("#popup-3");
let popup4 = document.querySelector("#popup-4");
let popup5 = document.querySelector("#popup-5");

link1.addEventListener("click", function() {
    popup.style.display = "flex";
    popup1.style.display = "flex";
})

link2.addEventListener("click", function() {
    popup.style.display = "flex";
    popup2.style.display = "flex";
})

link3.addEventListener("click", function() {
    popup.style.display = "flex";
    popup3.style.display = "flex";
})

link4.addEventListener("click", function() {
    popup.style.display = "flex";
    popup4.style.display = "flex";
})

link5.addEventListener("click", function() {
    popup.style.display = "flex";
    popup5.style.display = "flex";
})

headerIcon.addEventListener("click", function() {
    popup.style.display = "none";
    popup1.style.display = "none";
    popup2.style.display = "none";
    popup3.style.display = "none";
    popup4.style.display = "none";
    popup5.style.display = "none";
})