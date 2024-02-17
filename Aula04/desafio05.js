// Verificação de Ano Bissexto
// ● Desenvolva um programa que receba um ano como entrada e verifica
// se ele é bissexto ou não. Um ano bissexto é aquele que é
// divisível por 4, exceto por anos que são divisíveis por 100, a
// menos que sejam divisíveis por 400. Imprima "Ano bissexto" ou
// "Não é um ano bissexto" com base na entrada. (2000, 1996)

let ano = 2000;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(ano + " é um ano bissexto.");
} else {
  console.log(ano + " não é um ano bissexto.");
}
