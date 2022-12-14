/*Passo - 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).


Passo - 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curs 

------------------------------------//--------------------------------------------------------------------------
-----------------------------------//---------------------------------------------------------------------------

Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e
retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o
aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que
faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de
aprovação.

Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um
array de booleanos com os resultados se os alunos aprovaram ou não.

Passo 7 - Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo
que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela
lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os
métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/

class Curso {
  constructor(nomeDoCurso, notaDeAprovacao, faltasMaximas) {
    this.nomeDoCurso = nomeDoCurso;
    this.notaDeAprovacao = notaDeAprovacao;
    this.faltasMaximas = faltasMaximas;
    this.listaDeAlunos = [];
  };

  adicionarAluno(aluno) {
    this.listaDeAlunos.push(aluno);
  };

  verificarAprovacao(aluno) {
    if (aluno.quantidadeFaltas < this.faltasMaximas) {
        if (aluno.calcularMedia() >= this.notaDeAprovacao) {
            return true;
        }
    };
  
    if (aluno.quantidadeFaltas === this.faltasMaximas) {
        var notaNecessaria = this.notaDeAprovacao + (0.1 * this.notaDeAprovacao);
        if (aluno.calcularMedia() >= notaNecessaria) {
            return true;
        }
    }
  
    return false;
  };

  buscarListaDeAprovacoes() {
    var listaDeAprovacoes = [];

    for (var i = 0; i < this.listaDeAlunos.length; i++) {
        var aluno = this.listaDeAlunos[i];
        listaDeAprovacoes.push(this.verificarAprovacao(aluno));
    }

    return listaDeAprovacoes;
  };
};



const curso = new Curso('Javascript', 6.5, 3);

const aluno1 = new Aluno('Luiza', 4, [10, 8]);
const aluno2 = new Aluno('Luiz', 2, [9, 8]);
const aluno3 = new Aluno('Antonio', 0, [10, 7]);

aluno1.adicionarFalta();

curso.adicionarAluno(aluno1);
curso.adicionarAluno(aluno2);
curso.adicionarAluno(aluno3);



console.log(aluno1.notas);
console.log(aluno1.calcularMedia());
console.log(aluno1.quantidadeFaltas);
console.log(curso.listaDeAlunos);
console.log(curso.verificarAprovacao(aluno1));
console.log(curso.buscarListaDeAprovacoes());

  module.exports = {curso, listaDeAprovacoes};


















