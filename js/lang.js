function displayFullLanguage() {
    const langCode = navigator.language || navigator.userLanguage;
    const dateTimeFormat = new Intl.DateTimeFormat(langCode);
    const languageName = dateTimeFormat.resolvedOptions().locale.split("-")[0];
    document.getElementById("current-lang-frame").innerHTML = languageName;
    document.getElementById("current-lang").innerHTML = languageName;
}

displayFullLanguage();

const languageCode = window.navigator.language || window.navigator.userLanguage;
const languageMap = {
    "en": "English",
    "en-US": "English",
    "fr": "French",
    "fr-FR": "French",
    "de": "German",
    "de-DE": "German",
    "es": "Spanish",
    "es-ES": "Spanish",
    "it": "Italian",
    "it-IT": "Italian",
    "ja": "Japanese",
    "ja-JP": "Japanese",
    "zh": "Chinese",
    "zh-CN": "Chinese",
    "zh-TW": "Chinese",
    "pt": "Portuguese",
    "pt-PT": "Portuguese",
    "pt-BR": "Portuguese",
    "ru": "Russian",
    "ru-RU": "Russian",
    "nl": "Dutch",
    "nl-NL": "Dutch",
    "kk": "Kazakh",
    "kk-KZ": "Kazakh",
    "ko": "Korean",
    "ko-KR": "Korean"
};
const language = languageMap[languageCode] || "English";

document.getElementById("current-lang-full").innerHTML = language;