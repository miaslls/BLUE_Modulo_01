const prompt = require('prompt-sync')();

// Faça um Programa que peça dois números e imprima o maior deles, e informe caso eles sejam iguais.

const ex3Num1 = parseInt(prompt("1º número: "))
const ex3Num2 = parseInt(prompt("2º número: "))

if (ex3Num1 === ex3Num2) {
  console.log(`Os números são iguais.`)
} else if (ex3Num1 > ex3Num2) {
  console.log(`O 1º número (${ex3Num1}) é maior que o 2º número (${ex3Num2}).`)
} else {
  console.log(`O 2º número (${ex3Num2}) é maior que o 1º número (${ex3Num1}).`)
}ls