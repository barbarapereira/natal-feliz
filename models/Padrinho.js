const Pessoa = require("./Pessoa");
let PadrinhoHelpers = require("../helpers/PadrinhoHelper")

class Padrinho extends Pessoa{
    escolherGenero = "";
    //lista;
    constructor(nomeCompleto, contato, escolherGenero){
        super(nomeCompleto, contato);
        this.escolherGenero = escolherGenero;
       // this.lista =  Pessoa.listaParticipante.padrinhos;
       Pessoa.listaParticipante.padrinhos.push(this);
        
    }   
    // validaCriacaoPadrinho(){
    //     if(!padrinho instanceof Padrinho && PadrinhoHelpers.procurarPadrinho(id)){
    //         console.log("Padrinho já cadastrado")
    //     }
    //     return Pessoa.listaParticipante.padrinhos.push(this);
    // }

    // verificaInstancia(outroPadrinho){
    //     if(!outroPadrinho instanceof Pessoa){
    //         console.log("ERRO ao instanciar pessoa");
    //     }
    //     return this.id === outroPadrinho.id
    // }

    // removePadrinho(padrinho){
    //     for(let i = 0; i < this.lista.length; i++){
    //        if(PadrinhoHelpers.procurarPadrinho(padrinho.id)){
    //         this.lista.splice(i,1)
    //        }

    //     }
    // }
}

module.exports = Padrinho;