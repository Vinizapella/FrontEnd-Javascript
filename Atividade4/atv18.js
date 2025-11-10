let pessoa = {
  nome: "Julia",
  anoNascimento: 1995,
  apresentar: function() {
    let idade = 2025 - this.anoNascimento;
    return "Olá, meu nome é " + this.nome + " e eu tenho " + idade + " anos.";
  }
};
console.log(pessoa.apresentar());