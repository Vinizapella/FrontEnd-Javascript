/*
Crie uma função chamada ehPar que recebe um número como parâmetro e
retorna true se o número for par e false caso contrário.
*/
const prompt = require("prompt-sync")();

function ehPar(a) {
  return a % 2 === 0;
}

console.log(ehPar(3));