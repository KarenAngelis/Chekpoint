const { Aluno } = require("./dadosAlunos");
const {Curso} = require("./dadosCurso");

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

