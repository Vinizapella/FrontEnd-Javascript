/**
 * Questão 5: Manipulação de Array de Linguagens de Programação
 *
 * Implemente uma função chamada manipulacaoArrayLinguagens que não recebe parâmetros.
 * Esta função deve realizar uma série de operações em um array de linguagens de programação
 * e retornar um objeto com os resultados específicos.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * A função deve retornar um objeto com as seguintes propriedades:
 * {
 *   linguagensFinal: ['Rust', 'Python', 'TypeScript', 'Go', 'Java', 'C++', 'Ruby'],
 *   tamanhoArray: 7,
 *   versoes: [2010, 1991, 2012, 2009, 1995, 1985, 1995],
 *   modernas: ['Rust', 'TypeScript', 'Go']
 * }
 *
 * OPERAÇÕES OBRIGATÓRIAS (execute em ordem e use console.log após cada uma):
 *
 * a) Crie um array "linguagens" com: ["JavaScript", "Python", "Java"]
 *    - console.log(linguagens) após criar
 *
 * b) Adicione "C++" e "Ruby" ao final do array (use push)
 *    - console.log(linguagens) após adicionar
 *
 * c) Remova o primeiro item do array (use shift)
 *    - console.log(linguagens) após remover
 *
 * d) Adicione "TypeScript" e "Go" entre "Python" e "Java" (use splice)
 *    - console.log(linguagens) após inserir
 *
 * e) Adicione "Rust" no início do array (use unshift)
 *    - console.log(linguagens) após adicionar
 *
 * f) Verifique o tamanho do array (use .length)
 *    - console.log(linguagens.length) após verificar
 *
 * g) Crie array "versoes" com anos de lançamento usando o objeto anosLancamento
 *    - console.log(versoes) após criar
 *
 * h) Crie array "modernas" com linguagens criadas após 2000 (use filter)
 *    - console.log(modernas) após criar
 *
 * OBJETO DE REFERÊNCIA (use este objeto):
 * const anosLancamento = {
 *     JavaScript: 1995,
 *     Python: 1991,
 *     Java: 1995,
 *     "C++": 1985,
 *     Ruby: 1995,
 *     TypeScript: 2012,
 *     Go: 2009,
 *     Rust: 2010
 * };
 *
 * CASOS DE TESTE OBRIGATÓRIOS:
 * - linguagensFinal deve ser exatamente: ['Rust', 'Python', 'TypeScript', 'Go', 'Java', 'C++', 'Ruby']
 * - tamanhoArray deve ser exatamente: 7
 * - versoes deve ser exatamente: [2010, 1991, 2012, 2009, 1995, 1985, 1995]
 * - modernas deve ser exatamente: ['Rust', 'TypeScript', 'Go']
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'manipulacaoArrayLinguagens'
 * - Execute todas as operações na ordem especificada
 * - Use console.log após cada operação
 * - Retorne o objeto com as 4 propriedades exatas
 * - A função seja exportada com module.exports
 */

