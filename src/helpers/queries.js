import ItemColor from "../components/ItemColor";

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

// Función para eliminar un color 
export async function borrarColorAPI(id) {
    try {
        const respuesta = await fetch(`${URI_COLOR}/${id}`, {
            method: "DELETE"
        });
        return respuesta;

    } catch (error) {
        console.log(error);
    }
}

// Función para editar un color
export async function editarColorAPI (color,id) {
    try {
      const respuesta = await fetch(`${URI_COLOR}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(color)
      });
      return respuesta;

    } catch (error) {
      console.log(error);
    }
}

export async function obtenerColorAPI(id) {
    try {
      const respuesta = await fetch(`${URI_COLOR}/${id}`);
      return respuesta;

    } catch (error) {
      console.log(error);
    }
}
