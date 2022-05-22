import { Estudante } from "../../../../src/Model/Ingressos/Estudante";

describe('Testes para classe Estudante', () => {
    test('Deve retornar o valor do ingresso, 8', () => {
        let estudante = new Estudante(false)
        expect(estudante.getValor()).toEqual(8);
    });
    
    test('Deve retornar true, quando estudante houver carteirinha', () => {
        let estudante = new Estudante(true)
        expect(estudante.hasCarteirinha()).toEqual(true);
    });
   
    test('Deve retornar false, quando estudante não houver carteirinha', () => {
        let estudante = new Estudante(false)
        expect(estudante.hasCarteirinha()).toEqual(false);
    });
});