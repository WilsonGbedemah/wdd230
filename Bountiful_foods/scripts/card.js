/*Local Storage JS*/
const form = document.getElementById("fresh-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the number of specialty drinks from localStorage and display it on the information card
  const numDrinks = localStorage.getItem("numSpecialtyDrinks") || 0;

  document.getElementById("num-drinks").textContent = numDrinks;


  // Increment the number of specialty drinks by one
  numDrinks++;

  // Store the new number of specialty drinks in localStorage
  localStorage.setItem("numSpecialtyDrinks", numDrinks);

  // Display a message to the user indicating that their drink submission was successful
  alert("Thank you for submitting your specialty drink!");
});