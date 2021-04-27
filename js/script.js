const loginForm = document.querySelector('.trybewarts-login');

function validateLogin(e) {
  e.preventDefault();
  const form = e.target;

  const loginValue = form.querySelector('#form-login').value;
  const passwordValue = form.querySelector('#form-password').value;

  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginForm.addEventListener('submit', validateLogin);

const button = document.getElementById('agreement');
const sendButton = document.getElementById('submit-btn');

button.addEventListener('click', () => {
  if (button.checked === true) {
    sendButton.disabled = false;
  } else if (button.checked === false) {
    sendButton.disabled = true;
  }
});
