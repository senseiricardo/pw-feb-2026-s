// Variable??

// JAVA - tipado no dinamico o tipado estatico
// int numero = 100
// float numero_float = 3.14

// JS - Tipado dinamico
// Tipo de variables

let numero = 100; // Variable Entera (Integer - int)
let numero_float = 3.1416; // Variable Float (Float - float)
let letra = "A"; // Variable Char
let frase = "Hello World 123"; // Variable String = cadena de caracteres
let isStudent = false; // Variables boleanas (Boolean - bol) = True or False
let undefined; // Variable Undefined
let nulo = null; // Variable Null

console.log(frase) // Imprimir un valor

// Concatenacion = Union de dos o mas variables en el mismo statement

console.log(frase, numero); // concatenacion embevida JS
console.log(frase + " " + numero); // concatenacion logica

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1, num2, frase);

// JS Naming convention = camel case

let senseiTechSolutions = "Sensei Tech Solutions"; // Camel Case ✅
let SenseiTechSolutions = "Sensei Tech Solutions"; // Pascal Case ❌
let sensei_tech_solutions = "Sensei Tech Solutions"; // Snake Case ❌
//let sensei-tech-solutions = "Sensei Tech Solutions"; // Kebab-Case ❌

// Ejercicio en clase

// Crear 3 variables que representes su ciudad, la temperatura, y si esta lloviendo

// Como se declaran las variables en JS?
const nombre = "Ricardo"; // Constante
let nombre2 = "Ricardo"; // Declaracion estandar
var nombre3 = "Ricardo"; // NO USAR

// Redeclarar variables
nombre2 = "Mariano";
console.log(nombre);
console.log(nombre2);
