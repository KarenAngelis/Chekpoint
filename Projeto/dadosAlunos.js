/*Passo -1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.

Passo - 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
em 1.*/

class Aluno {
  constructor(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;
  };

  adicionarFalta() {
    this.quantidadeFaltas = this.quantidadeFaltas + 1;
  };

  calcularMedia(nota) {
    if (this.notas.length > 0) {
      let total = 0;
      for (let i = 0; i < this.notas.length; i++) {
        total += this.notas[i];
      }
      return total / this.notas.length;
    }
    return 0;
  };

}


module.exports = {Aluno};