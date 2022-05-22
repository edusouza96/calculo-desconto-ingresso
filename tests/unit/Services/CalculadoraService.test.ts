import { CalculadoraService } from "../../../src/Services/CalculadoraService";
import { IIngresso } from "../../../src/Interfaces/IIngresso";
import { IDesconto } from "../../../src/Interfaces/IDesconto";

describe('Testes para classe CalculadoraService', () => {
    test('Deve retornar 5, o valor do ingresso. Após aplicar um desconto de 50% num ingresso custando 10', () => {
        const mockIngresso: jest.Mocked<IIngresso> = {
            getValor: jest.fn().mockImplementationOnce(() => {
                return 10;
            })
        };
        const mockDesconto: jest.Mocked<IDesconto> = {
            getValor: jest.fn().mockImplementationOnce(() => {
                return 50;
            })
        };
        let calculadoraService = new CalculadoraService();
        let valor = calculadoraService.aplicarDesconto(mockIngresso, mockDesconto);
        expect(valor).toEqual(5);
    });
});