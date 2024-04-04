window.addEventListener('scroll', function() {
    requestAnimationFrame(function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var newTopPosition = 50 - scrollPosition / (windowHeight / 2) * 40;
        var newHeight;

        if (newTopPosition < 10) {
            newTopPosition = 10;
            newHeight = 100;
        } else {
            var scrollPercentage = (50 - newTopPosition) / 40;
            newHeight = 300 - (300 - 100) * scrollPercentage;
        }

        document.querySelector('.model__frame').style.top = newTopPosition + '%';
        document.querySelector('.model').style.height = newHeight + 'px';
    });
});