// Replace with your own API keys
const OPENWEATHERMAP_API_KEY = '999dcb9f13f28dd7a7d55a5332cc9147';
const TOMTOM_API_KEY = 'zLi3n3UuhMN7qx2do8PRV3m50VHN9pg1';

// Get the user's location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeatherData(latitude, longitude);
    getTrafficData(latitude, longitude);
}

function error() {
    document.getElementById('weather-data').textContent = 'Unable to retrieve location.';
    document.getElementById('traffic-data').textContent = 'Unable to retrieve location.';
}
const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

// Fetch weather data from OpenWeatherMap
function getWeatherData(lat, lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=$999dcb9f13f28dd7a7d55a5332cc9147&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weather = `${data.name}: ${data.weather[0].description}, ${data.main.temp}°C`;
            document.getElementById('weather-data').textContent = weather;
        })
        .catch(() => {
            document.getElementById('weather-data').textContent = 'Error fetching weather data.';
        });
}

// Fetch traffic data from TomTom
function getTrafficData(lat, lon) {
    const trafficUrl = `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/10/json?point=${lat},${lon}&key=$zLi3n3UuhMN7qx2do8PRV3m50VHN9pg1`;

    fetch(trafficUrl)
        .then(response => response.json())
        .then(data => {
            const traffic = `Traffic: ${data.flowSegmentData.currentSpeed} km/h (Free Flow: ${data.flowSegmentData.freeFlowSpeed} km/h)`;
            document.getElementById('traffic-data').textContent = traffic;
        })
        .catch(() => {
            document.getElementById('traffic-data').textContent = 'Error fetching traffic data.';
        });
}


