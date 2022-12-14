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