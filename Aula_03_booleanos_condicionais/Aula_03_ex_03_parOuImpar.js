const prompt = require("prompt-sync")();

// Faça um programa que leia um número, e informe se ele é par ou impar.

let num;
let numRaw = prompt("Digite um número inteiro: ");

while (isNaN(numRaw)) {
  numRaw = prompt("INVÁLIDO. Digite um número inteiro: ");
}

num = numRaw;

while (num % 1 != 0) {
  num = prompt("INVÁLIDO. Digite um número inteiro: ");
}

if (num % 2 == 0) {
  console.log("PAR");
} else {
  console.log("ÍMPAR");
}