const URI_COLOR = import.meta.env.VITE_API_COLOR;

// Funcion para agregar un color 
export async function crearColorAPI (nombreColor) {
    try {
        const respuesta = await fetch(URI_COLOR, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nombreColor)
        });
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }
}

// Función para listar los colores
export async function listarColoresAPI () {
    try {
        const respuesta = await fetch(URI_COLOR);
        return respuesta;
        
    } catch (error) {
        console.log(error)
    }
}