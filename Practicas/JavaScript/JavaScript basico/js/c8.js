// Parámetros como referencia o como valor

// Desestructurar objetos
//              Objetos
var nombre = 'edgar'

var edgar = {
//  Clave   |Valor
    nombre: 'Edgar',
    apellido: 'Rebolloza',
    edad: 22
}

function imprimirNombre(persona){
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombre(edgar) 
// imprimirNombre( { nombre: 'Angie'} )

function cumpleanos(persona ){
    // Modificar un valor de una clave del objeto 
    return{
        ...persona,
        edad: persona.edad + 1
    }
}
