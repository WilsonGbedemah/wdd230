async function getFruitsData() {
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

function f(num) {
  return parseFloat(num)
}

// const show = document.getElementById("drink-count");
// if (!localStorage.getItem("count")){
//   localStorage.setItem("count", 0);
// }
// show.innerText = 'localStorage.getItem("count") || 0';

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



  getFruitsData().then((data) => {
    const display = document.getElementById("output");
    const firstFruitNutrition = data.get(firstFruit.toUpperCase()).nutritions;
    const secondFruitNutrition = data.get(secondFruit.toUpperCase()).nutritions;
    const thirdFruitNutrition = data.get(thirdFruit.toUpperCase()).nutritions;

    const output = `
      <h2>Personal Information</h2>
      <p><strong>Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${number}</p>

      <h2>Total Nutrients</h2>
      <ul>
        <li>
          <p><strong>Carbohydrates</strong> ${f(firstFruitNutrition.carbohydrates) + f(secondFruitNutrition.carbohydrates) + f(thirdFruitNutrition.carbohydrates)}</p>
         </p>
        </li>
        <li>
          <p><strong>Proteins</strong> ${f(firstFruitNutrition.protein) + f(secondFruitNutrition.protein) + f(thirdFruitNutrition.protein)}</p>
          </p>
        </li>
        <li>
          <p><strong>Fat:</strong> ${f(firstFruitNutrition.fat) + f(secondFruitNutrition.fat) + f(thirdFruitNutrition.fat)}</p>
          </p>
        </li>
        <li>
          <p><strong> Sugar:</strong> ${f(firstFruitNutrition.sugar) + f(secondFruitNutrition.sugar) + f(thirdFruitNutrition.sugar)}</p>
          </p>
        </li>
        <li>
          <p><strong>Calories:</strong> ${f(firstFruitNutrition.calories) + f(secondFruitNutrition.calories) + f(thirdFruitNutrition.calories)}</p>
          </p>
        </li>
      </ul
  
        <h2>Special Instructions</h2>
        <p>${instructions}</p>
  
        <h2>Date</h2>
        <p>${new Date().toDateString()}</p>
      `;
    display.innerHTML = output;

    const count = localStorage.getItem("count") || 0
    localStorage.setItem("count", parseInt(count) + 1);
  });







});