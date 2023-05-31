const headerLinks = document.querySelectorAll('nav a[href^="#"]');

function highlightLink() {
    const currentScrollPos = window.pageYOffset;
    headerLinks.forEach(link => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        const targetTop = target.offsetTop;
        const targetHeight = target.offsetHeight;
        if (currentScrollPos >= targetTop && currentScrollPos < targetTop + targetHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightLink);
window.addEventListener('load', highlightLink);



