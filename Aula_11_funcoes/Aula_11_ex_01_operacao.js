const prompt = require('prompt-sync')();

// 1. Faça um programa, com uma função que necessite de três argumentos: dois números e um sinal de operador matemático (+, -, * ou /). 
// Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.

let promptOperador;
let promptNum1;
let promptNum2;

while(true) {

    promptOperador = prompt(`OPERAÇÃO: `).trim();
    if (promptOperador == '+' || promptOperador == '-' || promptOperador == '*' || promptOperador == '/') {
        break
    }
    console.log(`Você deve digitar [+], [-], [*], [/]`)
}

while(true) {
    promptNum1 = +prompt(`1º número: `);
    if (!isNaN(promptNum1)) {
        break;
    }
    console.log(`Você deve digitar um NÚMERO`)
}

while(true) {
    promptNum2 = +prompt(`2º número: `);
    if (!isNaN(promptNum2)) {
        break;
    }
    console.log(`Você deve digitar um NÚMERO`)
}

function operacao(operador, num1, num2) {

    let resultado;

    if (operador == '+') {
        resultado = num1 + num2;
    } else if (operador = '-') {
        resultado = num1 - num2;
    } else if (operador == '*') {
        resultado = num1 * num2;
    } else if (operador == '/') {
        resultado = num1 / num2;
    }

    return resultado;
}

let retornoOperacao = operacao(promptOperador, promptNum1, promptNum2);
console.log(`${promptNum1} ${promptOperador} ${promptNum2} = ${retornoOperacao}`);