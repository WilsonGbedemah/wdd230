// select HTML elements in the documnet
const currentTemp = document.querySelector("#current-temp");
const windSpeed = document.querySelector("#windSpeed"); 
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

//calling weather API URL
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Accra&units=imperial&appid=cd716e3725143ae8cd86b17c41e03a2f';

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
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`;

  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;


    //Windchill JavaScript in fahrenheit//
const t = weatherData.main.temp;
const s = weatherData.wind.speed;
const f = 35.74 + 0.6215*t - 35.75*(Math.pow(s,0.16)) + 0.4275*t*(Math.pow(s,0.16))
if (t<=50 && s>3.0){
        windchill=f.toFixed(2);
    }
else{
    windchill = "N/A";
}
document.getElementById('windChill').innerHTML = windchill;

 }



