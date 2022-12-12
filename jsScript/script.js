
//Створення перемінної для доступа до списків категорій
const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);

// Перебор списків для отрімання назви та довжини списку
categories.forEach(function (categorie, index) {
    const categorieTitle = categorie.firstElementChild;
    console.log(`Category: ${categorieTitle.textContent}`);

    const categorieLenght = categorie.querySelectorAll(`li`);
    console.log(`Elements: ${categorieLenght.length}`);
});



// Task 2-----------------------------------------------------




const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Створення перемінної для доступа до списка категорий з id
const categoriesList = document.querySelector("#categories")

// Створення та додавання нового списку
const newListIngredients = document.querySelector(`#ingredients`)
// додання новому списку нового 'айді'


// Перебор для створення нових елементів списку та додавання їх в DOM 
ingredients.forEach(function (ingredient) {
    const listIngredientsItem = document.createElement(`li`)
    newListIngredients.append(listIngredientsItem)
    listIngredientsItem.classList.add("item")
    listIngredientsItem.textContent = ingredient
})

// const titleIngredients = document.createElement(`h2`);
// newListIngredients.prepend(titleIngredients);
// titleIngredients.textContent = "Ingredients"

// Task 3--------------------------------------------------------------------------

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
 
// Створення списка для галереї тадодавання її
// const newListGallery = document.createElement(`ul`);
const newListGallery = document.querySelector(`.gallery`);
// newListGallery.classList.add("gallery");
// newListIngredients.after(newListGallery);


// перебор для створення шаблоного коду для всталення у DOM
const listPhoto = images.map((image) => 
`<li>
<img class = "photo"
src="${image.url}" 
alt="${image.alt}">
</li>`)
.join("");

// Додавання шаблону через insertAdjacentHTML у список галереї 
newListGallery.insertAdjacentHTML("afterbegin", listPhoto);


// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });




// Task 4 ---------------------------------------------------------------
// обєкт з 
const counter = {
  value: 0,
  decrement() {
    this.value -=1
},
    increment() {
    this.value +=1
  }
};

// Перемінні для доступу
const counterValue = document.querySelector(`#value`)
const btnDecrement = document.querySelector(`button[data-action="decrement"]`)
const btnIncrement = document.querySelector(`button[data-action="increment"]`)

// колбек функція для слухача (додавання)
const decrementOne = () => {
  counter.decrement()
  console.log(counter)
  counterValue.textContent = counter.value ;
};

btnDecrement.addEventListener(`click`, decrementOne)
// колбек функція для слухача (віднімання)
const incrementOne = () => {
counter.increment()
  console.log(counter)
counterValue.textContent = counter.value;
};

btnIncrement.addEventListener(`click`, incrementOne);


// Task 5-------------------------------------------------------------------------
//Створення перемінної для доступа
const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);


// функція для заміни спана на значення інпуту
const inputName = (evt) => {
  nameOutput.textContent = evt.currentTarget.value
}
nameInput.addEventListener(`input`, inputName)

// TAsk 6----------------------------------------------------------------

const inputText = document.querySelector(`#validation-input`);
console.dir(inputText)

const lengthTextInput = inputText.value.length;
console.dir(lengthTextInput)

// функція для перевірки на на кількість символів
const focusOff = () => {
  if (inputText.value.length === 6) {
  console.log(inputText.value.length);
    inputText.classList.add(`valid`)
    inputText.classList.remove(`invalid`)
  } else {
     console.log(inputText.value.length);
    inputText.classList.add(`invalid`)
    inputText.classList.remove(`valid`)
  }
}

inputText.addEventListener(`blur`, focusOff)


  // 



  // Task 7 _------------------------------------------------------------------------

const fontSizeControl = document.querySelector(`#font-size-control`)
const text = document.querySelector(`#text`)
// функція для зміни розміру шрифта
const changSize = () => {
const valSize = fontSizeControl.value;
    text.style.fontSize = `${valSize}px`;
}
fontSizeControl.addEventListener(`input`, changSize)

// Task 8 ----------------------------------------------------------------------------------

const user = {
  email: "",
  password: "",
}

const loginForm = document.querySelector(`.login-form`)
const btnSubmit = document.querySelector(`button[type="submit"]`)

const submitForm = (evt) => {
  evt.preventDefault();
  const {
    elements: { email, password }
  } = evt.currentTarget; 
  if (email.value === "" || password.value === "") {
    alert ("Всі поля повинні бути заповнені!!!");
  }

  user.email = email.value;
  user.password = password.value;
  console.log(user)
evt.currentTarget.reset();

}



loginForm.addEventListener(`submit`, submitForm)

// Task 9 --------------------------------------------------------------

const btnChangeColor = document.querySelector(".change-color")
const color = document.querySelector(".color")

const body = document.querySelector(`body`)

// Функція для рандомного кольору та додавнання стилю на боді
function getRandomHexColor() {
  color.textContent = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  body.style.backgroundColor = color.textContent

}

btnChangeColor.addEventListener(`click`, getRandomHexColor)


