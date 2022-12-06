const Padrinho = require("./models/Padrinho");
const Crianca = require("./models/Crianca");
const Pessoa = require("./models/Pessoa");



//instanciando padrinho


let padrinho1 = new Padrinho("Ana Silva", "(11)9147-5544", "Menino")

let padrinho2 = new Padrinho("Luiz Antonio", "(99)9147-5544", "Menina")

console.log(`----------------------------------\nPadrinhos cadastrados\n----------------------------------`)
console.table(padrinho1)
console.table(padrinho2)




//instanciando criança

let crianca1 = new Crianca("Claudio Santos", "(11)99178-0000", "Maria", "7 anos","Menino", "tam 9", "32");
crianca1.vincularPadrinho(padrinho1);

 let crianca2 = new Crianca("Luana Costa", "(17)99178-0000", "Luiz", "2 anos","Menina", "tam 3", "20");
 crianca2.vincularPadrinho(padrinho2);

 let crianca3 = new Crianca("Roberto Santos", "(11)99178-0000", "Davi", "9 anos","Menino", "tam 12", "36");


 let crianca4 = new Crianca("Jessica Santos", "(99)99178-0000", "Laura", "4 anos","Menino", "tam 5", "22");
 
 console.log(`----------------------------------\nCrianças cadastradas\n----------------------------------`)
console.table(crianca1);
console.table(crianca2);
console.table(crianca3);
console.table(crianca4);

console.log(`----------------------------------\nCrianças apadrinhadas\n----------------------------------`)

console.log(Pessoa.listaParticipante.criancas[0])
console.log(Pessoa.listaParticipante.criancas[1])
