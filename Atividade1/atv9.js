/*
 Exiba no console a tabuada do número 5, do 1 ao 10.
 */

const prompt = require("prompt-sync")();


var number = 5;
console.log("Tabuada do 5");

for(var i=1; i<11; i++){
    number = 5 * i;
    console.log(`5 x ${i} = ${number}`);
}