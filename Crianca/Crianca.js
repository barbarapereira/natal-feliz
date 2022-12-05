const Pessoa = require("../Pessoa/Pessoa.js");

class Crianca extends Pessoa{
    nomeDoResponsavel = "";
    idade = "";
    genero = "";
    tamanhoRoupa = "";
    tamanhoSapato = "";

    constructor(nome, sobrenome, contato, nomeDoResponsavel, idade, genero, tamanhoRoupa, tamanhoSapato){
        super(nome, sobrenome, contato);
        this.nomeDoResponsavel = nomeDoResponsavel;
        this.idade = idade;
        this.genero = genero;
        this.tamanhoRoupa = tamanhoRoupa;
        this.tamanhoSapato = tamanhoSapato;
    }

    imprimeCrianca() {
        return `
        Código de Cadastro: ${this.id}
        Gênero: ${this.genero}
        Nome da Criança: ${this.nome} ${this.sobrenome}
        Idade: ${this.idade}
        Tamanho de roupa: ${this.tamanhoRoupa}
        Tamanho do Calçado: ${this.tamanhoSapato}
        Nome do responsável: ${this.nomeDoResponsavel}
        Contato: ${this.contato}
        `
    }

}
 let crianca1 = new Crianca("Claudio", "Santos","(11)99178-0000", "mãe Maria", "7 anos","Menino", "tam 9", "32");
console.log(crianca1.imprimeCrianca());

module.exports = Crianca;

