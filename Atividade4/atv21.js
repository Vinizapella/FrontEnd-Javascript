let configuracao = {
  status: "ativo"
};
Object.freeze(configuracao);
configuracao.status = "inativo";
configuracao.versao = 1.0;
console.log(configuracao);