function returnId(){
  return (Math.random()*1000).toFixed(0);
}


class Pessoa {
    id = returnId()
    nomeCompleto = "";
    contato= "";
  
    constructor(nomeCompleto, contato) {
      this.nomeCompleto = nomeCompleto;
      this.contato = contato
    }

    static listaParticipante = {
      criancas: [],
      padrinhos: []
    }  

}
  
  // let candidato = new Pessoa("Barbara", "Pereira", "(13)99137-2617");
  // console.log(candidato);
  //console.log(Pessoa.listaParticipante)
module.exports = Pessoa;