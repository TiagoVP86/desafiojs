// Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro
// vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto
// interno) desses dois vetores usando a fórmula matemática do produto escalar.

var vetor1 = [2, 3, 5];
var vetor2 = [4, 1, 2];

function calcularProdutoEscalar(vetor1, vetor2) {
  if (vetor1.length === vetor2.length) {
    var produtoEscalar = 0;

    for (var i = 0; i < vetor1.length; i++) {
      produtoEscalar += vetor1[i] * vetor2[i];
    }

    return produtoEscalar;
  } else {
    return "Os vetores devem ter o mesmo comprimento para calcular o produto escalar.";
  }
}

var resultadoProdutoEscalar = calcularProdutoEscalar(vetor1, vetor2);

console.log("Produto Escalar: " + resultadoProdutoEscalar);
