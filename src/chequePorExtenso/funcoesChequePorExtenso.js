import { unidades, dezenas, centenas } from "./mapaPalavras"


const convertePorExtenso = (numero) => {
    const numeroConvertido = numero.replace(/^0+/, '')
    
    if(numeroConvertido > 99){
        return centenas [numeroConvertido]
    }
    
    if(numeroConvertido > 19){
        return dezenas[numeroConvertido]
    }

    return unidades[numeroConvertido]
}

const calculaConjuntor = (inteiros, centavos)=>{
    if(Number(inteiros)>0 && Number(centavos)>0){
        return ' e '
    }
    return ''
}

export {convertePorExtenso, calculaConjuntor}