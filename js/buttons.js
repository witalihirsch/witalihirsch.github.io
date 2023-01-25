var powerButton = document.querySelector(".power-frame");
var bluetoothButton = document.querySelector(".bluetooth-frame");
var airplaneButton = document.querySelector(".airplane-frame");
var wifiButton = document.querySelector(".wifi-frame");
var nightlightButton = document.querySelector(".nightlight-frame");

const powerIcon = document.getElementById("power-icon");
const bluetoothIcon = document.getElementById("bluetooth-icon");
const wifiIcon = document.getElementById("wifi-icon");

const powerText = document.getElementById("power-text");

let powerColor = true;
let bluetoothColor = true;
let wifiColor = true;

powerButton.addEventListener("click", function() {
    powerButton.classList.toggle("clicked");
    if (powerColor) {
        powerText.textContent = "Power Saver";
        powerIcon.src = "images/dark/power-saver-icon.svg";
        powerColor = false;

    } else {
        powerText.textContent = "Balanced";
        powerIcon.src = "images/dark/power-icon.svg";
        powerColor = true;
    }
});

bluetoothButton.addEventListener("click", function() {
    bluetoothButton.classList.toggle("clicked");
    if (bluetoothColor) {
        bluetoothIcon.src = "images/dark/bluetooth-enabled-icon.svg";
        bluetoothColor = false;

    } else {
        bluetoothIcon.src = "images/dark/bluetooth-icon.svg";
        bluetoothColor = true;
    }
});

airplaneButton.addEventListener("click", function() {
    airplaneButton.classList.toggle("clicked");
});

wifiButton.addEventListener("click", function() {
    wifiButton.classList.toggle("clicked");
    if (wifiColor) {
        wifiIcon.src = "images/dark/wifi-disabled-icon.svg";
        wifiColor = false;

    } else {
        wifiIcon.src = "images/dark/wifi-icon.svg";
        wifiColor = true;
    }
});

nightlightButton.addEventListener("click", function() {
    nightlightButton.classList.toggle("clicked");
});

darkmodeButton.addEventListener("click", function() {
    darkmodeButton.classList.toggle("clicked");
});