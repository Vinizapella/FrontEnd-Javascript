// 19 - Crie um novo array chamado "idades" com algumas idades. Use o método every() para verificar se
// todos os elementos do array são maiores que 18. Imprima o resultado no console.
let idades = [20, 30, 19, 25];
let todosMaiores18 = idades.every(function(idade) {
  return idade > 18;
});
console.log("Q19 - Teste 1 (todos > 18):", todosMaiores18);

let idades2 = [20, 17, 30];
let todosMaiores18_2 = idades2.every(function(idade) {
  return idade > 18;
});
console.log("Q19 - Teste 2 (um < 18):", todosMaiores18_2);