// 27 - Crie uma função chamada "criarMatriz" que recebe o número de linhas e o número de colunas
// como parâmetros e retorna uma matriz com essas dimensões preenchida com números aleatórios.
function criarMatriz(linhas, colunas) {
  let matriz = [];
  for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
      let numeroAleatorio = Math.floor(Math.random() * 100);
      linha.push(numeroAleatorio);
    }
    matriz.push(linha);
  }
  return matriz;
}

console.log("Q27 - Matriz 3x4:");
console.log(criarMatriz(3, 4));