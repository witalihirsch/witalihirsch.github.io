window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("content").style.display = "flex";
    }, 2000);
});


var dots = document.querySelectorAll(".loading-dot");

for (var i = 0; i < dots.length; i++) {
    dots[i].style.animationDelay = (i - 1) * 0.1 + "s";
}