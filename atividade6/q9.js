/**
 * Questão 9: Objeto Estudante
 *
 * Implemente uma função chamada criarEstudante que não recebe parâmetros.
 * Esta função deve criar e retornar um objeto estudante com as seguintes características:
 *
 * PROPRIEDADES OBRIGATÓRIAS:
 * - nome: string com o nome do estudante
 * - idade: número com a idade do estudante
 * - nota1: número (será definido pelos testes como 8)
 * - nota2: número (será definido pelos testes como 9)
 * - nota3: número (será definido pelos testes como 7)
 *
 * MÉTODOS OBRIGATÓRIOS:
 * - media(): deve retornar a média aritmética das três notas (nota1 + nota2 + nota3) / 3
 * - situacao(): deve retornar "Aprovado" se a média >= 7, senão "Reprovado"
 *
 * CASO DE TESTE OBRIGATÓRIO:
 * Após criar o estudante, os testes irão:
 * 1. Definir estudante.nota1 = 8
 * 2. Definir estudante.nota2 = 9
 * 3. Definir estudante.nota3 = 7
 * 4. Verificar se estudante.media() retorna 8 ((8+9+7)/3 = 8)
 * 5. Verificar se estudante.situacao() retorna "Aprovado" (média 8 >= 7)
 *
 * EXEMPLO DE USO:
 * const estudante = criarEstudante();
 * estudante.nota1 = 8;
 * estudante.nota2 = 9;
 * estudante.nota3 = 7;
 * console.log(estudante.media()); // 8
 * console.log(estudante.situacao()); // "Aprovado"
 *
 * IMPORTANTE: A função será testada automaticamente. Certifique-se de que:
 * - O nome da função seja exatamente 'criarEstudante'
 * - A função não receba parâmetros
 * - Retorne um objeto com as propriedades nome e idade
 * - O objeto tenha o método media() que calcule (nota1 + nota2 + nota3) / 3
 * - O objeto tenha o método situacao() que retorne "Aprovado" ou "Reprovado"
 * - Os métodos acessem as propriedades nota1, nota2 e nota3 do próprio objeto
 * - A função seja exportada com module.exports
 */

