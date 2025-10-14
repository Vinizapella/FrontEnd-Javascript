/*
Crie um objeto chamado carro com propriedades: marca, modelo e ano.
Acesse a propriedade marca do objeto carro.
Altere a propriedade ano do objeto carro para 2025.
Adicione um método ao objeto carro chamado getIdade que retorne quantos anos o carro
tem (ano atual - ano do carro).
Adicione um método ao objeto carro chamado getDescricao que retorne uma string
contendo todas as informações do carro.
*/

const prompt = require("prompt-sync")();

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
};

console.log(carro.marca); 

carro.ano = 2025;
console.log(carro.ano); 

carro.getIdade = function() {
  const anoAtual = new Date().getFullYear();
  return anoAtual - this.ano;
};

console.log("Idade do carro:", carro.getIdade(), "anos"); 

carro.getDescricao = function() {
  return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
};

console.log(carro.getDescricao()); 