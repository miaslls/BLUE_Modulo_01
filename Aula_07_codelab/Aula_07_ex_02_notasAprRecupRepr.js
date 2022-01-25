
const prompt = require('prompt-sync')();

// Crie um programa em que o usuário escolha a quantidade de notas serem entradas e depois peça e armazene essa quantidade de notas em um array. 
// Ao final imprima a quantidade de alunos APROVADOS (nota >= 7), EM RECUPERAÇÃO (entre 5 e 7) e REPROVADOS (abaixo de 5).

let qtdNotas = prompt("Quantas notas deseja registrar? ");
let aprovados = [];
let recuperacao = [];
let reprovados = [];
let nota;

for (i = 0; i < qtdNotas; i++) {
    nota = prompt(`Nota ${i + 1} `);
    if (nota >= 7) {
        aprovados.push(nota);
    } else if (nota >= 5 && nota < 7) {
        recuperacao.push(nota);
    } else if (nota < 5) {
        reprovados.push(nota);
    }
}

console.log(`\n\tAprovados: \t${aprovados.length} | [${aprovados}]`);
console.log(`\n\tRecuperação: \t${recuperacao.length} | [${recuperacao}]`);
console.log(`\n\tReprovados: \t${reprovados.length} | [${reprovados}]`);