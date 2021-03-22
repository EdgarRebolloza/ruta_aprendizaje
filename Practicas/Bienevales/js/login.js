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
        case "correo":
            if (expresiones.correo.test(a.target.value)){
              console.log("ingreso correo")
            }
        break;
        case "password":
            if (!expresiones.password.test(a.target.value) ){
                console.log("no ingreso 8 caracteres ")
            }else{
                console.log("si ingreso password de 8")
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

    }else{
      document.querySelector('.error').classList.add('error-activo');
      document.querySelector('.errord').classList.add('error-activod');

      console.log("los campos estan incorrectos")
    }

});