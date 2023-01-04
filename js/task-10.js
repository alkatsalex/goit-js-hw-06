const boxes = document.querySelector(`#boxes`)
const inputNumber = document.querySelector(` input[type="number"]`)
const btnCreate = document.querySelector(`button[data-create]`)
const btnDestroy = document.querySelector(`button[data-destroy]`)
// console.log(btnCreate);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const startStep = 30;
let divs = [];

function createBoxes(amount) {
  amount = inputNumber.value
  for (let i = 0; i < amount * 10; i += 10) {
    // const box = `<div class="box" style="width:${startStep + i}px; height:${startStep + i}px; background-color:${getRandomHexColor()};"></div>`
    // divs.push(box)
    const box = document.createElement(`div`)
    box.classList.add(`box`)
    box.style.width = `${startStep + i}px`
    box.style.height = `${startStep + i}px`
    box.style.backgroundColor = `${getRandomHexColor()}`
    divs.push(box)
  }
    boxes.append(...divs)
}


  
 
// boxes.insertAdjacentHTML("beforeend", divs);






function destroyBoxes() {
  const boxes = document.querySelectorAll(`.box`)
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].remove()
    divs = []
    inputNumber.value = 0
  }
}


btnCreate.addEventListener(`click`, createBoxes)
btnDestroy.addEventListener(`click`, destroyBoxes)
