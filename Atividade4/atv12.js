let configuracoes = {
  tema: "dark",
  idioma: "pt-br"
};
let novasConfiguracoes = { ...configuracoes };
novasConfiguracoes.tema = "light";
console.log("Original:", configuracoes);
console.log("Cópia:", novasConfiguracoes);