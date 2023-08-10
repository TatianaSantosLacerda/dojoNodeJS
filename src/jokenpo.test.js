import { jokenpo } from './jokenpo'

test('testa empate pedra', () => {
    const resultado = jokenpo('pedra', 'pedra')

    expect(resultado).toBe('empate')
})

test('testa pedra ganha de tesoura', () => {
    const resultado = jokenpo('pedra', 'tesoura')

    expect(resultado).toBe('vitória')
})

test('testa empate tesoura', () => {
    const resultado = jokenpo('tesoura', 'tesoura')

    expect(resultado).toBe('empate')
})

test('testa tesoura ganha de papel', () => {
    const resultado = jokenpo('tesoura', 'papel')

    expect(resultado).toBe('vitória')
})

test('testa empate papel', () => {
    const resultado = jokenpo('papel', 'papel')

    expect(resultado).toBe('empate')
})

test('testa papel ganha de pedra', () => {
    const resultado = jokenpo('papel', 'pedra')

    expect(resultado).toBe('vitória')
})

test('testa pedra perde de papel', () => {
    const resultado = jokenpo('pedra', 'papel')

    expect(resultado).toBe('perda')
})