import { valorDoSaque } from './caixaEletronico'

test('testa valor 0', () => {
    const resultado = valorDoSaque(0)

    expect(resultado).toEqual([])
})
test('testa nota de 10', () => {
    const resultado = valorDoSaque(10)

    expect(resultado).toEqual([10])
})

test('testa nota de 20', () => {
    const resultado = valorDoSaque(20)

    expect(resultado).toEqual([20])
})

test('testa nota de 50', () => {
    const resultado = valorDoSaque(50)

    expect(resultado).toEqual([50])
})

test('testa nota de 100', () => {
    const resultado = valorDoSaque(100)

    expect(resultado).toEqual([100])
})

test('testa saque 30', () => {
    const resultado = valorDoSaque(30)

    expect(resultado).toEqual([20,10])
})

test('testa saque 80', () => {
    const resultado = valorDoSaque(80)

    expect(resultado).toEqual([50,20,10])
})

test('testa saque 90', () => {
    const resultado = valorDoSaque(90)

    expect(resultado).toEqual([50,20,20])
})

test('testa saque 200', () => {
    const resultado = valorDoSaque(200)

    expect(resultado).toEqual([100,100])
})
