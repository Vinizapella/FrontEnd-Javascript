let carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2022
};
for (let chave in carro) {
  console.log(chave + ": " + carro[chave]);
}