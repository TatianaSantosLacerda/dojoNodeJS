import { converte } from "./converte"

test('converte 25', () => {
    const resultado = converte('25')

    expect(resultado).toBe('Vinte e Cinco')
})