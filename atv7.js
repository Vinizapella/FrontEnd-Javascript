/*
Verificar se uma palavra é um palíndromo
*/

const prompt = require("prompt-sync")();

var palavra = prompt("Digite uma palavra: ");
var palavraInvertida = palavra.split("").reverse().join("");
if(palavra === palavraInvertida){
    console.log("A palavra é um palíndromo");
}else{
    console.log("A palavra não é um palíndromo");
}