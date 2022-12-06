const Pessoa = require('./Pessoa.js')

describe("Testa a classe", () => {
  const pessoa1 = new Pessoa();

  test("verifica se a instância da classe Pessoa está sendo feita corretamente", () => {
    expect(pessoa1 instanceof Pessoa).toBe(true);
  });
});