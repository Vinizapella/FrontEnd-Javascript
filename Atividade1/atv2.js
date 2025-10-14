/*
2 - Calcular a média de 3 notas e mostrar a situação do aluno (aprovado, reprovado ou em exame).
*/

const prompt = require("prompt-sync")();

var nota1 = Number(prompt("Digite a primeira nota: "));
var nota2 = Number(prompt("Digite a segunda nota: "));
var nota3 = Number(prompt("Digite a terceira nota: "));

var media = (nota1 + nota2 + nota3) / 3;

if(media >= 7){
    console.log("Aluno passou direto");
}else if(media >= 5 && media <= 6.9){
    console.log("Aluno em exame");
}else{
    console.log("Aluno reprovado");
}