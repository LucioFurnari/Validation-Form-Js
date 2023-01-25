const emailInput = document.querySelector("#mail");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipCode");
const passwordInput = document.querySelector("#pass");
const confirmPassInput = document.querySelector("#confPass");
const form = document.querySelector("form");
const overlay = document.querySelector(".overlay");

emailInput.addEventListener('focusout',showError)
emailInput.addEventListener('input',showError)

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
    target.nextElementSibling.textContent = `Ingrese un ${element.type} valido.`;
  } else if (tooShort) {
    target.nextElementSibling.textContent = `El ${element.type} es muy corto, minimo 8 caracteres`;
  } else if (rangeUnderflow) {
    target.nextElementSibling.textContent = `No puede ingresar números negativos`;
  } else if (patternMismatch && target["name"] === "zipCode") {
    target.nextElementSibling.textContent = `Solo puede ingresar números`;
  }
}

function checkPassword() {
  if(confirmPassInput.value !==  passwordInput.value) {
    confirmPassInput.nextElementSibling.textContent = 'La contraseña no es igual';
  } else {
    confirmPassInput.nextElementSibling.textContent = '';
  }
}

form.addEventListener('submit',(e) => {
  e.preventDefault();
  overlay.classList.add('active');
})

overlay.addEventListener('click',() => overlay.classList.remove('active'));