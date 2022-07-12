// Constantes que buscam elementos
const campo = document.getElementById('questoes');
let temp = 0;

// Cria os arrays
let qsort = [];
let rsort = [];
let optsort = [];

/* Conteúdo criado por Rodrigo Sakae */
const mathOne = {
  q0: 'Quanto é <strong>13 + 9</strong>?',
  r0: {
    c: 22,
    op1: 20,
    op2: 24,
    op3: 26,
  },
  q1: 'Quanto é <strong>18 + 22</strong>?',
  r1: {
    c: 40,
    op1: 30,
    op2: 28,
    op3: 38,
  },
  q2: 'Se você tiver <strong>6 balas</strong>, e Letícia lhe der <strong>3 balas</strong>, com quantas você fica?',
  r2: {
    c: 9,
    op1: 7,
    op2: 8,
    op3: 10,
  },
  q3: 'Um pé de laranja possuía <strong>17 frutos</strong>. Em um final de semana <strong>caíram 8</strong>, mas uma semana depois <strong>apareceram 4</strong>. Quantas laranjas o pé possui agora?',
  r3: {
    c: 13,
    op1: 14,
    op2: 15,
    op3: 16,
  },
  q4: 'Antônio ganhou <strong>100 reais</strong> da vovó. Foi correndo na loja pra comprar um dinossauro, que custava <strong>10 reais</strong>. Quantos dinossauros ele pode comprar com o dinheiro que ganhou da vovó?',
  r4: {
    c: 10,
    op1: 1,
    op2: 20,
    op3: 5,
  },
};

function criaQuestao(arg1, arg2, arr) {
  let criaP = document.createElement('p');
  criaP.classList.add('questao');
  criaP.innerHTML = arg1;
  let criaR = document.createElement('button');
  criaR.classList.add('option');
  criaR.classList.add('correct');
  criaR.innerHTML = arg2;
  campo.appendChild(criaP);
  campo.appendChild(criaR);

  for (let j = temp; j < (temp + 3); j += 1) {
    let criaAlt = document.createElement('button');
    criaAlt.classList.add('option');
    criaAlt.innerHTML = arr[j];
    campo.appendChild(criaAlt);
  }
  temp += 3;
}

function sorteiaQuestao(arr) {
  const tpp = parseInt(sessionStorage.getItem('mkids-tarefasporpagina'));
  const divisor = Object.keys(arr).length / 2
  const sorteio = Math.floor(Math.random() * divisor);
  const qx = arr['q' + sorteio];
  const rx = arr['r' + sorteio];
  if (qsort.includes(qx) === false) {
    if (qsort.length === tpp || qsort.length === divisor) {
      console.log('Questões')
      console.dir(qsort);
      console.log('Respostas corretas')
      console.dir(rsort);
      console.log('Opções')
      console.dir(optsort);
      return;
    }
    for (let i = 1; i < 4; i += 1) {
      sortOp = 'op' + i;
      optsort.push(arr['r' + sorteio][sortOp]);
    }
    qsort.push(qx);
    rsort.push(rx.c);
    criaQuestao(qx, rx.c, optsort);
  }
  sorteiaQuestao(arr);
}

function tpp(arg) {
  sessionStorage.setItem('mkids-tarefasporpagina', arg);
}

tpp(4);
