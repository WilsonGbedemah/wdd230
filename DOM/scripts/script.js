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
	
	if (input.value.length != 0)
      { 
input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listText.textContent = Item;
    listItem.appendChild(listText);
    listBtn.textContent = "❌";
    listItem.appendChild(listBtn);
    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
    });
      }  	
    input.focus();
  });



