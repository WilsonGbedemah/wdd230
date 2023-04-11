// select HTML elements in the documnet
const currentTemp = document.querySelector("#current-temp");
const humidity = document.querySelector("#humidity"); 
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//calling weather API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=cd716e3725143ae8cd86b17c41e03a2f';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    humidity.innerHTML = `<strong>${weatherData.main.humidity}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

  }

    // Call the three-day forecast API to get forecast data
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=cd716e3725143ae8cd86b17c41e03a2f';
    fetch(forecastUrl)
      .then((response) => response.json())
      .then((data) => {
        const forecast = data.list;
        forecast.forEach((day, index) => {
          const temp = day.temp.day.toFixed(0) + "°F";
          const condition = day.weather[0].description;
          document.getElementById(`day${index+1}`).textContent = `${temp}, ${condition}`;
        });
      })
      .catch((error) => console.log(error));