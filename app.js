

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


// *** MÓDULO E-COMMERCE *** //

// const productosContainer = document.querySelector('#cursoProductoContainer')

// // const carrito = []

// stockCursos.forEach ((item) => {

// const div = document.createElement('div')
//     div.className = `text-center m-5 col-sm-3 my-3`

//     div.innerHTML = `
//                     <img src="${item.img}" class="img-thumbnail" alt="" style="width:80%">
//                     <h3>${item.curso}</h3>
//                     <p>${item.descripcion}</p>
//                     <p>Precio: $${item.valor}</p>
//                     <button onclick="agregarAlCarrito(${item.id})" class="btn btn-danger">Comprar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
//                     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
//                     </svg></button>`    

//     productosContainer.append(div)

// })

// const agregarAlCarrito = (id) => {
//     const item = stockCursos.find( (curso) => curso.id === id)
//     carrito.push(item)
//     console.log(carrito)
// }

//  //

fetch('/stock.json')
    .then((resp) => resp.json())
    .then((data) => {
        data.forEach ((item) => {
            const productosContainer = document.querySelector('#cursoProductoContainer')
            const div = document.createElement('div')
                div.className = `text-center m-5 col-sm-3 my-3`
            
                div.innerHTML = `
                                <img src="${item.img}" class="img-thumbnail" alt="" style="width:80%">
                                <h3>${item.curso}</h3>
                                <p>${item.descripcion}</p>
                                <p>Precio: $${item.valor}</p>
                                <button onclick="agregarAlCarrito(${item.id})" class="btn btn-danger">Comprar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg></button>`    
            
                productosContainer.append(div)
            
            })

    })




        