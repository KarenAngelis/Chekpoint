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



const curso = {
  nomeDoCurso: "Javascript",
  notaDeAprovacao: 6.5,
  faltasMaximas: 3,
  listaDeEstudantes: [  ],

  verificarAprovacao: function verificar (aluno){
    if (aluno.quantidadeFaltas < this.faltasMaximas)   {// verifica se o aluno tem menos faltas que as faltas máximas
        if (aluno.calcularMedia() >= this.notaDeAprovacao) {  // verifica se a nota é maior ou igual a nota de aprovação
            return true;  // se sim, retorna que o aluno está aprovado
        }
    };
  
    if (aluno.quantidadeFaltas === this.faltasMaximas) {  // verifica se o aluno tem o mesmo número de faltas que as faltas máximas
        var notaNecessaria = this.notaDeAprovacao + (0.1 * this.notaDeAprovacao);  // soma a nota de aprovação com os 10% a mais necessário
        if (aluno.calcularMedia() >= notaNecessaria) {  // verifica se a nota é maior ou igual a nova nota de aprovação
            return true;  // se sim, retorna que o aluno está aprovado
        }
    }
  
    return false;  // se não retornar nas condições acima, retorna que o aluno está reprovado
  }};


  curso.adicionarAluno = function adicionar (aluno){
    this.listaDeEstudantes.push(aluno);
    
};

var aluno = " ";

curso.adicionarAluno({
  nome: "Luiza",
  quantidadeFaltas: 4,
  notas: [10, 8]
});
curso.adicionarAluno({
  nome: "Luiz",
  quantidadeFaltas: 2,
  notas: [10, 8]
});
curso.adicionarAluno({
  nome: "Antonio",
  quantidadeFaltas: 0,
  notas: [10, 8]
});
curso.adicionarAluno({
  nome: "Thiago",
  quantidadeFaltas: 1,
  notas: [10, 8]
});
curso.adicionarAluno({
  nome: "Karen",
  quantidadeFaltas: 0,
  notas: [10, 8]
});


  console.log(curso.listaDeEstudantes);
  console.log(curso.verificarAprovacao(aluno));

module.exports = dadosCurso;