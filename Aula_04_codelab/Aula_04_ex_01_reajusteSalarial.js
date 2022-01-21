const prompt = require('prompt-sync')();

// Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores 
// e lhe contrataram para desenvolver o programa que calculará os reajustes. 
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.
// Após o aumento ser realizado, informe na tela:
// O salário antes do reajuste.
// O percentual de aumento aplicado.
// O valor do aumento.
// O novo salário, após o aumento.

let salarioAtual = parseInt(prompt("Salário: "));
let percentual;

if (salarioAtual <= 280) {
    percentual = 0.2;
} else if (salarioAtual > 280 && salarioAtual <= 700) {
    percentual = 0.15;
} else if (salarioAtual > 700 && salarioAtual <= 1500) {
    percentual = 0.1;
} else if (salarioAtual > 1500) {
    percentual = 0.05;
}

let aumento = salarioAtual * percentual;
let salarioNovo = salarioAtual + aumento;

console.log(`\n\tSalário Atual: R$${salarioAtual.toFixed(2)} \n\tPercentual do aumento: ${percentual * 100}% \n\tValor do Aumento: R$${aumento.toFixed(2)} \n\tNovo Salário: R$${salarioNovo.toFixed(2)}\n`)