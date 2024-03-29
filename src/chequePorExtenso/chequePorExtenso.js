/**
 * Cheque por Extenso
Gostei! Vamos usar esse!
Não gostei! Mostre-me outro.

Este problema foi utilizado em 1433 Dojo(s).

Apesar de o volume de cheques emitidos tenha diminuído drásticamente nos últimos anos, principalmente devido a popularização dos cartões de crédito e débito, eles ainda são utilizados em muitas compras, especialmente a de valores altos. E para auxiliar no seu preenchimento, vários estabelecimentos possuem máquinas que dado o valor da compra, preenchem o cheque com o seu valor por extenso.

Desenvolva um programa que dado um valor monetário, seja retornado o valor em reais por extenso.

Exemplo:

15415,16 -> quinze mil quatrocentos e quinze reais e dezesseis centavos
0,05 -> cinco centavos
2,25 -> dois reais e vinte e cinco centavos
 */

import { calculaConjuntor } from "./funcoesChequePorExtenso"
import { converte } from "./converte"

const calculaReais = (inteiros) => {
    if(inteiros == 0){
        return ''
    }

    if(inteiros == '1'){
        return converte(inteiros) + ' Real'
    }
    

    return converte(inteiros) + ' Reais'
}

const calculaCentavos = (centavos) => {
    if(centavos == null || Number(centavos)<1){
        return ''
    }

    return converte(centavos) + ' centavos'
}

const valorDocheque = (numero) => {
    const numeroDividido = numero.split('.')
    const inteiros = numeroDividido[0]
    const centavos = numeroDividido[1]
       
    return calculaReais(inteiros) + 
           calculaConjuntor(inteiros, centavos) + 
           calculaCentavos(centavos)
    
}


export {valorDocheque}