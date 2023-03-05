async function getbusinessesData() {
  const response = await fetch("JSON/data.json");
  const data = await response.json();
  //console.table(data.businesses);
  displayBusinesses(data.businesses);
}

async function displayBusinesses(businesses) {
  const cards = document.querySelector("div.cards");

  businesses.forEach((business) => {
      let card = document.createElement("section");
      let logo = document.createElement("img");
      let location = document.createElement("p");
      let number = document.createElement("p");
      let siteLink = document.createElement("a");
      let company = document.createElement("h2");

      location.textContent = business.address;
      number.textContent = business.telephone;

      company.textContent = business.companyName;
      company.setAttribute("class", "businessName");
      
      siteLink.textContent = business.siteURL;
      siteLink.setAttribute("href", business.siteURL)

      logo.setAttribute("src", business.logo);
      logo.setAttribute("alt", `logo of ${business.companyName}`);
      logo.setAttribute("loading", "lazy");
      logo.setAttribute("width", "340");
      logo.setAttribute("height", "440");
      logo.setAttribute("class", "businessLogo");

      card.appendChild(logo);
      card.appendChild(company);
      card.appendChild(location);
      card.appendChild(number);
      card.appendChild(siteLink);

      cards.appendChild(card);
  })
}

getbusinessesData();

function toggleLayout(){
  if (document.querySelector(".listBtn")){
      document.getElementById("directory-main").setAttribute("class", "directory-list");
      document.getElementById("layoutBtn").setAttribute("class", "gridBtn");
  }
  else {
      document.getElementById("directory-main").setAttribute("class", "directory-grid");
      document.getElementById("layoutBtn").setAttribute("class", "listBtn");
  }
}

document.getElementById("layoutBtn").addEventListener("click", toggleLayout);

