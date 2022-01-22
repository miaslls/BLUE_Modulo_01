const prompt = require('prompt-sync')();

// Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
// mostrando uma mensagem de erro e voltando a pedir as informações.

console.log(``);

let nome = prompt("Digite seu nome: ");
let senha = prompt("Escolha uma senha: ");

console.log(``);

while (senha.trim().toUpperCase() == nome.trim().toUpperCase()) {
    senha = prompt("A senha não pode ser igual ao nome. Escolha uma senha: ");
}

console.log(`\n\tNome Cadastrado: \t${nome.trim()} \n\tSenha Escolhida: \t${senha.trim()}\n`);