// Funciones -> Relacionado a la reusabilidad

// Es un bloque de codigo que hace unatarea especifica y que lo puedes usar muchas veces

// Input(Parametros) -> Maquina -> Output(Tipo de dato/void/null)

// FUNCIONES 

function saludar(){ // No tiene parametros
    // BLOCK CODE
    console.log("Hello")

}

saludar(); // Invocamos

// FUNCIONES PARAMETROS (INPUT)

function saludarPersona(nombre, apellido){
    console.log("Hola "+nombre+ " "+apellido)
}

saludarPersona("Mariano", "Garcia")
saludarPersona("Jose Luis", "Pedraza")
saludarPersona("River", "River")

// FUNCIONES RETURN - (OUTPUT)
function sumar(num1, num2){
    return num1 + num2
}

let resultado = sumar(6,2) // Invocando
console.log("El resultado es "+resultado)

// ARROW FUNCTIONS (MUY USADAS EN PLAYWRIGHT)

const multiplicar = (a,b) => { // ARROW FUNCTION
    return a*b
}

function multiplicarN(a,b){ // NORMAL FUNCTION
    return a*b
}

let resultadoMultiplicacion = multiplicar(3,3)
console.log("Multiplicacion", resultadoMultiplicacion)

// Ejercicio 1
// Crea una función llamada calcularArea
// que reciba base y altura de un rectángulo
// y retorne el área.