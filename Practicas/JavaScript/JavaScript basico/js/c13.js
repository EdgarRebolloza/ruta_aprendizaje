/* 
                TEMA: Estructuras repetitivas: while
*/

var signo = prompt(`¿Cuál es tu signo?`)

switch(signo){
  case 'aries':
    console.log('Debería evitar que los miedos por frustraciones pasadas le obstaculicen el impulso creativo.')
  break
  case 'tauro':
    console.log('Momento para que intente cambiar la actitud y empiece a controlar su temperamento. ')
  break
  case 'geminis':
  case 'géminis':
    console.log('Intente poner al día todas las obligaciones que tiene pendientes.')
  break
  default:
    console.log(`${signo} no es un signo zodiacal`)
  break
}