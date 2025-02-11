//Cre3 una función llamada actualizarStock que:
//Reciba un array de productos (objetos con id, nombre, y stock), un id, y un nuevoStock.
//Busque el producto con el id especificado.
//Si existe, actualice su propiedad stock con el nuevoStock.
//Retorne el array modificado. Si el producto no existe, retorna null.
//Ejemplo de Entrada

const productos = [
 { id: 1, nombre: "Lápiz", stock: 10 },
 { id: 2, nombre: "Cuaderno", stock: 5 },
];
// Función para actualizar el stock de un producto
function actualizarStock(productos, id, nuevoStock) {
    // Buscamos el producto por su id
    const productoEncontrado = productos.find(producto => producto.id === id);
  
    // Si el producto existe, actualizamos su stock
    if (productoEncontrado) {
      productoEncontrado.stock = nuevoStock;
      return productos;
    } else {
      return null; // Si no existe, retornamos null
    }
  }
  
  
  // Llamamos a la función con un id existente
  const resultado1 = actualizarStock(productos, 2, 20);
  console.log("Actualización exitosa:", resultado1);
  
  // Llamamos a la función con un id inexistente
  const resultado2 = actualizarStock(productos, 3, 15);
  console.log("Producto no encontrado:", resultado2);