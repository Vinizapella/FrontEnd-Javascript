let dadosPessoais = {
  nome: "Roberto",
  idade: 45
};
let dadosProfissionais = {
  cargo: "Gerente",
  empresa: "Tech Corp"
};
let funcionarioCompleto = { ...dadosPessoais, ...dadosProfissionais };
console.log(funcionarioCompleto);