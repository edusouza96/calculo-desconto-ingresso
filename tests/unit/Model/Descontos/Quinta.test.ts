import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { Quinta } from "../../../../src/Model/Descontos/Quinta";

describe('Testes para classe Quinta', () => {
    test('Deve retornar 0% de desconto quando ingresso for pra criança', () => {
        let crianca = new Crianca();
        let quinta = new Quinta(crianca);
        expect(quinta.getValor()).toEqual(0);
    });
    test('Deve retornar 15% de desconto quando ingresso não for criança', () => {
        let estudante = new Estudante(false);
        let quinta = new Quinta(estudante);
        expect(quinta.getValor()).toEqual(15);
        
        let idoso = new Idoso();
        quinta = new Quinta(idoso);
        expect(quinta.getValor()).toEqual(15);
    });
    test('Deve retornar 35% de desconto se ingresso for para estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let quinta = new Quinta(estudante);
        expect(quinta.getValor()).toEqual(35);
    });
});
