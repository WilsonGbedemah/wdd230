/*Regular Expressions*/
const re = new RegExp("[a-zA-Z][\-][\s]{7}");
const setPattern = document.querySelector("input[pattern]");
setPattern.setAttribute("pattern", re);

/** Hidden Time and Date on Join Page */
var d = new Date();

// Set the value of the "date" field
document.getElementById("date").value = d.toDateString();

// Set the value of the "time" field
var hours = d.getHours();
var mins = d.getMinutes();
var seconds = d.getSeconds();
document.getElementById("time").value = hours + ":" + mins + ":" + seconds;
