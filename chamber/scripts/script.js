/**Harmburger menu JS**/
function toggleMenu(){ 
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open")
    }
    
    const x = document.getElementById('hamburgerBtn')
    x.onclick = toggleMenu

/**Date JS**/
    const datefield = document.querySelector(".date");
    const now = new Date();
    const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);datefield.innerHTML = `<em>${fulldate}</em>`;

/**Last modification JS**/
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified

/** Banner JS**/
const banner = document.querySelector(".banner");
//using the now variable that holds the current date I use getDay() to get the day of the week
const dayOfWeek = now.getDay();
if (dayOfWeek == 1 || dayOfWeek == 2){
    banner.style.display = "block";
}else{
    banner.style.display= "none";
}

/*Regular Expressions*/
const re = new RegExp("[a-zA-Z][\-][\s]{7}");
const setPattern = document.querySelector("input[pattern]");
setPattern.setAttribute("pattern", re);

