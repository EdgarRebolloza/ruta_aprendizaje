var edgar ={
    nombre: 'Edgar',
    apellido: 'Rebolloza',
    edad: 22,
    ingeniero: false,
    Musico: false,
    Gamer: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13,
    ingeniero: true,
    Musico: true,
    Gamer: false
}

/* 
                TEMA:Arrow functions
*/

const  MAYORIA_DE_EDAD = 18

/* 
OTRA MANERA DE HACER UNA FUNCION
const esMayorDeEdad = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
*/

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayor(persona){
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad `)
    }
}


const permitirAcceso = ({edad}) => !esMayorDeEdad({edad}) ? console.log('Acceso denegado') : console.log('Adelante')