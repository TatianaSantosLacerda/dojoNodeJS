/**
#AnoBissexto

A cada 4 anos, a diferença de horas entre o ano solar e o do 
calendário convencional completa cerca de 24 horas 
(mais exatamente: 23 horas, 15 minutos e 864 milésimos de segundo).
Para compensar essa diferença e evitar um descompasso em relação às estações
do ano, insere-se um dia extra no calendário e o mês de fevereiro fica com 29
   dias. Essa correção é especialmente importante para atividades atreladas
    às estações, como a agricultura e até mesmo as festas religiosas.
     Um determinado ano é bissexto se: O ano for divisível por 4, mas não 
     divisível por 100, exceto se ele for também divisível por 400.

Exemplos:

São bissextos por exemplo:

1600
1732
1944
2008

Não são bissextos por exemplo:
1742
1889
1951
2011 

 O ano for divisível por 4, 
 mas não divisível por 100, 
 exceto se ele for também divisível por 400

===================================

exemplo esqueleto do IF
if (){

}

() -> dentro vai a condição, deve resultar em verdadeiro ou falso
{} -> corpo do if vai o codigo ou resposta caso a condicao atenda


exemplo esqueleto do IF e ELSE
if (){

} else {

}

exemplo esqueleto do IF, ELSE IF e ELSE
if (){

} else if{
   
} else {

}

Operadores lógicos:
   % -> operador MOD, comparado a um valor resulta o RESTO da divisao
   ! -> nega condicao (ou inverte o valor dela)
   && -> equivalente ao "E"
   || -> equivalente ao "OU"

   também há os operadores matematicos:
   + -> soma
   - -> subtrai
   / -> divide
   * -> multiplica

CRIAR VARIAVEIS OU FUNCOES
const nomeVariavel

esqueleto da funcao:
const nomeFuncao = () => {

}
() -> dentro vai os argumentos, tantos quantos quiser, separados por virgula
{} -> corpo da funcao, vai a logica que implementar

 */

 const isBissexto = (ano) => {
   const isDivisivelPor4 = ano % 4 == 0
   const isDivisivelPor100 = ano % 100 == 0
   const isDivisivelPor400 = ano % 400 == 0

   return isDivisivelPor4 && !(isDivisivelPor100 && !(isDivisivelPor400))
 }
 
 export { isBissexto }