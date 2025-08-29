/*
Calcular o fatorial de um número.
*/

const prompt = require("prompt-sync")();

let number = Number(prompt("Digite um número para fatoriar: "));
let resultado = 1;

for (let i = number; i > 1; i--) {
    resultado *= i;
}

console.log(`O fatorial de ${number} é ${resultado}`);