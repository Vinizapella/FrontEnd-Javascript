/*
Exiba no console a sequência de números de 1 a 5 em uma única linha no formato "1-2-3-4-5".
*/

const prompt = require("prompt-sync")();

for(var number = 1; number<=5; number++){
    if(number<5){
        process.stdout.write(number + "-");
    }else{
        console.log(number);
    }
}