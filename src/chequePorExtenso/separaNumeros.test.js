import { separaNumeros } from "./separaNumero"

test('unidade R$ 1', () => {
    const resultado = separaNumeros('1')

    expect(resultado.unidades).toBe('1')
})

test('dezena R$ 10', () => {
    const resultado = separaNumeros('10')

    expect(resultado.unidades).toBe('0')
    expect(resultado.dezenas).toBe('1')
})

test('centena R$ 432', () => {
    const resultado = separaNumeros('432')

    expect(resultado.unidades).toBe('2')
    expect(resultado.dezenas).toBe('3')
    expect(resultado.centenas).toBe('4')
})

test('milhar R$ 15415', () => {
    const resultado = separaNumeros('15415')

    expect(resultado.unidades).toBe('5')
    expect(resultado.dezenas).toBe('1')
    expect(resultado.centenas).toBe('4')
    expect(resultado.milhares).toBe('15')
})