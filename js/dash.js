const hintFirefox = document.getElementById('firefox-window-appear');
const btnFirefox = document.getElementById('firefox-button');

const hintFiles = document.getElementById('files-window-appear');
const btnFiles = document.getElementById('files-button');

btnFirefox.addEventListener('click', function() {
    if (hintFirefox.style.display == 'block') {
        hintFirefox.style.transform = 'translate(0, 0)';
        window.setTimeout(function() { hintFirefox.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintFirefox.style.opacity = '0'; }, 50);
    } else {
        hintFirefox.style.display = 'block';
        window.setTimeout(function() { hintFirefox.style.transform = 'translate(0, 0)'; }, 20);
        window.setTimeout(function() { hintFirefox.style.opacity = '1'; }, 50);
    }
});

btnFiles.addEventListener('click', function() {
    if (hintFiles.style.display == 'block') {
        hintFiles.style.transform = 'translate(0, 0)';
        window.setTimeout(function() { hintFiles.style.display = 'none'; }, 20);
        window.setTimeout(function() { hintFiles.style.opacity = '0'; }, 50);
    } else {
        hintFiles.style.display = 'block';
        window.setTimeout(function() { hintFiles.style.transform = 'translate(0, 0)'; }, 20);
        window.setTimeout(function() { hintFiles.style.opacity = '1'; }, 50);
    }
});