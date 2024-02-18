// Crie um programa que pede ao usuário para inserir uma palavra e
// conta quantas vogais (a, e, i, o, u) ela contém. Utilize um loop for
// e estruturas condicionais if para realizar a contagem.
// (Não precisa considerar acentos. Ex.: aviao)

let palavra = prompt("Digite uma palavra: ");
let contadorVogais = 0;

for (let i = 0; i < palavra.length; i++) {
  let letra = palavra[i].toLowerCase();

  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    contadorVogais++;
  }
}

console.log(`A palavra "${palavra}" contém ${contadorVogais} vogais.`);
