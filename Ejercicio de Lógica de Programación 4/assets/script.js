// Solicitar un número al usuario y verificar si es válido
let numero;
do {
    let input = prompt("Introduce un número para mostrar la serie de Fibonacci:"); //solicita numero
    numero = parseInt(input); //gurdar numero en variable

    if (isNaN(numero) || numero < 0) { //su no es un numero o es menor que cero
        alert("Por favor, ingresa un número entero positivo."); //se pide ingresar otro numero valido
    }
} while (isNaN(numero) || numero < 0); //el ciclo se repite hasta que sea numero valido

// Función para generar la serie de Fibonacci
function fibonacci(n) { //declarar funcion con numeros a generar
    let fib = []; //variable fib con array vacio para almaacernar datos 
    for (let i = 0; i < n; i++) { //indice 0, continua mientras i sea menor que el valor de n (genera solo los primeros n de la serie fib)
        if (i === 0) {                    //i es = a 0
            fib.push(0);                  //Si i es igual a 0, se agrega el número 0 al array fib utilizando push(). Este es el primer número de la serie.
        } else if (i === 1) {             //Si i no es igual a 0 pero es igual a 1, significa que estamos en el segundo número de la serie.
            fib.push(1);                  //Si i es igual a 1, se agrega el número 1 al array fibo utilizando push(). Este es el segundo número de la serie.
        } else {                          //i no es ni 0 ni 1
            fib.push(fib[i - 1] + fib[i - 2]);   //calcula el número de Fibonacci sumando los dos números anteriores en la serie
        }
    }
    return fib;
}

// Calcular y mostrar la serie de Fibonacci en la consola
let serieFibonacci = fibonacci(numero); // llamar funcion  con valor 
console.log("Serie de Fibonacci para " + numero + " números: " + serieFibonacci.join(", "));

// Mostrar la serie del Fibocosa en el DOM
let resultadoDOM = document.createElement("div"); //crea div en mi doc html
resultadoDOM.innerHTML = "Serie de Fibonacci para " + numero + " números: " + serieFibonacci.join(", "); //texto dentro del div
document.body.appendChild(resultadoDOM); //mostar en la pag

//este ejercicio me costo mucho porque no sabia que era la Fibonacci, asi que me apoye de varios compañeros para resolverlo c: 
//función fibonacci(n) genera los primeros n números de la serie de Fibonacci y los almacena en un array, que luego se devuelve como resultado. Cada número se calcula sumando los dos números anteriores, comenzando con 0 y 1 como los primeros dos números de la serie.