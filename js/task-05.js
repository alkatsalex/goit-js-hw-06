//Створення перемінної для доступа
const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

// функція для заміни спана на значення інпуту
const inputName = (evt) => {
  nameOutput.textContent = evt.currentTarget.value
  if (evt.currentTarget.value === "") {  
    nameOutput.textContent = `Anonymous`;
  }
  
}
nameInput.addEventListener(`input`, inputName)
