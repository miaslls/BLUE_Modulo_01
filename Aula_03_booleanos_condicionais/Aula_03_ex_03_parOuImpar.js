const prompt = require("prompt-sync")();

// Faça um programa que leia um número, e informe se ele é par ou impar.

let num = parseFloat(prompt("Número: "));

// // apenas inteiros:
// while (num % 1 != 0 || isNaN(num)) {
//   num = parseInt(prompt("INVÁLIDO. Digite um número inteiro: "));
// }

// para qualquer número (Int or Float):
while (isNaN(num)) {
  num = parseFloat(prompt("INVÁLIDO. Digite um número: "));
}

if (num % 2 == 0) {
  console.log("PAR");
} else {
  console.log("ÍMPAR");
}