// Get the current number of specialty drinks from localStorage
let numSpecialtyDrinks = parseInt(localStorage.getItem('numSpecialtyDrinks')) || 0;

// Increment the number of specialty drinks
numSpecialtyDrinks++;

// Store the new number of specialty drinks in localStorage
localStorage.setItem('numSpecialtyDrinks', numSpecialtyDrinks);

// Display the number of specialty drinks on the information card
let drinkCount = document.getElementById('drink-count');
drinkCount.textContent = numSpecialtyDrinks;
