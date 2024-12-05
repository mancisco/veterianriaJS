// Importamos las funciones desde operaciones.js
const { registrar, leer } = require("./operaciones");

// Capturamos los argumentos desde la terminal
const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

// Evaluamos la operación solicitada
(async () => {
    switch (operacion) {
        case "registrar":
            if (!nombre || !edad || !animal || !color || !enfermedad) {
                console.error("Faltan argumentos para registrar una cita.");
            } else {
                await registrar(nombre, edad, animal, color, enfermedad);
            }
            break;
        case "leer":
            await leer();
            break;
        default:
            console.error("Operación no válida. Usa 'registrar' o 'leer'.");
    }
})();
