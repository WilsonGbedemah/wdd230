// Harmburger menu JS
function toggleMenu(){ 
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open")
    }
    
    const x = document.getElementById('hamburgerBtn')
    x.onclick = toggleMenu

// Date JS//
    const datefield = document.querySelector(".date");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);
    datefield.innerHTML = `<em>${fulldate}</em>`;

// Last modification JS
let year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
let modify = document.querySelector("#lastmodified");
const currentTime=new Date(document.lastModified);
modify.textContent = document.lastModified;


