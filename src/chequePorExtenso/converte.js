import { separaNumeros } from "./separaNumero"
import { convertePorExtenso, calculaConjuntor } from "./funcoesChequePorExtenso"


const converte = (numero) =>{
    const resultado = separaNumeros(numero) 
    let milhares = ''
    let unidade = ''
    let dezena = ''
    let centenas = ''
    let eDezena = ''
    let eUnidade = ''

    if(resultado.milhares > 1){
        milhares = convertePorExtenso(resultado.milhares) + ' mil '
    }
    const valorTmp = resultado.dezenas + resultado.unidades
    if(resultado.centenas == 1 && valorTmp > 0){
        centenas = 'Cento'
    }else{
        centenas = convertePorExtenso(resultado.centenas + '00')
    }
       
    if(valorTmp < 19 ){
        unidade = convertePorExtenso(valorTmp) 
    }else{
        dezena = convertePorExtenso(resultado.dezenas + '0')
        unidade = convertePorExtenso(resultado.unidades)
        eUnidade = calculaConjuntor(resultado.dezenas, resultado.unidades)
    }
    
    eDezena = calculaConjuntor(resultado.centenas, resultado.dezenas)
    

    return milhares +  
           centenas + eDezena + 
           dezena + eUnidade + 
           unidade
}

export{converte}