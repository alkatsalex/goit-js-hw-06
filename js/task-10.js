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

// const box = document.createElement(`div`)
//   boxes.append(box)
//   box.classList.add(`box`)
//   box.style.width = `${step + 30}px`
//   box.style.height = `${step + 30}px`
//   box.style.backgroundColor = getRandomHexColor()

function createBoxes(amount) {
  amount = inputNumber.value

  for (let i = 0; i < amount ; i+=1) {
    const step = i * 10
    const box = document.createElement(`div`)
  box.classList.add(`box`)
  boxes.append(box)
  box.style.width = `${step + 30}px`
  box.style.height = `${step + 30}px`
  box.style.backgroundColor = getRandomHexColor()
}
}


function destroyBoxes() {
  const boxes = document.querySelectorAll(`.box`)
for (let i = 0; i < boxes.length; i +=1) {
boxes[i].remove()
}
}

btnCreate.addEventListener(`click`, createBoxes)
btnDestroy.addEventListener(`click`, destroyBoxes)
