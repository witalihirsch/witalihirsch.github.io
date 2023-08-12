const switcher = document.querySelector('.switcher');
const en = switcher.querySelector('.en');
const ru = switcher.querySelector('.ru');

let currentLang = localStorage.getItem('currentLang') || 'en';

if (currentLang === 'en') {
  en.classList.add('active');
  ru.classList.remove('active');
} else {
  ru.classList.add('active');
  en.classList.remove('active');
}

en.addEventListener('click', () => {
  en.classList.add('active');
  ru.classList.remove('active');
  currentLang = 'en';
  localStorage.setItem('currentLang', currentLang);
});

ru.addEventListener('click', () => {
  ru.classList.add('active');
  en.classList.remove('active');
  currentLang = 'ru';
  localStorage.setItem('currentLang', currentLang);
});
