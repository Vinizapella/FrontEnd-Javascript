// 17 - Crie um array chamado "nomes" com os nomes de algumas pessoas que você conhece. Imprima o
// array no console.
let nomes = ["Carlos", "Maria", "João"];
console.log("Q17 - Original:", nomes);

// Adicione um novo nome ao final do array "nomes". Imprima o array atualizado no console.
nomes.push("Ana");
console.log("Q17 - push 'Ana':", nomes);

// Remova o último nome do array "nomes". Imprima o array atualizado no console.
nomes.pop();
console.log("Q17 - pop:", nomes);

// Adicione um novo nome ao início do array "nomes". Imprima o array atualizado no console.
nomes.unshift("Beatriz");
console.log("Q17 - unshift 'Beatriz':", nomes);

// Remova o primeiro nome do array "nomes". Imprima o array atualizado no console.
nomes.shift();
console.log("Q17 - shift:", nomes);