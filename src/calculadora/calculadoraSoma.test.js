import { soma } from './calculadora'

test('soma dois valores positivos', () => {
    const resultado = soma(1,3)

    expect(resultado).toBe(4)
})

test('soma dois valores passados como texto', () => {
    const resultado = soma('1', '3')

    expect(resultado).toBe(4)
})


test('soma valores invalidos', () => {
    const resultado = soma('1', 'k')

    expect(resultado).toBe(NaN)
})

