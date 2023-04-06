async function getfruitsData() {
    const response = await fetch("./scripts/fruit.json");
    const data = await response.json();
    const mp = new Map();
    data.forEach((item) => {
      mp.set(item.name.toUpperCase(), {
        nutritions: item.nutritions,
      });
    });
  
    return mp;
  }
  
  const productForm = document.getElementById("fill");
  productForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(productForm);
    const firstName = data.get("fname");
    const email = data.get("email");
    const number = data.get("phone");
    const firstFruit = data.get("fruits");
    const secondFruit = data.get("fruits1");
    const thirdFruit = data.get("fruits2");
    const instructions = data.get("instructions");
  
    getfruitsData().then((data) => {
      const display = document.getElementById("output");
      const output = `
        <h2>Personal Information</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${number}</p>
  
        <h2>Fruit Selections</h2>
        <ul>
          <li>
            <p><strong>First fruit selected:</strong> ${firstFruit}</p>
            <p><strong>Fruit nutrients:</strong> ${JSON.stringify(
              data.get(firstFruit.toUpperCase())
            )}</p>
          </li>
          <li>
            <p><strong>Second fruit selected:</strong> ${secondFruit}</p>
            <p><strong>Fruit nutrients:</strong> ${JSON.stringify(
              data.get(secondFruit.toUpperCase())
            )}</p>
          </li>
          <li>
            <p><strong>Third fruit selected:</strong> ${thirdFruit}</p>
            <p><strong>Fruit nutrients:</strong> ${JSON.stringify(
              data.get(thirdFruit.toUpperCase())
            )}</p>
          </li>
        </ul>
  
        <h2>Special Instructions</h2>
        <p>${instructions}</p>
  
        <h2>Date</h2>
        <p>${new Date().toDateString()}</p>
      `;
      display.innerHTML = output;
    });
  });
  