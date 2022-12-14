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
