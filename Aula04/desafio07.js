// Verificação de Números Pares e Ímpares
// ● Escreva um programa que recebe um número como entrada e verifica
// se é par ou ímpar. Imprima "É par" se for par e "É ímpar" se for
// ímpar. (Usar switch Case)

let ParOuImpar = 4;

switch (ParOuImpar % 2) {
  case 1:
    console.log("É par");
    break;
  case 2:
    console.log("É ímpar");
    break;
  default:
    console.log("Não é um número inteiro válido.");
}
