// Dado um array numeros, crie um novo array que contenha apenas os números pares
// do array original.
// const numeros = [3, 8, 15, 21, 30, 37, 42];

const numeros = [3, 8, 15, 21, 30, 37, 42];

function ehPar(numero) {
  return numero % 2 === 0;
}

const numerosPares = numeros.filter(ehPar);

console.log("Números Pares: ", numerosPares);
