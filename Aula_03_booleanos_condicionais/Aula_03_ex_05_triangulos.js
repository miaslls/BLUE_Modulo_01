const prompt = require("prompt-sync")();

// Faça um programa que leia 3 valores que representam os lados de um triângulo A, B e C
// e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados.
// A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos:
// Se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO;
// Se A² = B² + C² , apresente a mensagem: TRIANGULO RETANGULO;
// Se A² > B² + C² , apresente a mensagem: TRIANGULO OBTUSANGULO;
// Se A² < B² + C² , apresente a mensagem: TRIANGULO ACUTANGULO;
// Se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO;
// Se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES;

console.log(` `);

let lados = [];

lados[0] = parseFloat(prompt("Lado 1: "));
lados[1] = parseFloat(prompt("Lado 2: "));
lados[2] = parseFloat(prompt("Lado 3: "));

lados.sort(function (a, b) {
  return b - a;
});

let A = lados[0];
let B = lados[1];
let C = lados[2];

let A2 = A ** 2;
let B2 = B ** 2;
let C2 = C ** 2;

let tipoLado;
let tipoAngulo;

if (A >= B + C) {
  console.log(`\nNÃO FORMA TRIÂNGULO!\n`);
} else {
  if (A == B && B == C) {
    tipoLado = "EQUILÁTERO";
  } else if (A == B || B == C || C == A) {
    tipoLado = "ISÓSCELES";
  } else {
    tipoLado = "ESCALENO";
  }

  // CLASSIFICAÇÃO DOS ÂNGULOS PELA MEDIDA DOS LADOS
  if (A == B && B == C) {
    tipoLado = "EQUILÁTERO";
  } else if (A == B || B == C || C == A) {
    tipoLado = "ISÓSCELES";
  } else {
    tipoLado = "ESCALENO";
  }

  if (A == B && B == C) {
    tipoAngulo = "EQUIÂNGULO";
  } else if (A2 == B2 + C2) {
    tipoAngulo = "RETÂNGULO";
  } else if (A2 < B2 + C2) {
    tipoAngulo = "ACUTÂNGULO";
  } else if (A2 > B2 + C2) {
    tipoAngulo = "OBTUSÂNGULO";
  }

  // // CLASSIFICAÇÃO DOS ÂNGULOS PELA MEDIDA DOS COS(angulo)
  // let a = (B2 + C2 - A2) / (B * C * 2);
  // let b = (C2 + A2 - B2) / (A * C * 2);
  // let c = (A2 + B2 - C2) / (A * B * 2);

  // let angulos = [a, b, c];

  // angulos.sort(function (a, b) {
  //   return b - a;
  // });

  // a = angulos[0];
  // b = angulos[1];
  // c = angulos[2];

  // if (a == b && b == c) {
  //   tipoAngulo = "EQUIÂNGULO";
  // } else if (a == 0) {
  //   tipoAngulo = "RETÂNGULO";
  // } else if (a < 0 && b < 0 && c < 0) {
  //   tipoAngulo = "ACUTÂNGULO";
  // } else if (a > 0) {
  //   tipoAngulo = "OBTUSÂNGULO";
  // }

  console.log(
    `\n\tLados: ${A}, ${B}, ${C}\n\tClassificação: ${tipoLado}, ${tipoAngulo}\n`
  );
}