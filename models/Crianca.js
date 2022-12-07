const Pessoa = require("./Pessoa.js");
const Padrinho = require("./Padrinho");

class Crianca extends Pessoa {
  nomeDoResponsavel = "";
  idade = "";
  genero = "";
  tamanhoRoupa = "";
  tamanhoSapato = "";
  padrinhoCadastrado = [];

  constructor(
    nomeCompleto,
    contato,
    nomeDoResponsavel,
    idade,
    genero,
    tamanhoRoupa,
    tamanhoSapato
  ) {
    super(nomeCompleto, contato);
    this.nomeDoResponsavel = nomeDoResponsavel;
    this.idade = idade;
    this.genero = genero;
    this.tamanhoRoupa = tamanhoRoupa;
    this.tamanhoSapato = tamanhoSapato;

    Pessoa.listaParticipante.criancas.push(this);
  }

  vincularPadrinho(padrinho) {
    if (padrinho instanceof Padrinho) {
      //  cada padrinho será único, só apadrinhará 1 criaça
      if (this.padrinhoCadastrado.length != 0) {
        console.log("a criança já possui um padrinho");
      } else {
        return this.padrinhoCadastrado.push(padrinho.id);
      }
      //verificar na lista de crianças quais padrinhos estão vinculados(retorna a lista de padrinhos vinculados)
    }
  }
}

module.exports = Crianca;
