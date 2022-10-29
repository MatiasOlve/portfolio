export function valida(input){
    const tipoInput = input.dataset.tipo;
    
    if(input.validity.valid){
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML ='';
    }
    else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarError(tipoInput, input);
    }
}

const tipoErrores = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError',
]

const mensajesError ={
    nombre:{
        valueMissing: "El campo nombre no puede estar vacío."
    },

    asunto:{
        valueMissing: "El campo asunto no puede estar vacío."
    },

    email:{
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "El correo no es válido."
    },

    mensaje:{
        valueMissing: "El campo mensaje no puede estar vacío."
    }

}

function mostrarError(tipoInput, input){
    let mensaje = '';
    tipoErrores.forEach( error =>{
        if(input.validity[error]){
            mensaje = mensajesError[tipoInput][error];
        }
    })
    return mensaje;
}

