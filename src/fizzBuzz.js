/**
 * FizzBuzz
Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'
 * 
 */

const divide = (numero) => {
    if(numero % 3 == 0 && numero % 5 == 0){
        return "FizzBuzz"
    }
    if(numero % 3 == 0){
        return "Fizz"
    }
    if(numero % 5 == 0){
        return "Buzz"
    }
    return numero 

}

    
export {divide}