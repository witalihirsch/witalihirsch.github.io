const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion__title');

    title.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
