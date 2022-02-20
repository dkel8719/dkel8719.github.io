
const API_KEY = 'f3ecd76b5ca01ade5c64b6653870d337'

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}8&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const currentLocation = data.name;
    const weather = data.weather[0].main;
    const temp = data.main.temp;

    const ndList = document.querySelector('.weather-box .box').children
    ndList[0].innerHTML = `🗺 : ${currentLocation}`
    ndList[1].innerHTML = `🛰 : ${weather}`
    ndList[2].innerHTML = `🌡 : ${temp}`
  })
}

function error() {
  return;
}

navigator.geolocation.getCurrentPosition(success,error)
