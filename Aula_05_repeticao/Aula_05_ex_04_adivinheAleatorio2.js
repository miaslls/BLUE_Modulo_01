const prompt = require('prompt-sync')();

// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
// e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deve ser repetir até o usuário acertar o número, 
// e a cada palpite deve dizer se o número é maior ou menor que o palpite. 
// No final dele deve escrever na tela que o usuário encontrou o número, e mostrar a quantidade de palpites que foi necessária.

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

  let cNum = Math.floor(Math.random(11) * 10)
  
  let pNum;
  // let cNum;
  
  // cNum = getRandomInt(11);
  
  pNum = parseInt(prompt("Adivinhe o número (0 - 10): "));

  let count = 1;

  while (pNum != cNum) {
    if (pNum > cNum) {
      pNum = parseInt(prompt("ERROU! Tente um número menor: "));
    } else {
      pNum = parseInt(prompt("ERROU! Tente um número maior: "));
    }
    count++;
  }
  
  if (pNum == cNum) {
    console.log(`ACERTOU em ${count} tentativas`);
  } 