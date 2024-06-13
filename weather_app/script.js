const apiKey = "e0f673ce6c82c0d88c26a0e9c361a168";
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=&lon=&appid=e0f673ce6c82c0d88c26a0e9c361a168`;
// https://api.openweathermap.org/data/2.5/weather?units=metric&q=
const searchBox = document.body.querySelector(".input");
const searchBtn = document.body.querySelector(".btn");
const weatherIcon = document.body.querySelector(".weather-icon");

function success(pos) {
  lat = pos.coords.latitude;
  lng = pos.coords.longitude;
  console.log(lat, lng);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e0f673ce6c82c0d88c26a0e9c361a168`;

  async function checkWeather(city) {
    const respone = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await respone.json();

    console.log(data);

    document.body.querySelector(".city").innerHTML = data.name;
    document.body.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.body.querySelector(".humidity").innerHTML =
      data.main.humidity + "%";
    document.body.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Wind") {
      weatherIcon.src = "images/wind.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else {
      weatherIcon.src = "images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
}

function error(err) {
  if (err) {
    console.log("hello");
  }
}
navigator.geolocation.getCurrentPosition(success, error);
