/**
 * Questão 6: Manipulação de Objeto de Livro
 *
 * Implemente uma função chamada manipulacaoObjeto que não recebe parâmetros.
 * Esta função deve criar e manipular um objeto representando um livro,
 * realizando uma série de operações e retornando o objeto final.
 *
 * ESPECIFICAÇÕES DE RETORNO:
 * A função deve retornar um objeto com as seguintes propriedades e métodos:
 * {
 *   titulo: "O Alquimista",
 *   autor: "Paulo Coelho", 
 *   anoPublicacao: 1992,
 *   editora: "Rocco",
 *   getIdade: function() { return ano_atual - 1992 },
 *   getDescricao: function() { return 'O livro "O Alquimista" foi escrito por "Paulo Coelho" e publicado em "1992".' }
 * }
 *
 * OPERAÇÕES OBRIGATÓRIAS (execute em ordem):
 *
 * a) Crie um objeto "livro" com as propriedades iniciais:
 *    - titulo: "O Alquimista"
 *    - autor: "Paulo Coelho"
 *    - anoPublicacao: 1988
 *
 * b) Acesse a propriedade "titulo" do objeto e imprima no console
 *    - Use console.log(livro.titulo)
 *
 * c) Altere a propriedade "anoPublicacao" para 1992
 *    - livro.anoPublicacao = 1992
 *
 * d) Adicione a propriedade "editora" com valor "Rocco"
 *    - livro.editora = "Rocco"
 *
 * e) Adicione o método "getIdade" que retorna a idade do livro
 *    - Deve calcular: new Date().getFullYear() - livro.anoPublicacao
 *    - Deve retornar um número (anos desde a publicação)
 *
 * f) Adicione o método "getDescricao" que retorna uma string formatada
 *    - Formato exato: 'O livro "titulo" foi escrito por "autor" e publicado em "anoPublicacao".'
 *    - Exemplo: 'O livro "O Alquimista" foi escrito por "Paulo Coelho" e publicado em "1992".'
 *
 * CASOS DE TESTE OBRIGATÓRIOS:
 * - livro.titulo deve ser exatamente "O Alquimista"
 * - livro.autor deve ser exatamente "Paulo Coelho"
 * - livro.anoPublicacao deve ser exatamente 1992
 * - livro.editora deve ser exatamente "Rocco"
 * - livro.getIdade() deve retornar (ano atual - 1992)
 * - livro.getDescricao() deve retornar a string formatada exata
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'manipulacaoObjeto'
 * - Execute todas as operações na ordem especificada
 * - Use console.log para imprimir o título
 * - Os métodos devem ser funções que retornam os valores corretos
 * - A função seja exportada com module.exports
 */


