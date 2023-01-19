let year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
//Remember that to get the Id element you should have use getelementbyid not queryselector, as the instructions said
let modify = document.querySelector("#lastmodified")
//There was no need to use new Date, if you delete it you'll see it'll work the same
const currentTime = new Date(document.lastModified)
//The lastModified property of the Document interface returns a string containing the date and time on which the current document was last modified.
modify.textContent = document.lastModified