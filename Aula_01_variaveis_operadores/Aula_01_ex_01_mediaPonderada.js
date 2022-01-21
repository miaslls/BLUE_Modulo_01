const prompt = require('prompt-sync')();

// Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
// A seguir calcule e informe a média do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6.

let nota1 = parseFloat(prompt("Nota 1: "));
let nota2 = parseFloat(prompt("Nota 2: "));
let nota1P = nota1 * 0.4;
let nota2P = nota2 * 0.6;
let media = nota1P + nota2P;

console.log(nota1P);
console.log(nota2P);
console.log(`A média é ${media.toFixed(2)}`);