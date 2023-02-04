// this code is for the toogling of the harmburger menue in the small and medium view
function toggleMenu(){ 
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open")
    }
    
    const x = document.getElementById('hamburgerBtn')
    x.onclick = toggleMenu

// This si the code for the banner//
    document.addEventListener("DOMContentLoaded", () => {
    const day = new Date().getDay();
  
    if(day === 1 || day === 2){
      document.getElementById("banner").classList.remove('hidden');
    }
})
// This code is the date showing in the header of the website//
    const datefield = document.querySelector(".date");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);
    datefield.innerHTML = `<em>${fulldate}</em>`;

// This code is for the copy right and last modification shown in the website
let year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
let modify = document.querySelector("#lastmodified");
const currentTime=new Date(document.lastModified);
modify.textContent = document.lastModified;


