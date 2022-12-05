const Crianca = require('./Crianca.js');
describe("Teste da classe Pdrinho", () => {
    const crianca1 = new Crianca();

    test("Teste da classe Crianca", () => {
        expect(crianca1 instanceof Crianca).toBe(true);
    });
});