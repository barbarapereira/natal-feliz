const Pessoa = require("../Pessoa/Pessoa.js");

class Padrinho extends Pessoa{
    escolherGeneroDaCriança = "";

    constructor(nome, sobrenome, contato, escolherGeneroDaCriança){
        super(nome, sobrenome, contato);
        this.escolherGeneroDaCriança = escolherGeneroDaCriança;
    }

    imprimePadrinho(){
        return `
        Nome: ${this.nome} ${this.sobrenome}
        Contato: ${this.contato}
        Quero apadrinhar: ${this.escolherGeneroDaCriança}`
    }
    
}

let padrinho1 = new Padrinho("Ana", "Silva", "(21)9147-5544", "Menina");
console.log(padrinho1.imprimePadrinho());

module.exports = Padrinho;