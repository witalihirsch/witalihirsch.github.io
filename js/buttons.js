var powerButton = document.querySelector(".power-frame");
var bluetoothButton = document.querySelector(".bluetooth-frame");
var airplaneButton = document.querySelector(".airplane-frame");
var wifiButton = document.querySelector(".wifi-frame");
var nightlightButton = document.querySelector(".nightlight-frame");
var darkmodeButton = document.querySelector(".darkmode-frame");

const powerIcon = document.getElementById("power-icon");
const bluetoothIcon = document.getElementById("bluetooth-icon");
const wifiIcon = document.getElementById("wifi-icon");
const batteryIcon = document.getElementById("battery-icon");
const batteryFrameIcon = document.getElementById("battery-icon-frame");

const powerText = document.getElementById("power-text");

let powerColor = true;
let bluetoothColor = true;
let wifiColor = true;
let darkmodeColor = true;

powerButton.addEventListener("click", function() {
    powerButton.classList.toggle("clicked");
    if (powerColor) {
        powerText.textContent = "Power Saver";
        powerIcon.src = "images/power-saver-icon.svg";
        powerColor = false;

    } else {
        powerText.textContent = "Balanced";
        powerIcon.src = "images/power-icon.svg";
        powerColor = true;
    }
});

bluetoothButton.addEventListener("click", function() {
    bluetoothButton.classList.toggle("clicked");
    if (bluetoothColor) {
        bluetoothIcon.src = "images/bluetooth-enabled-icon.svg";
        bluetoothColor = false;

    } else {
        bluetoothIcon.src = "images/bluetooth-icon.svg";
        bluetoothColor = true;
    }
});

airplaneButton.addEventListener("click", function() {
    airplaneButton.classList.toggle("clicked");
});

wifiButton.addEventListener("click", function() {
    wifiButton.classList.toggle("clicked");
    if (wifiColor) {
        wifiIcon.src = "images/wifi-disabled-icon.svg";
        wifiColor = false;

    } else {
        wifiIcon.src = "images/wifi-icon.svg";
        wifiColor = true;
    }
});

nightlightButton.addEventListener("click", function() {
    nightlightButton.classList.toggle("clicked");
});

darkmodeButton.addEventListener("click", function() {
    darkmodeButton.classList.toggle("clicked");
    if (darkmodeColor) {
        batteryFrameIcon.src = "images/battery-icon-frame-dark.svg";
        batteryIcon.src = "images/battery-icon-dark.svg";
        darkmodeColor = false;

    } else {
        batteryFrameIcon.src = "images/battery-icon-frame.svg";
        batteryIcon.src = "images/battery-icon.svg";
        darkmodeColor = true;
    }
});