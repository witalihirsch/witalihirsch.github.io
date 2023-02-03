var projectCenter = document.getElementById('project-center-frame');

projectCenter.addEventListener('click', function() {
    hintControl.style.display = 'none';
    hintCalendar.style.display = 'none';
    hintLang.style.display = 'none';
})

var hintControl = document.getElementById('control-center-appear');
var btnControl = document.getElementById('control-center-button');

btnControl.addEventListener('click', function() {
    if (hintControl.style.display == 'block') {
        hintLang.style.display = 'none';
        hintCalendar.style.display = 'none';
        hintControl.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintControl.style.display = 'none'; }, 50);
        window.setTimeout(function() { hintControl.style.opacity = '0'; }, 100);
    } else {
        hintControl.style.display = 'block';
        hintLang.style.display = 'none';
        hintCalendar.style.display = 'none';
        window.setTimeout(function() { hintControl.style.transform = 'translate(0px, 1.5%)'; }, 50);
        window.setTimeout(function() { hintControl.style.opacity = '1'; }, 100);
    }
});

var hintLang = document.getElementById('lang-dialog-appear');
var btnLang = document.getElementById('lang-dialog-button');

btnLang.addEventListener('click', function() {
    if (hintLang.style.display == 'block') {
        hintControl.style.display = 'none';
        hintCalendar.style.display = 'none';
        hintLang.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintLang.style.display = 'none'; }, 50);
        window.setTimeout(function() { hintLang.style.opacity = '0'; }, 100);
    } else {
        hintControl.style.display = 'none';
        hintCalendar.style.display = 'none';
        hintLang.style.display = 'block';
        window.setTimeout(function() { hintLang.style.transform = 'translate(0px, 5%)'; }, 50);
        window.setTimeout(function() { hintLang.style.opacity = '1'; }, 100);
    }
});

var hintCalendar = document.getElementById('calendar-appear');
var btnCalendar = document.getElementById('calendar-button');

btnCalendar.addEventListener('click', function() {
    if (hintCalendar.style.display == 'block') {
        hintLang.style.display = 'none';
        hintControl.style.display = 'none';
        hintCalendar.style.transform = 'translate(-50%, 1%)';
        window.setTimeout(function() { hintCalendar.style.display = 'none'; }, 50);
        window.setTimeout(function() { hintCalendar.style.opacity = '0'; }, 100);
    } else {
        hintLang.style.display = 'none';
        hintControl.style.display = 'none';
        hintCalendar.style.display = 'block';
        window.setTimeout(function() { hintCalendar.style.transform = 'translate(-50%, 1%)'; }, 50);
        window.setTimeout(function() { hintCalendar.style.opacity = '1'; }, 100);
    }
});