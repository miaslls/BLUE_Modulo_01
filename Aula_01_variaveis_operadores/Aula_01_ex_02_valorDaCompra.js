const prompt = require('prompt-sync')();

// Neste problema, deve-se ler o nome de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, 
// o nome de uma peça 2, o número de peças 2 e o valor unitário de cada peça 
// 2. Após, calcule e mostre o valor a ser pago.

let nomePeca1 = prompt ("Peça 1 - NOME: ");
let qtdPeca1 = parseFloat(prompt ("Peça 1 - QTD: "));
let valorPeca1 = parseFloat(prompt ("Peça 1 - VALOR: R$"));

let nomePeca2 = prompt ("Peça 2 - NOME: ");
let qtdPeca2 = parseFloat(prompt ("Peça 2 - QTD: "));
let valorPeca2 = parseFloat(prompt ("Peça 2 - VALOR: R$"));

let totalPeca1 = qtdPeca1 * valorPeca1;
let totalPeca2 = qtdPeca2 * valorPeca2;

console.log(`${nomePeca1}: \tR$${valorPeca1}/un, ${qtdPeca1} un \tTotal: R$${totalPeca1.toFixed(2)}`);
console.log(`${nomePeca2}: \tR$${valorPeca2}/un, ${qtdPeca2} un \tTotal: R$${totalPeca2.toFixed(2)}`);

console.log(`Valor Total: R$${(totalPeca1 + totalPeca2).toFixed(2)}`);