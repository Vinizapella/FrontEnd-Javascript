/*
1 - Verificar se um número é positivo, negativo ou zero.
*/

const prompt = require("prompt-sync")();

var numero = prompt("Escolha um numero: ");
numero = Number(numero);

if(numero > 0){
    console.log("Positivo");
}else if(numero ===0){
console.log("Seu numero é igual a zero");
}else{
    console.log("Seu numero é negativo");
}


