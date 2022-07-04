// Desafio 1
function compareTrue(arg1, arg2) {
  return (arg1 === true && arg2 === true);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let topNum = array[0];
  let topVezes = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > topNum) { topNum = array[i]; }
  } for (let i = 0; i < array.length; i += 1) {
    if (array[i] === topNum) { topVezes += 1; }
  } return topVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  // Para fins de teste da lógica, considerar (0, -2, 1)
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    resultado = 'cat2';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    resultado = 'cat1';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let fiString = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3) === 0 && (array[i] % 5) === 0) {
      fiString.push('fizzBuzz');
    } else if ((array[i] % 5) === 0) {
      fiString.push('buzz');
    } else if ((array[i] % 3) === 0) {
      fiString.push('fizz');
    } else { fiString.push('bug!'); }
  }
  return fiString;
}

// Desafio 9
function encode(decoded) {
  let encoded = '';
  let letra;
  for (letra of decoded) {
    if (letra === 'a') {
      encoded += '1';
    } else if (letra === 'e') {
      encoded += '2';
    } else if (letra === 'i') {
      encoded += '3';
    } else if (letra === 'o') {
      encoded += '4';
    } else if (letra === 'u') {
      encoded += '5';
    } else {
      encoded = encoded + letra;
    }
  }
  return encoded;
}
function decode(encoded) {
  let decoded = '';
  let letra;
  for (letra of encoded) {
    if (letra === '1') {
      decoded += 'a';
    } else if (letra === '2') {
      decoded += 'e';
    } else if (letra === '3') {
      decoded += 'i';
    } else if (letra === '4') {
      decoded += 'o';
    } else if (letra === '5') {
      decoded += 'u';
    } else {
      decoded += letra;
    }
  }
  return decoded;
}

// Desafio 10
function techList(tecnologias, nome) {
  let objeto = [];
  if (tecnologias.length <= 0) {
    return 'Vazio!';
  } else {
    if (tecnologias.length === 5) {
      tecnologias.sort();
    } for (let i = 0; i < tecnologias.length; i += 1) {
      objeto.push({
        tech: tecnologias[i],
        name: nome,
      });
    }
    return objeto;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
