import { Crianca } from "../../../../src/Model/Ingressos/Crianca";

describe('Testes para classe crianca', () => {
    test('Deve retornar o valor do ingresso, 5.5', () => {
        let crianca = new Crianca()
        expect(crianca.getValor()).toEqual(5.5);
    });
});