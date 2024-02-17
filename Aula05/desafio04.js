// Adivinhe o Número
// ● Crie um programa que gere um número aleatório entre 1 e 100. Em
// seguida, peça ao usuário para adivinhar o número. Use um loop
// while para continuar pedindo ao usuário que adivinhe até que ele
// acerte

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let chute;

while (chute !== numeroAleatorio) {
  chute = parseInt(prompt("Tente adivinhar o número entre 1 e 100:"));

  if (isNaN(chute) || chute < 1 || chute > 100) {
    alert("Por favor, insira um número válido entre 1 e 100.");
  } else {
    if (chute === numeroAleatorio) {
      alert(
        `Parabéns! Você acertou!!! O número sorteado foi o ${numeroAleatorio}.`
      );
    } else if (chute < numeroAleatorio) {
      alert(`Tente um número maior que ${chute}.`);
    } else {
      alert(`Tente um número menor que ${chute}.`);
    }
  }
}
