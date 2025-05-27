function displayWeather(response) {
  let temperatureElement = document.querySelector("#city-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city-weather");
  city.innerHTML = response.data.city;
  temperatureElement.innerHTML = `${temperature}`;
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
