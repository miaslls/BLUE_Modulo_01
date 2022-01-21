const prompt = require('prompt-sync')();

// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
// Calcule e exiba o total de dias que essa pessoa já viveu. 
// Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias.

let anos = parseInt(prompt("Anos: ")); 
let meses = parseInt(prompt("Meses: "));
let dias = parseInt(prompt("Dias: "));

const diasNoMes = 30;
const diasNoAno = 365;

let totalDias = ( anos * diasNoAno ) + ( meses * diasNoMes ) + dias;

console.log(`${anos} anos, ${meses} meses e ${dias} dias correspondem a ${totalDias} dias.`);