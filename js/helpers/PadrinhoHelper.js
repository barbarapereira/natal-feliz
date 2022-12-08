class PadrinhoHelpers {

    //validar se um padrinho existe através do id
    static procurarPadrinho(id){
        return Pessoa.listaParticipante.padrinhos.find(p => p.id === id);
    }
}