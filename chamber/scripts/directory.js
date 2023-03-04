
// Js code for creating card section with JavaScript//
async function getbusinessesData() {
    const response = await fetch("json/data.json");
    const data = await response.json();
    //console.table(data.businesses);
    displayBusinesses(data.businesses);
}

async function displayBusinesses(businesses) {
    const cards = document.querySelector(".businessCards");

    businesses.forEach((business) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let location = document.createElement("p");
        let number = document.createElement("p");
        let siteLink = document.createElement("a");
        let company = document.createElement("p");

        location.textContent = business.address;
        number.textContent = business.telephone;

        company.textContent = business.companyName;
        company.setAttribute("class", "businessName");
        
        siteLink.textContent = business.siteURL;
        siteLink.setAttribute("href", business.siteURL)

        logo.setAttribute("src", business.siteLogo);
        logo.setAttribute("alt", `siteLink of ${business.companyName}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "456");
        logo.setAttribute("height", "250");
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

// Js code for switching between card view and list view//
document.addEventListener("DOMContentLoaded", () => {
    const gridBtn = document.getElementById("grid");
    gridBtn.addEventListener('click', ()=>{
      document.getElementById("directory").classList.remove('list');
      document.getElementById("directory").classList.add('grid');
      listBtn.classList.remove('btn-active');
      gridBtn.classList.add('btn-active');
    });
    const listBtn = document.getElementById("list");
    listBtn.addEventListener('click', ()=>{
      document.getElementById("directory").classList.remove('grid');
      document.getElementById("directory").classList.add('list');
      listBtn.classList.add('btn-active');
      gridBtn.classList.remove('btn-active');
    });
  });

