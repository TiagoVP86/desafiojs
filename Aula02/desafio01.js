// Declare duas variáveis, numero1 e numero2, com valores diferentes e calcule a
// soma, subtração, multiplicação e divisão desses números. Armazene os
// resultados em um array, sendo o
// Index: 0 = Soma
//  1 = subtração
//  2 = multiplicação
//  3 = divisão

const numero1 = 10;
const numero2 = 5;

const resultados = [
  numero1 + numero2,
  numero1 - numero2,
  numero1 * numero2,
  numero1 / numero2,
];

console.log("Soma: " + resultados[0]);
console.log("Subtração: " + resultados[1]);
console.log("Multiplicação: " + resultados[2]);
console.log("Divisão: " + resultados[3]);
