let year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
let modify = document.querySelector("#lastmodified");
const currentTime=new Date(document.lastModified);
modify.textContent = document.lastModified;
