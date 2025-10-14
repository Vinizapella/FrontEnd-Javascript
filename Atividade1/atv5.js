/*
Verificar se um ano é bissexto.
*/

const prompt = require("prompt-sync")();

var ano = Number(prompt("Digite um ano para descobrirmos se é bissexto: "));

if(ano %4 ===0){
    console.log("Ano bissexto");
}else{
    console.log("Ano não é bissexto");
}