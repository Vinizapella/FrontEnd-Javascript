/**
 * Questão 8: Encontrar caracteres duplicados
 *
 * Implemente uma função chamada encontrarDuplicados que receba uma string como parâmetro
 * e retorne um objeto contendo apenas os caracteres que aparecem mais de uma vez na string,
 * junto com suas respectivas contagens.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * - A função deve retornar um objeto onde as chaves são os caracteres duplicados
 * - Os valores são o número de vezes que cada caractere aparece na string
 * - Apenas caracteres que aparecem 2 ou mais vezes devem estar no objeto
 * - A função deve ser case-insensitive (tratar maiúsculas e minúsculas como iguais)
 * - Espaços em branco devem ser considerados como caracteres válidos
 *
 * CASO DE TESTE OBRIGATÓRIO:
 * encontrarDuplicados('programacao web e mobile')
 * deve retornar: { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 }
 *
 * EXEMPLO DE USO:
 * const resultado = encontrarDuplicados('programacao web e mobile');
 * console.log(resultado); // { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 }
 *
 * ANÁLISE DO EXEMPLO:
 * Na string 'programacao web e mobile':
 * - 'r' aparece 2 vezes (posições 1 e 4)
 * - 'o' aparece 3 vezes (posições 2, 6 e 21)
 * - 'a' aparece 3 vezes (posições 5, 7 e 11)
 * - 'm' aparece 2 vezes (posições 8 e 17)
 * - ' ' (espaço) aparece 3 vezes (posições 11, 15 e 17)
 * - 'e' aparece 3 vezes (posições 13, 16 e 19)
 * - 'b' aparece 2 vezes (posições 14 e 20)
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'encontrarDuplicados'
 * - A função receba exatamente 1 parâmetro (string)
 * - Retorne um objeto com caracteres duplicados e suas contagens
 * - Considere apenas caracteres que aparecem 2 ou mais vezes
 * - Trate a string como case-insensitive (use toLowerCase())
 * - Inclua espaços em branco na contagem
 * - A função seja exportada com module.exports
 */

