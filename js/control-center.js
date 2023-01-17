    var hint = document.getElementById('control-center-appear');
    var btn = document.getElementById('toggle');

    btn.addEventListener('click', function() {
        if (hint.style.display == 'none') {
            hint.style.display = 'block';
            window.setTimeout(function() { hint.style.transform = 'scale(1)'; }, 0);
        } else {
            hint.style.transform = 'scale(0)';
            window.setTimeout(function() { hint.style.display = 'none'; }, 50);
        }
    });