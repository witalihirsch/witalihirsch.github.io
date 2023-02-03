var iconButton = document.querySelector(".darkmode-frame");

const wifiFrameIcon = document.getElementById("wifi-icon-frame");
const volumeFrameIcon = document.getElementById("volume-icon-frame");
const batteryFrameIcon = document.getElementById("battery-icon-frame");

const batteryIcon = document.getElementById("battery-icon");
const screenshotIcon = document.getElementById("screenshot-icon");
const settingsIcon = document.getElementById("settings-icon");
const lockscreenIcon = document.getElementById("lockscreen-icon");
const powerOffIcon = document.getElementById("poweroff-icon");
const volumeIcon = document.getElementById("volume-icon");
const brightnessIcon = document.getElementById("brightness-icon");
const arrowIcon = document.getElementById("arrow-icon");
const wifiIcon = document.getElementById("wifi-icon");
const powerIcon = document.getElementById("power-icon");
const darkmodeIcon = document.getElementById("darkmode-icon");
const bluetoothIcon = document.getElementById("bluetooth-icon");
const nightlightIcon = document.getElementById("nightlight-icon");
const airplaneIcon = document.getElementById("airplane-icon");

const musicIcon = document.getElementById("music-icon");
const backwardIcon = document.getElementById("backward-icon");
const pauseIcon = document.getElementById("pause-icon");
const forwardIcon = document.getElementById("forward-icon");
const mailIcon = document.getElementById("mail-icon");
const updatesIcon = document.getElementById("updates-icon");
const arrowLeftIcon = document.getElementById("arrow-left-icon");
const arrowRightIcon = document.getElementById("arrow-right-icon");
const weatherIcon = document.getElementById("weather-icon");
const weather2Icon = document.getElementById("weather2-icon");
const weather3Icon = document.getElementById("weather3-icon");
const weather4Icon = document.getElementById("weather4-icon");
const weather5Icon = document.getElementById("weather5-icon");

const arrowRightPageIcon = document.getElementById("arrow-right-page-icon");
const arrowLeftPage2Icon = document.getElementById("arrow-left-page2-icon");
const arrowRightPage2Icon = document.getElementById("arrow-right-page2-icon");

const arrowLeftPage3Icon = document.getElementById("arrow-left-page3-icon");
const githubIcon = document.getElementById("github-icon");
const patreonIcon = document.getElementById("patreon-icon");
const redditIcon = document.getElementById("reddit-icon");
const googleIcon = document.getElementById("google-icon");

const firefoxIcon = document.getElementById("firefox-image");
const filesIcon = document.getElementById("files-image");

var imagesToLoad = [
    //light theme images preload
    "images/light/wifi-icon-frame.svg",
    "images/light/volume-icon-frame.svg",
    "images/light/battery-icon-frame.svg",
    "images/light/battery-icon.svg",
    "images/light/screenshot-icon.svg",
    "images/light/settings-icon.svg",
    "images/light/lockscreen-icon.svg",
    "images/light/poweroff-icon.svg",
    "images/light/volume-icon.svg",
    "images/light/brightness-icon.svg",
    "images/light/arrow-icon.svg",
    "images/light/wifi-icon.svg",
    "images/light/wifi-disabled-icon.svg",
    "images/light/power-icon.svg",
    "images/light/power-saver-icon.svg",
    "images/light/darkmode-icon.svg",
    "images/light/bluetooth-icon.svg",
    "images/light/bluetooth-enabled-icon.svg",
    "images/light/nightlight-icon.svg",
    "images/light/airplane-icon.svg",

    "images/light/music-icon.svg",
    "images/light/backward-icon.svg",
    "images/light/pause-icon.svg",
    "images/light/forward-icon.svg",
    "images/light/close-icon.svg",
    "images/light/mail-icon.svg",
    "images/light/updates-icon.svg",
    "images/light/arrow-left-icon.svg",
    "images/light/arrow-right-icon.svg",
    "images/light/weather-icon.svg",
    "images/light/weather2-icon.svg",
    "images/light/weather3-icon.svg",
    "images/light/weather4-icon.svg",
    "images/light/weather5-icon.svg",

    "images/light/dot-inactive-icon.svg",

    "images/light/arrow-right-page-icon.svg",
    "images/light/arrow-left-page2-icon.svg",
    "images/light/arrow-right-page2-icon.svg",
    "images/light/arrow-left-page3-icon.svg",

    "images/links/light/github.svg",
    "images/links/light/patreon.svg",
    "images/links/light/reddit.svg",
    "images/links/light/google.svg",

    "images/windows/firefox-light.png",
    "images/windows/files-light.png",

    //dark theme images preload
    "images/dark/wifi-icon-frame.svg",
    "images/dark/volume-icon-frame.svg",
    "images/dark/battery-icon-frame.svg",
    "images/dark/battery-icon.svg",
    "images/dark/screenshot-icon.svg",
    "images/dark/settings-icon.svg",
    "images/dark/lockscreen-icon.svg",
    "images/dark/poweroff-icon.svg",
    "images/dark/volume-icon.svg",
    "images/dark/brightness-icon.svg",
    "images/dark/arrow-icon.svg",
    "images/dark/wifi-icon.svg",
    "images/dark/wifi-disabled-icon.svg",
    "images/dark/power-icon.svg",
    "images/dark/power-saver-icon.svg",
    "images/dark/darkmode-icon.svg",
    "images/dark/bluetooth-icon.svg",
    "images/dark/bluetooth-enabled-icon.svg",
    "images/dark/nightdark-icon.svg",
    "images/dark/airplane-icon.svg",

    "images/dark/music-icon.svg",
    "images/dark/backward-icon.svg",
    "images/dark/pause-icon.svg",
    "images/dark/forward-icon.svg",
    "images/dark/close-icon.svg",
    "images/dark/mail-icon.svg",
    "images/dark/updates-icon.svg",
    "images/dark/arrow-left-icon.svg",
    "images/dark/arrow-right-icon.svg",
    "images/dark/weather-icon.svg",
    "images/dark/weather2-icon.svg",
    "images/dark/weather3-icon.svg",
    "images/dark/weather4-icon.svg",
    "images/dark/weather5-icon.svg",

    "images/dark/dot-inactive-icon.svg",

    "images/dark/arrow-right-page-icon.svg",
    "images/dark/arrow-left-page2-icon.svg",
    "images/dark/arrow-right-page2-icon.svg",
    "images/dark/arrow-left-page3-icon.svg",

    "images/links/dark/github.svg",
    "images/links/dark/patreon.svg",
    "images/links/dark/reddit.svg",
    "images/links/dark/google.svg",

    "images/windows/firefox-dark.png",
    "images/windows/files-dark.png",
];

var images = [];

for (var i = 0; i < imagesToLoad.length; i++) {
    images[i] = new Image();
    images[i].onload = function() {
        console.log(imagesToLoad[i] + " is loaded");
    };
    images[i].src = imagesToLoad[i];
}

let iconColor = true;

iconButton.addEventListener("click", function() {
    iconButton.classList.toggle("clicked");
    if (iconColor) {
        iconColor = false;
        wifiFrameIcon.src = "images/light/wifi-icon-frame.svg";
        volumeFrameIcon.src = "images/light/volume-icon-frame.svg";
        batteryFrameIcon.src = "images/light/battery-icon-frame.svg";

        batteryIcon.src = "images/light/battery-icon.svg";
        screenshotIcon.src = "images/light/screenshot-icon.svg";
        settingsIcon.src = "images/light/settings-icon.svg";
        lockscreenIcon.src = "images/light/lockscreen-icon.svg";
        powerOffIcon.src = "images/light/poweroff-icon.svg";
        volumeIcon.src = "images/light/volume-icon.svg";
        brightnessIcon.src = "images/light/brightness-icon.svg";
        arrowIcon.src = "images/light/arrow-icon.svg";
        wifiIcon.src = "images/light/wifi-icon.svg";
        powerIcon.src = "images/light/power-icon.svg";
        darkmodeIcon.src = "images/light/darkmode-icon.svg";
        bluetoothIcon.src = "images/light/bluetooth-icon.svg";
        nightlightIcon.src = "images/light/nightlight-icon.svg";
        airplaneIcon.src = "images/light/airplane-icon.svg";

        musicIcon.src = "images/light/music-icon.svg";
        backwardIcon.src = "images/light/backward-icon.svg";
        pauseIcon.src = "images/light/pause-icon.svg";
        forwardIcon.src = "images/light/forward-icon.svg";
        mailIcon.src = "images/light/mail-icon.svg";
        updatesIcon.src = "images/light/updates-icon.svg";
        arrowLeftIcon.src = "images/light/arrow-left-icon.svg";
        arrowRightIcon.src = "images/light/arrow-right-icon.svg";
        weatherIcon.src = "images/light/weather-icon.svg";
        weather2Icon.src = "images/light/weather2-icon.svg";
        weather3Icon.src = "images/light/weather3-icon.svg";
        weather4Icon.src = "images/light/weather4-icon.svg";
        weather5Icon.src = "images/light/weather5-icon.svg";

        arrowRightPageIcon.src = "images/light/arrow-right-page-icon.svg";
        arrowLeftPage2Icon.src = "images/light/arrow-left-page2-icon.svg";
        arrowRightPage2Icon.src = "images/light/arrow-right-page2-icon.svg";

        arrowLeftPage3Icon.src = "images/light/arrow-left-page3-icon.svg";
        githubIcon.src = "images/links/light/github.svg";
        patreonIcon.src = "images/links/light/patreon.svg";
        redditIcon.src = "images/links/light/reddit.svg";
        googleIcon.src = "images/links/light/google.svg";

        firefoxIcon.src = "images/windows/firefox-light.png";
        filesIcon.src = "images/windows/files-light.png";
    } else {
        iconColor = true;
        wifiFrameIcon.src = "images/dark/wifi-icon.svg";
        volumeFrameIcon.src = "images/dark/volume-icon-frame.svg";
        batteryFrameIcon.src = "images/dark/battery-icon-frame.svg";

        batteryIcon.src = "images/dark/battery-icon.svg";
        screenshotIcon.src = "images/dark/screenshot-icon.svg";
        settingsIcon.src = "images/dark/settings-icon.svg";
        lockscreenIcon.src = "images/dark/lockscreen-icon.svg";
        powerOffIcon.src = "images/dark/poweroff-icon.svg";
        volumeIcon.src = "images/dark/volume-icon.svg";
        brightnessIcon.src = "images/dark/brightness-icon.svg";
        arrowIcon.src = "images/dark/arrow-icon.svg";
        wifiIcon.src = "images/dark/wifi-icon.svg";
        powerIcon.src = "images/dark/power-icon.svg";
        darkmodeIcon.src = "images/dark/darkmode-icon.svg";
        bluetoothIcon.src = "images/dark/bluetooth-icon.svg";
        nightlightIcon.src = "images/dark/nightlight-icon.svg";
        airplaneIcon.src = "images/dark/airplane-icon.svg";

        musicIcon.src = "images/dark/music-icon.svg";
        backwardIcon.src = "images/dark/backward-icon.svg";
        pauseIcon.src = "images/dark/pause-icon.svg";
        forwardIcon.src = "images/dark/forward-icon.svg";
        mailIcon.src = "images/dark/mail-icon.svg";
        updatesIcon.src = "images/dark/updates-icon.svg";
        arrowLeftIcon.src = "images/dark/arrow-left-icon.svg";
        arrowRightIcon.src = "images/dark/arrow-right-icon.svg";
        weatherIcon.src = "images/dark/weather-icon.svg";
        weather2Icon.src = "images/dark/weather2-icon.svg";
        weather3Icon.src = "images/dark/weather3-icon.svg";
        weather4Icon.src = "images/dark/weather4-icon.svg";
        weather5Icon.src = "images/dark/weather5-icon.svg";

        arrowRightPageIcon.src = "images/dark/arrow-right-page-icon.svg";
        arrowLeftPage2Icon.src = "images/dark/arrow-left-page2-icon.svg";
        arrowRightPage2Icon.src = "images/dark/arrow-right-page2-icon.svg";

        arrowLeftPage3Icon.src = "images/dark/arrow-left-page3-icon.svg";
        githubIcon.src = "images/links/dark/github.svg";
        patreonIcon.src = "images/links/dark/patreon.svg";
        redditIcon.src = "images/links/dark/reddit.svg";
        googleIcon.src = "images/links/dark/google.svg";

        firefoxIcon.src = "images/windows/firefox-dark.png";
        filesIcon.src = "images/windows/files-dark.png";
    }
});