// CONDICIONALES

// IF-ELSE

// Ejercicio en clase: Calificacion
let calificacion = 80; // Integer

if (calificacion >= 90){
    // BLOCK CODE
    console.log("Excelente"); // Condicion verdadera
} else if (calificacion >= 70){
    console.log("Aprobado") // condicion multiple
}else{
    console.log("Reprobado") // Condicion falsa
}

// Ejercicio en clase (Alumnos): Codficar un programa usando if else para saber 
// si una persona es mayor de edad, 
// menor de edad y es adulto mayor

// 1- Saber la edad de la persona
// 2- Despues evaluar en que clasificacion esta la persona (Menor edad, mayor edad, Adulto mayor)
// 3- Mayor de edad es >18
// 4- Adulto mayor >65
// 5- si no cumple el paso 3 y 4, es menor de edad

let edad = 70;

if(edad < 18){
    console.log("Menor de edad")
}else if(edad >=65){ // AND y OR
    console.log("Es Adulto Mayor")
}else{
    console.log("Es mayor de edad")
}

// Switch: Estructura condicional donde el utilizar "cases" o caso se determina
// el valor de la salida

// Ejercicio de clase: Opciones de una pantalla

let option = 10;

switch(option){
    case 1:
    case 6:
        // BLOCK CODE
        console.log("Maximizar pantalla")
        break;
    case 2:
    case 5:
        console.log("Minimizar pantalla");
        break; // Nuestra manera FUNCIONAL de salir de el programa/block code
    case 3:
        console.log("Cerrar pantalla")
        break;
    default:
        console.log("Opcion invalida")
}

// Ejercicio de clase: dias de la semana

let dia = "Lunes";

switch(dia){
    case "Lunes":
        console.log(1);
        break;
    case "Martes":
        console.log(2);
        break;
}

// Ejercicio en clase(alumnos): Restaurante

// Menu: opcion 1: Burguer, Opcion 2: Pizza, Opcion 3: Ensalada, Opcion 4: Platillo no existente (default)

// Operador comparativo y logico
if(true && false){
    console.log("AND")
}else{
    console.log("No se cumplio el operador logico")
}


//Operador ternario (Tip)
let edad2 = 15;

let mensaje = edad2 >=18 ? "Mayor de edad" : "Menor de edad";
//            CONDICION.     TRUE.              FALSE
console.log(mensaje)