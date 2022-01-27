const prompt = require("prompt-sync")();

// Peça ao usuário uma quantidade de linhas e e outra de colunas,
// e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
// [ 0, 1, 2, 3 ]
// [ 1, 2, 3, 4 ]
// [ 2, 3, 4, 5 ]

let tabela = [];
let colunas = [];
let qtdLinhas = +prompt("Quantidade de linhas: ");
let qtdColunas = +prompt("Quantidade de colunas: ");

for (l = 0; l < qtdLinhas; l++) {
  for (c = 0; c < qtdColunas; c++) {
      colunas[c] = +prompt(`linha ${l + 1}, coluna ${c + 1}: `);
}
tabela[l] = colunas;
}

console.table(tabela);