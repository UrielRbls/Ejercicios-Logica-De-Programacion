//  - Solicitar por prompt tres datos y guardarlos en sus respectivas variables.
let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let numero3 = parseFloat(prompt("Introduce el tercer número:"));

// Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
    // Ordenar los números
    let numerosOrdenadosDescendente = [numero1, numero2, numero3].sort(function (a, b) {
        return b - a;
    });

    let numerosOrdenadosAscendente = [numero1, numero2, numero3].sort(function (a, b) {
        return a - b;
    });

    // Comprobar si los números son iguales
    let sonIguales = numero1 === numero2 && numero2 === numero3 && numero1 === numero3;

    // Mostrar los números en consola
    console.log("Números ingresados: " + numero1 + ", " + numero2 + ", " + numero3);

    if (sonIguales) {
        console.log("Los números son iguales.");
    } else {
        console.log("Números ordenados de mayor a menor: " + numerosOrdenadosDescendente.join(", "));
        console.log("Números ordenados de menor a mayor: " + numerosOrdenadosAscendente.join(", "));
    }
} else {
    // Mostrar un mensaje de error si no se ingresan números válidos
    console.log("Uno o más de los valores ingresados no es un número válido.");
}
