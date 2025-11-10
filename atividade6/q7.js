/**
 * Questão 7: Elementos comuns em dois arrays
 *
 * Implemente uma função chamada elementosComuns que receba dois arrays como parâmetros
 * e retorne um novo array com os elementos que aparecem em ambos os arrays.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * - A função deve retornar um array contendo apenas os elementos comuns
 * - Não deve haver elementos duplicados no array de retorno
 * - A ordem dos elementos no array de retorno não importa (será ordenado nos testes)
 *
 * PARÂMETROS:
 * - array1: primeiro array para comparação
 * - array2: segundo array para comparação
 *
 * CASO DE TESTE OBRIGATÓRIO:
 * elementosComuns([1, 2, 3, 4, 5, 10, 15, 16], [3, 4, 5, 6, 7, 15, 24])
 * deve retornar: [3, 4, 5, 15] (em qualquer ordem)
 *
 * EXEMPLO DE USO:
 * const resultado = elementosComuns([1, 2, 3, 4, 5, 10, 15, 16], [3, 4, 5, 6, 7, 15, 24]);
 * console.log(resultado); // [3, 4, 5, 15] (ou em outra ordem)
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'elementosComuns'
 * - A função receba exatamente 2 parâmetros (array1, array2)
 * - Retorne um array com apenas os elementos que existem em ambos os arrays
 * - Não inclua elementos duplicados no resultado
 * - Use métodos como filter(), includes(), ou Set para implementar
 * - A função seja exportada com module.exports
 */
