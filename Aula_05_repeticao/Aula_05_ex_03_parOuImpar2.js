const prompt = require("prompt-sync")();

// Faça um programa que peça um número par, e repita a execução caso o número digitado seja ímpar.

let num = 0;

do {
    if (num % 2 != 0 || num != 0 || isNaN(num)) {
    num = prompt("INVÁLIDO. Digite um número par: ");
    }
    num = prompt("Digite um número par: ");
} while (num % 2 != 0);