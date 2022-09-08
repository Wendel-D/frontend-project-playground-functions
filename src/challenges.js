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
  let distancia = 0;
  let distancia2 = 0;
  distancia = mouse - cat1;
  distancia2 = mouse - cat2;
  if (distancia < 0) {
    distancia = distancia * -1;
  }
  if (distancia2 < 0) {
    distancia2 = distancia2 * -1;
  } if (distancia < distancia2) {
    return 'cat1';
  } else if (distancia2 < distancia) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(1, 3, 2));
// Desafio 8
function fizzBuzz(numeros) {
  let value = [];
  for (let index = 0; index < numeros.length; index++) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      value.push('fizzBuzz');
    } else if (numeros[index] % 5 === 0) {
      value.push('buzz') ;
    } else if (numeros[index] % 3 === 0 ) {
      value.push('fizz');
    } else {
      value.push('bug!');
    }
  }
  return value;
}


// Desafio 9
function encode(frase) {
  for (let i = 0; i < frase.length; i++) {
      frase = frase.replace('a', '1').replace('e', '2').replace('i', '3').replace('o', '4').replace('u', '5');
  }
  return frase;
}
function decode(frase) {
  for (let i = 0; i < frase.length; i++) {
    frase = frase.replace('1', 'a').replace('2', 'e').replace('3', 'i').replace('4', 'o').replace('5', 'u');
  }
    return frase;
  }

// Desafio 10
function techList(tech, name) {
  tech.sort();
  let resultado = [];
  if(tech.length === 0){
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i++) {
    resultado.push({tech: tech[i], name: name});
  }
  return resultado;
}
console.log(techList(["js", "html"], 'roger'));
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

// teste