// Crie uma matriz (array bidimensional) chamada matriz que represente uma matriz
// 2x2. Preencha a matriz com valores numéricos. Em seguida, calcule a
// determinante dessa matriz usando a fórmula matemática de determinante.

var matriz = [
  [3, 5],
  [2, 7],
];

function calcularDeterminante(matriz) {
  if (matriz.length === 2 && matriz[0].length === 2 && matriz[1].length === 2) {
    var determinante =
      matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    return determinante;
  } else {
    return "A matriz não é 2x2. Incapaz de calcular a determinante.";
  }
}

var determinanteMatriz = calcularDeterminante(matriz);

console.log("Determinante da matriz: " + determinanteMatriz);
