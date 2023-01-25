var iconButton = document.querySelector(".darkmode-frame");

const batteryIcon = document.getElementById("battery-icon");
const batteryFrameIcon = document.getElementById("battery-icon-frame");

var metaSafari = document.getElementsByName("theme-color");

let iconColor = true;

iconButton.addEventListener("click", function() {
    iconButton.classList.toggle("clicked");
    if (iconColor) {
        iconColor = false;
        batteryFrameIcon.src = "images/light/battery-icon-frame.svg";
        batteryIcon.src = "images/light/battery-icon.svg";
        metaSafari.setAttribute('content', '#59819E');

    } else {
        iconColor = true;
        batteryFrameIcon.src = "images/dark/battery-icon-frame.svg";
        batteryIcon.src = "images/dark/battery-icon.svg";
        metaSafari.setAttribute('content', '#15293C');
    }
});