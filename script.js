// Variables
// const header = document.querySelector('header');
const buttonLogin = document.getElementById('button-login');
const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit_btn');
const agree = document.getElementById('agreement');
// const labelRate = document.getElementById('label-rate');
// Functions

function login() {
  if (loginInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', login);

// agreement type checkbox 
agree.addEventListener('change', (e) => {
  if (e.target.classList.contains('checked')) {
    e.target.classList.remove('checked');
  } else {
    e.target.classList.add('checked');
  }
});

// submit form button
submitButton.addEventListener('click', (e) => {
  if (!agree.classList.contains('checked')) {
    e.preventDefault();
  }
});
