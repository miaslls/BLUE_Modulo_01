const prompt = require("prompt-sync")();

// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Estado Civil: 's', 'c', 'v', 'd';

console.log("");

let nome = "";

do {
  if (nome.length < 4 && nome != "") {
    console.log(`O nome deve ter mais de 3 caracteres.`);
  }
  nome = prompt("Nome: ");
} while (nome.length < 4);

let idade = 0;

do {
  if (isNaN(idade) || idade < 0 || idade > 150) {
    console.log(`A idade deve ser um número entre 1 e 150.`);
  }
  idade = prompt("Idade: ");
} while (isNaN(idade) || idade < 0 || idade > 150);

let salario = 1;

do {
  if (isNaN(salario) || salario <= 0) {
    console.log(`O salário deve ser um número maior que zero.`);
  }
  salario = prompt("Salário: ");
} while (isNaN(salario) || salario <= 0);

let estadoCivil = prompt("Estado Civil: ");

while (
  estadoCivil.toUpperCase() != "C" &&
  estadoCivil.toUpperCase() != "S" &&
  estadoCivil.toUpperCase() != "D" &&
  estadoCivil.toUpperCase() != "V"
) {
  console.log(`\nEscolha entre as opções: 
    [C] - casado
    [S] - solteiro
    [D] - divorciado
    [V] - viúvo
     `);
  estadoCivil = prompt("Estado Civil: ");
}

console.log(
    `\nNome: \t\t${nome} \nIdade: \t\t${idade} \nSalário: \tR$${salario} \nEstado Civil: \t${estadoCivil.toUpperCase()}\n`
  );

// do {
//   if (
//     estadoCivil.toUpperCase() != "C" &&
//     estadoCivil.toUpperCase() != "S" &&
//     estadoCivil.toUpperCase() != "D" &&
//     estadoCivil.toUpperCase() != "V" &&
//     estadoCivil.toUpperCase() != " "
//   ) {
//     console.log(`Você deve selecionar entre C, S, D, V.`);
//   }
//   estado = prompt("Estado Civil: ");
// } while (
//   estadoCivil.toUpperCase() != "C" &&
//   estadoCivil.toUpperCase() != "S" &&
//   estadoCivil.toUpperCase() != "D" &&
//   estadoCivil.toUpperCase() != "V"
// );