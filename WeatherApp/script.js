const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "68d16905e4msh7755e13402f176ep1f5f18jsn99ccb3d82956",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const form = document.querySelector(" form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// console.log(search.)

const api_key = `68d16905e4msh7755e13402f176ep1f5f18jsn99ccb3d82956`;

const getWeather = async (city) => {
  const response = await fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  );
  // .then((response) => response.json())
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));

  const data = await response.json();
  return showWeather(data);
};

const showWeather = (data) => {
  console.log(data);
  weather.innerHTML = `
  <h2>${data.temp} ℃</h2>
 <h2>Wind Speed : <span>${data.wind_speed}</span> km/h</h2>
        <h2>Humidity : <span>${data.humidity}</span> %</h2>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(search.value);
  search.value = "";
});
