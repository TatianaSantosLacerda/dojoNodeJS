import { valorDocheque } from './chequePorExtenso'

test('cheque R$ 1', () => {
    const resultado = valorDocheque('1')

    expect(resultado).toBe('Um Real')
})

test('cheque R$,0 05', () => {
    const resultado = valorDocheque('0.05')

    expect(resultado).toBe('Cinco centavos')
})

test('cheque R$ 2,25', () => {
    const resultado = valorDocheque('2.25')

    expect(resultado).toBe('Dois Reais e Vinte e Cinco centavos')
})
test('cheque R$ 25,25', () => {
    const resultado = valorDocheque('25.25')

    expect(resultado).toBe('Vinte e Cinco Reais e Vinte e Cinco centavos')
})

test('cheque R$ 30,00', () => {
    const resultado = valorDocheque('30.00')

    expect(resultado).toBe('Trinta Reais')
})

test('cheque R$ 200,00', () => {
    const resultado = valorDocheque('200.00')

    expect(resultado).toBe('Duzentos Reais')
})


test('cheque R$ 15415,16', () => {
    const resultado = valorDocheque('15415.16')

    expect(resultado).toBe('Quinze mil Quatrocentos e Quinze Reais e Dezesseis centavos')
})

test('cheque R$ 15115,16', () => {
    const resultado = valorDocheque('15115.16')

    expect(resultado).toBe('Quinze mil Cento e Quinze Reais e Dezesseis centavos')
})