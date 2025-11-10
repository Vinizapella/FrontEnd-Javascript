function Guerreiro(nome) {
  this.nome = nome;
  this.vida = 100;
}
Guerreiro.prototype.atacar = function() {
  console.log(this.nome + " está Atacando!");
};
let guerreiro1 = new Guerreiro("Arthur");
let guerreiro2 = new Guerreiro("Lancelot");
guerreiro1.atacar();
guerreiro2.atacar();