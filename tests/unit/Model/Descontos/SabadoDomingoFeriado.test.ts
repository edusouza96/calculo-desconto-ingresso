import { Estudante } from "../../../../src/Model/Ingressos/Estudante";
import { Crianca } from "../../../../src/Model/Ingressos/Crianca";
import { Idoso } from "../../../../src/Model/Ingressos/Idoso";
import { SabadoDomingoFeriado } from "../../../../src/Model/Descontos/SabadoDomingoFeriado";

describe('Testes para classe SabadoDomingoFeriado', () => {
    test('Deve retornar 5% de desconto quando ingresso for pra idoso', () => {
        let idoso = new Idoso();
        let sabadoDomingoFeriado = new SabadoDomingoFeriado(idoso);
        expect(sabadoDomingoFeriado.getValor()).toEqual(5);
    });
    test('Deve retornar 0% de desconto quando ingresso não for idoso', () => {
        let estudante = new Estudante(false);
        let sabadoDomingoFeriado = new SabadoDomingoFeriado(estudante);
        expect(sabadoDomingoFeriado.getValor()).toEqual(0);
        
        let crianca = new Crianca();
        sabadoDomingoFeriado = new SabadoDomingoFeriado(crianca);
        expect(sabadoDomingoFeriado.getValor()).toEqual(0);
    });
});
