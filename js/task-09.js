// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
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

