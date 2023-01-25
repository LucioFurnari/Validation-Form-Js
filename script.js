const emailInput = document.querySelector("#mail");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipCode");
const passwordInput = document.querySelector("#pass");
const confirmPassInput = document.querySelector("#confPass");

emailInput.addEventListener('focusout',(e) => {
  console.log(emailInput.type);
  showError(emailInput)
})

emailInput.addEventListener('input',(e) => {
  console.log(emailInput.validity.valid);
  showError(emailInput)
})
confirmPassInput.addEventListener('input',checkPassword);
confirmPassInput.addEventListener('focusout',checkPassword);

function showError(element) {
  if(element.validity.typeMismatch) {
    element.nextSibling.textContent = `Ingrese un ${element.type} valido.`;
  } else if (element.validity.tooShort) {
    element.nextSibling.textContent = `El ${element.type} es muy corto, minimo 8 caracteres`;
  } else {
    element.nextSibling.textContent = ``;
  }
}

function checkPassword() {
  console.log(confirmPassInput.value);
  console.log(passwordInput.value);
  if(confirmPassInput.value !==  passwordInput.value) {
    confirmPassInput.nextSibling.textContent = 'La contraseña no es igual';
  } else {
    confirmPassInput.nextSibling.textContent = '';
  }
}