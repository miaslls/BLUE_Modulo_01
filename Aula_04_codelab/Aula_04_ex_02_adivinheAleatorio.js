const prompt = require('prompt-sync')();

// Jogo da adivinhação - Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 
// e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. 
// O programa deverá escrever na tela se o usuário venceu ou perdeu.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  let pNum
  let cNum
  
  cNum = getRandomInt(11)
  
  pNum = parseInt(prompt("\nAdivinhe o número (0 - 10) "))
  
  if (pNum == cNum) {
    console.log(`ACERTOU! :)`)
  } else {
    console.log(`\n\tERROU! O número era ${cNum}.\n`)
  }