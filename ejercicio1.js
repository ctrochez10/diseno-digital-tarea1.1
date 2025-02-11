//Cree una función llamada aplicarImpuestos que:
//Reciba un array de objetos (productos con nombre y precio).
//Filtre los productos con precio mayor a 50.
//Aumente el precio de los productos filtrados agregando un 10% de impuesto.
//Retorne el nuevo array modificado.

// Ejemplo de entrada
const productos = [
    { nombre: "Camisa", precio: 45 },
    { nombre: "Zapatos", precio: 80 },
  ];
  

// Definimos la función aplicarImpuestos
function aplicarImpuestos(productos) {
    // Filtramos los productos con precio mayor a 50
    const productosFiltrados = productos.filter(producto => producto.precio > 50);
    
    //imprimimos el array filtrado
    console.log("Prodcutos Filtrados: ", productosFiltrados)
  
    // Aplicamos el 10% de impuesto a los productos filtrados
    const productosConImpuestos = productosFiltrados.map(producto => {
      return {
        nombre: producto.nombre,
        precio: producto.precio * 1.10 // Aumenta un 10% al precio
      };
    });
  
    // Retornamos el array con los productos modificados
    return productosConImpuestos;
  }
  
  
  // Llamamos a la función y mostramos el resultado
  const resultado = aplicarImpuestos(productos);
  console.log("Productos con impuestos:", resultado);

//*