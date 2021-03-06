var nombre = 'Edgar',  apellido = 'Rebolloza'

// Visualizar todo en mayusculas 
var nombreEnMayusculas = nombre.toUpperCase()

// Visualizar todo en minusculas 
var apellidoEnMinisculas = apellido.toLowerCase()

// Visualizar la primera letra dependiendo la posicion que 
// coloquemos dentro del parametro 
var primeroLetraDelNombre = nombre.charAt(0)

// Visualizar la cantidad de letras que contiene el texto
var cantidadDeLetrasDelNombre = nombre.length

// Interpolacion
var nombreCompleto = `${nombre} ${apellido}`

// Visualizar un caracter dependiendo la posicion 
// que se indique 
// 1 ,  2 ( 1 es donde comienza | 2 es donde termina de leer)
var str = nombre.substr(1,2)