const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarForm = (a) =>{
    switch (a.target.name){
        case "nombre":
            if (expresiones.nombre.test(a.target.value)){
              console.log("ingreso nombre");
            }
        break;
        case "unoapellido":
            if (expresiones.nombre.test(a.target.value)){
              console.log("ingreso primer apellido");
            }
        break;
        case "dosapellido":
            if (expresiones.nombre.test(a.target.value)){
              console.log("ingreso segundo apellido");
            }
        break;
        case "correo":
            if (expresiones.correo.test(a.target.value)){
              console.log("ingreso correo");
            }
        break;
        case "celular":
            if (expresiones.telefono.test(a.target.value)){
              console.log("ingreso celular");
            }
        break;
        case "password":
            if (expresiones.password.test(a.target.value)){
              console.log("ingreso password");
            }
        break;
        case "repassword":
            if (expresiones.password.test(a.target.value)){
              console.log("ingreso la password");
            }
        break;
        case "terminos":
            var opcion = document.formulario.terminos;
            if (opcion.checked == true) { //botón seleccionado

                }
             else {  //botón no seleccionado
                // alert("El formulario no ha podido enviarse. \n Debe aceptar las condiciones para poder enviar el formulario");
                return false; //el formulario no se envia
                }
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
  
      if (validarForm(e)) {
        console.log("jaja")
      }else{  
        document.querySelector('.error').classList.add('error-activo');
        document.querySelector('.errord').classList.add('error-activod');

        console.log("los campos estan incorrectos");
      }
  
});