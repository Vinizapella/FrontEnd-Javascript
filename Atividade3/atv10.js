// 10 - Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
// array.
// Modifique os elementos do array de modo a a sequência de números ficar do contrário.
// Ou seja, se digitou: 1,2,3
// Vai aparecer: 3,2,1
let array10 = [];
array10.push(prompt("Q10: Digite o primeiro número:"));
array10.push(prompt("Q10: Digite o segundo número:"));
array10.push(prompt("Q10: Digite o terceiro número:"));

console.log("Q10 - Array original:", array10);

array10.reverse();

console.log("Q10 - Array reverso:", array10);