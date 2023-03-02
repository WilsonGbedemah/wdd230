const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) =>{
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let bDate = document.createElement('p');
      let bPlace = document.createElement('p')
  
      // Build the h2 content out to show the prophet's full name
      h2.textContent = `${prophet.name}  ${prophet.lastname}`;

      // Build the p content out to show the prophet's date of birth and place of birth
      bDate.textContent = `${prophet.birthdate}`;
      bPlace.textContent = `${prophet.birthplace}`;
  
      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
       
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(bDate);
      card.appendChild(bPlace);
  
      cards.appendChild(card);
    })
}