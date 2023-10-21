// Solicitar un número al usuario y verificar si es válido
let numero; //se declara numero
do {
    let input = prompt("Introduce un número para calcular su factorial:");  //solicita numero al usuario
    numero = parseFloat(input); 

    if (isNaN(numero) || numero < 0) { //verifica si es un numero, o si es menor que cero
        alert("Por favor, ingresa un número entero positivo."); //en casi de que lo anterior sea afirmativo lanza una alerta para ingresar otro num
    }
} while (isNaN(numero) || numero < 0); //bucle hasta que den un numero valido

// Calcular el factorial del número
let factorial = 1; 
for (let i = 1; i <= numero; i++) { //bucle que se ejecuta hasta que I sea menor o igual al numero que ingrese al inico
    factorial *= i; //cada iteracion multiplica factorial por el valor de I
}

// Mostrar el resultado en la consola
console.log("El factorial de " + numero + " es: " + factorial);

// Mostrar el resultado en el DOM
let resultadoDOM = document.createElement("div"); //se crea div en html
resultadoDOM.innerHTML = "El factorial de " + numero + " es: " + factorial; //texto a mostrar en html
document.body.appendChild(resultadoDOM); 

