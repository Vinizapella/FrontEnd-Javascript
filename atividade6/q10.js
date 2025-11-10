/**
 * Questão 10: Manipulação de Array de Números
 *
 * Implemente uma função chamada manipularArray que recebe um array de números como parâmetro.
 * Esta função deve realizar uma série de operações no array e retornar um objeto com os resultados.
 *
 * OPERAÇÕES OBRIGATÓRIAS (nesta ordem):
 * 1. Crie uma cópia do array original
 * 2. Remova o primeiro elemento da cópia do array
 * 3. Remova o último elemento da cópia do array
 * 4. Adicione o número 0 no início da cópia do array
 * 5. Adicione o número 10 no final da cópia do array
 * 6. Calcule a soma de todos os números na cópia do array
 * 7. Encontre o maior número na cópia do array
 * 8. Crie um novo array apenas com os números pares da cópia do array
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * A função deve retornar um objeto com as seguintes propriedades:
 * - arrayCopia: o array após todas as manipulações
 * - soma: a soma de todos os números da cópia
 * - maiorNumero: o maior número da cópia
 * - numerosPares: array com apenas os números pares da cópia
 *
 * CASO DE TESTE OBRIGATÓRIO:
 * manipularArray([1, 2, 3, 4, 5])
 * 
 * Passo a passo:
 * 1. Cópia inicial: [1, 2, 3, 4, 5]
 * 2. Remove primeiro (1): [2, 3, 4, 5]
 * 3. Remove último (5): [2, 3, 4]
 * 4. Adiciona 0 no início: [0, 2, 3, 4]
 * 5. Adiciona 10 no final: [0, 2, 3, 4, 10]
 * 6. Soma: 0 + 2 + 3 + 4 + 10 = 19
 * 7. Maior número: 10
 * 8. Números pares: [0, 2, 4, 10]
 *
 * Deve retornar:
 * {
 *   arrayCopia: [0, 2, 3, 4, 10],
 *   soma: 19,
 *   maiorNumero: 10,
 *   numerosPares: [0, 2, 4, 10]
 * }
 *
 * EXEMPLO DE USO:
 * const resultado = manipularArray([1, 2, 3, 4, 5]);
 * console.log(resultado.arrayCopia); // [0, 2, 3, 4, 10]
 * console.log(resultado.soma); // 19
 * console.log(resultado.maiorNumero); // 10
 * console.log(resultado.numerosPares); // [0, 2, 4, 10]
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'manipularArray'
 * - A função receba exatamente 1 parâmetro (array de números)
 * - Retorne um objeto com as propriedades: arrayCopia, soma, maiorNumero, numerosPares
 * - Siga exatamente a ordem das operações especificadas
 * - Use métodos como slice(), shift(), pop(), unshift(), push(), reduce(), Math.max(), filter()
 * - A função seja exportada com module.exports
 */
