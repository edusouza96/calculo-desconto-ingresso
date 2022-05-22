import { Crianca } from "../../src/Model/Crianca";
import { Estudante } from "../../src/Model/estudante";
import { Quarta } from "../../src/Model/Quarta";
import { Segunda } from "../../src/Model/Segunda";
import { CalculadoraService } from "../../src/Services/CalculadoraService";

describe('Testes para calculadora de descontos de entradas', () => {

    test('Deve aplicar 35% de desconto e retornar 5.2 quando for quarta e ingresso for estudante com carteirinha', () => {
        let estudante = new Estudante(true);
        let calculadoraService = new CalculadoraService();
        expect( calculadoraService.aplicarDesconto(estudante, new Quarta(estudante))).toEqual(5.2);
    })

    test('Deve aplicar 10% de desconto e retornar 4.95 quando for segunda e ingresso for para criança', () => {
        let crianca = new Crianca();
        let calculadoraService = new CalculadoraService();
        expect( calculadoraService.aplicarDesconto(crianca, new Segunda(crianca))).toEqual(4.95);
    })
   

});