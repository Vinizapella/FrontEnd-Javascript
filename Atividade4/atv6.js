let lanche = {
  nome: "X-Burger",
  preco: 15.00,
  ingredientes: ["pão", "hambúrguer", "queijo", "alface"]
};
console.log("O lanche " + lanche.nome + " custa R$ " + lanche.preco.toFixed(2) + ".");
lanche.preco = 17.50;
lanche.vegano = false;
console.log(lanche);