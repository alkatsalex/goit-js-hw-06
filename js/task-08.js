
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