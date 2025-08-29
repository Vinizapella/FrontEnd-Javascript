/*
Mostrar os múltiplos de 3 entre 1 e 30.
*/

const prompt = require("prompt-sync")();

for(var i= 0; i<=30; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}