// 22 - Crie um array chamado "frutas" com as frutas: maçã, banana e laranja. Imprima o array no
// console.
let frutas = ["maçã", "banana", "laranja"];
console.log("Q22 - Frutas:", frutas);

// Acesse o segundo elemento do array "frutas" e imprima no console.
console.log("Q22 - Segundo elemento:", frutas[1]);

// Adicione a fruta "morango" ao final do array "frutas". Imprima o array atualizado no console.
frutas.push("morango");
console.log("Q22 - push 'morango':", frutas);

// Remova o primeiro elemento do array "frutas". Imprima o array atualizado no console.
frutas.shift();
console.log("Q22 - shift:", frutas);

// Crie um novo array chamado "numeros" com alguns números. Use o método push() para adicionar um
// novo número ao final do array. Imprima o array atualizado no console.
let numeros22 = [10, 20, 30];
numeros22.push(40);
console.log("Q22 - numeros22 push 40:", numeros22);

// Use o método pop() para remover o último elemento do array "numeros". Imprima o array atualizado no
// console.
numeros22.pop();
console.log("Q22 - numeros22 pop:", numeros22);

// Use o método unshift() para adicionar um novo número no início do array "numeros". Imprima o array
// atualizado no console.
numeros22.unshift(5);
console.log("Q22 - numeros22 unshift 5:", numeros22);

// Use o método shift() para remover o primeiro elemento do array "numeros". Imprima o array atualizado
// no console.
numeros22.shift();
console.log("Q22 - numeros22 shift:", numeros22);

// Crie um novo array chamado "frutas2" com as frutas: manga, abacaxi e melancia. Use o método
// concat() para unir os arrays "frutas" e "frutas2" em um único array chamado "todasFrutas". Imprima o
// array "todasFrutas" no console.
let frutas2 = ["manga", "abacaxi", "melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log("Q22 - concat:", todasFrutas);

// Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
// array "todasFrutas". Imprima o novo array no console.
let duasPrimeiras = todasFrutas.slice(0, 2);
console.log("Q22 - slice(0, 2):", duasPrimeiras);

// Use o método splice() para remover o segundo elemento do array "todasFrutas". Imprima o array
// atualizado no console.
todasFrutas.splice(1, 1);
console.log("Q22 - splice(1, 1):", todasFrutas);

// Use o método indexOf() para encontrar o índice da fruta "banana" no array "todasFrutas". Imprima o
// índice no console.
let indiceBanana = todasFrutas.indexOf("banana");
console.log("Q22 - indexOf 'banana':", indiceBanana);

// Use o método filter() para criar um novo array que contenha apenas as frutas que começam com a letra
// "m". Imprima o novo array no console.
let frutasComM = todasFrutas.filter(function(fruta) {
  return fruta[0] === "m";
});
console.log("Q22 - filter 'm':", frutasComM);

// Use o método map() para criar um novo array que contenha o dobro de cada elemento do array
// "numeros". Imprima o novo array no console.
let dobroNumeros = numeros22.map(function(num) {
  return num * 2;
});
console.log("Q22 - map (dobro):", dobroNumeros);

// Use o método forEach() para imprimir cada elemento do array "todasFrutas" no console.
console.log("Q22 - forEach 'todasFrutas':");
todasFrutas.forEach(function(fruta) {
  console.log(fruta);
});