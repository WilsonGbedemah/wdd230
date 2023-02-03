/*Create variables to hold references to user input,
button element, and the list element.*/
//Save the input element to a variable. Use: const input = document.getElementById("favchap");
const input = document.querySelector('input');

//Save the button element to a variable
const button = document.querySelector('button');

//Save the list element to a variable
const list = document.querySelector('ul');


/*A click event that listens for the "Add Chapter" button.
Note: each of the following steps are withing the addEventListener function.*/
button.addEventListener('click', () => {
    const Item = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = item;
    listItem.appendChild(listText);
    listBtn.textContent = "❌";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    });

    input.focus();
  });



//Step 1: Use addEventListener to give the button element a "click" event.

//Step 2: Ensure the input is greater than 0. Hint: use the "length" property to find length.

//Step 3: Create an "li" element and save it to a variable. Use: const li = document.createElement("li");

//Step 4: Create another "button" element and save it to a variable, this button will be used in following steps.

//Step 5: Replace the innerHTML of the "li" variable with the input variable value.

//Step 6: Set the textContent of the "button" variable to "❌";

//Step 7: Append the "button" to the "li" variable.

//Step 8: Append the "li" variable to the list variable.

//Step 9: Add an event listener to the "button" element that listen for a click.
//This event listener should remove a child element from the list variable. Hint: use the ".removeChild" property.

//Step 10: Set the input value to a blank string.

//Step 11: Set the focus to the "input" element. Use: input.focus();
//This should be the end of the first event listener function.//