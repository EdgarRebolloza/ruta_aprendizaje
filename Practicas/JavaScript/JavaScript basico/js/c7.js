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
