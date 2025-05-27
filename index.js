function submitCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let city = document.querySelector("#city-weather");
  city.innerHTML = searchInput.value;
}
let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", submitCity);

