// Dado um array idades, encontre o índice do último elemento que sejam maior ou
// igual a 18.
// const idades = [15, 22, 17, 20, 30, 12];

const idades = [15, 22, 17, 20, 30, 12];

const indiceUltimoMaiorOuIgual18 = idades
  .reverse()
  .findIndex((idade) => idade >= 18);

const indiceReal = idades.length - 1 - indiceUltimoMaiorOuIgual18;

console.log("Índice do último elemento maior ou igual a 18: ", indiceReal);
