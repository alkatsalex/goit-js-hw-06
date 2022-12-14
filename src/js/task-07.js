const fontSizeControl = document.querySelector(`#font-size-control`)
const text = document.querySelector(`#text`)
// функція для зміни розміру шрифта
const changSize = () => {
const valSize = fontSizeControl.value;
    text.style.fontSize = `${valSize}px`;
}
fontSizeControl.addEventListener(`input`, changSize)