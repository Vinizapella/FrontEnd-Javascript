/*
Crie uma função que aceite um array e um valor. A função deve retornar a
quantidade de vezes que o valor aparece no array.
// Exemplo de uso:
let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array, valor)); // 4
*/

const prompt = require("prompt-sync")();

function contarOcorrencias(array, valor){
    let contador = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] === valor){
            contador++;
        } 
    } 
    return contador;
}

let array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
let valor = 4;
console.log(contarOcorrencias(array, valor));