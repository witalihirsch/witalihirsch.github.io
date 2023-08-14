var shape1 = document.querySelector(".shape1");

shape1.dataset.width = shape1.offsetWidth;

var timeFly1 = random(0.4, 0.8);

TweenMax.to(shape1, timeFly1, {
    morphSVG: "#shapefly1",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.07,
    ease: Power3.easeOut
});

var wrapperShape = document.querySelector(".about");

var width = wrapperShape.offsetWidth;
var height = wrapperShape.offsetHeight;

shape1.style.transformOrigin = "-50% -50%";

var dx = width * 0.4;
var dy = height * 0.5;

tweenProperty(shape1, "scale", 0.2, 0.8);
tweenProperty(shape1, "x", -dx, dx);
tweenProperty(shape1, "y", -dy, dy);

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