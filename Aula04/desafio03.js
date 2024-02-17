// Determinação do Maior Número
// ● Escreva um programa que receba três números como entrada e
// determina o maior deles. Imprima o número mais alto.

let num1 = 7.8;
let num2 = 9;
let num3 = 7.5;

let maiorNumero = num1;

if (num2 > maiorNumero) {
  maiorNumero = num2;
}

if (num3 > maiorNumero) {
  maiorNumero = num3;
}

console.log("O maior número é: " + maiorNumero);
