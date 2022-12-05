const Padrinho = require('./Padrinho.js');
describe("Teste da classe Pdrinho", () => {
    const padrinho1 = new Padrinho();

    test("Teste da classe Padrinho", () => {
        expect(padrinho1 instanceof Padrinho).toBe(true);
    });
});