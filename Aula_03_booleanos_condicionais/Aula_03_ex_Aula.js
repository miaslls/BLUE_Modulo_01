const prompt = require('prompt-sync')();

let num = +prompt("Número de dias: ")

if (num == 0 || num > 365) {
    console.log(`Inválido. Digite um valor entre 1 e 365`);
} else if (num <= 31) {
    console.log(`JANEIRO`);
} else if (num <= 59) {
    console.log(`FEVEREIRO`);
} else if (num <= 90) {
    console.log(`MARÇO`);
} else if (num <= 120) {
    console.log(`ABRIL`);
} else if (num <= 151) {
    console.log(`MAIO`);
} else if (num <= 181) {
    console.log(`JUNHO`);
} else if (num <= 212) {
    console.log(`JULHO`);
} else if (num <= 243) {
    console.log(`AGOSTO`);
} else if (num <= 273) {
    console.log(`SETEMBRO`);
} else if (num <= 304) {
    console.log(`OUTUBRO`);
} else if (num <= 334) {
    console.log(`NOVEMBRO`);
} else {
    console.log(`DEZEMBRO`);
} 