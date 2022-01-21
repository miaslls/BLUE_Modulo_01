// Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. 
// O valor do troco deve ser exibido no console.

let compra = 100.98;
let pago = 150;

console.log(`Troco: R$${(pago - compra).toFixed(2)}`);