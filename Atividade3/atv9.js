// 9 - Crie uma função que recebe um array de 3 números coloque eles em ordem crescente. Crie sua
// própria função para isso.
function ordenarTresNumeros(arr) {
  let n1 = arr[0];
  let n2 = arr[1];
  let n3 = arr[2];
  let temp;

  if (n1 > n2) {
    temp = n1;
    n1 = n2;
    n2 = temp;
  }
  if (n2 > n3) {
    temp = n2;
    n2 = n3;
    n3 = temp;
  }
  if (n1 > n2) {
    temp = n1;
    n1 = n2;
    n2 = temp;
  }

  return [n1, n2, n3];
}

console.log("Q9:", ordenarTresNumeros([5, 1, 3]));
console.log("Q9:", ordenarTresNumeros([10, 2, 20]));