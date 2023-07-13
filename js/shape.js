var shape = document.querySelector(".shape");

shape.dataset.width = shape.offsetWidth;

var timeFly = random(0.4, 0.8);

TweenMax.to(shape, timeFly, {
    morphSVG: "#shapefly",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.07,
    ease: Power3.easeOut
});

var wrapperShape = document.querySelector(".about");

var width = wrapperShape.offsetWidth;
var height = wrapperShape.offsetHeight;

shape.style.transformOrigin = "-50% -50%";
var dx = width * 0.4;
var dy = height * 0.5;

tweenProperty(shape, "scale", 0.2, 0.8);
tweenProperty(shape, "x", -dx, dx);
tweenProperty(shape, "y", -dy, dy);

function tweenProperty(target, prop, min, max) {
    TweenLite.to(target, random(3, 6), {
        [prop]: random(min, max),
        ease: Sine.easeInOut,
        onComplete: function() {
            tweenProperty(target, prop, min, max);
        }
    });
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    return Math.random() * (max - min) + min;
}