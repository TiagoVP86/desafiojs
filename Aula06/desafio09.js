// Criar um algoritmo de ordenação de arrays;
// novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9]
// 09.01 - Método que faz isso (Achar o método que ordena os arrays)

let novoArray = [1, 7, 2, 8, 3, 4, 5, 0, 9];

novoArray.sort(function (a, b) {
  return a - b;
});

console.log(novoArray);
