// 12 - Criar uma função que junte dois arrays e retorno o resultado como um novo array
function juntarArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

let arrayA = [1, 2, 3];
let arrayB = ["a", "b", "c"];
console.log("Q12:", juntarArrays(arrayA, arrayB));