// Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. 
// Como primeiro passo, escreva um programa que produza a seguinte saída:
// ALUNO (A)   NOTA
// ALINE        9.0
// MÁRI0        DEZ
// SÉRGIO        4.5
// SHIRLEY       7.0

const nomes = ["ALINE", "MÁRIO", "SÉRGIO", "SHIRLEY"];
const notas = ["9.0", "DEZ", "4.5", "7.0"];

for (i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i]}\t \t${notas[i]}`)
}