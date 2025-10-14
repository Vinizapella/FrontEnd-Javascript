/*
Crie um objeto "conta" que represente uma conta bancária. Ele deve conter
propriedades como "saldo" e "titular" e métodos para "depositar", "sacar" e "verSaldo".
*/

const prompt = require("prompt-sync")();

let conta = {
  titular: "João Silva",
  saldo: 1500.00,

  depositar: function(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  },

  sacar: function(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor.toFixed(2)} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`);
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para este saque.");
    } else {
      console.log("O valor do saque deve ser positivo.");
    }
  },

  verSaldo: function() {
    console.log(`Saldo atual de ${this.titular}: R$ ${this.saldo.toFixed(2)}`);
  }
};

conta.verSaldo();   
conta.depositar(500);
conta.sacar(200);   
conta.sacar(2000);  
conta.verSaldo();   