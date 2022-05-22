import { Idoso } from "../../../../src/Model/Ingressos/Idoso";

describe('Testes para classe Idoso', () => {
    test('Deve retornar o valor do ingresso, 6', () => {
        let idoso = new Idoso()
        expect(idoso.getValor()).toEqual(6);
    });
});