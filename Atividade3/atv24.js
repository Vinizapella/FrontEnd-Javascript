// 24 - Crie uma função chamada "gerarNumeroAleatorio" que recebe um número mínimo e um número
// máximo como parâmetros e retorna um número aleatório entre esses dois números.
function gerarNumeroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Q24 - Aleatório (1-10):", gerarNumeroAleatorio(1, 10));
console.log("Q24 - Aleatório (50-100):", gerarNumeroAleatorio(50, 100));