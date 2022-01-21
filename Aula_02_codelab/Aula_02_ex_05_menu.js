const prompt = require('prompt-sync')();

// Faça um programa de cadastro de clientes que mostre um menu de opções 
// e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

const opcao1 = 1;
const opcao2 = 2;
const opcao3 = 3;

console.log(`Para OPÇÃO 1, digite [1]
Para OPÇÃO 2, digite [2]
Para OPÇÃO 3, digite [3]`);

escolha = parseInt(prompt("Digite a opção desejada: "));

if (escolha == 1) {
    console.log("Selecionado: OPÇÃO 1");
} else if (escolha == 2) {
    console.log("Selecionado: OPÇÃO 2");
} else if (escolha == 3) {
    console.log("Selecionado: OPÇÃO 3");
}