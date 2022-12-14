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
};

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