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

respuesta1.innerText = 'Por el curso de ' + inputNombre.value + ' usted abonará un total de: ' + (funcionBeca(inputValor.value, inputDescuento.value)) + '$'
respuesta2.innerText = 'Financiado en ' + inputCuotas.value + ' cuotas mensuales de ' + (funcionCuotas(inputValor.value, inputDescuento.value, inputCuotas.value) + '$ cada una.')

})
