import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { Segunda } from "../../../../src/Model/Descontos/Segunda";

describe('Testes para classe Segunda', () => {
    test('Deve retornar 10% de desconto para todos ingressos', () => {
        let estudante = new Estudante(false);
        let segunda = new Segunda(estudante);
        expect(segunda.getValor()).toEqual(10);

        let crianca = new Crianca();
        segunda = new Segunda(crianca);
        expect(segunda.getValor()).toEqual(10);
        
        let idoso = new Idoso();
        segunda = new Segunda(idoso);
        expect(segunda.getValor()).toEqual(10);
    });
    test('Deve retornar 35% de desconto se ingresso for para estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let segunda = new Segunda(estudante);
        expect(segunda.getValor()).toEqual(35);
    });
});