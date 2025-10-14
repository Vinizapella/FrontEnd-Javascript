/*
Crie uma função que retorne a diferença em dias entre duas datas.
*/

const prompt = require("prompt-sync")();

function diferencaEmDias(data1, data2) {
  const tempo1 = data1.getTime();
  const tempo2 = data2.getTime();

  const diferencaEmTempo = Math.abs(tempo2 - tempo1);

  const diferencaEmDias = Math.ceil(diferencaEmTempo / (1000 * 60 * 60 * 24));

  return diferencaEmDias;
}

const hoje = new Date();
const natal = new Date(2025, 11, 25); 
console.log(`Faltam ${diferencaEmDias(hoje, natal)} dias para o Natal.`);