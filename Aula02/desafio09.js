// Dado um array notas, calcule a média aritmética das notas, mas ignore a nota
// mais baixa e a nota mais alta do conjunto.
// const notas = [8, 9, 7, 5, 10, 6];

const notas = [8, 9, 7, 5, 10, 6];

function calcularMediaAjustada(notas) {
  if (notas.length < 3) {
    console.log(
      "É necessário ter pelo menos 3 notas para calcular a média ajustada."
    );
    return;
  }

  const notasOrdenadas = notas.sort((a, b) => a - b);

  const notasSemExtremos = notasOrdenadas.slice(1, -1);

  const media =
    notasSemExtremos.reduce((acc, nota) => acc + nota, 0) /
    notasSemExtremos.length;

  return media;
}

const mediaAjustada = calcularMediaAjustada(notas);

console.log("Média Ajustada: ", mediaAjustada);
