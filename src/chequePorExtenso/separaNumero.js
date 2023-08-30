const separaNumeros = (numero) => {
    const listaInvertida = numero.split('').reverse().join('')
    let unidades = listaInvertida[0] || ''
    let dezenas = listaInvertida[1] || ''
    let centenas = listaInvertida[2] || ''
    let milhares = listaInvertida.substring(3).split('').reverse().join('')
    
    return { unidades, dezenas, centenas, milhares }
}

export {separaNumeros}