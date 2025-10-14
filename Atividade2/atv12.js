/*
Crie uma função para retornar um número aleatório entre 1 e 100.
*/

const prompt = require("prompt-sync")();

function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

let numero = gerarNumeroAleatorio();
console.log("Número aleatório:", numero);