const {Aluno} = require("./dadosAlunos");
console.log(Aluno);

const {cursoes} = require("./dadosCurso");
console.log(curso);

console.log(aluno1.notas);
console.log(aluno1.calcularMedia());
console.log(aluno1.quantidadeFaltas);
console.log(curso.listaDeAlunos);
console.log(curso.verificarAprovacao(aluno1));
console.log(curso.buscarListaDeAprovacoes());