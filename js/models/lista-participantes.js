import { Pessoa } from "./Pessoa.js";
import { Vinculo } from "./vinculo.js";

export class ListaParticipantes {
    #usuarios;
    #vinculos;

    constructor() {
        this.#usuarios = [];
        this.#vinculos = [];
    }

    adicionar(pessoa) {
        if (pessoa === null || !pessoa instanceof Pessoa)
            throw new Error('Adicione uma pessoa válida')
        this.#usuarios.push(pessoa);
    }

    adicionarVinculo(vinculo) {
        if (vinculo === null || !vinculo instanceof Vinculo)
            throw new Error('Vínculo inválido');
        this.#vinculos.push(vinculo);
    }

    remover(pessoa) {
        let index = this.#usuarios.findIndex(p => p.equals(pessoa));
        if (index >= 0) {
            this.#usuarios.splice(index, 1);
        }
    }

    removerVinculo(crianca, padrinho) {
        let index = this.#vinculos.findIndex(v => v.crianca.equals(crianca) && v.padrinho.equals(padrinho));
        if (index >= 0) {
            this.#vinculos.splice(index, 1);
        }
    }

    get usuarios() {
        return this.#usuarios;
    }

    get vinculos() {
        return this.#vinculos;
    }

}