// ** COTIZADOR DE CURSOS **

// OBJETIVO: PODER INGRESAR CIERTOS PARÁMETROS Y QUE EL PROGRAMA CALCULE EL FINANCIAMIENTO


alert('** BIENVENIDO AL COTIZADOR DE CURSOS **')

let nombreCurso = prompt('Ingrese el nombre de su curso')
let valorCurso = Number(prompt('Ingrese el valor de su curso'))
let codigoBeca = prompt('Ingrese el porcentaje de descuento')

while (Number(codigoBeca) >= 100 || (Number(codigoBeca) <= 0)) {
    alert('ERROR: Debe ingresar un descuento válido (0 a 100)')
    codigoBeca = prompt('Ingrese nuevamente el descuento')
}

let numeroCuotas = Number(prompt('Paso 3: Ingrese cantidad de cuotas'))

function funcionBeca(valorFB, codigoFB) {
    return('Usted abonará un total de ' + (valorFB -((valorFB/100)*codigoFB)) + '$')
}

function funcionCuotas(valorFC, codigoFC, cuotasFC) {
    return("En " + numeroCuotas + " cuotas mensuales de " + (valorFC -((valorFC/100)*codigoFC))/cuotasFC + "$")
}

alert(funcionBeca(valorCurso, codigoBeca))
alert(funcionCuotas(valorCurso, codigoBeca, numeroCuotas))

const objetoCurso = {
    nombre: nombreCurso,
    valor: valorCurso,
    codigo: codigoBeca,
    cuotas: numeroCuotas
}

console.log(objetoCurso)

alert('** GRACIAS POR UTILIZAR NUESTRO COTIZADOR **')



// ** CREADOR DE CURSOS (COMO OBJETO) **

// OBJETIVO: PODER INGRESAR CURSOS CON CARACTERÍSTICAS DEFINIDAS Y SE TRANSFORMEN EN OBJETOS


alert('** BIENVENIDO AL CREADOR DE CURSOS (OBJETO) **')

function Curso(nombre, duracion, precio) {
    this.nombre = nombre
    this.duracion = duracion
    this.precio = precio
}

function crearCurso() {
    let nombre = prompt('Ingrese nombre curso')
    let duracion = Number(prompt('Ingrese duracion del curso en numero de clases'))
    let precio = Number(prompt('Ingrese el precio'))
    const curso = new Curso(nombre, duracion, precio)
    return curso
}

const curso1 = crearCurso()

alert('El objeto se muestra en "Console"')
console.log(curso1)

alert('** GRACIAS POR UTILIZAR NUESTRO CREADOR DE CURSOS **')



// ** CREADOR Y BUSCADOR DE CURSOS (ARRAYS CON MÉTODOS) **

// OBJETIVO: PODER AGREGAR CURSOS A LA OFERTA ACADÉMICA Y REALIZAR UNA BÚSQUEDA SIMPLE


const cursosTest = []
let cantidadCursos = Number(prompt('Ingrese la cantidad de cursos que desea añadir'))

while (cursosTest.length < cantidadCursos) {
    cursosTest.push(prompt('Ingrese el nombre de sus cursos'))
}

alert(cursosTest)

let busquedaCurso = cursosTest.includes(prompt('Ingrese el curso que desea buscar'))

if (busquedaCurso == true ) {
    alert('El curso ingresado existe')
} else {
    alert('El curso ingresado NO existe')
}

