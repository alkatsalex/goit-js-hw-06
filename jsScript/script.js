
//
const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

categories.forEach(function (categorie, index) {
    const categorieTitle = categorie.firstElementChild;
    console.log(`Category: ${categorieTitle.textContent}`);

    const categorieLenght = categorie.querySelectorAll(`li`);
    console.log(`Elements: ${categorieLenght.length}`);
});








const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const categoriesList = document.querySelector("#categories")

const newListIngredients = document.createElement(`ul`)
categoriesList.after(newListIngredients)
newListIngredients.setAttribute("id", "ingredients");

ingredients.forEach(function (ingredient) {
    const listIngredientsItem = document.createElement(`li`)
    newListIngredients.append(listIngredientsItem)
    listIngredientsItem.classList.add("item")
    listIngredientsItem.textContent = ingredient
})

// const titleIngredients = document.createElement(`h2`);
// newListIngredients.prepend(titleIngredients);
// titleIngredients.textContent = "Ingredients"



const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
 
const newListGallery = document.createElement(`ul`);
newListGallery.classList.add("gallery");
newListIngredients.after(newListGallery);



const listPhoto = images.map((image) => 
`<li>
<img class = "photo"
src="${image.url}" 
alt="${image.alt}">
</li>`)
.join("");

console.log(listPhoto)
console.dir(listPhoto)

newListGallery.insertAdjacentHTML("afterbegin", listPhoto);