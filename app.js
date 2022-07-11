

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

        Swal.fire({icon: 'success', title: 'El curso ' + inputNombre.value + ' fue correctamente cotizado'})
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

    Swal.fire({icon: 'success', title: 'El curso ' + inputNombre2.value + ' ha sido guardado satisfactoriamente', footer: 'Parámetros del Objeto: ' + enJSON})
})


const productosContainer = document.querySelector('#cursoProductoContainer')

const item = stockCursos[0]

const div = document.createElement('div')
div.classList.add('cursoProducto')

div.innerHTML = '<img src="" class="img-responsive" alt="" style="width:80%"><h3>${item.curso}</h3><p>${item.descripcion}</p><p>${item.valor}</p><p>Agregar</p>'


console.log(div)
productosContainer.append(div)


