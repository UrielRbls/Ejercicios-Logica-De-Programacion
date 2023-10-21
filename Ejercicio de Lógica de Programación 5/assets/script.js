// Generar un número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1; //Math.random(): Esto genera un número decimal aleatorio entre 0 y 1. //Math.floor(...): Esto redondea hacia abajo //Math.floor(Math.random() * 100) + 1: Finalmente, le sumamos 1 al número entero resultante. Esto desplaza la gama de números del 1 al 100, en lugar de 0 a 99.

// Inicializar una lista para almacenar los números introducidos por el usuario
const numerosIntroducidos = [];

// Función para solicitar un número al usuario y verificar si es el número secreto
function adivinarNumero() {
    let intento;
    do {
        let input = prompt("Introduce un número del 1 al 100 para adivinar el número secreto:");
        intento = parseInt(input);

        if (isNaN(intento) || intento < 1 || intento > 100) {
            alert("Por favor, ingresa un número válido del 1 al 100.");
        }
    } while (isNaN(intento) || intento < 1 || intento > 100);

    numerosIntroducidos.push(intento);

    if (intento === numeroSecreto) {
        alert("Felicidades, adivinaste el número secreto.");
    } else {
        alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
        adivinarNumero(); // Volver a solicitar un número
    }
}

// Iniciar el juego llamando a la función para adivinar el número
adivinarNumero();

// Mostrar la lista de números introducidos en la consola
console.log("Números introducidos: " + numerosIntroducidos.join(", "));


/* 
Genera un número secreto aleatorio entre 1 y 100 utilizando Math.random().

Inicializa una lista llamada numerosIntroducidos para almacenar los números que el usuario introduce antes de adivinar el número secreto.

Define una función llamada adivinarNumero que solicita al usuario un número del 1 al 100, verifica si es igual al número secreto y muestra mensajes en consecuencia.

Llama a la función adivinarNumero para iniciar el juego.

Muestra la lista de números introducidos por el usuario en la consola utilizando console.log().
*/