const prompt = require("prompt-sync")();

//  Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o CEP na terceira e o telefone na quarta.

const nome = prompt("Nome: ");
const endereco = prompt("Endereço: ");
const cep = prompt("CEP: ");

console.log(`\nNome: ${nome} \nEndereço: ${endereco} \nCEP: ${cep}`);
