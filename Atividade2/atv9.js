/*
Crie uma função que aceite uma string e retorne o número de vogais nessa
string.
// Exemplo de uso:
let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto)); // 10
*/

const prompt = require("prompt-sync")();
/*
Crie uma função que aceite uma string e retorne o número de vogais nessa
string.
*/

function contarVogais(texto) {
  let contador = 0;
  
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < texto.length; i++) {
    const caractereAtual = texto[i];
    if (vogais.includes(caractereAtual)) {
      contador++;
    }
  }

  return contador;
}

let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto)); 
