# goit-js-hw-06
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navItemEl = document.createElement(`ul`)
console.log(navItemEl);

const titleEl = document.createElement(`li`);
titleEl.classList.add("item");
titleEl.textContent = ('Potatoes');
navItemEl.appendChild(titleEl);
// console.log(titleEl);

const twoTitleEl = document.createElement(`li`);
twoTitleEl.classList.add("item");
twoTitleEl.textContent = ('Mushrooms');
navItemEl.appendChild(twoTitleEl);
// console.log(twoTitleEl);

const treeTitleEl = document.createElement(`li`);
treeTitleEl.classList.add("item");
treeTitleEl.textContent = ('Garlic');
navItemEl.appendChild(treeTitleEl);
// console.log(treeTitleEl);

const fourTitleEl = document.createElement(`li`);
fourTitleEl.classList.add("item");
fourTitleEl.textContent = ('Tomatos');
navItemEl.appendChild(fourTitleEl);
// console.log(fourTitleEl);

const fiveTitleEl = document.createElement(`li`);
fiveTitleEl.classList.add("item");
fiveTitleEl.textContent = ('Herbs');
navItemEl.appendChild(fiveTitleEl);
// console.log(fiveTitleEl);

const ssixTitleEl = document.createElement(`li`);
ssixTitleEl.classList.add("item");
ssixTitleEl.textContent = ('Condiments');
navItemEl.appendChild(ssixTitleEl);
// console.log(ssixTitleEl);

// const ingredientsList = document.querySelector("#ingredients");
// const ingredientItems = ingredients.map((ingredient) => {
//   const ingredientItemEl = document.createElement("li");
//   ingredientItemEl.classList.add("item");
//   ingredientItemEl.textContent = ingredient;
//   return ingredientItemEl;
// });
// ingredientsList.append(...ingredientItems);
// console.log(ingredientsList);

const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');
let counterValue = 0;
valueSpan.textContent = counterValue;
incrementButton.addEventListener('click', () => {
  counterValue++;
  valueSpan.textContent = counterValue;
});
decrementButton.addEventListener('click', () => {
  counterValue--;
  valueSpan.textContent = counterValue;
});