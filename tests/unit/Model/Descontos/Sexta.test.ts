import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { Sexta } from "../../../../src/Model/Descontos/Sexta";

describe('Testes para classe Sexta', () => {
    test('Deve retornar 11% de desconto quando ingresso for pra criança', () => {
        let crianca = new Crianca();
        let sexta = new Sexta(crianca);
        expect(sexta.getValor()).toEqual(11);
    });
    test('Deve retornar 0% de desconto quando ingresso não for criança', () => {
        let estudante = new Estudante(false);
        let sexta = new Sexta(estudante);
        expect(sexta.getValor()).toEqual(0);
        
        let idoso = new Idoso();
        sexta = new Sexta(idoso);
        expect(sexta.getValor()).toEqual(0);
    });
    test('Deve retornar 35% de desconto se ingresso for para estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let sexta = new Sexta(estudante);
        expect(sexta.getValor()).toEqual(35);
    });
});
