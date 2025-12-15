async function getWeather() {
  const city = document.getElementById("city").value.trim();
  const { lat, lon } = await getGeoLocation(city);

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2d7982be340a23ee860e49c029ef8eea

`
  );

  const data = await response.json();

  document.getElementById("weatherReport").innerHTML = 
  `<div>
    <p>Temperature : ${data.main.temp - 273.14}° C</p>
    <p>Humidity : ${data.main.humidity}%</p>
    <p>Description : ${data.weather[0].description}</p>
  </div>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="WeatherIcon" />`;
}

async function getGeoLocation(City) {
  console.log(City);
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${City}&limit=1&appid=2d7982be340a23ee860e49c029ef8eea`
  );

  const data = await response.json();

  const lat = data[0].lat;
  const lon = data[0].lon;

  return { lat, lon };
}
