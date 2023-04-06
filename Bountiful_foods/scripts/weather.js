const currentTemp = document.querySelector("#current-temp");
    const humidity = document.querySelector("#humidity"); 
    const weatherIcon = document.querySelector("#weather-icon");
    const captionDesc = document.querySelector("#caption");

    // Call the weather API to get current weather data
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=cbb75e3ad4b983fa8c50040912f45114";
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((data) => {
        currentTemp.textContent = data.main.temp.toFixed(0) + "°F";
        humidity.textContent = data.main.humidity + "%";
        weatherIcon.setAttribute("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
        captionDesc.textContent = data.weather[0].description;
      })
      .catch((error) => console.log(error));

    // Call the three-day forecast API to get forecast data
    const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad,California&units=imperial&cnt=3&appid=cbb75e3ad4b983fa8c50040912f45114";
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