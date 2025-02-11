//Cree una función llamada contarOcurrencias que:
//Reciba un array de elementos (strings, números, etc.).
//Retorne un objeto donde las claves sean los elementos del array y los valores sean la
//cantidad de veces que aparecen.
//Ejemplo de Entrada

const elementos = ["a", "b", "a", "c", "b"];

// Función para contar ocurrencias de elementos en un array
function contarOcurrencias(elementos) {
    return elementos.reduce((contador, elemento) => {
      contador[elemento] = (contador[elemento] || 0) + 1;
      return contador;
    }, {});
  }
  
  
  // Llamamos a la función y mostramos el resultado
  const resultadoOcurrencias = contarOcurrencias(elementos);
  console.log("Conteo de ocurrencias:", resultadoOcurrencias);