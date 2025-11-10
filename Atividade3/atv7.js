// 7 - Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor
// da compra for menor que R$20,00; caso contrário, o lucro será de 30%. Entrar com
// o valor do produto e imprimir o valor da venda.
let valorCompra = parseFloat(prompt("Q7: Digite o valor de compra do produto:"));
let valorVenda;

if (valorCompra < 20.00) {
  valorVenda = valorCompra * 1.45;
} else {
  valorVenda = valorCompra * 1.30;
}
alert("O valor de venda é: R$ " + valorVenda.toFixed(2));