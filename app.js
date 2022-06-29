


const miFormulario = document.querySelector('#miFormulario')

const inputNombre = document.querySelector('#inputNombreCurso')
const inputValor = document.querySelector('#inputValorCurso')
const inputDescuento = document.querySelector('#inputDescuento')
const inputCuotas = document.querySelector('#inputCuotas')

const btnEnviar = document.querySelector('#btn-enviar')

miFormulario.addEventListener('submit', (event) => {

    event.preventDefault()


const respuesta1 = document.getElementById('htmlRespuesta1')
const respuesta2 = document.getElementById('htmlRespuesta2')


respuesta1.innerText = 'Felicidades'
respuesta2.innerText = 'Usted ha ingresado correctamente la información solicitada'


})
