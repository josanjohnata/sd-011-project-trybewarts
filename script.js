const login = document.getElementById('login');
const password = document.getElementById('password');
const loginButton = document.getElementById('login-button');

function submitLogin() {
  if (login.value === 'tryber@betrybe.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginButton.addEventListener('click', submitLogin);
