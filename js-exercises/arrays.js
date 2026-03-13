// Arrays
let frutas = ["Manzana", "Platano", "Uva", "Naranja"]
console.log(frutas[6])
let numero = [3,5,6,19,103];
let bol = [true, false,true,true, false];
let formulas = [3.14, -3.5, 3.34]

frutas.push("Fresa") // Agregar un valor
frutas.pop(); // Elimina el ultimo actual de arreglo
frutas.push("Melon") // Agregar un valor
frutas.shift() // Elimina el primer valor
frutas.unshift("Pera"); // Agrega un valor al principio
console.log("Tamaño de arreglo Frutas", frutas.length) // Length : Tamaño del arreglo
frutas.forEach((index) => {
    console.log("Fruta: ", index)
})

let isFruitExists = frutas.includes("Uva") // Regresa un valor boolean si el valor existe o no en el arreglo
console.log(isFruitExists)

console.log("-------")
let nuevasFrutas = frutas.slice(2,4); // New Array
nuevasFrutas.forEach((index) => {
    console.log("Fruta: ", index)
})

// JOIN convertir en texto los arreglo e incluir una concatenacion
console.log(frutas) // Impirmir como arreglo
console.log(frutas.join(", ")) // Imprimir como texto con join

// Ejercicio en clase (Alumnos)
let animales = ["perro", "gato", "conejo", "pez"];

// 1- Imprimir todos los valores
// 2- Validar si perro existe
// 3- Agregar un nuevo animal