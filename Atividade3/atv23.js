// 23 - Crie uma função chamada "gerarSenha" que recebe um número como parâmetro e retorna uma
// senha aleatória com esse número de caracteres.
function gerarSenha(tamanho) {
  let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha = senha + caracteres[indiceAleatorio];
  }
  return senha;
}

console.log("Q23 - Senha de 10:", gerarSenha(10));