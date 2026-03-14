// OBJETOS

// Representam como Estado y comportamiento

// Estado =  Variables -> Variables de instancia
// Comportamiento = Funciones

const persona = {
    // ESTADO = STATE
    nombre: "Ricardo",
    apellido: "Avalos",
    ciudad: "Monterrey",

    // COMPORTAMIENTO = BEHAVIOR
    presentarse: function(){
        console.log("Hola, mi nombre es " + this.nombre) // This = Le estoy diciendo a JS que me traiga el valor de nombre del mismo objeto
    } 
}

persona.presentarse()
console.log("Ciudad", persona.ciudad)

// Ejemplo automation

const user = {
    username: "UserRicardo",
    pwd: "Pwd12345"
}

console.log("Enter username: ", user.username)