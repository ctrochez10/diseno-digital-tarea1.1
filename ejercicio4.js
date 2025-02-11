//Cree una función llamada combinarUsuarios que:
//Reciba dos arrays:
//usuarios: array de objetos con id y nombre.
//detalles: array de objetos con id y propiedades adicionales (ej: edad).
//Combine ambos arrays en uno solo, fusionando los objetos que compartan el mismo id.


//Ejemplo de Entrada

const usuarios = [{ id: 1, nombre: "Juan" }, { id: 2, nombre: "Pedro"
}];
const detalles = [{ id: 1, edad: 25 }, { id: 2, edad: 30 }];

// Función para combinar usuarios y sus detalles
function combinarUsuarios(usuarios, detalles) {
    // Crear un nuevo array combinando los objetos por id
    return usuarios.map(usuario => {
      // Encontramos el detalle correspondiente al usuario
      const detalle = detalles.find(det => det.id === usuario.id);
      // Fusionamos ambos objetos si el detalle existe
      return detalle ? { ...usuario, ...detalle } : usuario;
    });
  }
  
  
  
  // Llamamos a la función y mostramos el resultado
  const resultadoCombinado = combinarUsuarios(usuarios, detalles);
  console.log("Usuarios combinados:", resultadoCombinado);
  