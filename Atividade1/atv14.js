/*
Declare uma variável com um texto, por exemplo, "JavaScript". Exiba no console o texto invertido ("tpircSavaJ").
*/

const prompt = require("prompt-sync")();

var texto = "JavaScript";
var textoInvertido = "";
for(var i=texto.length -1; i>=0; i--){
    textoInvertido += texto[i];
    
}
console.log(textoInvertido);