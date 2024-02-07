// Dado um array idades, encontre o índice do primeiro elemento que seja maior ou
// igual a 18.
// const idades = [15, 22, 17, 20, 30, 12];

const idades = [15, 22, 17, 20, 30, 12];

const indiceMaiorOuIgual18 = idades.findIndex((idade) => idade >= 18);

console.log(
  "Índice do primeiro elemento maior ou igual a 18: ",
  indiceMaiorOuIgual18
);
