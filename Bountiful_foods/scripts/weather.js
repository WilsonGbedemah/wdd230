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
   // Fetch the three-day forecast data from the OpenWeatherMap API
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=cd716e3725143ae8cd86b17c41e03a2f')
.then(response => response.json())
.then(data => {
    // Extract the temperature data for each of the next three days
    const day1Temp = data.list[0].main.temp;
    const day2Temp = data.list[8].main.temp;
    const day3Temp = data.list[16].main.temp;

    // Convert the temperature values from Kelvin to Fahrenheit
    const day1TempF = ((day1Temp - 273.15) * 1.8 + 32).toFixed(0);
    const day2TempF = ((day2Temp - 273.15) * 1.8 + 32).toFixed(0);
    const day3TempF = ((day3Temp - 273.15) * 1.8 + 32).toFixed(0);

    // Display the temperature values in the HTML document
    document.getElementById('day1').textContent = "Day 1"  + " " + "=" + " " + day1TempF + '°F';
    document.getElementById('day2').textContent = "Day 2"  + " " + "=" + " " + day2TempF + '°F';
    document.getElementById('day3').textContent = "Day 3"  + " " + "=" + " " + day3TempF + '°F';
})
.catch(error => {
    console.error(error);
});

