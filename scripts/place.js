const temperature = 10 // in Celsius
const conditions = "Always Cloudy"
const wind = 10 //In km/h

let calculateWindChill = (temperature, windSpeed) =>  13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

let windChill = 'N/A';

if (temperature <= 10 && wind >= 4.8) {
    let windChill = `${calculateWindChill(temperature, wind)} °C`;
} 

const temperatureElement = document.getElementById('temperature');
const conditionsElement = document.getElementById('conditions');
const windSpeedElement = document.getElementById('windspeed');
const windChillElement= document.getElementById('windchill');

temperatureElement.textContent = `${temperature}°C`;
conditionsElement.textContent = `${conditions}`;
windSpeedElement.textContent = `${wind} km/h`;
windChillElement.textContent = `${windChill}`;