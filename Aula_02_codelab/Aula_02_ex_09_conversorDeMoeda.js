const prompt = require("prompt-sync")();

// Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.

const rate = 0.1798;
const fonte = "\nfonte: BCB - Banco Central do Brasil | https://www.bcb.gov.br/conversao";

let toConvert = parseFloat(prompt("Digite um valor para conversão: R$"));

console.log(`\nEm 13/01/2022, R$${toConvert} correspondem a: USD${(rate * toConvert).toFixed(2)}`);

console.log(fonte);
