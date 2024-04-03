window.addEventListener('scroll', function() {
    requestAnimationFrame(function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var newTopPosition = 50 - scrollPosition / (windowHeight / 2) * 40;
        var newHeight;

        if (newTopPosition < 10) {
            newTopPosition = 10;
            newHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--model-max'));
        } else {
            var scrollPercentage = (50 - newTopPosition) / 40;
            newHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--model-max')) - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--model-max')) - parseInt(getComputedStyle(document.documentElement).getPropertyValue('--model-min'))) * scrollPercentage;
        }

        document.querySelector('.model__frame').style.top = newTopPosition + '%';
        document.querySelector('.model').style.height = newHeight + 'px';
    });
});