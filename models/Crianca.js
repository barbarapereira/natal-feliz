const Pessoa = require("./Pessoa.js");
const Padrinho = require("./Padrinho");

class Crianca extends Pessoa{
    nomeDoResponsavel = "";
    idade = "";
    genero = "";
    tamanhoRoupa = "";
    tamanhoSapato = "";
    padrinhoCadastrado = [];

    constructor(nomeCompleto, contato, nomeDoResponsavel, idade, genero, tamanhoRoupa, tamanhoSapato){
        super(nomeCompleto, contato);
        this.nomeDoResponsavel = nomeDoResponsavel;
        this.idade = idade;
        this.genero = genero;
        this.tamanhoRoupa = tamanhoRoupa;
        this.tamanhoSapato = tamanhoSapato;

        Pessoa.listaParticipante.criancas.push(this);
    }

    vincularPadrinho(padrinho){
        if(padrinho instanceof Padrinho){
            this.padrinhoCadastrado.push(padrinho);
        }
    }
}



module.exports = Crianca;
