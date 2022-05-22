import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { Terca } from "../../../../src/Model/Descontos/Terca";

describe('Testes para classe terca', () => {
    test('Deve retornar 5% de desconto quando ingresso for pra estudante', () => {
        let estudante = new Estudante(false);
        let terca = new Terca(estudante);
        expect(terca.getValor()).toEqual(5);
    });
    test('Deve retornar 15% de desconto quando ingresso não for estudante', () => {
        let crianca = new Crianca();
        let terca = new Terca(crianca);
        expect(terca.getValor()).toEqual(15);
        
        let idoso = new Idoso();
        terca = new Terca(idoso);
        expect(terca.getValor()).toEqual(15);
    });
    test('Deve retornar 35% de desconto se ingresso for para estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let terca = new Terca(estudante);
        expect(terca.getValor()).toEqual(35);
    });
});