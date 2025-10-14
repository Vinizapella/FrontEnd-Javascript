/*
Exiba os números de 1 a 30 com as seguintes regras:
Se divisível por 3, exiba "Fizz".
Se divisível por 5, exiba "Buzz".
Se divisível por 3 e 5, exiba "FizzBuzz".
Caso contrário, exiba o número.
*/

const prompt = require("prompt-sync")();

var number = 1;

for(i=0; i<30; i++){
    if(number %3 ===0){
        console.log("Fizz");
        if(number %5 ===0){
            console.log("FizzBuzz");
        }
    }else if(number %5 ===0){
        console.log("Buzz");
    }else{
        console.log(number);
    }
    number++;
}