const calculadorDesconto = require('./calculadorDesconto')

describe('Testes para calculadora de descontos de entradas', () => {

    test('Deve retornar 4.95 quando for segunda e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'segunda', false)).toEqual(4.95)
    })
    test('Deve retornar 7.2 quando for segunda e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'segunda', false)).toEqual(7.2)
    })
    test('Deve retornar 5.4 quando for segunda e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'segunda', false)).toEqual(5.4)
    })
    
    test('Deve retornar 4.675 quando for terça e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'terca', false)).toEqual(4.675)
    })
    test('Deve retornar 7.6 quando for terça e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'terca', false)).toEqual(7.6)
    })
    test('Deve retornar 5.1 quando for terça e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'terca', false)).toEqual(5.1)
    })
    
    test('Deve retornar 3.85 quando for quarta e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'quarta', false)).toEqual(3.85)
    })
    test('Deve retornar 4 quando for quarta e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'quarta', false)).toEqual(4)
    })
    test('Deve retornar 3.5999999999999996 quando for quarta e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'quarta', false)).toEqual(3.5999999999999996)
    })
  
    test('Deve retornar 5.5 quando for quinta e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'quinta', false)).toEqual(5.5)
    })
    test('Deve retornar 6.8 quando for quinta e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'quinta', false)).toEqual(6.8)
    })
    test('Deve retornar 5.1 quando for quinta e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'quinta', false)).toEqual(5.1)
    })
  
    test('Deve retornar 4.895 quando for sexta e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'sexta', false)).toEqual(4.895)
    })
    test('Deve retornar 8 quando for sexta e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'sexta', false)).toEqual(8)
    })
    test('Deve retornar 6 quando for sexta e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'sexta', false)).toEqual(6)
    })
  
    test('Deve retornar 5.5 quando for sabado/domingo/feriados e for ingresso para crianças', () => {
        expect(calculadorDesconto.gerar('crianca', 'sabadeDomingoFeriado', false)).toEqual(5.5)
    })
    test('Deve retornar 8 quando for sabado/domingo/feriados e for ingresso para estudantes', () => {
        expect(calculadorDesconto.gerar('estudante', 'sabadeDomingoFeriado', false)).toEqual(8)
    })
    test('Deve retornar 5.7 quando for sabado/domingo/feriados e for ingresso para idosos', () => {
        expect(calculadorDesconto.gerar('idoso', 'sabadeDomingoFeriado', false)).toEqual(5.7)
    })


    test('Deve retornar 4.95 quando for segunda e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'segunda', true)).toEqual(4.95)
    })
    test('Deve retornar 5.2 quando for segunda e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'segunda', true)).toEqual(5.2)
    })
    test('Deve retornar 5.4 quando for segunda e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'segunda', true)).toEqual(5.4)
    })
    
    test('Deve retornar 4.675 quando for terça e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'terca', true)).toEqual(4.675)
    })
    test('Deve retornar 5.2 quando for terça e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'terca', true)).toEqual(5.2)
    })
    test('Deve retornar 5.1 quando for terça e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'terca', true)).toEqual(5.1)
    })
    
    test('Deve retornar 3.85 quando for quarta e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'quarta', true)).toEqual(3.85)
    })
    test('Deve retornar 5.2 quando for quarta e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'quarta', true)).toEqual(5.2)
    })
    test('Deve retornar 3.5999999999999996 quando for quarta e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'quarta', true)).toEqual(3.5999999999999996)
    })
  
    test('Deve retornar 5.5 quando for quinta e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'quinta', true)).toEqual(5.5)
    })
    test('Deve retornar 5.2 quando for quinta e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'quinta', true)).toEqual(5.2)
    })
    test('Deve retornar 5.1 quando for quinta e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'quinta', true)).toEqual(5.1)
    })
  
    test('Deve retornar 4.895 quando for sexta e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'sexta', true)).toEqual(4.895)
    })
    test('Deve retornar 5.2 quando for sexta e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'sexta', true)).toEqual(5.2)
    })
    test('Deve retornar 6 quando for sexta e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'sexta', true)).toEqual(6)
    })
  
    test('Deve retornar 5.5 quando for sabado/domingo/feriados e for ingresso para crianças e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('crianca', 'sabadeDomingoFeriado', true)).toEqual(5.5)
    })
    test('Deve retornar 8 quando for sabado/domingo/feriados e for ingresso para estudantes e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('estudante', 'sabadeDomingoFeriado', true)).toEqual(8)
    })
    test('Deve retornar 5.7 quando for sabado/domingo/feriados e for ingresso para idosos e informar carteirinha', () => {
        expect(calculadorDesconto.gerar('idoso', 'sabadeDomingoFeriado', true)).toEqual(5.7)
    })

});