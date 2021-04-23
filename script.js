const loginButton = document.getElementById('login');
const submitButton = document.querySelector('#submit-btn');
const agreementCheck = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');
const counterText = document.getElementById('counter');
const main = document.querySelector('main');
const form = document.querySelector('#evaluation-form');


function checkForLogin() {
  const loginValue = document.getElementById('login-value').value;
  const passwordValue = document.getElementById('password-value').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

let checked = false;
function checkAgreement() {
  if (agreementCheck.checked) {
    checked = true;
  }
  if (checked) {
    submitButton.disabled = false;
  }
}

function counter() {
  const textLength = textArea.value.length;
  const initialText = 500;
  const difference = initialText - textLength;
  counterText.innerText = difference;
}

function submitForm(event) {
  event.preventDefault();
  main.removeChild(form);
}

function addEventListeners() {
  loginButton.addEventListener('click', checkForLogin);
  agreementCheck.addEventListener('change', checkAgreement);
  textArea.addEventListener('keyup', counter);
  submitButton.addEventListener('click', submitForm);
}

window.onload = () => {
  addEventListeners();
};
