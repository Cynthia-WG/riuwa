function displayWeather(response) {
  let temperatureElement = document.querySelector("#city-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city-weather");
  let descriptionELement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");
  let iconUrl = response.data.condition.icon_url;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  console.log(response.data);
  city.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionELement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;

  windElement.innerHTML = `${Math.round(response.data.wind.speed)}`;
  temperatureElement.innerHTML = `${temperature}`;

  iconElement.innerHTML = `<img src="${iconUrl}" alt="${description}" class="weather-icon" />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}
function searchCity(city) {
  let apiKey = "36870e7a7a8911t30o6cf5301344fcb8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-weather");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitCity);

searchCity("Cairo");
