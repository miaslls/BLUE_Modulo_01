const prompt = require("prompt-sync")();

// Escreva um programa que peça um número e escreva o fatorial dele. Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720

const numero = +prompt("Número: ");
let fatorial = numero;

for (i = numero - 1; i > 0; i--) {
    fatorial *= i;
  }

  console.log(`!${numero} = ${fatorial}`);