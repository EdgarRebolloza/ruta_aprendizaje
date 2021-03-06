/* 
                TEMA: Estructuras repetitivas: for
*/

var edgar ={
    nombre: 'Edgar',
    apellido: 'Rebolloza',
    edad: 22,
    peso: 75
}

console.log(`Al inicio del año ${edgar.nombre} pesa ${edgar.peso}kg `)

// function aumentoDePeso(persona){
//     return persona.peso += 200
// }
const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO

const aldegazar = persona => persona.peso -= INCREMENTO_PESO

for (var i=1; i<=DIAS_DEL_ANO; i++){
    var random = Math.random()

    if (random < 0.25) {
        aumentoDePeso(edgar)
    }else if (random < 0.5) {
        aldegazar(edgar)
    }
}

console.log(`Al final del año ${edgar.nombre} pesa ${edgar.peso.toFixed(1)}kg `)