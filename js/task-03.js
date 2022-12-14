const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Створення списка для галереї тадодавання її
const newListGallery = document.querySelector(`.gallery`);

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

