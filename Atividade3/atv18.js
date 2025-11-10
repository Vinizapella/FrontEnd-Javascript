// 18 - Crie um novo array chamado "numeros" com alguns números. Imprima o array no console.
let numeros = [5, 1, 8, 4, 10];
console.log("Q18 - Original 'numeros':", numeros);

// Use o método join() para transformar o array "numeros" em uma string separada por vírgulas. Imprima
// a string resultante no console.
let stringNumeros = numeros.join("|");
console.log("Q18 - join '|':", stringNumeros);

// Use o método reverse() para inverter a ordem dos elementos do array "numeros". Imprima o array
// atualizado no console.
numeros.reverse();
console.log("Q18 - reverse:", numeros);

// Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
// array "numeros". Imprima o novo array no console.
let primeirosDois = numeros.slice(0, 2);
console.log("Q18 - slice(0, 2):", primeirosDois);

// Use o método sort() para ordenar o array "nomes" em ordem alfabética. Imprima o array atualizado no
// console.
// (Usando o array 'nomes' da Q17)
nomes.sort();
console.log("Q18 - sort 'nomes':", nomes);

// (Resetando 'numeros' para a ordem original para clareza dos próximos)
numeros = [5, 1, 8, 4, 10];

// Use o método filter() para criar um novo array que contenha apenas os números pares do array
// "numeros". Imprima o novo array no console.
let pares = numeros.filter(function(num) {
  return num % 2 === 0;
});
console.log("Q18 - filter (pares):", pares);

// Use o método map() para criar um novo array que contenha o quadrado de cada elemento do array
// "numeros". Imprima o novo array no console.
let quadrados = numeros.map(function(num) {
  return num * num;
});
console.log("Q18 - map (quadrado):", quadrados);

// Use o método reduce() para calcular a soma de todos os elementos do array "numeros". Imprima o
// resultado no console.
let somaTotal = numeros.reduce(function(acumulador, num) {
  return acumulador + num;
}, 0);
console.log("Q18 - reduce (soma):", somaTotal);

// Use o método forEach() para imprimir cada elemento do array "nomes" no console.
console.log("Q18 - forEach 'nomes':");
nomes.forEach(function(nome) {
  console.log(nome);
});