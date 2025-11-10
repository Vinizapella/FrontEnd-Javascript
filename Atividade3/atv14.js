// 14 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
// Tanto o caractere quanto a string devem ser informadas.
function contarCaractere(string, caractere) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      contador++;
    }
  }
  return contador;
}

console.log("Q14 - (banana, a):", contarCaractere("banana", "a"));
console.log("Q14 - (javascript, s):", contarCaractere("javascript", "s"));