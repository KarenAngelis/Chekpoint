/*Passo - 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do
curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de
estudantes (um array composto pelos alunos criados no passo 1).


Passo - 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando
chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na
propriedade lista de estudantes do objeto curs */

const curso = {
  nomeDoCurso: "Javascript",
  notaDeAprovação: 6.5,
  faltasMaximas: 3,
  listaDeEstudantes: [  ]
  };
  
  curso.adicionarAluno = function adicionar (aluno){
    this.listaDeEstudantes.push(aluno);
};

curso.adicionarAluno({
  nome: "Luiza",
  quantidadeFaltas: 0,
  notas: [10, 8]
});

  console.log(curso.listaDeEstudantes);
  