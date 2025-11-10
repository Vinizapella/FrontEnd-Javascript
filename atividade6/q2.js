// q2.js
/**
 * Questão 2: Verifica se um número é par
 *
 * Implemente uma função chamada ehPar que recebe um parâmetro (numero)
 * e verifica se é um número par.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * - Se o parâmetro for um número inteiro par: retorne true
 * - Se o parâmetro for um número inteiro ímpar: retorne false
 * - Se o parâmetro NÃO for um número inteiro válido: retorne null
 * - Zero (0) deve ser considerado par
 * - Números negativos devem ser tratados normalmente (-4 é par, -3 é ímpar)
 * - Números decimais devem retornar null (não são inteiros)
 * - Strings, objetos ou outros tipos devem retornar null
 *
 * CASOS DE TESTE OBRIGATÓRIOS:
 * ehPar(2) deve retornar exatamente true
 * ehPar(3) deve retornar exatamente false
 * ehPar(0) deve retornar exatamente true
 * ehPar(-4) deve retornar exatamente true
 * ehPar(3.5) deve retornar exatamente null
 * ehPar('a') deve retornar exatamente null
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'ehPar'
 * - Use Number.isInteger() para verificar se é um número inteiro
 * - Use o operador módulo (%) para verificar se é par: numero % 2 === 0
 * - A função seja exportada com module.exports
 */

function ehPar(numero) {
  if (typeof numero !== 'number' || !Number.isInteger(numero)) {
    return null;
  }
  return numero % 2 === 0;
}
module.exports = ehPar;
