const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;
let lastmodified = new Date(document.lastModified);
document.getElementById("lastUpdated").innerHTML = lastmodified;