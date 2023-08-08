import { divide } from './fizzBuzz'

test('executa para o numero 1', () => {
    const resultado = divide(1)

    expect(resultado).toBe(1)
})

test('valida fizz', () => {
    const resultado = divide(3)

    expect(resultado).toBe('Fizz')
})

test('valida buzz', () => {
    const resultado = divide(5)

    expect(resultado).toBe('Buzz')
})

test('valida fizzbuzz', () => {
    const resultado = divide(15)

    expect(resultado).toBe('FizzBuzz')
})