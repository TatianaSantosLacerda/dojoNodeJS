import {subtrai} from './calculadora'

test ('subtração entre dois valores positivos', () => {
    const resultado = subtrai (2,1)

    expect(resultado).toBe(1)
})

test ('nulo em subtração', () => {
    expect(subtrai(null, 2)).toBe(-2)
    expect(subtrai(2, '1')).toBe(1)
})

test ('subtrai dois valores passados como texto', () =>{
    const resultado = subtrai('2', '1')
    expect(resultado).toBe(1)

})

test ('subtração de valores invalidos', () =>{
    const resultado = subtrai(2, 'k')
    expect(resultado).toBe(NaN)
})