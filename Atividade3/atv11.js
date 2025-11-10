// 11 - Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na
// ordem crescente.
function ordenarArray(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log("Q11:", ordenarArray([5, 20, 1, 100, 3, 8]));