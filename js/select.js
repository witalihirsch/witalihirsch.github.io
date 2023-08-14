const themeSwitcher = document.querySelector('.theme');
const langSwitcher = document.querySelector('.lang');

const systemButton = themeSwitcher.querySelector('#system-button');
const lightButton = themeSwitcher.querySelector('#light-button');
const darkButton = themeSwitcher.querySelector('#dark-button');

const en = langSwitcher.querySelector('.en');
const ru = langSwitcher.querySelector('.ru');

let currentTheme = localStorage.getItem('theme') || 'system';
let currentLang = localStorage.getItem('lang') || 'en';

if (currentTheme === 'system') {
    systemButton.classList.add('active');
} else if (currentTheme === 'light') {
    lightButton.classList.add('active');
} else {
    darkButton.classList.add('active');
}

if (currentLang === 'en') {
    en.classList.add('active');
} else {
    ru.classList.add('active');
}

systemButton.addEventListener('click', () => {
    systemButton.classList.add('active');
    lightButton.classList.remove('active');
    darkButton.classList.remove('active');

    currentTheme = 'system';
    localStorage.setItem('theme', currentTheme);
});

lightButton.addEventListener('click', () => {
    lightButton.classList.add('active');
    systemButton.classList.remove('active');
    darkButton.classList.remove('active');

    currentTheme = 'light';
    localStorage.setItem('theme', currentTheme);
});

darkButton.addEventListener('click', () => {
    darkButton.classList.add('active');
    systemButton.classList.remove('active');
    lightButton.classList.remove('active');

    currentTheme = 'dark';
    localStorage.setItem('theme', currentTheme);
});


en.addEventListener('click', () => {
    en.classList.add('active');
    ru.classList.remove('active');

    currentLang = 'en';
    localStorage.setItem('lang', currentLang);
});

ru.addEventListener('click', () => {
    ru.classList.add('active');
    en.classList.remove('active');

    currentLang = 'ru';
    localStorage.setItem('lang', currentLang);
});