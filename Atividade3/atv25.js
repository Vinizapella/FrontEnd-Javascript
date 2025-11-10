// 25 - Crie uma função chamada "calculadora" que recebe uma string como parâmetro contendo uma
// expressão matemática (ex: "2+3*4") e retorna o resultado dessa expressão.
function calculadora(expressao) {
  try {
    return eval(expressao);
  } catch (e) {
    return "Expressão inválida";
  }
}

console.log("Q25 - '2+3*4':", calculadora("2+3*4"));
console.log("Q25 - '(10+5)/3':", calculadora("(10+5)/3"));