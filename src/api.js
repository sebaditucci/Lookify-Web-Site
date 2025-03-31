export async function obtenerDatos() {
    try {
        const respuesta = await fetch('/imagenesData.json'); 
        if (!respuesta.ok) {
            throw new Error(`Error al obtener los datos: ${respuesta.statusText}`);
        }
        return await respuesta.json();
    } catch (error) {
        console.error(error);
        return null;
    }
}