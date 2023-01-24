const emailInput = document.querySelector("#mail");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zipCode");
const passwordInput = document.querySelector("#pass");
const confirmPassInput = document.querySelector("#confPass");

emailInput.addEventListener("input",(e) => {
  console.log(email.validity);
  emailInput.nextSibling.textContent = "Hola";
})