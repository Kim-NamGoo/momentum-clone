function geoRun(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d515f671df6558dcb5c22c8117d1e392&units=metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const locateBox = document.querySelector(
        "#weather-container span:nth-of-type(1)"
      );
      const weatherBox = document.querySelector(
        "#weather-container span:nth-of-type(2)"
      );

      const locateName = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;

      locateBox.innerText = `${locateName} ${Math.round(temp)}'C`;
      weatherBox.innerText = weather;
    });
}
function geoErr() {
  alert("Failed to upload Geolocation");
}

navigator.geolocation.getCurrentPosition(geoRun, geoErr);
