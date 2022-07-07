function displayTemperature(response) {
     let windElement = document.querySelector("#wind");
   windElement.innerHTML = Math.round(response.data.wind.speed);
     let humidityElement = document.querySelector("#humidity");
   humidityElement.innerHTML = response.data.main.humidity;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
}




let apiKey = "d50daaabbd98c5b47ef6ff59824a0d1e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;


axios(apiUrl).then(displayTemperature);