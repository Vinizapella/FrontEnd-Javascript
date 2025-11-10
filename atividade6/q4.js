/**
 * Questão 4: Soma dos termos pares da sequência de Fibonacci
 *
 * Implemente uma função chamada somaFibonacciPares que não recebe parâmetros.
 * Esta função deve calcular a soma dos termos pares da sequência de Fibonacci
 * cujos valores não excedam 50.000 (cinquenta mil).
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * - A função deve retornar um número (a soma dos termos pares)
 * - Valor esperado: 60696
 *
 * REGRAS DA SEQUÊNCIA DE FIBONACCI:
 * - Inicie com 0 e 1: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...]
 * - Cada termo é a soma dos dois anteriores: F(n) = F(n-1) + F(n-2)
 * - Considere apenas os termos PARES da sequência
 * - Inclua na soma apenas termos que sejam ≤ 50.000
 *
 * EXEMPLO DE CÁLCULO:
 * Sequência: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025...
 * Termos pares ≤ 50.000: 0, 2, 8, 34, 144, 610, 2584, 10946, 46368
 * Soma: 0 + 2 + 8 + 34 + 144 + 610 + 2584 + 10946 + 46368 = 60696
 *
 * CASO DE TESTE OBRIGATÓRIO:
 * somaFibonacciPares() deve retornar exatamente 60696
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'somaFibonacciPares'
 * - A sequência comece com 0 e 1
 * - Use um loop para gerar a sequência até que o próximo termo exceda 50.000
 * - Verifique se cada termo é par usando (termo % 2 === 0)
 * - A função seja exportada com module.exports
 */

function somaFibonacciPares() {
  let soma = 0;
  let a = 0;
  let b = 1;

  while (a <= 50000) {
    if (a % 2 === 0) {
      soma += a;
    }
    let temp = a + b;
    a = b;
    b = temp;
  }
  return soma;
}
module.exports = somaFibonacciPares;