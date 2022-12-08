import { Pessoa } from "./Pessoa.js";

export class Padrinho extends Pessoa {
    #generoPreferido;

    constructor(nomeCompleto, contato, generoPreferido) {
        super(nomeCompleto, contato);
        this.#generoPreferido = generoPreferido;
    }

    equals(outro) {
        if (!outro instanceof Padrinho) {
            return false;
        }
        return super.equals(outro);
    }

    get generoPreferido() {
        return this.#generoPreferido;
    }

}
