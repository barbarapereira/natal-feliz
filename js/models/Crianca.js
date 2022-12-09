import { Pessoa } from "./Pessoa.js";

export class Crianca extends Pessoa {
  #nomeDoResponsavel;
  #idade;
  #genero;
  #tamanhoRoupa;
  #tamanhoSapato;

  constructor(
    nomeCompleto,
    contato,
    nomeDoResponsavel,
    idade,
    genero,
    tamanhoRoupa,
    tamanhoSapato
  ) {
    super(nomeCompleto, contato);
    this.#nomeDoResponsavel = nomeDoResponsavel;
    this.#idade = idade;
    this.#genero = genero;
    this.#tamanhoRoupa = tamanhoRoupa;
    this.#tamanhoSapato = tamanhoSapato;
  }

  equals(outro) {
    if (!outro instanceof Crianca) {
      return false;
    }
    return super.equals(outro);
  }

  get genero() {
    return this.#genero;
  }

  get idade() {
    return this.#idade;
  }

  get nomeDoResponsavel() {
    return this.#nomeDoResponsavel;
  }

  get tamanhoRoupa() {
    return this.#tamanhoRoupa;
  }

  get tamanhoSapato() {
    return this.#tamanhoSapato;
  }

}
