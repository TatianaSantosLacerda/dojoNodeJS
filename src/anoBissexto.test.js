import { isBissexto } from './anoBissexto'

test('ano bissexto',() =>{
    expect(isBissexto(1600)).toBe(true)
    expect(isBissexto(1732)).toBe(true)
    expect(isBissexto(1944)).toBe(true)
    expect(isBissexto(2008)).toBe(true)

})

test('ano não bissexto', () =>{
    expect(isBissexto(1742)).toBe(false)
    expect(isBissexto(1889)).toBe(false)
    expect(isBissexto(1951)).toBe(false)
    expect(isBissexto(2011)).toBe(false)
})