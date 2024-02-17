// Jogo de Adivinhação com Limite
// ● Modifique o jogo de adivinhação do Desafio 4 para limitar o
// número de tentativas. Se o usuário não adivinhar o número dentro
// de um determinado número de tentativas (por exemplo, 5
// tentativas), o programa deve encerrar e informar o número
// correto.

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const tentativasMaximas = 10;
let tentativas = 0;
let acertou = false;

do {
  let chute = parseInt(prompt("Tente adivinhar o número entre 1 e 100:"));

  if (chute === numeroAleatorio) {
    alert(
      `Parabéns! Você acertou!!! O número sorteado foi o ${numeroAleatorio}.`
    );
    acertou = true;
  } else if (chute < numeroAleatorio) {
    alert(`Tente um número maior que ${chute}.`);
  } else {
    alert(`Tente um número menor que ${chute}.`);
  }

  tentativas++;
} while (!acertou && tentativas < tentativasMaximas);

if (!acertou) {
  alert(
    `Suas ${tentativasMaximas} tentativas acabaram! O número correto era ${numeroAleatorio}.`
  );
}
