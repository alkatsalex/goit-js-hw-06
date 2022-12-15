const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створення перемінної для доступа до списка категорий з id
const categoriesList = document.querySelector("#categories")

// Створення та додавання нового списку
const newListIngredients = document.querySelector(`#ingredients`)

const listIngredients = ingredients.map((ingredient) => {
  let listIngredientsItem = document.createElement(`li`);
  listIngredientsItem.classList.add("item")
  listIngredientsItem.textContent = ingredient
return listIngredientsItem
});

newListIngredients.append(...listIngredients)