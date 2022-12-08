import { generateId } from "../functions/generate-id.js";

export class Pessoa {
  #id;
  #nomeCompleto;
  #contato;

  constructor(nomeCompleto, contato) {
    this.#nomeCompleto = nomeCompleto;
    this.#contato = contato;
    this.#id = generateId();
  }

  get id() {
    return this.#id;
  }

  get nomeCompleto() {
    return this.#nomeCompleto;
  }

  get contato() {
    return this.#contato;
  }

}

// let candidato = new Pessoa("Barbara", "Pereira", "(13)99137-2617");
// console.log(candidato);
//console.log(Pessoa.listaParticipante)
module.exports = Pessoa;