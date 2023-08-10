/**
Este problema foi utilizado em 2397 Dojo(s).

Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

As regras são as seguintes:

Pedra empata com Pedra 
e ganha de Tesoura
Tesoura empata com Tesoura 
e ganha de Papel
Papel empata com Papel 
e ganha de Pedra
 */

const jokenpo = (jogada1, jogada2) => {
    if(jogada1 == jogada2){
        return 'empate'
    }

    if(jogada1 == 'pedra' && jogada2 == 'tesoura'){
        return 'vitória'
    }
    if(jogada1 == 'tesoura' && jogada2 == 'papel'){
        return 'vitória'
    }
    if(jogada1 == 'papel' && jogada2 == 'pedra'){
        return 'vitória'
    } 

    return 'perda'
}

export {jokenpo}