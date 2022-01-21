const prompt = require('prompt-sync')();

// Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// A mensagem "Em recuperação", se a média for entre cinco e sete;
// A mensagem "Reprovado", se a média for menor que cinco.

let = notas = [];
let = totalNotas = 0;

for (i = 0; i < 4; i++) {
  notas[i] = parseFloat(prompt(`Digite a nota ${i + 1}: `));
  totalNotas = totalNotas + notas[i];
}

let media = (totalNotas / 4).toFixed(1);

if (media < 5) {
  console.log(`REPROVADO - média ${media}`);
} else if (media >= 5 && media < 7) {
  console.log(`RECUPERAÇÃO - média ${media}`);
} else if (media >= 7 && media < 10) {
  console.log(`APROVADO - média ${media}`);
} 