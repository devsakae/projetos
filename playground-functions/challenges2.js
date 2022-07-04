// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) { return 'Array com tamanho incorreto.'; }
  let apoio = 0;
  let numeros = [];
  for (let i = 0; i < phoneNumber.length; i += 1) {
    for (let j = 1; j < phoneNumber.length; j += 1) {
      if (phoneNumber[i] === phoneNumber[j]) {
        apoio += 1;
        if (apoio >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    } if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } apoio = 0;
    numeros.push(phoneNumber[i]);
  }
  return '(' + numeros[0] + '' + numeros[1] + ') ' + numeros[2] + '' + numeros[3] + '' + numeros[4] + '' + numeros[5] + '' + numeros[6] + '-' + numeros[7] + '' + numeros[8] + '' + numeros[9] + '' + numeros[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } else if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineA - lineB)) {
    return true;
  } return false;
}

// Desafio 13
function hydrate(bebedeira) {
  // Código buscado no Google
  let lista = bebedeira.match(/\d+/g).map(Number);
  let copos = 0;
  for (let i = 0; i < lista.length; i += 1) {
    copos += lista[i];
  }
  if (copos === 1) {
    return '1 copo de água';
  } return copos + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
