// 6 - Desenvolva um algoritmo que solicite salário e prestação. Se a prestação for
// maior que 20% do salário, imprimir: Empréstimo não pode ser concedido.
// Senão imprimir: Empréstimo pode ser concedido.
let salario = parseFloat(prompt("Q6: Digite o seu salário:"));
let prestacao = parseFloat(prompt("Q6: Digite o valor da prestação:"));
let limite = salario * 0.20;

if (prestacao > limite) {
  alert("Empréstimo não pode ser concedido.");
} else {
  alert("Empréstimo pode ser concedido.");
}