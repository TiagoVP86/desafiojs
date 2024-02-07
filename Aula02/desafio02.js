// Crie um vetor (array) chamado notas com as notas de um aluno em três
// disciplinas. Em seguida, calcule a média das notas usando a fórmula matemática
// da média aritmética.

var notas = [8, 7, 9];

function calcularMedia(notas) {
  var soma = 0;

  for (var i = 0; i < notas.length; i++) {
    soma += notas[i];
  }

  var media = soma / notas.length;

  return media;
}

var mediaNotas = calcularMedia(notas);

console.log("Média das notas: " + mediaNotas);
