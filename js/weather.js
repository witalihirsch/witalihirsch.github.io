async function getWeather() {
    const city = await getCity();

    const apiKey = "921ff53f10100c24957c6387f91b96c4";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const cityDiv = document.getElementById("weather-city");
    cityDiv.innerHTML = `${city}`;

    for (let i = 0; i < 5; i++) {
        const temperature = data.list[i].main.temp - 273.15;
        const roundedTemperature = Math.floor(temperature);

        const temperatureDiv = document.getElementById(`weather-temp${i + 1}`);
        temperatureDiv.innerHTML = roundedTemperature + "&deg;";
    }
}

async function getCity() {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    return data.city;
}

getWeather();