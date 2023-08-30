import { multiplica } from './calculadora'

test ('multiplica dois números positivos', () =>{
    const resultado = multiplica(2,3)

    expect(resultado).toBe(6)
})

test('multiplica dois valores passados como texto', () => {
    const resultado = multiplica('2', '3')

    expect(resultado).toBe(6)
})

test('multiplica valores invalidos', () => {
    const resultado = multiplica('2', 'k')

    expect(resultado).toBe(NaN)
})