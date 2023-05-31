window.addEventListener("scroll", function() {
    var scroll = document.querySelector(".back-to-top");
    var thirdSection = document.querySelector("#about");
    var thirdSectionOffset = thirdSection.offsetTop;
    var scrollPosition = window.scrollY || window.pageYOffset;

    scroll.classList.toggle("active", scrollPosition > thirdSectionOffset - 1);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
