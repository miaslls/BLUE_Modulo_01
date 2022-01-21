const prompt = require('prompt-sync')();

const diasNoMes = 30;
const diasNoAno = 365;

let diasTotal = parseInt(prompt("Dias: "));

let restoAnos = diasTotal % diasNoAno; 
let anos = (diasTotal - restoAnos) / diasNoAno;
let dias = restoAnos % diasNoMes;
let meses = (restoAnos - dias) / 30;

console.log(`${diasTotal} dias correspondem a ${anos} anos, ${meses} meses e ${dias} dias.`);