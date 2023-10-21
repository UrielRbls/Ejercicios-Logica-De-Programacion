// Solicitar la temperatura en grados Celsius al usuario
let temperaturaCelsius;
do {
    let input = prompt("Introduce la temperatura en grados Celsius:");
    temperaturaCelsius = parseFloat(input);

    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (isNaN(temperaturaCelsius));

// Realizar la conversión a grados Fahrenheit y grados Kelvin
let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
let temperaturaKelvin = temperaturaCelsius + 273.15;

// Mostrar los resultados en la consola
console.log("Grados Fahrenheit: " + temperaturaFahrenheit);
console.log("Grados Kelvin: " + temperaturaKelvin);

// Mostrar los resultados en el DOM 
let mostrarEnDOM = document.createElement("div"); //crear div dentro de documento html
mostrarEnDOM.innerHTML = "Temperatura en grados Celsius: " + temperaturaCelsius + "<br>"; //mostrar temperatura en celsius
mostrarEnDOM.innerHTML += "Grados Fahrenheit: " + temperaturaFahrenheit + "<br>"; //mostrar temperatura en fahrenheit
mostrarEnDOM.innerHTML += "Grados Kelvin: " + temperaturaKelvin; //mostrar temperatura en kelvin
document.body.appendChild(mostrarEnDOM); //Resultado en el DOM
