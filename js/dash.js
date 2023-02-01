var hintFirefox = document.getElementById('firefox-window-appear');
var btnFirefox = document.getElementById('firefox-button');

btnFirefox.addEventListener('click', function() {
    if (hintFirefox.style.display == 'block') {
        hintFirefox.style.transform = 'translate(0px, 0px)';
        window.setTimeout(function() { hintFirefox.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintFirefox.style.opacity = '0'; }, 50);
    } else {
        hintFirefox.style.display = 'block';
        window.setTimeout(function() { hintFirefox.style.transform = 'translate(0px, 0px)'; }, 20);
        window.setTimeout(function() { hintFirefox.style.opacity = '1'; }, 50);
    }
});