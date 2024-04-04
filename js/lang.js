const translations = {
    en: {
        title: 'Hello!',
        edu: 'Education',
        eduP: 'Siberian State University of Geosystems and Technologies (Bachelor’s degree)',
        soft: 'Software',
        lang: 'Languages',
        lang1: 'Russian (native)',
        lang2: 'English (B2)',
        name: 'My name is Vitaly Hirsch.',
        about: 'I’m UI/UX Designer',
        stages: 'stages',
        stage1: 'Introduction and brief',
        stage1p: 'We discuss the project with you - what scope of the website is needed, what problem it will solve, and other details.',
        stage2: 'Analysis',
        stage2p: 'I conduct an analysis of your market, target audience, and competitors. Based on this analysis, I develop the overall structure of the website.',
        stage3: 'Prototyping',
        stage3p: 'This stage helps to understand where the photo and textual content will be placed on the website and evaluate the comfort of block arrangement.',
        stage4: 'Website design style',
        stage4p: 'I gather references based on your request. I search for fonts, select a color palette, and develop a cohesive overall style for the website.',
        stage5: 'Design concept',
        stage5p: 'I merge the prototype with the previously approved style and create the final version of the website.',
        stage6: 'Project handover',
        stage6p: 'I hand over the project to you, and the price will also include layout control to ensure that the design corresponds to reality.',
        project: 'tell me about your project',
        feedback: "Drop your info, and I'll hit you up",
        telegram: 'Telegram:',
        email: 'Email:',
        telegram__link: 'Telegram',
        email__link: 'Email',
        figma__link: 'Figma',
        behance__link: 'Behance',
        available: "I'm always available, you can choose a convenient way to get in touch with me and describe your project for discussion",
        more: 'See more',
        works: 'Websites',
        work: 'Works',
        this: 'And this :)',
        email__input: 'Email',
        message__input: 'Message (optional)',
        submit__btn: 'Send',
        theme__system: 'system',
        theme__light: 'light',
        theme__dark: 'dark',
        website: 'Website',
    },

    ru: {
        title: 'Hello!',
        edu: 'Образование',
        eduP: 'Сибирский Государственный Университет Геосистем и Технологий (Бакалавриат)',
        soft: 'Софт',
        lang: 'Языки',
        lang1: 'Русский (родной)',
        lang2: 'Английский (B2)',
        name: 'Меня зовут Виталий Хирш.',
        about: 'Я UI/UX Дизайнер',
        stages: 'Этапы',
        stage1: 'Знакомство и бриф',
        stage1p: 'Обсуждаем с вами проект - какой объем сайта нужен, какую проблему он будет решать и другие детали.',
        stage2: 'Анализ',
        stage2p: 'Анализирую вашу нишу, целевую аудиторию и конкурентов. Разрабатываю структуру всего сайта.',
        stage3: 'Прототипирование',
        stage3p: 'Этот этап помогает понять где будет распалогаться фото и текстовый контент на сайте и оценить комфортность расположения блоков.',
        stage4: 'Стиль сайта',
        stage4p: 'Собираю референсы под ваш запрос. Ищу шрифты, подбираю цветовую палитру и разрабатываю общий единый стиль сайта.',
        stage5: 'Дизайн концепция',
        stage5p: 'Объеденяю прототип с одобренным ранее стилем и рисую финальную версию сайта.',
        stage6: 'Передача проекта',
        stage6p: 'Я передаю вам проект, в цену также будет входить контроль верстки, чтобы дизайн соответствовал реальности.',
        project: 'расскажите о своем проекте',
        feedback: "Оставьте ваши контактные данные, и я свяжусь с вами",
        telegram: 'Телеграм:',
        email: 'Почта:',
        telegram__link: 'Телеграм',
        email__link: 'Почта',
        figma__link: 'Фигма',
        behance__link: 'Биханс',
        available: "Я всегда на связи, вы можете выбрать удобный способ связи со мной и описать свой проект для обсуждения",
        more: 'Подробнее',
        works: 'Сайты',
        work: 'Работы',
        this: 'И этот :)',
        email__input: 'Почта',
        message__input: 'Сообщение',
        submit__btn: 'Отправить',
        theme__system: 'система',
        theme__light: 'светлый',
        theme__dark: 'темный',
        website: 'Сайт',
    }
};

const languageSelect = document.querySelector('.lang');

languageSelect.addEventListener('click', function(event) {
    if (event.target.classList.contains('en') || event.target.classList.contains('ru')) {
        const selectedLanguage = event.target.classList[0];
        updateContent(selectedLanguage);
        currentLang = selectedLanguage;
        localStorage.setItem('currentLang', currentLang);
    }
});


function updateContent(language) {
    const elementsToUpdate = document.querySelectorAll('[data-translate]');

    elementsToUpdate.forEach(element => {
        const translationKey = element.getAttribute('data-translate');

        if (translations[language] && translations[language][translationKey]) {
            element.textContent = translations[language][translationKey];
        }
    });
}

updateContent(currentLang);