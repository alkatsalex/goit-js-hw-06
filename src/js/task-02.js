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
// додання новому списку нового 'айді'
// const listIngredientsItem = document.createElement(`li`)
// listIngredientsItem.classList.add("item");

//  console.log(listIngredientsItem.innerHTML)

// for (const ingredient of ingredients) {
//   newListIngredients.append(listIngredientsItem);
//   listIngredientsItem.textContent = ingredient;
// }


// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

//   newListIngredients.innerHTML = markup;




// Перебор для створення нових елементів списку та додавання їх в DOM 
// ingredients.forEach(function (ingredient) {
//   const listIngredientsItem = document.createElement(`li`);
//     newListIngredients.append(listIngredientsItem)
//     listIngredientsItem.classList.add("item")
//     listIngredientsItem.textContent = ingredient
// })
const listIngredientsItem = document.createElement(`li`);
listIngredientsItem.textContent = ingredients
console.log(listIngredientsItem.textContent)