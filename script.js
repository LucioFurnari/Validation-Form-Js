const emailInput = document.querySelector("#mail");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipCode");
const passwordInput = document.querySelector("#pass");
const confirmPassInput = document.querySelector("#confPass");
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");
let isPassValid = false;

emailInput.addEventListener('focusout',showError)
emailInput.addEventListener('input',showError)

countryInput.addEventListener('input',showError);
countryInput.addEventListener('focusout',showError);

zipInput.addEventListener('input',showError);
zipInput.addEventListener('focusout',showError);

confirmPassInput.addEventListener('input',checkPassword);
confirmPassInput.addEventListener('focusout',checkPassword);


function showError(event) {
  const {target} = event;
  const {typeMismatch, rangeUnderflow, patternMismatch, tooShort, valid} = event.target.validity;
  if(valid) {
    target.nextElementSibling.textContent = ``;
  } else if(typeMismatch) {
    target.nextElementSibling.textContent = `Ingrese un ${target.type} valido.`;
  } else if (tooShort) {
    target.nextElementSibling.textContent = `El ${target.type} es muy corto, minimo 8 caracteres`;
  } else if (rangeUnderflow) {
    target.nextElementSibling.textContent = `No puede ingresar números negativos`;
  } else if (patternMismatch && target["name"] === "zipCode") {
    target.nextElementSibling.textContent = `Solo puede ingresar números`;
  } else if (patternMismatch && target["name"] === "country") {
    target.nextElementSibling.textContent = `Ingrese un pais valido`;
  }
}

function checkPassword() {
  if(confirmPassInput.value !==  passwordInput.value) {
    isPassValid = false;
    confirmPassInput.nextElementSibling.textContent = 'La contraseña no es igual';
  } else {
    isPassValid = true;
    confirmPassInput.nextElementSibling.textContent = '';
  }
}

form.addEventListener('submit',(e) => {
  e.preventDefault();
  if(emailInput.validity.valid && 
    countryInput.validity.valid &&
    zipInput.validity.valid && 
    passwordInput.validity.valid &&
    isPassValid) {
      const message = document.querySelector(".message");
      message.textContent = 'High Five';
    } else {
      const message = document.querySelector(".message");
      message.textContent = 'Error';
    }
  overlay.classList.add('active');
})

overlay.addEventListener('click',() => overlay.classList.remove('active'));