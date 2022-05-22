import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { Quarta } from "../../../../src/Model/Descontos/Quarta";

describe('Testes para classe Quarta', () => {
    test('Deve retornar 40% de desconto quando ingresso for pra idoso', () => {
        let idoso = new Idoso();
        let quarta = new Quarta(idoso);
        expect(quarta.getValor()).toEqual(40);
    });
    test('Deve retornar 0% de desconto quando ingresso não for idoso', () => {
        let estudante = new Estudante(false);
        let quarta = new Quarta(estudante);
        expect(quarta.getValor()).toEqual(0);
        
        let crianca = new Crianca();
        quarta = new Quarta(crianca);
        expect(quarta.getValor()).toEqual(0);
    });
    test('Deve retornar 35% de desconto se ingresso for para estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let quarta = new Quarta(estudante);
        expect(quarta.getValor()).toEqual(35);
    });
});
