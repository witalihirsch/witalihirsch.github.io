var powerButton = document.querySelector(".power-frame");
var bluetoothButton = document.querySelector(".bluetooth-frame");
var airplaneButton = document.querySelector(".airplane-frame");
var wifiButton = document.querySelector(".wifi-frame");
var nightlightButton = document.querySelector(".nightlight-frame");

const powerText = document.getElementById("power-text");

let powerColor = true;

powerButton.addEventListener("click", function() {
    powerButton.classList.toggle("clicked");
    if (powerColor) {
        powerColor = false;
        powerText.textContent = "Power Saver";

    } else {
        powerColor = true;
        powerText.textContent = "Balanced";
    }
});

bluetoothButton.addEventListener("click", function() {
    bluetoothButton.classList.toggle("clicked");
});

airplaneButton.addEventListener("click", function() {
    airplaneButton.classList.toggle("clicked");
});

wifiButton.addEventListener("click", function() {
    wifiButton.classList.toggle("clicked");
});

nightlightButton.addEventListener("click", function() {
    nightlightButton.classList.toggle("clicked");
});


var firefoxButton = document.getElementById("firefox-button");
var firefoxWindow = document.getElementById("firefox-window-appear");
var filesButton = document.getElementById("files-button");
var filesWindow = document.getElementById("files-window-appear");

firefoxButton.addEventListener("click", function() {
    firefoxButton.classList.toggle("clicked");
    firefoxWindow.style.zIndex = "1";
    filesWindow.style.zIndex = "0";
});

filesButton.addEventListener("click", function() {
    filesButton.classList.toggle("clicked");
    filesWindow.style.zIndex = "1";
    firefoxWindow.style.zIndex = "0";
});
