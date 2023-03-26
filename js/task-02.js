const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsContainerEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = option;
  return liEl;
});
console.log(elements);
ingredientsContainerEl.append(...elements);
 
 