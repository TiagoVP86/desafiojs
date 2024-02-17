// Soma de Números Pares
// ● Desenvolva um programa que peça ao usuário para inserir números
// inteiros. Use um loop while para calcular a soma dos números
// pares inseridos pelo usuário. Pare a entrada quando o usuário
// inserir 0 e exiba a soma total.

function determinaMaiorNumero(num1, num2, num3) {
  let maior = num1;

  if (num2 > maior) {
    maior = num2;
  }

  if (num3 > maior) {
    maior = num3;
  }

  return maior;
}

let num1 = parseFloat(prompt("Digite o primeiro número: "));
let num2 = parseFloat(prompt("Digite o segundo número: "));
let num3 = parseFloat(prompt("Digite o terceiro número: "));

let maiorNumero = determinaMaiorNumero(num1, num2, num3);
alert(`O maior número é: ${maiorNumero}`);
