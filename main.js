/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $btnCalcular = document.querySelector( '#calcular' )
const nodoPagina = document.querySelector( 'form' )

ElementosSegunFamilia()

/*creo elementos label e input */
function creacionElementos() {
    const nuevoDiv = document.createElement( 'div' )
    const nuevoLabel = document.createElement( 'label' )
    const nuevoInput = document.createElement( 'input' )
    
    /* creo atributo al elemento input */
    nuevoInput.setAttribute( 'type', 'number')
    
    nuevoLabel.textContent = 'Ingrese edad del familiar: '
    nodoPagina.appendChild( nuevoDiv )
    nuevoDiv.appendChild( nuevoLabel )
    nuevoDiv.appendChild( nuevoInput )
    console.log(nuevoDiv)
}

function ElementosSegunFamilia() {
    const cantidadIntegrantes = Number( prompt( 'Ingrese la cantidad de integrantes en su familia.' ) )
    const buttonCalcular = document.createElement( 'button' )
    
    for( let i = 0; i < cantidadIntegrantes; i++ ){
        creacionElementos()
    }
    console.log( buttonCalcular)
}

$btnCalcular.onclick = function() {
    
    const edadesDeFamiliares = document.querySelectorAll( 'input' )
    const arrayDeEdades = []
    
    for( let i = 0; i < edadesDeFamiliares.length ; i++){
        arrayDeEdades.push( Number(edadesDeFamiliares[i].value ))
    }
    
    console.log( arrayDeEdades )

    calcularEdadMasGrande( arrayDeEdades )
    calcularEdadMasBaja( arrayDeEdades )
    calcularPromedioEdad( arrayDeEdades )
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

