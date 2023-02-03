navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    function displayWeather(data) {
        const city = document.querySelector('#weather-city');
        city.innerText = `${data.name}`;

        const temperature1 = document.querySelector('#weather-temp1');
        const temperature2 = document.querySelector('#weather-temp2');
        const temperature3 = document.querySelector('#weather-temp3');
        const temperature4 = document.querySelector('#weather-temp4');
        const temperature5 = document.querySelector('#weather-temp5');

        temperature1.innerText = `${Math.floor(data.main.temp)}°`;
        temperature2.innerText = `${Math.floor(data.main.temp)}°`;
        temperature3.innerText = `${Math.floor(data.main.temp)}°`;
        temperature4.innerText = `${Math.floor(data.main.temp)}°`;
        temperature5.innerText = `${Math.floor(data.main.temp)}°`;
    }

    const API_KEY = '921ff53f10100c24957c6387f91b96c4';
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric" + "&appid=" + API_KEY;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error(error));

});