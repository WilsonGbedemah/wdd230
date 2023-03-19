async function getBusinessesData() {
    const response = await fetch("JSON/data.json");
    const data = await response.json();
    displaySpotlights(data.businesses);
}

async function displaySpotlights(businesses) {
    const spotlight1 = document.querySelector(".spot1");
    const spotlight2 = document.querySelector(".spot2");
    const spotlight3 = document.querySelector("#spot3");
    let adMembers = [];

    businesses.forEach((business) => {
        if (business.membershipLevel == "Gold" || business.membershipLevel == "Silver")
        {
            adMembers.push(business);
        }
    })
    
    shuffleArray(adMembers);
    //Spotlight 1
    let chosenSpotlight = adMembers.pop();
    let logo = document.createElement("img");
    let siteLink = document.createElement("a");
    let number = document.createElement("p");

    number.textContent = chosenSpotlight.telephone;
        
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight.siteURL)

    logo.setAttribute("src", chosenSpotlight.logo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight1.appendChild(logo);
    spotlight1.appendChild(siteLink);
    spotlight1.appendChild(number);

    //Spotlight 2
    let chosenSpotlight2 = adMembers.pop();
    logo = document.createElement("img");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight2.telephone;
        
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight2.siteURL)

    logo.setAttribute("src", chosenSpotlight2.logo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight2.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "456");
    logo.setAttribute("height", "250");
    logo.setAttribute("class", "businessLogo");

    spotlight2.appendChild(logo);
    spotlight2.appendChild(siteLink);
    spotlight2.appendChild(number);

    //Spotlight 3
    let chosenSpotlight3 = adMembers.pop();
    logo = document.createElement("img");
    siteLink = document.createElement("a");
    number = document.createElement("p");

    number.textContent = chosenSpotlight3.telephone;
        
    siteLink.textContent = "Visit Site";
    siteLink.setAttribute("href", chosenSpotlight3.siteURL)

    logo.setAttribute("src", chosenSpotlight3.logo);
    logo.setAttribute("alt", `siteLogo of ${chosenSpotlight3.companyName}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("height", "200");
    logo.setAttribute("class", "businessLogo");

    spotlight3.appendChild(logo);
    spotlight3.appendChild(siteLink);
    spotlight3.appendChild(number);
}

getBusinessesData();

//Durnstenfeld shuffle method
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}