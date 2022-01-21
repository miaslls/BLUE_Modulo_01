const prompt = require('prompt-sync')();

// Escreva um programa que receba dois valores digitados pelo usuário: 
// quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). 
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro 
// (o jogador irá derrotar o monstro em 8 turnos).

let vidaMonstro = parseInt(prompt("Vida do Monstro (10 - 50): "));

while (vidaMonstro < 10 || vidaMonstro > 50 || isNaN(vidaMonstro)) {
    vidaMonstro = parseInt(prompt(`Esse valor não é válido. O monstro deve ter entre 10 e 50 de vida: `));
}

let valorAtaque = parseInt(prompt("Valor do Ataque (5 - 10): "));

while (valorAtaque < 5 || valorAtaque > 10 || isNaN(vidaMonstro)) {
    valorAtaque = parseInt(prompt(`Esse valor não é válido. O valor do ataque deve ser entre 5 e 10: `));
} 

let rodadas = Math.ceil(vidaMonstro / valorAtaque);

console.log(`O jogador irá derrotar o monstro em ${rodadas} rodadas.`);