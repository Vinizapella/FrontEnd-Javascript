/*
Crie uma função que aceite um número e retorne um array com todos os
números de 1 até o número fornecido, incluindo o número fornecido.
// Exemplo de uso:
let numero = 5;
console.log(criarArray(numero)); // [1, 2, 3, 4, 5]
*/

const prompt = require("prompt-sync")();

function criarArray(numero){
    const array = [];
    for(let i = 1; i<= numero; i++){
        array.push(i);
    }
    return array;
}

let numero = 90;
console.log(criarArray(numero));