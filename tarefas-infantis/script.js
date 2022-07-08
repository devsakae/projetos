const saudacao = document.querySelector('#saudacao');
const msg1 = document.querySelector('#msg1');
const msg2 = document.querySelector('#msg2');
const startBtn = document.querySelector('#start');

function primeiraVez() {
  if (localStorage.getItem('tarefas-infantis-nome') === null) {
    msg1.innerHTML = 'Olá, visitante!';
    msg2.innerHTML = 'Digite seu nome para poder salvar suas tarefas!';
    const digiteSeuNome = document.createElement('input');
    digiteSeuNome.classList.add('form-control');
    saudacao.appendChild(digiteSeuNome);
  }
  else {
    msg1.innerHTML = 'Olá, <strong>' + localStorage.getItem('tarefas-infantis-nome') + '</strong>!';
    msg2.innerHTML = 'Clique no botão abaixo para iniciar sua jornada!';
  }
}

/* startBtn.addEventListener('click', function() {
  if () {

  }
}) */

primeiraVez();