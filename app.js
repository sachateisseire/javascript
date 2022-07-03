// 

// *** MÓDULO COTIZADOR DE CURSOS *** //

const miFormulario = document.querySelector('#miFormulario')
const inputNombre = document.querySelector('#inputNombreCurso')
const inputValor = document.querySelector('#inputValorCurso')
const inputDescuento = document.querySelector('#inputDescuento')
const inputCuotas = document.querySelector('#inputCuotas')
const btnEnviar = document.querySelector('#btn-enviar')

miFormulario.addEventListener('submit', (event) => {
    event.preventDefault()

    function funcionBeca(valorFB, codigoFB) {
        return((valorFB -((valorFB/100)*codigoFB)))
    }

    function funcionCuotas(valorFC, codigoFC, cuotasFC) {
        return((valorFC -((valorFC/100)*codigoFC))/cuotasFC)
    }

    const respuesta1 = document.getElementById('htmlRespuesta1')
    const respuesta2 = document.getElementById('htmlRespuesta2')
        respuesta1.innerText = 'Por el curso de ' + inputNombre.value + ' usted abonará un total de: $' + (funcionBeca(inputValor.value, inputDescuento.value))
        respuesta2.innerText = 'Financiado en ' + inputCuotas.value + ' cuotas mensuales de $' + (funcionCuotas(inputValor.value, inputDescuento.value, inputCuotas.value) + ' cada una.')
})


// *** MÓDULO AGREGAR CURSO *** ///

const miFormulario2 = document.querySelector('#miFormulario2')
const inputNombre2 = document.querySelector('#inputNombreCurso2')
const inputValor2 = document.querySelector('#inputValorCurso2')
const inputDescripcion2 = document.querySelector('#inputDescripcionCurso2')
const btnEnviar2 = document.querySelector('#btn-enviar2')

miFormulario2.addEventListener('submit', (event) => {
    event.preventDefault()

    const productoCurso = {
        nombre: inputNombre2.value,
        valor: inputValor2.value,
        descripcion: inputDescripcion2.value
    }

    const enJSON = JSON.stringify(productoCurso)
        localStorage.setItem("productoCurso", enJSON)

    const respuesta3 = document.getElementById('htmlRespuesta3')
        respuesta3.innerText = 'Usted acaba de guardar en Local Storage el curso: ' + productoCurso.nombre + ' por un valor de $' + productoCurso.valor + ' y cuya descripción es "' + productoCurso.descripcion + '"'

    alert('El curso ' + inputNombre2.value + ' ha sido guardado satisfactoriamente como Objeto bajo los siguientes parámetros: ' + enJSON)
})

///







////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







// const miFormulario3 = document.querySelector('#miFormulario3')

// const inputNombre3 = document.querySelector('#inputNombreCurso3')


// const btnEnviar3 = document.querySelector('#btn-enviar3')


// miFormulario3.addEventListener('submit', (event) => {

//     event.preventDefault()

//     function buscadorCursos (nombreCurso) {

//     if(nombreCurso == listadoCursos.nombre.value){
//         return(alert('Bien'))
//     } else {
//         return(alert('Mal'))
//     }
// }

// const respuesta4 = document.getElementById('htmlRespuesta4')

// respuesta4.innerText = 'El curso' + buscadorCursos(inputNombre3)

// })







