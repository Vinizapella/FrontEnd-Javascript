/*
Exiba no console um triângulo com 5 linhas de asteriscos:
* 
** 
*** 
**** 
*****
******
*******
*/

const prompt = require("prompt-sync")();
var linhas = 5;
var asteriscos = "";
for(var i=1; i<=linhas; i++){
    asteriscos += "*";
    console.log(asteriscos);
}