const powerButton = document.getElementById("power-button");
const bluetoothButton = document.getElementById("bluetooth-button");
const airplaneButton = document.getElementById("airplane-button");

const wifiButton = document.getElementById("wifi-button");
const nightlightButton = document.getElementById("nightlight-button");
const darkmodeButton = document.getElementById("darkmode-button");

const powerIcon = document.getElementById("power-icon");
const bluetoothIcon = document.getElementById("bluetooth-icon");
const wifiIcon = document.getElementById("wifi-icon");

const powerText = document.getElementById("power-text");

let powerColor = true;
let bluetoothColor = true;
let airplaneColor = true;

let wifiColor = true;
let nightlightColor = true;
let darkmodeColor = true;

powerButton.addEventListener("click", function() {
    if (powerColor) {
        powerButton.style.backgroundColor = "#1B82B3";
        powerText.textContent = "Power Saver";
        powerIcon.src = "images/power-saver-icon.svg";
        powerColor = false;

    } else {
        powerButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        powerText.textContent = "Balanced";
        powerIcon.src = "images/power-icon.svg";
        powerColor = true;
    }
});

bluetoothButton.addEventListener("click", function() {
    if (bluetoothColor) {
        bluetoothButton.style.backgroundColor = "#1B82B3";
        bluetoothIcon.src = "images/bluetooth-enabled-icon.svg";
        bluetoothColor = false;

    } else {
        bluetoothButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        bluetoothIcon.src = "images/bluetooth-icon.svg";
        bluetoothColor = true;
    }
});

airplaneButton.addEventListener("click", function() {
    if (airplaneColor) {
        airplaneButton.style.backgroundColor = "#1B82B3";
        airplaneColor = false;

    } else {
        airplaneButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        airplaneColor = true;
    }
});

wifiButton.addEventListener("click", function() {
    if (wifiColor) {
        wifiButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        wifiIcon.src = "images/wifi-disabled-icon.svg";
        wifiColor = false;

    } else {
        wifiButton.style.backgroundColor = "#1B82B3";
        wifiIcon.src = "images/wifi-icon.svg";
        wifiColor = true;
    }
});

nightlightButton.addEventListener("click", function() {
    if (nightlightColor) {
        nightlightButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        nightlightColor = false;

    } else {
        nightlightButton.style.backgroundColor = "#1B82B3";
        nightlightColor = true;
    }
});

darkmodeButton.addEventListener("click", function() {
    if (darkmodeColor) {
        darkmodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        darkmodeColor = false;

    } else {
        darkmodeButton.style.backgroundColor = "#1B82B3";
        darkmodeColor = true;
    }
});

powerButton.onmouseover = function() {
    if (powerColor) {
        powerButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    } else {
        powerButton.style.backgroundColor = "#2094C9";
    }
}

powerButton.onmouseout = function() {
    if (powerColor) {
        powerButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    } else {
        powerButton.style.backgroundColor = "#1B82B3";
    }
}

bluetoothButton.onmouseover = function() {
    if (bluetoothColor) {
        bluetoothButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    } else {
        bluetoothButton.style.backgroundColor = "#2094C9";
    }
}

bluetoothButton.onmouseout = function() {
    if (bluetoothColor) {
        bluetoothButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    } else {
        bluetoothButton.style.backgroundColor = "#1B82B3";
    }
}

airplaneButton.onmouseover = function() {
    if (airplaneColor) {
        airplaneButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    } else {
        airplaneButton.style.backgroundColor = "#2094C9";
    }
}

airplaneButton.onmouseout = function() {
    if (airplaneColor) {
        airplaneButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    } else {
        airplaneButton.style.backgroundColor = "#1B82B3";
    }
}

wifiButton.onmouseover = function() {
    if (wifiColor) {
        wifiButton.style.backgroundColor = "#2094C9";
    } else {
        wifiButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
}

wifiButton.onmouseout = function() {
    if (wifiColor) {
        wifiButton.style.backgroundColor = "#1B82B3";
    } else {
        wifiButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    }
}

nightlightButton.onmouseover = function() {
    if (nightlightColor) {
        nightlightButton.style.backgroundColor = "#2094C9";
    } else {
        nightlightButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
}

nightlightButton.onmouseout = function() {
    if (nightlightColor) {
        nightlightButton.style.backgroundColor = "#1B82B3";
    } else {
        nightlightButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    }
}

darkmodeButton.onmouseover = function() {
    if (darkmodeColor) {
        darkmodeButton.style.backgroundColor = "#2094C9";
    } else {
        darkmodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    }
}

darkmodeButton.onmouseout = function() {
    if (darkmodeColor) {
        darkmodeButton.style.backgroundColor = "#1B82B3";
    } else {
        darkmodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
    }
}

powerButton.addEventListener("mousedown", function() {
    if (powerColor) {
        powerButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    } else {
        powerButton.style.backgroundColor = "#1B82B3";
    }
})

bluetoothButton.addEventListener("mousedown", function() {
    if (bluetoothColor) {
        bluetoothButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    } else {
        bluetoothButton.style.backgroundColor = "#1B82B3";
    }
})

airplaneButton.addEventListener("mousedown", function() {
    if (airplaneColor) {
        airplaneButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    } else {
        airplaneButton.style.backgroundColor = "#1B82B3";
    }
})

wifiButton.addEventListener("mousedown", function() {
    if (wifiColor) {
        wifiButton.style.backgroundColor = "#1B82B3";
    } else {
        wifiButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    }
})

nightlightButton.addEventListener("mousedown", function() {
    if (nightlightColor) {
        nightlightButton.style.backgroundColor = "#1B82B3";
    } else {
        nightlightButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    }
})

darkmodeButton.addEventListener("mousedown", function() {
    if (darkmodeColor) {
        darkmodeButton.style.backgroundColor = "#1B82B3";
    } else {
        darkmodeButton.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
    }
})