window.onload = function() {
  // Get the form element
  const form = document.getElementById('fill');

  // Add a submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Get the current user's email from the form
    const email = form.elements.email.value;

    // Get the current user's previous number of specialty drinks from local storage, or default to 0
    let numDrinks = parseInt(localStorage.getItem(email)) || 0;

    // Get the number of specialty drinks that the user just submitted
    const numNewDrinks = parseInt(form.elements.fruits.value) + parseInt(form.elements.fruits1.value);

    // Update the total number of specialty drinks for the user
    numDrinks += numNewDrinks;
    localStorage.setItem(email, numDrinks);
  });
};
