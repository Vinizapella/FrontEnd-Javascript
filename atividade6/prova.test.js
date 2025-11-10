const somaNumeros = require('./q1');
const ehPar = require('./q2');
const fizzBuzz = require('./q3');
const somaFibonacciPares = require('./q4');
const manipulacaoArrayLinguagens = require('./q5');
const manipulacaoObjeto = require('./q6');
const elementosComuns = require('./q7');
const encontrarDuplicados = require('./q8');
const criarEstudante = require('./q9');
const manipularArray = require('./q10');

// Array para armazenar os resultados, como no original
const resultados = [];
const PESO_QUESTOES = {
  q1: 0.5,
  q2: 0.5,
  q3: 1.0,
  q4: 1.0,
  q5: 1.5,
  q6: 1.5,
  q7: 1.0,
  q8: 1.0,
  q9: 1.0,
  q10: 1.0,
};

describe('Prova de JavaScript - Testes Automatizados com Nota', () => {
  describe('Questão 1: Soma de dois números', () => {
    it('deve calcular a pontuação baseada nos cenários', () => {
      let pontuacao = 0;
      try {
        const cenariosCorretos =
          (somaNumeros(2, 3) === 5) +
          (somaNumeros(-1, 1) === 0) +
          (somaNumeros(3.5, 2.7) === 6.2) +
          Number.isNaN(somaNumeros('a', 2));
        pontuacao = (cenariosCorretos / 4) * PESO_QUESTOES.q1;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 1, score: pontuacao });
    });
  });

  describe('Questão 2: Verifica se um número é par', () => {
    it('deve calcular a pontuação baseada nos cenários', () => {
      let pontuacao = 0;
      try {
        const cenariosCorretos =
          (ehPar(2) === true) +
          (ehPar(3) === false) +
          (ehPar(0) === true) +
          (ehPar(-4) === true) +
          (ehPar(3.5) === null) +
          (ehPar('a') === null);
        pontuacao = (cenariosCorretos / 6) * PESO_QUESTOES.q2;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 2, score: pontuacao });
    });
  });

  describe('Questão 3: FizzBuzz', () => {
    it('deve calcular a pontuação baseada na impressão correta', () => {
      let pontuacao = 0;
      const consoleLogSpy = jest
        .spyOn(console, 'log')
        .mockImplementation(() => {});
      try {
        fizzBuzz();
        const cenariosCorretos =
          (consoleLogSpy.mock.calls.length > 14 &&
            consoleLogSpy.mock.calls[2][0] === 'Fizz') +
          (consoleLogSpy.mock.calls.length > 14 &&
            consoleLogSpy.mock.calls[4][0] === 'Buzz') +
          (consoleLogSpy.mock.calls.length > 14 &&
            consoleLogSpy.mock.calls[14][0] === 'FizzBuzz');
        pontuacao = (cenariosCorretos / 3) * PESO_QUESTOES.q3;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 3, score: pontuacao });
      consoleLogSpy.mockRestore();
    });
  });

  describe('Questão 4: Soma dos termos pares da sequência de Fibonacci', () => {
    it('deve calcular a pontuação baseada no retorno correto', () => {
      let pontuacao = 0;
      try {
        const resultado = somaFibonacciPares();
        const cenariosCorretos = resultado === 60696;
        pontuacao = (cenariosCorretos / 1) * PESO_QUESTOES.q4;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 4, score: pontuacao });
    });
  });

  describe('Questão 5: Manipulação de Array de Linguagens', () => {
    it('deve calcular a pontuação baseada no objeto de resultados', () => {
      let pontuacao = 0;
      try {
        const resultado = manipulacaoArrayLinguagens();
        const expectedFinalArray = [
          'Rust',
          'Python',
          'TypeScript',
          'Go',
          'Java',
          'C++',
          'Ruby',
        ];
        const expectedVersoes = [2010, 1991, 2012, 2009, 1995, 1985, 1995];
        const expectedModernas = ['Rust', 'TypeScript', 'Go'];

        const cenariosCorretos =
          (resultado &&
            JSON.stringify(resultado.linguagensFinal) ===
              JSON.stringify(expectedFinalArray)) +
          (resultado && resultado.tamanhoArray === 7) +
          (resultado &&
            JSON.stringify(resultado.versoes) ===
              JSON.stringify(expectedVersoes)) +
          (resultado &&
            JSON.stringify(resultado.modernas) ===
              JSON.stringify(expectedModernas));
        pontuacao = (cenariosCorretos / 4) * PESO_QUESTOES.q5;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 5, score: pontuacao });
    });
  });

  describe('Questão 6: Manipulação de Objeto de Livro', () => {
    it('deve calcular a pontuação baseada no objeto final', () => {
      let pontuacao = 0;
      try {
        const livro = manipulacaoObjeto();
        const idadeEsperada = new Date().getFullYear() - 1992;
        const descricaoEsperada =
          'O livro "O Alquimista" foi escrito por "Paulo Coelho" e publicado em "1992".';

        const cenariosCorretos =
          (livro && livro.titulo === 'O Alquimista') +
          (livro && livro.autor === 'Paulo Coelho') +
          (livro && livro.anoPublicacao === 1992) +
          (livro && livro.editora === 'Rocco') +
          (livro &&
            typeof livro.getIdade === 'function' &&
            livro.getIdade() === idadeEsperada) +
          (livro &&
            typeof livro.getDescricao === 'function' &&
            livro.getDescricao() === descricaoEsperada);
        pontuacao = (cenariosCorretos / 6) * PESO_QUESTOES.q6;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 6, score: pontuacao });
    });
  });

  describe('Questão 7: Elementos comuns em dois arrays', () => {
    it('deve calcular a pontuação baseada no array retornado', () => {
      let pontuacao = 0;
      try {
        const resultado = elementosComuns(
          [1, 2, 3, 4, 5, 10, 15, 16],
          [3, 4, 5, 6, 7, 15, 24],
        );
        const esperado = [3, 4, 5, 15];
        const cenariosCorretos =
          resultado &&
          JSON.stringify(resultado.sort()) === JSON.stringify(esperado.sort());
        pontuacao = (cenariosCorretos / 1) * PESO_QUESTOES.q7;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 7, score: pontuacao });
    });
  });

  describe('Questão 8: Encontrar caracteres duplicados', () => {
    it('deve calcular a pontuação baseada no objeto de duplicados', () => {
      let pontuacao = 0;
      try {
        const resultado = encontrarDuplicados('programacao web e mobile');
        const esperado = { r: 2, o: 3, a: 3, m: 2, ' ': 3, e: 3, b: 2 };
        // Para comparar objetos, a ordem das chaves importa com JSON.stringify. Uma abordagem mais robusta seria comparar chave por chave.
        // Mas para este caso, vamos manter a simplicidade.
        const cenariosCorretos =
          resultado &&
          JSON.stringify(
            Object.keys(resultado)
              .sort()
              .reduce((obj, key) => {
                obj[key] = resultado[key];
                return obj;
              }, {}),
          ) === JSON.stringify(esperado);
        pontuacao = (cenariosCorretos / 1) * PESO_QUESTOES.q8;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 8, score: pontuacao });
    });
  });

  describe('Questão 9: Objeto Estudante', () => {
    it('deve calcular a pontuação baseada nas propriedades e métodos', () => {
      let pontuacao = 0;
      try {
        const estudante = criarEstudante();
        if (estudante) {
          estudante.nota1 = 8;
          estudante.nota2 = 9;
          estudante.nota3 = 7;
        }

        const cenariosCorretos =
          (estudante &&
            estudante.hasOwnProperty('nome') &&
            estudante.hasOwnProperty('idade')) +
          (estudante &&
            typeof estudante.media === 'function' &&
            estudante.media() === 8) +
          (estudante &&
            typeof estudante.situacao === 'function' &&
            estudante.situacao() === 'Aprovado');
        pontuacao = (cenariosCorretos / 3) * PESO_QUESTOES.q9;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 9, score: pontuacao });
    });
  });

  describe('Questão 10: Manipulação de Array de Números', () => {
    it('deve calcular a pontuação baseada no objeto de resultados', () => {
      let pontuacao = 0;
      try {
        const resultado = manipularArray([1, 2, 3, 4, 5]);
        const expectedArrayCopia = [0, 2, 3, 4, 10];
        const expectedNumerosPares = [0, 2, 4, 10];

        const cenariosCorretos =
          (resultado &&
            JSON.stringify(resultado.arrayCopia) ===
              JSON.stringify(expectedArrayCopia)) +
          (resultado && resultado.soma === 19) +
          (resultado && resultado.maiorNumero === 10) +
          (resultado &&
            JSON.stringify(resultado.numerosPares.sort()) ===
              JSON.stringify(expectedNumerosPares.sort()));
        pontuacao = (cenariosCorretos / 4) * PESO_QUESTOES.q10;
      } catch (error) {
        pontuacao = 0;
      }
      resultados.push({ questao: 10, score: pontuacao });
    });
  });
});

// Hook que executa uma vez, após todos os testes terminarem
afterAll(() => {
  // Ordena os resultados por questão para garantir a ordem no relatório
  resultados.sort((a, b) => a.questao - b.questao);
  const notaFinal = resultados.reduce((acc, curr) => acc + curr.score, 0);

  console.log('\n==================== RELATÓRIO FINAL ====================');
  // Garante que todas as questões apareçam no relatório, mesmo que a função do aluno dê erro e não popule o resultado
  for (let i = 1; i <= 10; i++) {
    const resultado = resultados.find((r) => r.questao === i);
    const peso = PESO_QUESTOES[`q${i}`];
    if (resultado) {
      const status =
        resultado.score === peso ? 'Aprovado' : 'Reprovado (parcial)';
      console.log(
        `Questão ${String(i).padStart(
          2,
          '0',
        )}: ${status} - Nota: ${resultado.score.toFixed(2)} / ${peso.toFixed(
          2,
        )}`,
      );
    } else {
      // Este bloco agora é uma segurança extra, mas o try/catch deve prevenir que ele seja chamado.
      console.log(
        `Questão ${String(i).padStart(
          2,
          '0',
        )}: Erro na execução - Nota: 0.00 / ${peso.toFixed(2)}`,
      );
    }
  }

  console.log('---------------------------------------------------------');
  console.log(`NOTA FINAL: ${notaFinal.toFixed(2)} / 10.00`);
  console.log('=========================================================');
});
