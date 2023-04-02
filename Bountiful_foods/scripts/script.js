/**Harmburger menu JS**/
function toggleMenu(){ 
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open")
    }
    
    const x = document.getElementById('hamburgerBtn')
    x.onclick = toggleMenu


    /**Last modification JS**/
const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = document.lastModified