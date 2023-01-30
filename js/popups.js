var hintControl = document.getElementById('control-center-appear');
var btnControl = document.getElementById('control-center-button');

btnControl.addEventListener('click', function() {
    if (hintControl.style.display == 'block') {
        hintControl.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintControl.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintControl.style.opacity = '0'; }, 50);
    } else {
        hintControl.style.display = 'block';
        window.setTimeout(function() { hintControl.style.transform = 'translate(0px, 1.5%)'; }, 20);
        window.setTimeout(function() { hintControl.style.opacity = '1'; }, 50);
    }
});

var hintLang = document.getElementById('lang-dialog-appear');
var btnLang = document.getElementById('lang-dialog-button');

btnLang.addEventListener('click', function() {
    if (hintLang.style.display == 'block') {
        hintLang.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintLang.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintLang.style.opacity = '0'; }, 50);
    } else {
        hintLang.style.display = 'block';
        window.setTimeout(function() { hintLang.style.transform = 'translate(0px, 5%)'; }, 20);
        window.setTimeout(function() { hintLang.style.opacity = '1'; }, 50);
    }
});

var hintCalendar = document.getElementById('calendar-appear');
var btnCalendar = document.getElementById('calendar-button');

btnCalendar.addEventListener('click', function() {
    if (hintCalendar.style.display == 'block') {
        hintCalendar.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintCalendar.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintCalendar.style.opacity = '0'; }, 50);
    } else {
        hintCalendar.style.display = 'block';
        window.setTimeout(function() { hintCalendar.style.transform = 'translate(0px, 1%)'; }, 20);
        window.setTimeout(function() { hintCalendar.style.opacity = '1'; }, 50);
    }
});