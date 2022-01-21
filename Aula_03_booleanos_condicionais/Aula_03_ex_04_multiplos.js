const prompt = require('prompt-sync')();

// Faça um programa que leia 2 valores inteiros (A e B). 
// Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si. 

let num1 = parseInt(prompt("1º número: "));
let num2 = parseInt(prompt("2º número: "));

if (num1 % num2 == 0 || num2 % num1 == 0) {
    console.log("MÚLTIPLOS");
} else {
    console.log("NÃO MÚLTIPLOS");
}
