/*
Crie um objeto Date e defina a data para 100 dias a partir de agora.
*/

const prompt = require("prompt-sync")();

let dataFutura = new Date();
dataFutura.setDate(dataFutura.getDate() + 100);

console.log("Data daqui a 100 dias:", dataFutura.toLocaleDateString('pt-BR'));