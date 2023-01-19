var hintControl = document.getElementById('control-center-appear');
var btnControl = document.getElementById('control-center-button');

btnControl.addEventListener('click', function() {
    if (hintControl.style.display == 'block') {
        hintControl.style.transform = 'scale(0)';
        window.setTimeout(function() { hintControl.style.display = 'none'; }, 80);
    } else {
        hintControl.style.display = 'block';
        window.setTimeout(function() { hintControl.style.transform = 'scale(1)'; }, 0);
    }
});

var hintLang = document.getElementById('lang-dialog-appear');
var btnLang = document.getElementById('lang-dialog-button');

btnLang.addEventListener('click', function() {
    if (hintLang.style.display == 'block') {
        hintLang.style.transform = 'scale(0)';
        window.setTimeout(function() { hintLang.style.display = 'none'; }, 80);
    } else {
        hintLang.style.display = 'block';
        window.setTimeout(function() { hintLang.style.transform = 'scale(1)'; }, 0);
    }
});