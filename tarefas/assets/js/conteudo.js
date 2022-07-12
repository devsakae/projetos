const btn = document.getElementById('teste');
// Cria um array para excluir os números sorteados
let sorteados = [];

/* Conteúdo criado por Rodrigo Sakae */
const mathOne = {
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
};

/* function matematica1(arr) {
  // Define uma variável com número aleatório entre 0 e a última posição do array
  const sorteio = Math.floor(Math.random() * (Object.keys(mathOne).length / 2));
  if (sorteados.find(element => element)) {
    console.log('Encontrou');
    matematica1(arr);
  } else {
    sorteados.push(sorteio);
    console.log(sorteados);
  }
}

btn.addEventListener('click', matematica1(mathOne));
 */