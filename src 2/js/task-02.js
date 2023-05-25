const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector("#ingredients");
const ingredientItemEl = ingredients.map((ingredient) => {
const ingredientTitleEl = document.createElement("li");
ingredientTitleEl.classList.add("item");
ingredientTitleEl.textContent = ingredient;
    return ingredientTitleEl;
  });
  ingredientsEl.append(...ingredientItemEl);
  console.log(ingredientsEl); 