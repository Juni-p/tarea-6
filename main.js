/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $btnSiguiente = document.querySelector( '#siguiente' )
const $btnCalcular = document.querySelector( '#calcular' )
const $btnReestablecer = document.querySelector( '#reestablecer' )

$btnSiguiente.onclick = function() {
    const $cantidadIntegrantes = document.querySelector( '#cantidad-integrantes' ).value
    const canidadIntegrantes = Number( $cantidadIntegrantes )

    crearIntegrantes(canidadIntegrantes)
}

function crearIntegrantes( cantidadIntegrantes ) {
    for( let i = 0; i < cantidadIntegrantes; i++ ) {
        crearElementoIntegrante(i)
    }
}

$btnCalcular.onclick = function() {
    edadesIntegrantes = document.querySelectorAll( '.integrante input' )
    const integrantes = []

    for( let i = 0; i < edadesIntegrantes.length; i++) {
        integrantes.push( Number(edadesIntegrantes[i].value))
    }

    calcularEdadMasGrande( integrantes )
    calcularEdadMasBaja( integrantes )
    calcularPromedioEdad( integrantes )
}

$btnReestablecer.onclick = function() {
    const integrantes = document.querySelectorAll( '.integrante' )
    for( let i = 0; i < integrantes.length; i++) {
        integrantes[i].remove()
    }

    const parrafos = document.querySelectorAll( 'p' )
    for( let i = 0; i < parrafos.length; i++) {
        parrafos[i].innerText = ''
    }
}

function crearElementoIntegrante(indice) {
    const nuevoDiv = document.createElement( 'div' )
    nuevoDiv.className = 'integrante'

    console.log(nuevoDiv)
    
    const nuevoLabel = document.createElement( 'label' )
    nuevoLabel.textContent = `ingrese la edad del familiar ${indice + 1} :`
    
    const nuevoInput = document.createElement( 'input' )
    nuevoInput.type = 'number'
    
    const integrantes = document.querySelector( '#inputLabelIntegrantes' )
    
    integrantes.appendChild( nuevoDiv )
    nuevoDiv.appendChild( nuevoLabel )
    nuevoDiv.appendChild( nuevoInput )
}

function calcularEdadMasGrande( array ) {
    document.querySelector( '#mas-grande' ).innerHTML = `El mas grande tiene ${Math.max( ...array )} años.`
}

function  calcularEdadMasBaja( array ) {
    document.querySelector( '#mas-joven' ).innerHTML = `El mas joven tiene ${Math.min( ...array )} años.`
}

function calcularPromedioEdad( array ) {
    let edadesAPromediar = 0
    for( let i = 0; i < array.length ; i++ ){
        edadesAPromediar += array[i]
    }
    let promedio = (edadesAPromediar / array.length).toFixed( 1 )
    document.querySelector( '#promedio-edad' ).innerHTML = `El promedio de edad es ${ promedio}.`
}





/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

