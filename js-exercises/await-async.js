// Await y Async

async function saludar(){
    console.log("Hola a todos")
}

saludar()

function waitTwoSec(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Termino la espera");
        }, 2000)
    })
}

// Asyn -> Await
async function executeProcess(){
    console.log("Inicializando proceso...")

    const resultado = await waitTwoSec();
    console.log(resultado)
    console.log("Termino proceso...")
}

executeProcess()