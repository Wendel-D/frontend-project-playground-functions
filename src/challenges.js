// Desafio 1
function compareTrue(macaco, elefante) {
  if (macaco && elefante === true) {
    return true
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
// Desafio 3
function splitSentence(texto) {
  let arrayNomes = texto.split(' ');
  return arrayNomes;
}

// Desafio 4
function concatName(array) {
  let lastName = array[array.length - 1] + ', ' + array[0];
  return lastName;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  for (let index2 = 0; index2 < numeros.length; index2++) {
    if (maiorNumero < numeros[index2]) {
      maiorNumero = numeros[index2];
    }
  }
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (maiorNumero === numeros[i]) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return ("cat2")
  } if (mouse - cat1 > mouse - cat2) {
    return ("cat1")
  } else {
    return ('os gatos trombam e o rato foge')
  }
}
console.log(catAndMouse(1, 0, 0));
// Desafio 8
function fizzBuzz() {

}

// Desafio 9
function encode(frase) {

}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
