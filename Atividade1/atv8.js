/*
 Some todos os números de 1 a 100 e exiba o resultado no console.
 */

const prompt = require("prompt-sync")();

var number= Number(prompt("Apenas analize: "));
number = 0;

for(var i=0; i<=100; i++){
    number = number + i;
    console.log(number);
}