/* 
                TEMA: Estructuras repetitivas: while
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

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = edgar.peso -3
var dias = 0

const aumentoDePeso = persona => persona.peso += INCREMENTO_PESO

const aldegazar = persona => persona.peso -= INCREMENTO_PESO

while (edgar.peso > META) {
    if (comeMucho()) {
        aumentoDePeso(edgar)
    }
    if (realizaDeporte()) {
        aldegazar(edgar)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${edgar.nombre} adelgazó`)