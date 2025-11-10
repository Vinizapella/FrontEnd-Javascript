// 8 - Desenvolva um algoritmo que leia a idade de uma pessoa e informe a sua classe eleitoral.
// A - Não-eleitor (abaixo de 16 anos)
// B - Eleitor obrigatório (entre 18 e 65 anos)
// C - Eleitor facultativo (entre 16 e 18 e maior de 65 anos)
let idade = parseInt(prompt("Q8: Digite a sua idade:"));

if (idade < 16) {
  alert("Não-eleitor");
} else if ((idade >= 16 && idade < 18) || idade > 65) {
  alert("Eleitor facultativo");
} else {
  alert("Eleitor obrigatório");
}