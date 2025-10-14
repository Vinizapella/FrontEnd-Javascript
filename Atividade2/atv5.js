/*
Crie uma função chamada calcularMedia que recebe um array de números
como parâmetro e retorna a média dos números.
console.log(calcularMedia([1, 2, 3, 4, 5])); // 3
*/
const prompt = require("prompt-sync")();

function calcularMedia(arrayDeNumeros){
    let soma = 0;
    for(let i=0; i<arrayDeNumeros.length; i++){
        soma = soma+arrayDeNumeros[i];
    }
    const media = soma/arrayDeNumeros.length;
    return media;
}

console.log(calcularMedia([1,2,3,4,5]));

