const API_KEY = "42424fb15926e3ee27885778a40a8bf5"

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then((response) => response.json())
  .then(data => {
    const weather = document.querySelector("#weather .temp span:first-child");
    const temp = document.querySelector("#weather .temp span:nth-child(2)");
    const city = document.querySelector("#weather .city");
    weather.innerText = data.weather[0].main;
    temp.innerText = data.main.temp;
    city.innerText = data.name;
  });
}

function onGeoError() {
  alert("불러올 수 있는 날씨가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);