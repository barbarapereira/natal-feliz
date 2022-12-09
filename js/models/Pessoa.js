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

  equals(outro) {
    return this.#id === outro.#id;
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
