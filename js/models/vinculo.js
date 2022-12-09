export class Vinculo {
    #crianca;
    #padrinho;
    constructor(crianca, padrinho) {
        this.#crianca = crianca;
        this.#padrinho = padrinho;
    }

    get crianca() {
        return this.#crianca;
    }

    get padrinho() {
        return this.#padrinho;
    }
}
