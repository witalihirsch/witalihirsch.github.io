window.onload = function() {
    slider = document.querySelector(".slider-volume input");
    slider.oninput = function() {
        progressBar = document.querySelector(".slider-volume progress");
        progressBar.value = slider.value;
    }
}

window.onload = function() {
    slider = document.querySelector(".slider-brightness input");
    slider.oninput = function() {
        progressBar = document.querySelector(".slider-brightness progress");
        progressBar.value = slider.value;
    }
}