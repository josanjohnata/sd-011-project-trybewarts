function alertFunction() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

const buttonClick = document.getElementById('sendBtn');
buttonClick.addEventListener('click', alertFunction);

function createRadios() {
  const getLabel = document.getElementById('radios');
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < numbersArray.length; i += 1) {
    const createRadio = document.createElement('input');
    createRadio.setAttribute('type', 'radio');
    createRadio.setAttribute('name', 'rate');
    createRadio.setAttribute('value', numbersArray[i]);
    getLabel.appendChild(createRadio);
  }
}

createRadios();

const checkAgree = document.getElementById('agreement');
const subtBtn = document.getElementById('submit-btn');
function checkBtn() {
  subtBtn.disabled = false;
}

checkAgree.addEventListener('click', checkBtn);

const txtArea = document.getElementById('textarea');

function verificar() {
  const info = document.getElementById('counter');
  const limite = 500;
  const qtdcaracteres = this.value.length;
  const restantes = limite - qtdcaracteres;
  if (restantes < 1) {
    this.value = this.value.slice(0, limite);
    info.innerHTML = 0;
    return info;
  }
  info.innerText = restantes;
}

txtArea.addEventListener('keyup', verificar);
