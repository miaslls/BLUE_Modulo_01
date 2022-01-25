const prompt = require('prompt-sync')();

// Faça um programa que peça um número inteiro e crie arrays com:
// + Todos os números pares de 0 ao número escolhido
// + Todos os números ímpares do 0 ao número escolhido

let num = "";
let numsPares = [];
let numsImpares = [];

for (i = 0; i < 20; i++) {
    do {
        if (num < 0 || num % 1 != 0 || isNaN(num)) {
            console.log(`\nVocê deve digitar números inteiros e positivos.`)
        }
        num = prompt(`${i + 1}. Digite um número: `);
    } while (num < 0 || num % 1 != 0 || isNaN(num));

    if (num % 2 == 0) {
        numsPares.push(num);
    } else {
        numsImpares.push(num);
    }
}

numsPares.sort(function(a, b){return a-b});
numsImpares.sort(function(a, b){return a-b});

console.log(`\n\tPARES: \t\t${numsPares}`);
console.log(`\tÍMPARES: \t${numsImpares}`);
