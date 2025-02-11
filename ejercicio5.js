//Cree una función llamada generarReporte que:
//Reciba un array de objetos de ventas con producto y monto.
//Retorne un objeto con:
//totalVentas: suma de todos los montos.
//promedio: monto promedio por transacción.
//cantidadTransacciones: número total de ventas.
//Ejemplo de Entrada
const ventas = [
 { producto: "TV", monto: 1000 },
 { producto: "Radio", monto: 200 },
];


// Función para generar un reporte de ventas
function generarReporte(ventas) {
    // Calculamos la suma total de los montos
    const totalVentas = ventas.reduce((acumulado, venta) => acumulado + venta.monto, 0);
  
    // Calculamos el número total de transacciones
    const cantidadTransacciones = ventas.length;
  
    // Calculamos el promedio por transacción
    const promedio = cantidadTransacciones > 0 ? totalVentas / cantidadTransacciones : 0;
  
    // Retornamos el objeto con el reporte
    return {
      totalVentas,
      promedio,
      cantidadTransacciones
    };
  }
  
  
  // Llamamos a la función y mostramos el resultado
  const reporte = generarReporte(ventas);
  console.log("Reporte de Ventas:", reporte);