import { Padrinho } from "../models/Padrinho.js";
import { Crianca } from "../models/Crianca.js";
import { Vinculo } from "../models/vinculo.js";
import { ListaParticipantes } from "../models/lista-participantes.js";

let padrinho = new Padrinho('Guido Filho', 'guido.warken@gmail.com', 'qualquer 1');
let crianca = new Crianca('Maria Warken', 'maria@gmail.com', 'Fábio de Lima', 9, 'feminino', 'p', '35');
let vinculo = new Vinculo(crianca, padrinho);
let participantes = new ListaParticipantes();
participantes.adicionar(padrinho);
participantes.adicionar(crianca);
participantes.adicionarVinculo(vinculo);
console.log(participantes);
setTimeout(() => {
    participantes.remover(padrinho);
participantes.removerVinculo(crianca, padrinho);

}, 10000);
console.log(participantes);
