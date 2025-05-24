function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    // Usa await para esperar la promesa de simularPeticion
    console.log("Iniciando petición...");
    const resultado = await simularPeticionAPI();
    
    // Imprime el resultado
    console.log(resultado);
}

// Usa la función async
obtenerDatos();