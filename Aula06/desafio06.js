// Faça um mecanismo de busca dentro de um array.
// [1,2,3,4,5,6,7,8,9,10]
// Achei o número 7

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeroProcurado = 7;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === numeroProcurado) {
    console.log(`Achei o número ${numeroProcurado}`);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log("Número não encontrado no array.");
}
