const prompt = require('prompt-sync')();

// Escreva uma função para conversão de temperatura. Ela deve receber 2 argumentos: 
// um número e um caracter 'C', 'F' ou 'K', indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. 
// A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.

let promptEscala = prompt(`ESCALA [C], [F] ou [K]: `).toUpperCase();
let promptTemperatura = +prompt(`TEMPERATURA: `);

function conversaoTemperatura (escala, temperatura) {

    let tempCelsius;
    let tempFahrenheit;
    let tempKelvin;

    if (escala == 'C') {
        tempCelsius = temperatura;
        tempFahrenheit = tempCelsius * 1.8 + 32;
        tempKelvin = tempCelsius + 273;
    }

    if (escala == 'F') {
        tempFahrenheit = temperatura;
        tempCelsius = (tempFahrenheit - 32) / 1.8;
        tempKelvin = tempCelsius + 273;
    }

    if (escala == 'K') {
        tempKelvin = temperatura;
        tempCelsius = tempKelvin - 273;
        tempFahrenheit = tempCelsius * 1.8 + 32;
    }

    console.log(`[C] ${tempCelsius} \t[F} ${tempFahrenheit} \t [K] ${tempKelvin}`);
}