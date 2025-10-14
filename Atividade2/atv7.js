/*
Exercício 7: Crie uma função que aceite dois parâmetros: um array de números e um
número. A função deve retornar um novo array com todos os números maiores que o
número fornecido.
// Exemplo de uso:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumeros(array, num)); // [6, 7, 8, 9]
*/

const prompt = require("prompt-sync")();

function filtrarNumerosComFor(array, numero) {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > numero) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 5;
console.log(filtrarNumerosComFor(array, num));