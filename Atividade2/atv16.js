/*
Crie um array chamado "frutas" que contém "maçã", "banana" e "laranja".
Imprima o segundo elemento do array "frutas".
Adicione "manga" ao final do array "frutas".
Remova o primeiro elemento do array "frutas".
Verifique o tamanho do array "frutas".
Crie um loop for que percorre o array "frutas" e imprime cada fruta.
Use o método forEach para imprimir cada elemento do array "frutas".
Use o método map para criar um novo array que contém o tamanho de cada fruta do array
"frutas".
Use o método filter para criar um novo array que contém apenas as frutas do array "frutas"
que têm mais de 5 caracteres.
Use o método reduce para calcular a soma dos números em um array.
*/

const prompt = require("prompt-sync")();

let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[1]); 
frutas.push("manga");
console.log(frutas); 
let primeiraFruta = frutas.shift();
console.log("Fruta removida:", primeiraFruta); 
console.log(frutas); 
console.log("Tamanho do array:", frutas.length); 
console.log("\n--- Usando o loop for ---");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}console.log("\n--- Usando forEach ---");
frutas.forEach(function(fruta) {
  console.log(fruta);
});let tamanhos = frutas.map(function(fruta) {
  return fruta.length;
});
console.log("Array original:", frutas); 
console.log("Array com tamanhos:", tamanhos); 
let frutasLongas = frutas.filter(function(fruta) {
  return fruta.length > 5;
});
console.log("Frutas com mais de 5 letras:", frutasLongas); 
let numeros = [10, 20, 30, 40];
let soma = numeros.reduce(function(acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
console.log("A soma dos números é:", soma); 