const prompt = require("prompt-sync")();

// Construa uma função que receba uma data no formato FIXME: DD/MM/AAAA 
// e devolva uma string no formato FIXME: 'D de mesPorExtenso de AAAA'.
// Valide a data e retorne NULL caso a data seja inválida.

let promptDia;
let promptMes;
let promptAno;

while (true) {
  promptDia = prompt(`DIA [DD] `);
  if (!isNaN(promptDia) && promptDia > 0 && promptDia % 1 == 0) {
    parseInt(promptDia);
    break;
  }
  console.log(`Você deve digitar um NÚMERO INTEIRO > 0`);
}

while (true) {
  promptMes = prompt(`MES [MM] `);
  if (!isNaN(promptMes) && promptMes > 0 && promptMes % 1 == 0) {
    parseInt(promptMes);
    break;
  }
  console.log(`Você deve digitar um NÚMERO INTEIRO > 0`);
}

while (true) {
  promptAno = prompt(`ANO [AAAA] `);
  if (!isNaN(promptAno) && promptAno > 0 && promptAno % 1 == 0) {
    parseInt(promptAno);
    break;
  }
  console.log(`Você deve digitar um NÚMERO INTEIRO > 0`);
}

function validacaoData(dia, mes, ano) {
  let validacaoMes = 0;
  let validacaoDia = 0;

  if (mes > 12) {
    validacaoMes = 1;
  }

  if (mes == 2) {
    if (dia > 28) {
      validacaoDia = 1;
    }
  }

  if (
    mes == 1 ||
    mes == 3 ||
    mes == 5 ||
    mes == 7 ||
    mes == 8 ||
    mes == 10 ||
    mes == 12
  ) {
    if (dia > 31) {
      validacaoDia = 1;
    }
  }

  if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    if (dia > 31) {
      validacaoDia = 1;
    }
  }

  if (validacaoMes || validacaoDia) {
    return false;
  }
}

let retornoValidacao = validacaoData(promptDia, promptMes, promptAno);

if (retornoValidacao == false) {
  console.log(`A data digitada é inválida.`);
} else {
  console.log(
    `${promptDia.toString().padStart(2, "0")}/${promptMes
      .toString()
      .padStart(2, "0")}/${promptAno
      .toString()
      .padStart(4, "0")} é uma data válida.`
  );
}
