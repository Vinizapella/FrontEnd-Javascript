let veiculo = {
  rodas: 4
};
let carro = Object.create(veiculo);
carro.marca = "Ford";
console.log(carro.marca);
console.log(carro.rodas);