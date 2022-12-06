const Pessoa = require("./Pessoa");

class Padrinho extends Pessoa{
    escolherGenero = "";

    constructor(nomeCompleto, contato, escolherGenero){
        super(nomeCompleto, contato);

        this.escolherGenero = escolherGenero;
        
        Pessoa.listaParticipante.padrinhos.push(this);
    }   
}

module.exports = Padrinho;