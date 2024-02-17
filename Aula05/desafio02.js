// Números Primos
// ● Crie um programa que peça ao usuário para inserir um número e
// use um loop while para verificar se o número é primo ou não. Um
// número primo é aquele que só é divisível por 1 e por ele mesmo.
// Imprima se o número é primo ou não.

let numero = 2;
let divisor = 2;
let primo = true;

if (numero <= 1) {
  primo = false;
}

while (divisor < numero) {
  if (numero % divisor === 0) {
    primo = false;
    break;
  }
  divisor++;
}

if (primo) {
  console.log(`${numero} é um número primo.`);
} else {
  console.log(`${numero} não é um número primo.`);
}
