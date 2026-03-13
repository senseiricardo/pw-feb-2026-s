// Loops

// For, While, Do while

for(let i = 1; i<=10; i++){
    console.log(i)
}

// While
let numero = 10;
while(numero >=1){
    console.log(numero)
    //break; // Salida FUNCIONAL
    numero-- // Salida LOGICA
}

//Do-While
console.log("-------")
let doNumero = 1;
do {
console.log(doNumero)
doNumero++;
} while(doNumero <= 5)

// Ejercicio en clase: contador del 2 al 20 pero tiene que ser de 2 en 2
// Ejemplo: 2,4,6,8,10
console.log("-------")
// Logica 1
for(let i=2; i<=20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
// Logica 2
console.log("-------")
for(let i=2; i<=20; i+=2){ // Operador de asignacion
    console.log(i)
}
// Logica 3
console.log("-------")
for(let i=1; i<=10; i++){ // Operador de asignacion
    console.log(i*2)
}