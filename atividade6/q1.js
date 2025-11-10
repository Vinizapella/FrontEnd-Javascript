/**
 * Questão 1: Soma de dois números
 *
 * Implemente uma função chamada somaNumeros que recebe dois parâmetros (a, b)
 * e retorna a soma desses dois números.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * - Se ambos os parâmetros forem números válidos (inteiros ou decimais): retorne a soma (a + b)
 * - Se qualquer um dos parâmetros NÃO for do tipo 'number': retorne NaN
 * - A função deve funcionar com números positivos, negativos e zero
 * - A função deve funcionar com números decimais
 *
 * CASOS DE TESTE OBRIGATÓRIOS:
 * somaNumeros(2, 3) deve retornar exatamente 5
 * somaNumeros(-1, 1) deve retornar exatamente 0
 * somaNumeros(3.5, 2.7) deve retornar exatamente 6.2
 * somaNumeros('a', 2) deve retornar NaN (use Number.isNaN() para verificar)
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'somaNumeros'
 * - A validação de tipo use 'typeof' para verificar se é 'number'
 * - Retorne NaN quando pelo menos um parâmetro não for número
 * - A função seja exportada com module.exports
 */

function somaNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  return a + b;
  // Retorna a soma dos dois números
}
module.exports = somaNumeros;
