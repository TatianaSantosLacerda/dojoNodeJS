import { divide } from './calculadora'

test('divide dois valores positivos', () => {
    const resultado = divide(4,2)

    expect(resultado).toBe(2)
})

test('divide dois valores passados como texto', () => {
    const resultado = divide('4', '2')

    expect(resultado).toBe(2)
})

test('divide valores invalidos', () => {
    const resultado = divide('1', 'k')

    expect(resultado).toBe(NaN)
})