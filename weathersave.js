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





// Form.jS//
  async function getfruitsData() {
    const response = await fetch("./scripts/fruit.json");
    const data = await response.json();
    const mp = new Map()
    data.forEach((item) => {
        mp.set(item.name.toUpperCase(), {
            nutritions: item.nutritions
        })
    });

    return mp

}

document.getElementById('fill');
const productForm = document.getElementById('fill');
productForm.addEventListener('submit', (event) => {
    
    event.preventDefault()
    const data = new FormData(productForm)
    const firstName = data.get('fname')
    const email = data.get('email')
    const number = data.get('phone')
    const firstFruit = data.get('fruits')
    const secondFruit = data.get('fruits1')
    const thirdFruit = data.get('fruits2')
    const instructions = data.get('instructions')


    getfruitsData().then((data) => {
        

        const display = document.getElementById('output')
        const output = {
            'Personal Information':{
                firstName,
                email,
                number,
            },
            
            'first fruit selected': {
                name: firstFruit,
                'Fruit nutrients': data.get(firstFruit.toUpperCase())
            },

            'second fruit selected': {
                name: secondFruit,
                'Fruit nutrients': data.get(secondFruit.toUpperCase())
            },

            'third fruit selected': {
                name: thirdFruit,
                'Fruit nutrients': data.get(thirdFruit.toUpperCase())
            },

            instructions,
            date: (new Date()).toDateString()
        }

        display.textContent = JSON.stringify(output, null, 4)


    })
})
  