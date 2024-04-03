var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: ".arrow__right",
        prevEl: ".arrow__left",
    },
    on: {
        reachEnd: function() {
            if (this.isEnd) {
                document.querySelector(".arrow__right").classList.add("arrow__disabled");
            }
        },
        reachBeginning: function() {
            if (this.isBeginning) {
                document.querySelector(".arrow__left").classList.add("arrow__disabled");
            }
        },
        fromEdge: function() {
            document.querySelector(".arrow__left").classList.remove("arrow__disabled");
            document.querySelector(".arrow__right").classList.remove("arrow__disabled");
        },
        transitionEnd: function() {
            if (this.isEnd) {
                document.querySelector(".arrow__right").classList.add("arrow__disabled");
            } else {
                document.querySelector(".arrow__right").classList.remove("arrow__disabled");
            }
            if (this.isBeginning) {
                document.querySelector(".arrow__left").classList.add("arrow__disabled");
            } else {
                document.querySelector(".arrow__left").classList.remove("arrow__disabled");
            }
        },
    }
});



var swiper = new Swiper(".myWebSwiper", {
    slidesPerView: 'auto',
    // spaceBetween: 20,
    grabCursor: true,
    loop: false,
    navigation: {
        nextEl: ".arrow__right-web",
        prevEl: ".arrow__left-web",
    },
    on: {
        reachEnd: function() {
            if (this.isEnd) {
                document.querySelector(".arrow__right-web").classList.add("arrow__disabled");
            }
        },
        reachBeginning: function() {
            if (this.isBeginning) {
                document.querySelector(".arrow__left-web").classList.add("arrow__disabled");
            }
        },
        fromEdge: function() {
            document.querySelector(".arrow__left-web").classList.remove("arrow__disabled");
            document.querySelector(".arrow__right-web").classList.remove("arrow__disabled");
        },
        transitionEnd: function() {
            if (this.isEnd) {
                document.querySelector(".arrow__right-web").classList.add("arrow__disabled");
            } else {
                document.querySelector(".arrow__right-web").classList.remove("arrow__disabled");
            }
            if (this.isBeginning) {
                document.querySelector(".arrow__left-web").classList.add("arrow__disabled");
            } else {
                document.querySelector(".arrow__left-web").classList.remove("arrow__disabled");
            }
        },
    }
});