function returnId(){
  return (Math.random()*1000).toFixed(0);
}


class Pessoa {
    id = returnId()
    nome = "";
    sobrenome = "";
    contato= "";
  
    constructor(nome, sobrenome, contato) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.contato = contato
    }
}
  
  // let candidato = new Pessoa("Barbara", "Pereira", "(13)99137-2617");
  // console.log(candidato);
  
module.exports = Pessoa;