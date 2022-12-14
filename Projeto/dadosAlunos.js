/*Passo -1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas
(number) e notas (array de números). Crie um construtor para ele e importe-o como o
módulo aluno.

Passo - 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas
em 1.*/

const aluno = {
  nome: " ",
  quantidadeFaltas: [ ],
  notas: [ ],
  
  calcularMedia: function media (nota){
    if (this.notas.length > 0) {  // verifica se existem notas
        let total = 0;
        for (let i = 0; i < this.notas.length; i++) {  // percorre o array somando cada nota
            total += this.notas[i];  // essa linha é uma forma resumida de escrever o código total = total + this.notas[i];
        }
        return total / this.notas.length;  // retorna a soma total de notas dividido pela quantidade de notas
    }
    return 0; // se não existir notas, retorna a média 0
},

  calcularFaltas: function quantidadeFaltas (falta){
    var total = 0;
    if (this.quantidadeFaltas.length > 0) {  // verifica se existem faltas
      for (let i = 0; i < this.quantidadeFaltas.length; i++) {  // percorre o array somando cada falta
          total += this.quantidadeFaltas[i];  // essa linha é uma forma resumida de escrever o código total
      }
  }
  return total; // traz o valor total do calculo
  },
};


console.log(aluno.notas);
console.log(aluno.calcularMedia());
console.log(aluno.calcularFaltas());

module.exports = dadosAlunos;