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
    const firstFruitNutrition = data.get(firstFruit.toUpperCase());
    const secondFruitNutrition = data.get(secondFruit.toUpperCase());
    const thirdFruitNutrition = data.get(thirdFruit.toUpperCase());

    const totalNutrition = {
      carbohydrates: firstFruitNutrition.nutritions.carbohydrates +
        secondFruitNutrition.nutritions.carbohydrates +
        thirdFruitNutrition.nutritions.carbohydrates,
      protein: firstFruitNutrition.nutritions.protein +
        secondFruitNutrition.nutritions.protein +
        thirdFruitNutrition.nutritions.protein,
      fat: firstFruitNutrition.nutritions.fat +
        secondFruitNutrition.nutritions.fat +
        thirdFruitNutrition.nutritions.fat,
      sugar: firstFruitNutrition.nutritions.sugar +
        secondFruitNutrition.nutritions.sugar +
        thirdFruitNutrition.nutritions.sugar,
      calories: firstFruitNutrition.nutritions.calories +
        secondFruitNutrition.nutritions.calories +
        thirdFruitNutrition.nutritions.calories,
    };

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
            firstFruitNutrition
          )}</p>
        </li>
        <li>
          <p><strong>Second fruit selected:</strong> ${secondFruit}</p>
          <p><strong>Fruit nutrients:</strong> ${JSON.stringify(
            secondFruitNutrition
          )}</p>
        </li>
        <li>
          <p><strong>Third fruit selected:</strong> ${thirdFruit}</p>
          <p><strong>Fruit nutrients:</strong> ${JSON.stringify(
            thirdFruitNutrition
          )}</p>
        </li>
      </ul
  
        <h2>Special Instructions</h2>
        <p>${instructions}</p>
  
        <h2>Date</h2>
        <p>${new Date().toDateString()}</p>
      `;
    display.innerHTML = output;
  });
});