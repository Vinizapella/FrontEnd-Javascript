// 13 - Escreva uma função que informe o retorno de um investimento (montante) com base nos
// valores do capital inicial, tempo em meses e taxa de juros mensal.
// Use a fórmula: M = C * (1+i)t
// Onde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

function calcularMontante(capital, taxaPercentual, tempoMeses) {
  let taxaDecimal = taxaPercentual / 100;
  let montante = capital * Math.pow((1 + taxaDecimal), tempoMeses);
  return montante.toFixed(2);
}

console.log("Q13 - O montante é: R$ " + calcularMontante(1000, 1, 12));