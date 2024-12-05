// Importamos el módulo fs/promises
const { writeFile, readFile } = require("node:fs/promises");

// Función para registrar una nueva cita
const registrar = async (nombre, edad, animal, color, enfermedad) => {
    try {
        // Leer las citas actuales
        let citas = [];
        try {
            citas = JSON.parse(await readFile("citas.json", "utf-8"));
        } catch (error) {
            // Si el archivo no existe o está vacío, inicializar un arreglo vacío
            await writeFile("citas.json", JSON.stringify([]));
        }

        // Agregar la nueva cita al arreglo
        citas.push({ nombre, edad, animal, color, enfermedad });

        // Guardar las citas actualizadas en el archivo JSON
        await writeFile("citas.json", JSON.stringify(citas, null, 2));
        console.log("Cita registrada exitosamente.");
    } catch (error) {
        console.error("Error al registrar la cita:", error);
    }
};

// Función para leer y mostrar las citas
const leer = async () => {
    try {
        // Leer el archivo JSON
        const citas = JSON.parse(await readFile("citas.json", "utf-8"));
        console.log("Citas registradas:");
        citas.forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`, cita);
        });
    } catch (error) {
        console.error("Error al leer las citas:", error);
    }
};

// Exportamos las funciones
module.exports = { registrar, leer };
